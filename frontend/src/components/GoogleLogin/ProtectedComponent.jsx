// src/components/ProtectedComponent.js
import  { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectedComponent = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get('http://localhost:3000/protected', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setUserData(res.data.yourUserInfo);
            })
            .catch((err) => {
                console.error('Error fetching protected data', err);
            });
        }
    }, []);

    return (
        <div>
            {userData ? (
                <div>
                    <h1>Protected Data</h1>
                    <pre>{JSON.stringify(userData, null, 2)}</pre>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProtectedComponent;
