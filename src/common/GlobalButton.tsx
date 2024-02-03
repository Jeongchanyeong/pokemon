import React, { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttontype?: 'small' | 'medium' | 'large' | 'circle' | 'delete';
}

// delete 버튼, background color만 다를텐데
// 최소 기능만 넣고 해당 컴포넌트에서는 styled(GlobalButton)attr...as `` 으로 사용한다?
// -> x 기존 globalbutton의 스타일이 적용되지 않고 Message의 애니메이션이 적용되지 않음. 왜?

// type을 만들어서 지정해주자 props로는 small, medium, large, circle, delete (defalut에서 색깔만 살짝 다름) 버튼
// case별로 나눠서 props로 넘겨주자
const ButtonStyle = (props: ButtonProps) => {
  switch (props.buttontype) {
    case 'small':
      return `
        width : 24px;
        height: 12px;
      `;
    case 'medium':
      return `
        width : 48px;
        height: 24px;
        font-size: 14px;
      `;
    case 'large':
      return `
        width : 96px;
        height: 48px;
        font-size: 16px;
      `;
    case 'circle':
      return `
        width : 50px;
        height: 50px;
        border-radius: 50%;
      `;
    case 'delete':
      return `
        width : 48px;
        height: 24px;
        background-color: #bd1b1b;
        color: #fff;
      `;
    default:
      return '';
  }
};
const MyButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 10px;
  font-family: 'Galmuri11', sans-serif;

  cursor: pointer;
  ${ButtonStyle}
`;

const GlobalButton = ({ onClick, children, buttontype }: ButtonProps) => {
  return (
    <MyButton buttontype={buttontype} onClick={onClick}>
      {children}
    </MyButton>
  );
};

GlobalButton.defaultProps = {
  type: 'default',
};

export default GlobalButton;
