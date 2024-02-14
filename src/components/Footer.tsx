import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #b4cbbe;
  width: 100%;
  height: 5%;
  padding: 40px;
  color: #ffffff;
  span {
    padding: 20px;
  }
`;
const Footer = () => {
  return (
    <Wrapper>
      <span>
        본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.
      </span>
      <span>© 2023 Jeong, Chan-Yeong. All Rights Reserved.</span>
    </Wrapper>
  );
};

export default Footer;
