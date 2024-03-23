import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import styled from 'styled-components';
// Information of Doctor:
  // Title, Prefix, Name, Rating, Specialization Pronoun, Email, Number, AvailableTime, Experience, Total Appointments
  const StyledCardContent = styled.div`
  font-family: -apple-system, system-ui, 'Segoe UI', 'Liberation Sans', sans-serif;
`;

const CardContent = ({ DeveloperMode }) => {
  return (
    <StyledCardContent>
      <CardHeader DeveloperMode={DeveloperMode} />
      <CardBody DeveloperMode={DeveloperMode} />
    </StyledCardContent>
  );
};

export default CardContent;
