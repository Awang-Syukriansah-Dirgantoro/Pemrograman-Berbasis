import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
  useParams,
  useLocation,
  useNavigate,
  Navigate as Redirect,
} from "react-router-dom"

export default function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/private">Private Page</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route path="/public" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/private/*"
            element={
              <PrivateRoute>
                <ProtectedPage />
              </PrivateRoute>
            }
          />
        </Switch>
      </div>
    </Router>
  );
}

function Child() {
  let { id } = useParams();
  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function Topics() {

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="./Sate, Nasi goreng">Kuliner</Link>
        </li>
        <li>
          <Link to="./Wisata alam, Museum">Travelling</Link>
        </li>
        <li>
          <Link to="./Salaris, JW Marriot">Review Hotel</Link>
        </li>
      </ul>

      <Switch>
        <Route path=":id" element={<Topic />} />
      </Switch>
    </div>
  );
}

function Topic() {
  let { id } = useParams();

  return (
    <div>
      <h3>{id}</h3>
    </div>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function AuthButton() {
  let history = useNavigate();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history("/login"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children }) {
  const auth = fakeAuth.isAuthenticated;
  return (
    fakeAuth.isAuthenticated ? (
      children
    ) : (
      <Redirect to={"/login"}/>
    )
  );
}

function PublicPage() {
  return (
    <div>
      <h3>Public</h3>
    </div>
  );
}

function ProtectedPage() {
  return (
    <div>
      <h3>Private</h3>
    </div>
  );
}

function LoginPage() {
  let history = useNavigate();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}