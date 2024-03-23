import React from 'react'
import edit from './edit.png';
import styled from 'styled-components';
// Information of Doctor:
  // Title, Prefix, Name, Rating, Specialization Pronoun, Email, Number, AvailableTime, Experience, Total Appointments
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: -apple-system, system-ui, "Segoe UI", "Liberation Sans", sans-serif;
`;

const Title = styled.h1`
  margin: 5px;
`;

const EditIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const CardHeader = ({ DeveloperMode }) => {
  return (
    <HeaderContainer>
      <Title>Example Health Care - Everywhere Hospital</Title>
      {DeveloperMode && <EditIcon src={edit} alt="edit icon" />}
    </HeaderContainer>
  );
};

export default CardHeader;
