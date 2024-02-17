import GlobalButton from '../common/GlobalButton';
import PokeDetail from '../common/PokeDetail';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #fafafa;
  align-items: center;
  flex-direction: column;
`;
const PageText = styled.div`
  color: #2c2c2c;

  font-family: 'Black Han Sans', sans-serif;
  -webkit-text-stroke: 2px #c7c7c7;
  font-size: 50px;

  padding-top: 90px;
`;
const PageMiddle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 20px;
`;

const Detail = () => {
  return (
    <PageContainer>
      <Header />
      <PageText>Pokemon Detail</PageText>

      <PageMiddle>
        <GlobalButton buttontype={'circle'}>{'<'}</GlobalButton>
        <PokeDetail />
        <GlobalButton buttontype={'circle'}>{'>'}</GlobalButton>
      </PageMiddle>

      <ButtonWrapper>
        <GlobalButton buttontype={'small'}>{'≡'}</GlobalButton>
      </ButtonWrapper>
      <Footer />
    </PageContainer>
  );
};

export default Detail;
