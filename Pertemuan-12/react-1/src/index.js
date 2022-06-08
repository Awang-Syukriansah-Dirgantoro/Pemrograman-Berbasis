import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BlogPost from './container/BlogPost/BlogPost.jsx';
import Tugas from './container/Tugas/Tugas';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import firebase from "firebase/compat/app";
// import firebaseConfig from "./firebase/config";

// firebase.initializeApp(firebaseConfig);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   // <BlogPost />,
//   // <Tugas />,
//   document.getElementById('content')
// );

const root = createRoot(document.getElementById('content'));
root.render(<BlogPost/>)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
