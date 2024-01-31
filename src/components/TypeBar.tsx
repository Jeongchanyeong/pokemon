import React from 'react';
import styled from 'styled-components';
import TypeButton from '../common/TypeButton';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  left: 0;
  top: 0;

  background-color: #2f2f2f;
  width: 200px;
  height: 100%;

  overflow: auto;
  position: fixed;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TypeBar = () => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <TypeButton />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default TypeBar;
