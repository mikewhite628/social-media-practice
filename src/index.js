import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp ({
  apiKey: "AIzaSyABVIobgnnrXsvH932ozqp7-k0XLjXdAxY",
  authDomain: "social-media-practice-767cb.firebaseapp.com",
  projectId: "social-media-practice-767cb",
  storageBucket: "social-media-practice-767cb.appspot.com",
  messagingSenderId: "214090689733",
  appId: "1:214090689733:web:cbb06c733f3e8baf3a14ac",
  measurementId: "G-6HG26FCHSP"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
