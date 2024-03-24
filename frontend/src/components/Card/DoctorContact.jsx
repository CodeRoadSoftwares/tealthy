import React from 'react';
import styled from 'styled-components';
import edit from './edit.png';
// Information of Doctor:
// Title, Prefix, Name, Rating, Specialization Pronoun, Email, Number, AvailableTime, Experience, Total Appointments
const ContactContainer = styled.div`
  margin-left: 10px;
  width: 330px;
  height: 20px;
  text-wrap: wrap;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 12px;

  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  a {
    margin: 0;
    flex-grow: 1;
    cursor: pointer;
    color: blue;
    text-decoration: underline;
  }
  p {
    margin: 0;
    flex-grow: 1;
  }
`;

const DoctorContact = ({ DeveloperMode, Email, Number, AddressLine, AddressRegion, AvailableTime}) => {
  return (
    <ContactContainer>
      <ContactItem> {/*Phone Number of the doctor*/}
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
        {DeveloperMode ? (<textarea style = {{border:"1px solid black"}} rows="2" cols="30" maxLength={60}>{Number}</textarea>) : 
        (Number !== "(Edit Number)" ? <a href={`tel:${Number}`}>{Number}</a> : 
        <p>{Number}</p>)}
      </ContactItem>
      <ContactItem> {/*Email of the doctor*/}
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
        {DeveloperMode ?<textarea style = {{border:"1px solid black"}} rows="2" cols="30" maxLength={60}>{Email}</textarea> : 
        (Email !== "(Edit Email)" ? <a href={`mailto:${Email}`}>{Email}</a> : 
        <p>{Email}</p>)}
      </ContactItem>
      <ContactItem> {/*Address Line of the doctor*/}
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
        {DeveloperMode ?<textarea style = {{border:"1px solid black"}} rows="2" cols="30" maxLength={60}>{AddressLine}</textarea> : <p>{AddressLine}</p>}
      </ContactItem>
      <ContactItem> {/*Address Region of the doctor*/}
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
        {DeveloperMode ?<textarea style = {{border:"1px solid black"}} rows="2" cols="30" maxLength={60}>{AddressRegion}</textarea> : <p>{AddressRegion}</p>}
      </ContactItem>
      <ContactItem> {/*Available Time of the doctor*/}
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
        {DeveloperMode ?<textarea style = {{border:"1px solid black"}} rows="2" cols="30" maxLength={60}>{AvailableTime}</textarea> : <p>{AvailableTime}</p>}
      </ContactItem>
    </ContactContainer>
  );
};

export default DoctorContact;
