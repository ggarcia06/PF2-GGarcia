import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBOJOZn7CgKFPVOVxh3Kko6daXLTxTQ5lQ",
//   authDomain: "coder-garcia.firebaseapp.com",
//   projectId: "coder-garcia",
//   storageBucket: "coder-garcia.appspot.com",
//   messagingSenderId: "915967273236",
//   appId: "1:915967273236:web:19b40d1b341b8c32477a01"
// };

// Initialize Firebase
// initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
