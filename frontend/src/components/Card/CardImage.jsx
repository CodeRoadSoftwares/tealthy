import React from 'react'
import CardModeButton from './CardModeButton';
import CardAvatar from './CardAvatar';
// Information of Doctor:
  // Title, Prefix, Name, Rating, Specialization Pronoun, Email, Number, AvailableTime, Experience, Total Appointments
  import styled from 'styled-components';

  const ImageContainer = styled.div`
    margin-right: 10px;
    width: 150px;
  `;
  
  const AvatarContainer = styled.div`
    vertical-align: center;
    margin-right: 10px;
  `;
  
  const CardImage = ({ handleSwitch, DeveloperMode }) => {
    return (
      <ImageContainer>
        <CardModeButton handleSwitch={handleSwitch} DeveloperMode={DeveloperMode} />
        <AvatarContainer>
          <CardAvatar DeveloperMode={DeveloperMode} />
        </AvatarContainer>
      </ImageContainer>
    );
  };
  
  export default CardImage;
  