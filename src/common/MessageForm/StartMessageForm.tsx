import styled from 'styled-components';
import { useState } from 'react';
import Message from '../Message';
import GlobalButton from '../GlobalButton';

const StartMessageForm = () => {
  const [messageIndex, setMessageIndex] = useState<number>(0);

  const startMessage: string[] = [
    '왜 이렇게 늦은거야 자네..! 포켓몬들이 얼마나 기다리고 있었는지 알아?',
    '늦은 감이 있긴 하지만... 포켓몬 세계에 다시 돌아온 것을 환영하네.',
    '잊지 않았지? 여기서는 원하는 포켓몬들 잡을 수도, 별명을 지어줄 수도, 원하지 않는다면 방출 시킬수도 있지.',
    '뭐 예전에 다 해본 것들이니 금방 할 수 있을거라고 믿는다네. 일단 어서 들어와!!',
  ];

  const Wrapper = styled.div`
    display: flex;
    background-color: #b9b9b9;
    flex-direction: column;
    width: 1000px;
    height: 200px;
  `;

  const MessageFormWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-top: 25px;
    flex: 4;
  `;

  const GlobalButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
  `;

  const handleClick = () => {
    setMessageIndex((idx: number) => (idx + 1) % startMessage.length);
  };

  return (
    <Wrapper>
      <MessageFormWrapper>
        <Message text={startMessage[messageIndex]} />
      </MessageFormWrapper>

      <GlobalButtonWrapper>
        <GlobalButton onClick={handleClick} text={'>'} />
      </GlobalButtonWrapper>
    </Wrapper>
  );
};

export default StartMessageForm;
