import { GoogleLogin } from 'react-google-login'
// import React from 'react'
const clientID = "123603861190-3ugdemkftujm734b9kc10escfbi8qp92.apps.googleusercontent.com"


const Login = () => {
    const onSuccess = (res) => {
        console.log("Login sucessfully! Welcome : ", res.profileObj)
    }
    const onFailure = (res) => {
        console.log("Login not sucessfully! server's respond:", res)
    }
    return (
        <div id="loginButton">
            <GoogleLogin
                clientId={clientID}
                buttonText={'Sign in with Google'}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login
