import { useState } from 'react';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';

function TestLogin() {
    const [message, setMessage] = useState("Please Login!"); // message displayed on the screen (purely text, no functionality)
    const googleOAuthConfig = { // google client secrets 
        clientId: "123603861190-3ugdemkftujm734b9kc10escfbi8qp92.apps.googleusercontent.com",
        redirectUri: "http://localhost:5173"
    };

    const [profile, setProfile] = useState(null); // to keep track of user's credential information
    const [showSuccess, setShowSuccess] = useState(false); // message displayed on the screen (purely text, no functionality)

    const login = useGoogleLogin({ // Functionality for the Google Login Button 
        clientId: googleOAuthConfig.clientId,
        redirectUri: googleOAuthConfig.redirectUri,
        flow: 'auth-code',
        onSuccess: async ({ code }) => { // if the system operates successfully, retrieve credential information from Google OAuth Service
            // accepting response from Google Cloud Service Server

            try {
                // response contains: access_token, token_type, expires_in, scope, authuser, prompt
                const tokens = await axios.post('http://localhost:3000/auth/google', {  // http://localhost:3001/auth/google backend that will exchange the code
                    code,
                });
                console.log("tokens information from backend,", tokens);
                // res.json({ token, user: { salt: user.salt, name: user.name, email: user.email } });
                if (tokens.data.token) { // if the server successfully returns a response 
                    document.cookie = `jwt=${tokens.data.token}; path=/; HttpOnly`;
                    setMessage("Welcome, " + tokens.data.user.name); // changed text
                    setProfile(tokens.data.user); // change profile 
                    setShowSuccess(true); // change text
                    setTimeout(() => setShowSuccess(false), 2000); // set automatic log-out time frame
                }
            } catch (error) { // the server returns an error 
                console.log('Login Failed:', error);
            }
        },
        onError: (error) => console.log('Login Failed:', error) // return an error message if there is an internal error in the system
    });

    const logOut = () => { // log out functionality of the button 
        googleLogout(); // call a built-in functionality to log out
        setProfile(null); // set profile to null 
        document.cookie = 'jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'; // set the cookies and jwt to none
    };

    return (
        <div>
            {/* These are content displayed on the screen  */}
            <h1>{message}</h1>
            {profile ? (
                <div>
                    <img src={profile.picture} alt="user" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <div>
                    <button onClick={() => login()}>TEST Sign in with Google 🚀</button>
                    {showSuccess && <div className="success-message">Login successful!</div>}
                </div>
            )}
        </div>
    );
}

export default TestLogin;
