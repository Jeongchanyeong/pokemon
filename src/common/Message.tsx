import React from 'react';
import styled, { keyframes } from 'styled-components';

const typingAnimation = keyframes`
  0% { max-width: 0; }
  100% { max-width: 100%; }
`;

const Text = styled.p`
  display: inline-block;
  position: relative;
  margin-left: 20px;
  box-sizing: border-box;

  overflow: hidden;
  animation: ${typingAnimation} 2s steps(30, end) 1;
  white-space: nowrap;
`;

const Message = ({ text }: any) => {
  return <Text>{text}</Text>;
};

export default Message;
