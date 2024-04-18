import Login from "./Login";
import Logout from "./Logout";
import { useEffect } from "react";
import { gapi } from 'gapi-script';

const clientID = "123603861190-3ugdemkftujm734b9kc10escfbi8qp92.apps.googleusercontent.com"

const Page = () => {
    useEffect(() =>{
        function start() {
            gapi.client.init({
                clientId: clientID,
                scope: ""
            })
        }
        gapi.load('client:auth2',start)
    })
  return (
    <div className="min-h-screen flex-col items-center justify-between p-24">
      <Login></Login>
      <Logout></Logout>
    </div>
  )
}

export default Page
