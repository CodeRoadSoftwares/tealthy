import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'
// Please customize "YOUR ID HERE"
ReactDOM.createRoot(document.getElementById('root')).render(
  // <GoogleOAuthProvider clientId="YOUR ID HERE">
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // </GoogleOAuthProvider>
)
