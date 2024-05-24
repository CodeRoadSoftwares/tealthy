import { useState} from 'react';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';

function TestLogin() {
    const [message, setMessage] = useState("Please Login!");
    const googleOAuthConfig = {
        clientId: "123603861190-3ugdemkftujm734b9kc10escfbi8qp92.apps.googleusercontent.com",
        redirectUri: "http://localhost:5173"
    };

    const [profile, setProfile] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);

    const login = useGoogleLogin({
        clientId: googleOAuthConfig.clientId,
        redirectUri: googleOAuthConfig.redirectUri,
        onSuccess: async (response) => { // if the system operates successfully, retrieve credential information from Google OAuth Service
            try {
                console.log('Response from server:', response);
                

                const res = await axios.post('http://localhost:3000/auth/google', response );
                if (res.data.token) {
                    document.cookie = `jwt=${res.data.token}; path=/; HttpOnly`;
                    setMessage("Welcome, " + res.data.user.name);
                    setProfile(res.data.user);
                    setShowSuccess(true);
                    setTimeout(() => setShowSuccess(false), 2000);
                }
            } catch (error) {
                console.log('Login Failed:', error);
            }
        },
        onError: (error) => console.log('Login Failed:', error) // return an error message if there is an internal error in the system
    });

    const logOut = () => {
        googleLogout();
        setProfile(null);
        document.cookie = 'jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    };

    return (
        <div>
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
                    <button onClick={() => login()}>Sign in with Google 🚀</button>
                    {showSuccess && <div className="success-message">Login successful!</div>}
                </div>
            )}
        </div>
    );
}

export default TestLogin;
