import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import styled from 'styled-components';

const StyledCardContent = styled.div`
  font-family: -apple-system, system-ui, 'Segoe UI', 'Liberation Sans', sans-serif;
`;

const CardContent = ({ DeveloperMode }) => {
  return (
    <StyledCardContent>
      <CardHeader DeveloperMode={DeveloperMode} />
      <CardBody DeveloperMode={DeveloperMode} />
    </StyledCardContent>
  );
};

export default CardContent;
