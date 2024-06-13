import axios from "axios";
import { useState, useEffect } from "react";

function Protect() {
    const [message, setMessage] = useState("Couldn't access endpoint"); // default message (due to system error) if unable to access server

    useEffect(() => {
        const fetchData = async () => {
            const API = axios.create({
                baseURL: "http://localhost:3000", // the server's address 
                withCredentials: true, // include credentials
            });
            try {
                const res = await API.post("/protected");
                setMessage(res?.data);
            } catch (err) { // if the system returns an error 
                if (!err?.response) {
                    setMessage("no server response");
                } else {
                    setMessage("token not found or invalid");
                }
            }
        };
        fetchData();
    }, []);

    return (
        <div className='App'>
            <h1>This is a protected/private page</h1>
            <p>{message}</p>
        </div>
    );
}

export default Protect;