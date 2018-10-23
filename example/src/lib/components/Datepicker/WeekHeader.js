import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
`;

const StyledSpan = styled.span`
  font-family: Roboto, sans-serif;
  text-align: center;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  line-height: 34px;
  margin: 4px;
`;

const WeekHeader = () => (
  <StyledDiv>
    <StyledSpan>S</StyledSpan>
    <StyledSpan>M</StyledSpan>
    <StyledSpan>T</StyledSpan>
    <StyledSpan>W</StyledSpan>
    <StyledSpan>T</StyledSpan>
    <StyledSpan>F</StyledSpan>
    <StyledSpan>S</StyledSpan>
  </StyledDiv>
);

export default WeekHeader;
