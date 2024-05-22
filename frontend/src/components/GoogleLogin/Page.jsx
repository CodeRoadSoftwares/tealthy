// import Google from "./Google"
import TestLogin from "./TestLogin"

const GooglePage = () => { // this component is simply a container for the google login function
  return (
    <div style = {{marginTop:"15%",margin:"20%"}}>
    <h1>Please Login With Google</h1>
      <div style={{ display: "inline-flex", padding:"5px", fontSize: "20px", width: "auto", height: "50%", border:"1px solid black", flex:"1", margin:"5px"}}>
        {/* <Google></Google> */}
        <TestLogin></TestLogin>
      </div>
    </div>
  )
}

export default GooglePage
