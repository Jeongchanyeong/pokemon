import styled from 'styled-components';
import StartMessageForm from '../common/MessageForm/StartMessageForm';
import GlobalButton from '../common/GlobalButton';
import { useNavigate } from 'react-router-dom';
import { keyframes } from 'styled-components';
import { useState } from 'react';

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

const Start = () => {
  const [visibleButton, setVisibleButton] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/list');
  };

  // 해당 컴포넌트에서는 해당 컴포넌트 내의 엘리먼트의 상태를 관리해준다.
  // 만약 자식 form이 삭제될 때 a의 상태를 관리하고 싶다면
  // 여기서 작성한 함수 const aDissapear = ()=>{a(false)} 얘를 자식 컴포넌트에 전달
  // 자식 컴포넌트에서는 이러한 조건에서 애가 사라질 때 해당 힘수를 호출만 해준다.

  const changeButtonForm = () => {
    setVisibleButton(true);
  };

  return (
    <Wrapper>
      <MainContentWrapper>
        <DoctorOh>
          <img src="../assets/dr.oh.png" />
        </DoctorOh>

        <StartMessageFormWrapper>
          <StartMessageForm changeButtonForm={changeButtonForm} />
          {/* 버튼은 true일 때만 생성됨.  */}
          {visibleButton && (
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
