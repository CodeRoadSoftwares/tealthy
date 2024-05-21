import React from 'react';
import edit from './edit.png';
import DoctorIntroduction from './DoctorIntroduction';
import DoctorContact from './DoctorContact';
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
      font-size: 18px;
      font-weight: bold;
      margin-right:10px;
    }

    img {
      width: 30px;
      height: 30px;
      cursor: pointer;
      margin-right:10px;
    }
  }
`;
const CardBody = ({ DeveloperMode,Title, Prefix, Name, Rating, Department, Specialization, Pronoun, Email, Number, AvailableTime, Experience, TotalAppointments, AddressLine,AddressRegion}) => {
  return (
    <StyledCardBody>
      <div className="header">
        {DeveloperMode ?<textarea style = {{border:"1px solid black"}} rows="2" cols="6" maxLength={4}>{Prefix}</textarea> : <h2>{Prefix}</h2>}
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
        {DeveloperMode ?<textarea style = {{border:"1px solid black"}} row="1" cols="6" maxLength={20}>{Name}</textarea> : <h2>{Name}</h2>}
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
        {DeveloperMode ?<textarea style = {{border:"1px solid black"}} row="1" cols="6" maxLength={20}>{Pronoun}</textarea> : <h2>{Pronoun}</h2>}
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
        <h2>Rating: {Rating}</h2>
        <h2>Appointments #: {TotalAppointments}</h2>
      </div>
      <div style={{ display: 'flex' }}>
        <DoctorIntroduction 
        DeveloperMode={DeveloperMode} 
        Title={Title} 
        Specialization = {Specialization} 
        Department = {Department} 
        Experience= {Experience}
        />
        <DoctorContact 
          DeveloperMode={DeveloperMode} 
          Email = {Email}
          Number = {Number}
          AddressLine = {AddressLine} 
          AddressRegion = {AddressRegion}
          AvailableTime= {AvailableTime}
        />
      </div>
    </StyledCardBody>
  );
};

export default CardBody;
