import React from 'react';
import styled from 'styled-components';

/*
   Pokemon Type도 API 받아와야함. 로직 어떻게 짜야할지?
   TypeButton 내에서는 filter사용하여서?
 */

interface ButtonProps {
  bgColor: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = styled.button<ButtonProps>`
  width: 140px;
  height: 30px;
  margin-top: 16px;
  border: none;
  border-radius: 15px;

  color: white;

  font-family: 'Galmuri11', sans-serif;
  font-size: 12px;

  cursor: pointer;

  &:active {
    position: relative;
    top: 2px;
  }
  background-color: ${(props) => props.bgColor};
`;
const TypeButton = () => {
  const handleClick = () => console.log('하이'); // 추후 타입별 필터링 로직으로 구성 예정

  return (
    <>
      {' '}
      <Button onClick={handleClick} bgColor="#777777">
        노말
      </Button>
      <Button onClick={handleClick} bgColor="#d18e38">
        격투
      </Button>
      <Button onClick={handleClick} bgColor="#a1d5ff">
        비행
      </Button>
      <Button onClick={handleClick} bgColor="#6f32b9">
        독
      </Button>
      <Button onClick={handleClick} bgColor="#8f4a00">
        땅
      </Button>
      <Button onClick={handleClick} bgColor="#baa791">
        바위
      </Button>
      <Button onClick={handleClick} bgColor="#97b53c">
        벌레
      </Button>
      <Button onClick={handleClick} bgColor="#321660">
        고스트
      </Button>
      <Button onClick={handleClick} bgColor="#3e85bb">
        강철
      </Button>
      <Button onClick={handleClick} bgColor="#de4f27">
        불꽃
      </Button>
      <Button onClick={handleClick} bgColor="#1a8de4">
        물
      </Button>
      <Button onClick={handleClick} bgColor="#308f18">
        풀
      </Button>
      <Button onClick={handleClick} bgColor="#eae428">
        전기
      </Button>
      <Button onClick={handleClick} bgColor="#e38661">
        에스퍼
      </Button>
      <Button onClick={handleClick} bgColor="#82e4ff">
        얼음
      </Button>
      <Button onClick={handleClick} bgColor="#5b53cf">
        드래곤
      </Button>
      <Button onClick={handleClick} bgColor="#444444">
        악
      </Button>
      <Button onClick={handleClick} bgColor="#e695ff">
        페어리
      </Button>
    </>
  );
};

export default TypeButton;
