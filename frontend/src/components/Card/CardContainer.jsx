import React, { useState } from 'react';
import CardContent from './CardContent';
import CardImage from './CardImage';
import defaultImage from './DefaultAvatar.jpg'
import styled from 'styled-components';
// Information of Doctor:
  // Title, Prefix, Name, Rating, Specialization Pronoun, Email, Number, AvailableTime, Experience, Total Appointments
const StyledCardContainer = styled.div`
  padding: 20px;
  display: inline-flex;
  border: 0.5px thick;
  text-wrap: nowrap;
  width: auto;
  height: calc(20 * 1.5em);
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
const defaultAvatar = defaultImage;
const CardContainer = ({Image = defaultAvatar, Title = "(Edit Title)", Prefix = "(Edit Prefix)", Name = "(Edit Name)", Rating = "N/A", Department="(Edit Department)", Specialization = "(Edit Specialization)", Pronoun ="(Edit Pronoun)", Email = "(Edit Email)", Number = "(Edit Number)", AvailableTime = "(Edit Available Time)", Experience = "(Edit Experience)", TotalAppointments = "N/A", AddressLine="(Edit Address (Street #, etc.))",AddressRegion="(Edit Address (State, Countries, etc.))", Institute="(Edit Institute)"}) => {
  const [DeveloperMode, setDeveloperMode] = useState(true);

  const handleSwitch = () => {
    setDeveloperMode(!DeveloperMode);
  };

  return (
    <StyledCardContainer>
      <div style={{ display: 'flex' }}>
        <CardImage handleSwitch={handleSwitch} DeveloperMode={DeveloperMode} Image = {Image} Name = {Name} />
        <CardContent 
        DeveloperMode={DeveloperMode} 
        Title = {Title}
        Prefix = {Prefix} 
        Name = {Name} 
        Rating = {Rating} 
        Department= {Department}
        Specialization = {Specialization} 
        Pronoun = {Pronoun} 
        Email = {Email} Number = {Number}
        AvailableTime = {AvailableTime} 
        Experience = {Experience} 
        TotalAppointments = {TotalAppointments}
        AddressLine= {AddressLine} 
        AddressRegion= {AddressRegion}
        Institute={Institute}
        />
      </div>
    </StyledCardContainer>
  );
};

export default CardContainer;
