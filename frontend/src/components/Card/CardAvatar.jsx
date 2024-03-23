import React from 'react'
import doctorPicture from './sampledoctor.jpg'
import styled from 'styled-components';
// Information of Doctor:
  // Title, Prefix, Name, Rating, Specialization Pronoun, Email, Number, AvailableTime, Experience, Total Appointments
const StyledCardAvatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-top: 50px;
    object-fit: cover;
`;
const CardAvatar = ({DeveloperMode}) => {
  return (
    <div className='CardAvatar'>
      <StyledCardAvatar src= {doctorPicture} alt = "Doctor" style={{width:"150px",marginTop:"50px",height:"150px"}}></StyledCardAvatar>
    </div>
  )
}

export default CardAvatar
