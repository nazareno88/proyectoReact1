import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1DWoYABYsZZhfArnAbOl7Vqr7D7_hPDg",
  authDomain: "proyecto-react-79872.firebaseapp.com",
  projectId: "proyecto-react-79872",
  storageBucket: "proyecto-react-79872.appspot.com",
  messagingSenderId: "430304929373",
  appId: "1:430304929373:web:fe2538e526302168be0fb4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  )