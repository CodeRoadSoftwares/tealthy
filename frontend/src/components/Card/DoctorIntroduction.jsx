import React from 'react';
import edit from './edit.png';
import styled from 'styled-components';
// Information of Doctor:
// Title, Prefix, Name, Rating, Specialization Pronoun, Email, Number, AvailableTime, Experience, Total Appointments
const IntroContainer = styled.div`
  width: 330px;
  height: 20px;
  text-wrap: wrap;
`;

const IntroItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;

  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  p {
    margin: 0;
    flex-grow: 1;
  }
`;

const DoctorIntroduction = ({ DeveloperMode,Title, Specialization, Department, Experience}) => {
  return (
    <IntroContainer>
      <IntroItem> {/*Job Title of the doctor*/}
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
        {DeveloperMode ?<textarea style = {{border:"1px solid black"}} rows="2" cols="30" maxLength={60}>{Title}</textarea> : <p>{Title}</p>}
      </IntroItem>
      <IntroItem> {/*Specialization of the doctor*/}
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
        {DeveloperMode ?<textarea style = {{border:"1px solid black"}} rows="2" cols="30" maxLength={60}>{Specialization}</textarea> : <p>{Specialization}</p>}
      </IntroItem>
      <IntroItem> {/*Department of the doctor*/}
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
        {DeveloperMode ?<textarea style = {{border:"1px solid black"}} rows="2" cols="30" maxLength={60}>{Department}</textarea> : <p>{Department}</p>}
      </IntroItem>
      <IntroItem> {/*Experience of the doctor*/}
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
        {DeveloperMode ?<textarea style = {{border:"1px solid black"}} rows="2" cols="30" maxLength={60}>{Experience}</textarea> : <p>{Experience}</p>}
      </IntroItem>
    </IntroContainer>
  );
};

export default DoctorIntroduction;
