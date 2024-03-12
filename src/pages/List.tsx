import { useGetPokemonList } from '../hooks/api/useGetPokemonList';

import styled from 'styled-components';
import PokeItem from '../common/PokeItem';
import TypeBar from '../components/TypeBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PageContainer = styled.div`
  display: flex;

  height: 100vh;
  flex-wrap: wrap;
`;

const PageMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // Header 공간 차지
  padding-top: 70px;

  background-color: #fafafa;
`;

const PokeItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const List = () => {
  const { data: pokemonList } = useGetPokemonList();

  return (
    <PageContainer>
      <Header />
      <PageMiddle>
        <TypeBar />
        <PokeItemWrapper>
          <PokeItem data={pokemonList} />
        </PokeItemWrapper>
      </PageMiddle>
      <Footer />
    </PageContainer>
  );
};

export default List;
