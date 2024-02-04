import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import Message from '../Message';
import GlobalButton from '../GlobalButton';
import { START_MESSAGE } from '../../constants/message';

const Wrapper = styled.div`
  display: flex;
  background-color: #242424;
  border: 5px ridge white;
  border-radius: 15px;
  flex-direction: column;

  width: 1000px;
  height: 200px;
  max-width: 100%;
  margin: 0 auto;
`;

const MessageFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 45px;
  font-size: 18px;
  flex: 4;
  padding-left: 40px;
  padding-right: 40px;
  color: white;
`;

const GlobalButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  margin: 0 20px 20px 0;

  button {
    color: white;
    background-color: #606060;
    font-size: 12px;
  }
`;
interface StartMessageFormProps {
  changeButtonForm: () => void;
}

const StartMessageForm: React.FC<StartMessageFormProps> = ({
  changeButtonForm,
}) => {
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [visibleForm, setVisibleForm] = useState(true);

  const nextIndex = (idx: number) => (idx + 1) % START_MESSAGE.length;

  // 클릭시 다음 배열의 인덱스 보여주기
  const handleClick = () => {
    setMessageIndex(nextIndex);
  };

  useEffect(() => {
    if (messageIndex === 4) {
      setVisibleForm(false);
      changeButtonForm();
    }
  }, [messageIndex]);

  return (
    <>
      {visibleForm && (
        <Wrapper>
          <MessageFormWrapper>
            <Message text={START_MESSAGE[messageIndex]} />
          </MessageFormWrapper>

          <GlobalButtonWrapper>
            <GlobalButton buttontype="small" onClick={handleClick}>
              {'>'}
            </GlobalButton>
          </GlobalButtonWrapper>
        </Wrapper>
      )}
    </>
  );
};

export default StartMessageForm;
