import React from 'react';
import edit from './edit.png';
import styled from 'styled-components';

const IntroContainer = styled.div`
  width: 330px;
  text-wrap: wrap;
`;

const IntroItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 18px;

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

const DoctorIntroduction = ({ DeveloperMode }) => {
  return (
    <IntroContainer>
      <IntroItem>
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
        <p>Senior Cardiothoracic Surgeon</p>
      </IntroItem>
      <IntroItem>
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
        <p>Department of Health Care and Customer Service</p>
      </IntroItem>
      <IntroItem>
        {DeveloperMode ? <img src={edit} alt="edit icon" /> : ''}
        <p>10+ Experience performing intricate heart and lung surgeries</p>
      </IntroItem>
    </IntroContainer>
  );
};

export default DoctorIntroduction;
