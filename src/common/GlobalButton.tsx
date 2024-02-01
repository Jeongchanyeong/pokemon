import React from 'react';
import { styled } from 'styled-components';

interface ButtonProps {
  type: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

// 크기를 어떻게 조절할 것인지?
// number || undefined or ? 시 어떤 타입까지 가능한 것인지 명확하게 구분 후 사용하기

const MyButton = styled.button`
  padding-left: 15px;
  padding-right: 15px;
  margin: 5px;

  border: none;
  border-radius: 5px;

  background-color: #868686;
  color: white;

  font-family: 'Galmuri11', sans-serif;

  cursor: pointer;
`;

const GlobalButton = ({ text, onClick }: ButtonProps) => {
  return <MyButton onClick={onClick}>{text}</MyButton>;
};

GlobalButton.defaultProps = {
  type: 'default',
};

export default GlobalButton;
