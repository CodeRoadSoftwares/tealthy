import { useState, useEffect } from 'react';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';
// import { useNavigate, useLocation } from "react-router";

function Google() {
    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/linkpage";
    const [message, setMessage] = useState("Please Login!");
    const googleOAuthConfig = {
        clientId: "123603861190-3ugdemkftujm734b9kc10escfbi8qp92.Googles.googleusercontent.com",
        redirectUri: "http://localhost:5173"
    };

    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    // const API = axios.create({
    //     baseURL: "http://localhost:3000", // the address of the backend server 
    // });


    const login = useGoogleLogin({  // this function is triggered when the user clicks google login
        clientId: googleOAuthConfig.clientId,
        redirectUri: googleOAuthConfig.redirectUri,
        onSuccess: (response) => { // function successfully operates
            setUser(response); // on success, this triggers useEffect Hook that gets the user's information 
            setShowSuccess(true); // success is true
            setTimeout(() => setShowSuccess(false), 2000);
        },
        onError: (error) => console.log('Login Failed:', error) // the funtion fails to operate
    });

    useEffect(() => {
        if (user) {
            console.log("the user is trying to login right now, access google api")
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`)
                .then((res) => {
                    setProfile(res.data);
                    setMessage("Welcome,", res.data.name);
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <div>
            <h1>{message}</h1>
            {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <div>
                    <button onClick={() => login()}>Sign in with Google 🚀 </button>
                    {showSuccess && <div className="success-message">Login successful!</div>}
                </div>
            )}
        </div>
    );
}

export default Google;
