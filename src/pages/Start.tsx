import styled from 'styled-components';
import StartMessageForm from '../common/MessageForm/StartMessageForm';
import { useState, useEffect } from 'react';
import GlobalButton from '../common/GlobalButton';
import { useNavigate } from 'react-router-dom';
import { keyframes } from 'styled-components';

const Start = () => {
  const [buttonVisible, setButtonVisible] = useState<boolean>(false);

  const navigate = useNavigate();

  const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #080808;
    justify-content: center;
  `;

  const MainContentWrapper = styled.div`
    width: 80vw;
    height: 100vh;
    background-color: #1a1a1a;
    background-image: url('../assets/backgroundCity.png');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
  `;

  const shadowAnimation = keyframes`  
  from {
    box-shadow: 42px 42px 42px #dbdbdb, -42px -42px 42px #dbdbdb,
                -42px 42px 42px #dbdbdb, 42px -42px 42px #dbdbdb;
  }
  to {
    box-shadow: 50px 50px 75px #dbdbdb, -50px -50px 75px #dbdbdb,
                -50px 50px 75px #dbdbdb, 50px -50px 75px #dbdbdb;
  }
  `;

  const DoctorOh = styled.div`
    background-color: #dbdbdb;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    animation: ${shadowAnimation} 1.2s infinite alternate;

    flex: 7;
    margin-top: 180px;
    img {
      width: 80%;
      max-width: 460px;
      height: auto;
    }
  `;

  const StartMessageFormWrapper = styled.div`
    flex: 4;
  `;
  const showButton = (isVisible: boolean) => {
    setButtonVisible(isVisible);
  };

  const handleClick = () => {
    navigate('/list');
  };

  // 폼이 사라진 뒤 버튼이 생성됨을 관리
  // buttonVisible로 버튼의 boolean값 관리
  // prop으로 뭐를 내려주고 startMessageForm에서 그걸 prop으로 받아 Form이 없어지면 buttonVisible로(true)로 변경해주면 되겠다.

  return (
    <Wrapper>
      <MainContentWrapper>
        <DoctorOh>
          <img src="../assets/dr.oh.png" />
        </DoctorOh>
        <StartMessageFormWrapper>
          <StartMessageForm showButton={showButton} />
          {/* wrapper안에 메세지 폼과 버튼이 둘다 있지만 버튼은 true일 때만 떠 */}
          {buttonVisible && (
            <GlobalButton onClick={handleClick} buttontype="start">
              {'START'}
            </GlobalButton>
          )}
        </StartMessageFormWrapper>
      </MainContentWrapper>
    </Wrapper>
  );
};

export default Start;
