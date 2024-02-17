import GlobalButton from '../common/GlobalButton';
import PokeDetail from '../common/PokeDetail';
import PokeEdit from '../common/PokeEdit';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background-color: #383838;
`;

const PageMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fafafa;
  width: 70vw;
  height: 100vh;
`;

const PageText = styled.div`
  padding-top: 85px;
  color: #2c2c2c;

  font-family: 'Black Han Sans', sans-serif;
  -webkit-text-stroke: 2px #c7c7c7;
  font-size: 50px;
`;

const ButtonWrapper = styled.div`
  button {
    margin: 0px 20px 20px;
  }
`;
const Edit = () => {
  return (
    <PageContainer>
      <Header />
      <PageMiddle>
        <PageText>Edit</PageText>

        <PokeEdit />
        <ButtonWrapper>
          <GlobalButton buttontype="medium">{'편집 완료'}</GlobalButton>

          <GlobalButton buttontype="delete">{'보내주기'}</GlobalButton>
        </ButtonWrapper>
      </PageMiddle>

      <Footer />
    </PageContainer>
  );
};

export default Edit;
