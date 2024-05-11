import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'
// Please customize "YOUR ID HERE"
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <GoogleOAuthProvider clientId="123603861190-3ugdemkftujm734b9kc10escfbi8qp92.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,

)
