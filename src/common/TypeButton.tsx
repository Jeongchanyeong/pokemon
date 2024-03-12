import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  bgcolor: string;
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
  background-color: ${(props) => props.bgcolor};
`;

const TypeButton = () => {
  const handleClick = () => console.log('하이'); // 추후 타입별 필터링 로직으로 구성 예정

  return (
    <>
      <Button onClick={handleClick} bgcolor="#a5a5a5">
        노말
      </Button>
      <Button onClick={handleClick} bgcolor="#e6986e">
        격투
      </Button>
      <Button onClick={handleClick} bgcolor="#78aad9">
        비행
      </Button>
      <Button onClick={handleClick} bgcolor="#916a96">
        독
      </Button>
      <Button onClick={handleClick} bgcolor="#ab8630">
        땅
      </Button>
      <Button onClick={handleClick} bgcolor="#a59382">
        바위
      </Button>
      <Button onClick={handleClick} bgcolor="#a4a469">
        벌레
      </Button>
      <Button onClick={handleClick} bgcolor="#8673a4">
        고스트
      </Button>
      <Button onClick={handleClick} bgcolor="#6e8395">
        강철
      </Button>
      <Button onClick={handleClick} bgcolor="#c54d35">
        불꽃
      </Button>
      <Button onClick={handleClick} bgcolor="#498abf">
        물
      </Button>
      <Button onClick={handleClick} bgcolor="#5f9b50">
        풀
      </Button>
      <Button onClick={handleClick} bgcolor="#ebdd56">
        전기
      </Button>
      <Button onClick={handleClick} bgcolor="#e48a98">
        에스퍼
      </Button>
      <Button onClick={handleClick} bgcolor="#9ad6f4">
        얼음
      </Button>
      <Button onClick={handleClick} bgcolor="#555282">
        드래곤
      </Button>
      <Button onClick={handleClick} bgcolor="#676767">
        악
      </Button>
      <Button onClick={handleClick} bgcolor="#f6b5ef">
        페어리
      </Button>
    </>
  );
};

export default TypeButton;
