import React from 'react';
import styled from 'styled-components';
import TypeButton from '../common/TypeButton';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #2f2f2f;
  width: 10%;
  height: 100%;
  overflow: auto;
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
