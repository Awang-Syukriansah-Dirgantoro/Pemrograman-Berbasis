import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './tamplate/Main'
import Cart from './tamplate/Cart'
import Sidebar from './tamplate/Sidebar';
import Home from './tamplate/Home';
import Header from './tamplate/Header'
import Footer from './tamplate/Footer'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom"

export default function AuthExample() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="#page-top">Mex Store</a>
            <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-0 mx-lg-1"><Link to="/barang"><a className="nav-link py-3 px-0 px-lg-3 rounded">Barang</a></Link></li>
                <li className="nav-item mx-0 mx-lg-1"><Link to="/keranjang"><a className="nav-link py-3 px-0 px-lg-3 rounded">Keranjang</a></Link></li>
                <li className="nav-item mx-0 mx-lg-1"><Link to="/tentang"><a className="nav-link py-3 px-0 px-lg-3 rounded">Tentang</a></Link></li>
                <li className="nav-item mx-0 mx-lg-1"><Link to="/login"><a className="nav-link py-3 px-0 px-lg-3 rounded"> Login</a></Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <Header />
        <Routes>
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/login" element={<Login />} />
          <Route path="/barang/*"
            element={
              <PrivateRoute>
                <Barang />
              </PrivateRoute>
            }
          />
          <Route path="/keranjang/*"
            element={
              <PrivateRoute>
                <Cartt />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
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

function Barang() {
  return (
    <Main />
  );
}

function Cartt() {
  return (
    <Cart />
  );
}

function Tentang() {
  return (
    <Home />
  );
}

function PrivateRoute({ children }) {
  return (
    fakeAuth.isAuthenticated ? (
      children
    ) : (
      <Navigate to={"/login"} />
    )
  );
}

function Login() {
  let history = useNavigate();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/barang" } };
  let logins = () => {
    fakeAuth.authenticate(() => {
      history(from);
    });
  };

  return fakeAuth.isAuthenticated ? (
    <section className="page-section" id="contact">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Sign Out</h2>

        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">

          <div className="text-center mt-4">
            <a className="btn btn-xl btn-outline-dark" onClick={() => {
              fakeAuth.signout(() => history("/login"));
            }}>
              <i className="fas fa-download me-2"></i>
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section className="page-section" id="contact">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Login</h2>

        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">

          <div className="text-center mt-4">
            <a className="btn btn-xl btn-outline-dark" onClick={logins}>
              <i className="fas fa-download me-2"></i>
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}