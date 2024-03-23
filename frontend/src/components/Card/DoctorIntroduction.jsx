import React from 'react'
import edit from './edit.png'
const DoctorIntroduction = ({DeveloperMode}) => {
  return (
    <div style={{width:"330px",height:"20px",textWrap:"wrap"}}>
      <div style={{display: 'flex',alignItems: 'center',marginTop:"18px",marginBottom:"18px"}}>
      {DeveloperMode ? <img src={edit} alt="edit icon" style={{width: '20px', height: '20px', cursor:"pointer"}}></img> : ''}
      <p style={{ margin: '0', flexGrow: 1 }}>Senior Cardiothoracic Surgeon</p>
      </div>
      <div style={{display: 'flex',alignItems: 'center',marginTop:"18px",marginBottom:"18px"}}>
      {DeveloperMode ? <img src={edit} alt="edit icon" style={{width: '20px', height: '20px', cursor:"pointer"}}></img> : ''}
      <p style={{ margin: '0', flexGrow: 1 }}>Department of Health Care and Customer Service </p>
      </div>
      <div style={{display: 'flex',alignItems: 'center',marginTop:"18px",marginBottom:"18px"}}>
      {DeveloperMode ? <img src={edit} alt="edit icon" style={{width: '20px', height: '20px', cursor:"pointer"}}></img> : ''}
      <p style={{ margin: '0', flexGrow: 1 }}>10+ Experience performing intricate heart and lung surgeries</p>
      </div>
    </div>
  )
}

export default DoctorIntroduction
