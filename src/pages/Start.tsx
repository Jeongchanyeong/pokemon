import styled from 'styled-components';
import StartMessageForm from '../common/MessageForm/StartMessageForm';

// start 페이지는 해당 폼이 등장, 사라짐만 관리를 할까?
const Start = () => {
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

  // const StartButton = styled.button`
  //   background-color: #851729;
  //   color: #ffffff;
  //   font-size: 150px;
  //   font-family: 'Galmuri11', sans-serif;

  //   border-radius: 20px;
  //   border: 4px dotted;
  //   border-color: #fff88b;
  // `;

  return (
    <Wrapper>
      <Column></Column>
      <StartMessageForm />
      {/* 메세지 폼이 사라질 때 StartButton이 뜨도록 구현 */}
      <Column></Column>
    </Wrapper>
  );
};

export default Start;
