import styled, { keyframes } from 'styled-components';

const typingAnimation = keyframes`
  from  { max-width: 0; }
  to { max-width: 100%; }
`;

const Text = styled.p`
  display: inline-block;
  position: relative;
  overflow: hidden;

  box-sizing: border-box;
  white-space: nowrap;

  animation: ${typingAnimation} 1s steps(30) 1;
`;

const Message = ({ text }: any) => {
  return <Text>{text}</Text>;
};

export default Message;
