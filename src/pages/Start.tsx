import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MessageForm from '../common/MessageForm';

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

  const StartButton = styled.button`
    background-color: #851729;
    color: #ffffff;
    font-size: 150px;
    font-family: 'Galmuri11', sans-serif;

    width: 500px;
    height: 200px;

    border-radius: 20px;
    border: 4px dotted;
    border-color: #fff88b;
  `;

  return (
    <>
      <Wrapper>
        <Column></Column>
        <MessageForm />
        {/* 메세지 폼이 사라질 때 StartButton이 뜨도록 구현 */}

        <StartButton
          onClick={() => {
            navigate('/list');
          }}
        >
          Start
        </StartButton>
        <Column></Column>
      </Wrapper>
    </>
  );
};

export default Start;
