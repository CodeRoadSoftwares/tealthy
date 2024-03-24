import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import styled from 'styled-components';
// Information of Doctor:
  // Title, Prefix, Name, Rating, Specialization Pronoun, Email, Number, AvailableTime, Experience, Total Appointments
  const StyledCardContent = styled.div`
  font-family: -apple-system, system-ui, 'Segoe UI', 'Liberation Sans', sans-serif;
`;

const CardContent = ({ DeveloperMode,Title, Prefix, Name, Rating, Specialization, Pronoun, Email, Number, AvailableTime, Experience, TotalAppointments, Institute, Department, AddressLine, AddressRegion }) => {
  return (
    <StyledCardContent>
      <CardHeader 
        DeveloperMode={DeveloperMode} 
        Institute={Institute} 
      />
      <CardBody 
        DeveloperMode={DeveloperMode} 
        Title = {Title}
        Prefix = {Prefix} 
        Name = {Name} 
        Rating = {Rating} 
        Department= {Department}
        Specialization = {Specialization} 
        Pronoun = {Pronoun} 
        Email = {Email} 
        Number = {Number}
        AvailableTime = {AvailableTime} 
        Experience = {Experience} 
        TotalAppointments = {TotalAppointments}
        AddressLine= {AddressLine} 
        AddressRegion= {AddressRegion}
      />
    </StyledCardContent>
  );
};

export default CardContent;
