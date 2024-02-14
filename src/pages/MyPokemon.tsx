import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const PageMiddle = styled.div`
  background-color: #fafafa;
  display: flex;
  width: 100vw;
  height: 100vh;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 70px;
`;

const MyPokemon = () => {
  return (
    <PageContainer>
      <Header />
      <PageMiddle>내 포켓몬 페이지 입니다.</PageMiddle>
      <Footer />
    </PageContainer>
  );
};

export default MyPokemon;
