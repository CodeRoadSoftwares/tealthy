import React from 'react'
import edit from './edit.png';
const CardHeader = ({DeveloperMode}) => {
  // Information of Institute (max.char: 50) temporarily determined
  // e.g. Stanford Health Care-Stanford Hospital
  return (
    <div className='CardHeader' style={{display:"flex", fontFamily: '-apple-system, system-ui, "Segoe UI", "Liberation Sans", sans-serif',alignItems: 'center'}}>
      <h1 style={{margin:"5px"}}>Example Health Care - Everywhere Hospital</h1>
      {DeveloperMode ? <img src={edit} alt="edit icon" style={{width: '40px', height: '40px', cursor:"pointer"}}></img> : ''}
    </div>
  )
}

export default CardHeader
