import React, { useState } from 'react';
import CardContent from './CardContent';
import CardImage from './CardImage';
import styled from 'styled-components';
// Information of Doctor:
  // Title, Prefix, Name, Rating, Specialization Pronoun, Email, Number, AvailableTime, Experience, Total Appointments
const StyledCardContainer = styled.div`
  padding: 20px;
  display: inline-flex;
  border: 0.5px thick;
  text-wrap: nowrap;
  width: calc(85 * 1ch);
  height: calc(15 * 1.5em);
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const CardContainer = () => {
  const [DeveloperMode, setDeveloperMode] = useState(true);

  const handleSwitch = () => {
    setDeveloperMode(!DeveloperMode);
  };

  return (
    <StyledCardContainer>
      <div style={{ display: 'flex' }}>
        <CardImage handleSwitch={handleSwitch} DeveloperMode={DeveloperMode} />
        <CardContent DeveloperMode={DeveloperMode} />
      </div>
    </StyledCardContainer>
  );
};

export default CardContainer;