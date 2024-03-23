import React from 'react';
import styled from 'styled-components';
import edit from './edit.png';

const ContactContainer = styled.div`
  margin-left: 10px;
  width: 330px;
  height: 20px;
  display: flex;
  flex-direction: column;
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

const DoctorContact = ({ DeveloperMode }) => {
  return (
    <ContactContainer>
      <ContactItem>
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
        <a href="tel:123-456-7890">123-456-7890</a>
      </ContactItem>
      <ContactItem>
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
        <a href="mailto:example@contact.com">example@contact.com</a>
      </ContactItem>
      <ContactItem>
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
        <p>MSC 1122-333-444</p>
      </ContactItem>
      <ContactItem>
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
        <p>Random Forest Blvd 12345</p>
      </ContactItem>
      <ContactItem>
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
        <p>Burger, NY, United States</p>
      </ContactItem>
    </ContactContainer>
  );
};

export default DoctorContact;
