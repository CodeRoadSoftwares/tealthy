import Google from "./Google"

const GooglePage = () => {
  return (
    <div style = {{marginTop:"15%",margin:"20%"}}>
    <h1>Please Login With Google</h1>
      <div style={{ display: "inline-flex", fontSize: "20px", width: "auto", height: "50%", border:"1px solid black", flex:"1"}}>
        <Google></Google>
      </div>
    </div>
  )
}

export default GooglePage
