import React from 'react'
import doctorPicture from './sampledoctor.jpg'
const CardAvatar = ({DeveloperMode}) => {
  return (
    <div className='CardAvatar'>
      <img src= {doctorPicture} alt = "Doctor" style={{width:"150px",marginTop:"50px",height:"150px"}}></img>
    </div>
  )
}

export default CardAvatar
