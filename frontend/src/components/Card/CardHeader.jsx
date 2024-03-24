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

const InstituteName = styled.h1`
  margin: 5px;
  font-size: 24px;
  font-weight: bold;
`;

const EditIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const CardHeader = ({ DeveloperMode, Institute}) => {
  return (
    <HeaderContainer>
      {DeveloperMode ? <textarea style = {{border:"1px solid black"}} rows="2" cols="70" maxLength={70}>{Institute}</textarea>
      : <InstituteName>{Institute}</InstituteName>}
      {DeveloperMode && <EditIcon src={edit} alt="edit icon" />}
    </HeaderContainer>
  );
};

export default CardHeader;
