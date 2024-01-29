import React from 'react';
import { styled } from 'styled-components';

interface ButtonProps {
  type: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MyButton = styled.button`
  width: 70px;
  height: 30px;
  margin: 5px;

  border: none;
  border-radius: 5px;

  background-color: #b9b9b9;
  color: white;

  font-family: 'Galmuri11', sans-serif;

  cursor: pointer;

  &.Button_노말 {
    background-color: #777777; // 노말 색상으로 대체하세요
  }

  &.Button_delete {
    background-color: #be3333; // 노말 색상으로 대체하세요
  }

  &.Button_격투 {
    background-color: #d18e38; // 노말 색상으로 대체하세요
  }

  &.Button_비행 {
    background-color: #a1d5ff; // 노말 색상으로 대체하세요
  }
  &.Button_독 {
    background-color: #6f32b9; // 노말 색상으로 대체하세요
  }
  &.Button_땅 {
    background-color: #8f4a00; // 노말 색상으로 대체하세요
  }
  &.Button_바위 {
    background-color: #baa791; // 노말 색상으로 대체하세요
  }
  &.Button_벌레 {
    background-color: #97b53c; // 노말 색상으로 대체하세요
  }
  &.Button_고스트 {
    background-color: #321660; // 노말 색상으로 대체하세요
  }
  &.Button_강철 {
    background-color: #3e85bb; // 노말 색상으로 대체하세요
  }
  &.Button_불꽃 {
    background-color: #de4f27; // 노말 색상으로 대체하세요
  }
  &.Button_물 {
    background-color: #1a8de4; // 노말 색상으로 대체하세요
  }
  &.Button_풀 {
    background-color: #308f18; // 노말 색상으로 대체하세요
  }
  &.Button_전기 {
    background-color: #eae428; // 노말 색상으로 대체하세요
  }
  &.Button_에스퍼 {
    background-color: #e38661; // 노말 색상으로 대체하세요
  }
  &.Button_얼음 {
    background-color: #82e4ff; // 노말 색상으로 대체하세요
  }
  &.Button_드래곤 {
    background-color: #5b53cf; // 노말 색상으로 대체하세요
  }
  &.Button_악 {
    background-color: #444444; // 노말 색상으로 대체하세요
  }
  &.Button_페어리 {
    background-color: #e695ff; // 노말 색상으로 대체하세요
  }
`;

const GlobalButton = ({ type, text, onClick }: ButtonProps) => {
  return (
    <MyButton
      className={['Button', `Button_${type}`].join(' ')}
      onClick={onClick}
    >
      {text}
    </MyButton>
  );
};

GlobalButton.defaultProps = {
  type: 'default',
};

export default GlobalButton;
