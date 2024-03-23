import React from 'react';
import edit from './edit.png';
import DoctorIntroduction from './DoctorIntroduction';
import DoctorContact from './DoctorContact';
import QuickAction from './QuickAction';
import styled from 'styled-components';
// Information of Doctor:
  // Title, Prefix, Name, Rating, Specialization Pronoun, Email, Number, AvailableTime, Experience, Total Appointments
const StyledCardBody = styled.div`
  margin: 5px;
  font-family: -apple-system, system-ui, 'Segoe UI', 'Liberation Sans', sans-serif;

  .header {
    display: flex;
    align-items: center;

    h2 {
      margin-right: 10px;
      font:"bold";
    }

    img {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
`;

const CardBody = ({ DeveloperMode }) => {
  return (
    <StyledCardBody>
      <div className="header">
        <h2>Dr. Just An Example</h2>
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
      </div>
      <div style={{ display: 'flex' }}>
        <DoctorIntroduction DeveloperMode={DeveloperMode} />
        <DoctorContact DeveloperMode={DeveloperMode} />
      </div>
      <QuickAction DeveloperMode={DeveloperMode} />
    </StyledCardBody>
  );
};

export default CardBody;
