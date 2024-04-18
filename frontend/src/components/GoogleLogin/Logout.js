import {GoogleLogout} from 'react-google-Logout'
// import React from 'react'
const clientID = "123603861190-3ugdemkftujm734b9kc10escfbi8qp92.apps.googleusercontent.com"


const Logout = () => {
    const onSuccess = () =>{
        console.log("Logout sucessfully!")
      }
  return (
    <div id="LogoutButton">
      <GoogleLogout
      clientId={clientID}
      buttonText={"Logout"}
      onLogoutSuccess = {onSuccess}
      />
    </div>
  )
}

export default Logout
