import styled from 'styled-components';
import { useState, useEffect } from 'react';
import GlobalButton from './GlobalButton';
import Message from './Message';

const Wrapper = styled.div``;
const MessageBox = styled.div`
  width: 1200px;
  height: 300px;

  display: flex;
  align-items: center;

  background-color: #ababab;
  border-radius: 30px;
`;

const MessageForm = () => {
  // 초기 화면 메세지, 다른 화면에 있을 때 메세지를 분기처리 해야하나?

  const messageList1 = [
    '어서오게나 여기는 당신의 포켓몬 창고라네',
    '당신이 원하는 포켓몬들 가져가시오',
    '그냥 집에 가시오',
  ];

  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [messageForm, setMessageForm] = useState(true);
  const handleClick = () => {
    setMessageIndex((idx: number) => (idx + 1) % messageList1.length);
  };
  if (messageIndex === 2) {
    setMessageForm(false);
  }

  return (
    <Wrapper>
      {messageForm && (
        <MessageBox>
          <GlobalButton text={'다음'} type={'불꽃'} onClick={handleClick} />
          <Message
            text={messageList1[messageIndex]}
            onButtonClick={handleClick}
          />
        </MessageBox>
      )}
    </Wrapper>
  );
};

export default MessageForm;

// 첫 랜더링 될 때 뿐만이 아닌 버튼을 누를 때에도 애니메이션이 동작했으면 좋곘어

// - 애니메이션을 useState로 상태를 관리해보자?
// - useEffect를 사용해서 초기 랜더링시, 업데이트 시, 마운팅시 시점에 어떻게 할지 로직을 정해준다?

// 만약 messages의 마지막 문자열까지 갔다면 메세지 폼이 사라졌으면 좋겠어 대신  - 마운팅시로 해결 가능?

// 버튼에 대한 상태관리도 필요하겠다.
// 1. 다음버튼 누르다가 제일 마지막 메세지에서는 (확인, 취소 이런식으로 변해야함)
