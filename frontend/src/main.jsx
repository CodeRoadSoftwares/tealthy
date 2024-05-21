import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'
// import { createBrowserRouter } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import Successful from './components/GoogleLogin/Successful.jsx';
// import Protect from './components/GoogleLogin/Protect.jsx';
// import Home from '../../pages/Home/Home';
// // Please customize "YOUR ID HERE"
// const getAccessToken = () => {
//   return Cookies.get('accessToken');
// }

// // Function to check if the user is authenticated
// const isAuthenticated = () => {
//   return !!getAccessToken();
// }

// // Create the router configuration
// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Home />,
//       index: true
//     },
//     {
//       element: <ProtectedRoute isAuthenticated={isAuthenticated()} />,
//       children: [
//         {
//           path: '/Successful',
//           element: <Successful />
//         },
//       ]
//     },
//     {
//       path: '*',
//       element: <p>404 Error - Nothing here...</p>
//     }
//   ]
// );
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <GoogleOAuthProvider clientId="123603861190-3ugdemkftujm734b9kc10escfbi8qp92.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,

)
