import React from 'react';
import styled, { keyframes } from 'styled-components';

const typingAnimation = keyframes`
  from  { max-width: 0; }
  to { max-width: 100%; }
`;

const Text = styled.p`
  display: inline-block;
  position: relative;
  box-sizing: border-box;

  overflow: hidden;
  animation: ${typingAnimation} 1s steps(30) 1;
  white-space: nowrap;

  padding-left: 40px;
`;

const Message = ({ text }: any) => {
  return <Text>{text}</Text>;
};

export default Message;
