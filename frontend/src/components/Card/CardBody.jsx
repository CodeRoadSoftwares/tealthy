import React from 'react'
import edit from './edit.png'
import DoctorIntroduction from './DoctorIntroduction'
import DoctorContact from './DoctorContact'
import QuickAction from './QuickAction'
const CardBody = ({DeveloperMode}) => {
  return (
    <div className='CardBody' style={{margin:"5px",fontFamily: '-apple-system, system-ui, "Segoe UI", "Liberation Sans", sans-serif'}}>
      <div style={{display: 'flex',alignItems: 'center'}}>
      <h2>Dr. Just An Example</h2>
      {DeveloperMode ? <img src={edit} alt="edit icon" style={{width: '30px', height: '30px', cursor:"pointer"}}></img> : ''}
      </div>
      <div style={{display:"flex"}}>
        <DoctorIntroduction DeveloperMode = {DeveloperMode}/>
        <DoctorContact DeveloperMode = {DeveloperMode}/>
      </div>
       <QuickAction DeveloperMode= {DeveloperMode}/>
    </div>
  )
}

export default CardBody
