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

  const startMessage: string[] = [
    '왜 이렇게 늦은거야 자네..! 포켓몬들이 얼마나 기다리고 있었는지 알아?',
    '늦은 감이 있긴 하지만... 포켓몬 세계에 다시 돌아온 것을 환영하네.',
    '잊지 않았지? 여기서는 원하는 포켓몬들 잡을 수도, 별명을 지어줄 수도, 원하지 않는다면 방출 시킬수도 있지.',
    '뭐 예전에 다 해본 것들이니 금방 할 수 있을거라고 믿는다네. 일단 어서 들어와!!',
  ];

  return (
    <>
      <Wrapper>
        <Column></Column>
        <StartMessageForm />
        {/* 메세지 폼이 사라질 때 StartButton이 뜨도록 구현 */}
        <Column></Column>
      </Wrapper>
    </>
  );
};

export default Start;
