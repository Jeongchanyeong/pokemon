import React from 'react';
import styled from 'styled-components';
import TypeButton from '../common/TypeButton';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: calc(80%);
  flex-wrap: wrap;
  padding: 30px 0px 50px 0px;
`;

const TypeBar = () => {
  return (
    <Wrapper>
      <TypeButton />
    </Wrapper>
  );
};

export default TypeBar;
