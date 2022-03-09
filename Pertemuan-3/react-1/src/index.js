import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './component/HelloComponent';
import Login from './login/Login';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// function HelloComponent() {
//   return HelloComponent
// }

class StateFullComponent extends React.Component {
  render() {
    return <p>StateFullComponent</p>
  }
}

ReactDOM.render(
  // <React.StrictMode>
  //   {/* <StateFullComponent /> */}
  // </React.StrictMode>,
  // <App />,
  // <Test />,
  // <HelloComponent />,
  <Login />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
