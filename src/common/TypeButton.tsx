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
  margin: 5px;
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
      <Button onClick={handleClick} bgColor="#a5a5a5">
        노말
      </Button>
      <Button onClick={handleClick} bgColor="#e6986e">
        격투
      </Button>
      <Button onClick={handleClick} bgColor="#78aad9">
        비행
      </Button>
      <Button onClick={handleClick} bgColor="#916a96">
        독
      </Button>
      <Button onClick={handleClick} bgColor="#ab8630">
        땅
      </Button>
      <Button onClick={handleClick} bgColor="#a59382">
        바위
      </Button>
      <Button onClick={handleClick} bgColor="#a4a469">
        벌레
      </Button>
      <Button onClick={handleClick} bgColor="#8673a4">
        고스트
      </Button>
      <Button onClick={handleClick} bgColor="#6e8395">
        강철
      </Button>
      <Button onClick={handleClick} bgColor="#c54d35">
        불꽃
      </Button>
      <Button onClick={handleClick} bgColor="#498abf">
        물
      </Button>
      <Button onClick={handleClick} bgColor="#5f9b50">
        풀
      </Button>
      <Button onClick={handleClick} bgColor="#ebdd56">
        전기
      </Button>
      <Button onClick={handleClick} bgColor="#e48a98">
        에스퍼
      </Button>
      <Button onClick={handleClick} bgColor="#9ad6f4">
        얼음
      </Button>
      <Button onClick={handleClick} bgColor="#555282">
        드래곤
      </Button>
      <Button onClick={handleClick} bgColor="#676767">
        악
      </Button>
      <Button onClick={handleClick} bgColor="#f6b5ef">
        페어리
      </Button>
    </>
  );
};

export default TypeButton;
