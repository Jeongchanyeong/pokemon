import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Start = () => {
  const navigate = useNavigate();

  const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #1f1f1f;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      color: white;
    }
  `;

  const Column = styled.div`
    background-color: black;
    width: 300px;
    height: 100vh;
    display: flex;
  `;

  const StartBurron = styled.button`
    background-color: #851729;
    color: white;
    font-size: 150px;

    width: 500px;
    height: 200px;

    border-radius: 20px;
    border: 2px solid white;

    font-family: 'Galmuri9', sans-serif;
  `;

  return (
    <>
      <Wrapper>
        <Column></Column>
        <StartBurron
          onClick={() => {
            navigate('/list');
          }}
        >
          Start
        </StartBurron>
        <Column></Column>
      </Wrapper>
    </>
  );
};

export default Start;
