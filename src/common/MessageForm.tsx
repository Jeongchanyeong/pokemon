import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import GlobalButton from './GlobalButton';

const MessageBox = styled.div`
  width: 1200px;
  height: 300px;
  display: flex;
  align-items: center;

  background-color: #ababab;
`;

const typingAnimation = keyframes`
  0% { max-width: 0; }
  100% { max-width: 100%; }
`;

const Message = styled.p`
  display: inline-block;
  position: relative;
  margin-left: 20px;
  box-sizing: border-box;

  overflow: hidden;
  animation: ${typingAnimation} 2s steps(30, end) 1;
  white-space: nowrap;
`;

const MessageForm = () => {
  const messages = [
    '어서오게나 여기는 당신의 포켓몬 창고라네',
    '당신이 원하는 포켓몬들 가져가시오',
    '그냥 집에 가시오',
  ];
  const [messageIndex, setMessageIndex] = useState<number>(0);

  const handleClick = () => {
    setMessageIndex((prevIndex: number) => (prevIndex + 1) % messages.length);
  };

  return (
    <MessageBox>
      <Message>{messages[messageIndex]}</Message>
      <GlobalButton text={'>'} type={'물'} onClick={handleClick} />
    </MessageBox>
  );
};

export default MessageForm;
