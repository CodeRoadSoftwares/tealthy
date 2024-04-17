import React from 'react'
import styled from 'styled-components';
// Information of Doctor:
  // Title, Prefix, Name, Rating, Specialization, Pronoun, Email, Number, AvailableTime, Experience, TotalAppointments

const StyledCardAvatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-top: 50px;
    object-fit: cover;
`;
const CardAvatar = ({Image, Name}) => {
  return (
    <div className='CardAvatar'>
      <StyledCardAvatar src= {Image} alt = {Name}></StyledCardAvatar>
    </div>
  )
}

export default CardAvatar
