import React from 'react';
import styled from 'styled-components';
import doctorPicture from './sampledoctor.jpg';

const StyledCardAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const CardAvatar = ({ DeveloperMode }) => {
  return (
    <StyledCardAvatar>
      <img src={doctorPicture} alt="Doctor" />
    </StyledCardAvatar>
  );
};

export default CardAvatar;
