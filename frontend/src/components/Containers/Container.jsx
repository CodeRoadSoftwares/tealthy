import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${({ $size }) => {
    switch ($size) {
      case "sm":
        return "640px";
      case "md":
        return "768px";
      case "lg":
        return "1024px";
      case "xl":
        return "1280px";
      case "2xl":
        return "1536px";
      default:
        return "100%"; // Default to full width
    }
  }};
`;

const Container = ({ children, $size }) => {
  return <StyledContainer $size={$size}>{children}</StyledContainer>;
};

export default Container;
