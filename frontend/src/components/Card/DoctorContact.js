import React from 'react'
import edit from "./edit.png"
const DoctorContact = ({DeveloperMode}) => {
  return (
    <div>
    <div style={{marginLeft:"10px",width:"330px",height:"20px",textWrap:"wrap"}}>
      <div style={{display: 'flex',alignItems: 'center',marginTop:"12px",marginBottom:"12px"}}>
      {DeveloperMode ? <img src={edit} alt="edit icon" style={{width: '20px', height: '20px', cursor:"pointer"}}></img> : ''}
      <a href="tel:123-456-7890" style={{ margin: '0', flexGrow: 1, cursor: "pointer", color: 'blue', textDecoration: 'underline' }}>123-456-7890</a>
      </div>
      <div style={{display: 'flex',alignItems: 'center',marginTop:"12px",marginBottom:"12px"}}>
      {DeveloperMode ? <img src={edit} alt="edit icon" style={{width: '20px', height: '20px', cursor:"pointer"}}></img> : ''}
      <a href="mailto:example@contact.com" style={{ margin: '0', flexGrow: 1, cursor: "pointer", color: 'blue', textDecoration: 'underline' }}>example@contact.com</a>
      </div>
      <div style={{display: 'flex',alignItems: 'center',marginTop:"12px",marginBottom:"12px"}}>
      {DeveloperMode ? <img src={edit} alt="edit icon" style={{width: '20px', height: '20px', cursor:"pointer"}}></img> : ''}
      <p style={{ margin: '0', flexGrow: 1, cursor:"pointer" }}>MSC 1122-333-444</p>
      </div>
      <div style={{display: 'flex',alignItems: 'center',marginTop:"12px",marginBottom:"12px"}}>
      {DeveloperMode ? <img src={edit} alt="edit icon" style={{width: '20px', height: '20px', cursor:"pointer"}}></img> : ''}
      <p style={{ margin: '0', flexGrow: 1, cursor:"pointer" }}>Random Forest Blvd 12345</p>
      </div>
      <div style={{display: 'flex',alignItems: 'center',marginTop:"12px",marginBottom:"12px"}}>
      {DeveloperMode ? <img src={edit} alt="edit icon" style={{width: '20px', height: '20px', cursor:"pointer"}}></img> : ''}
      <p style={{ margin: '0', flexGrow: 1, cursor:"pointer" }}>Burger, NY, United States</p>
      </div>
    </div>
    </div>
  )
}

export default DoctorContact
