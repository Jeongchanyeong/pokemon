import { useGetPokemonDetail } from '../hooks/api/useGetPokemonDetail';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import GlobalButton from '../common/GlobalButton';
import PokeDetail from '../common/PokeDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
  const { data: pokemonDetail } = useGetPokemonDetail();

  console.log(pokemonDetail);

  const navigate = useNavigate();
  const GoNextPokemon = (id: number) => {
    navigate(`/detail/${id + 1}`);
  };

  const GoBeforePokemon = (id: number) => {
    navigate(`/detail/${id - 1}`);
  };

  const GoPokemonList = () => {
    navigate('/list');
  };

  return (
    <PageContainer>
      <Header />
      <PageText>Pokemon Detail</PageText>
      <PageMiddle>
        <GlobalButton onClick={() => {}} commonbtntype={'circle'}>
          {'<'}
        </GlobalButton>
        <PokeDetail data={pokemonDetail} />
        <GlobalButton onClick={() => {}} commonbtntype={'circle'}>
          {'>'}
        </GlobalButton>
      </PageMiddle>

      <ButtonWrapper>
        <GlobalButton onClick={GoPokemonList} commonbtntype={'small'}>
          {'≡'}
        </GlobalButton>
      </ButtonWrapper>
      <Footer />
    </PageContainer>
  );
};

export default Detail;
