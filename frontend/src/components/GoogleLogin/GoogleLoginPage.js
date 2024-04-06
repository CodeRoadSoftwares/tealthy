import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function App() {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: (successResponse) => setUser(successResponse),
        onError: (error) => {
            // Handle login error
            console.error('Login Failed:', error);
        }
    });

    useEffect(() => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => {
                    // Handle profile fetch error
                    console.error(err);
                });
        }
    }, [user]);

    const logOut = () => {
        googleLogout();
        setUser(null);
        setProfile(null);
    };

    return (
        <div>
            <div className="bg-white shadow-md shadow-slate-300 flex justify-between items-center pl-10 pr-60">
                <h1 className="text-2xl font-extrabold text-primary">Tealthy: Login with Google</h1>
                {profile ? (
                    <div>
                        <img src={profile.picture} alt="user image" />
                        <h3>Please confirm your information here:</h3>
                        <p>Name: {profile.name}</p>
                        <p>Email Address: {profile.email}</p>
                        <h3>Ready to start a journey with tealthy?</h3>
                        <button onClick={() => navigate("/frontend/src/pages/Home")}>Go to tealthy</button>
                        <h3>Login with a different account?</h3>
                        <button onClick={logOut}>Log out</button>
                    </div>
                ) : (
                    <div>
                        {login.loading ? (
                            <p>Loading...</p>
                        ) : (
                            <button onClick={login}>Sign in with Google</button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
