import { useQuery } from 'react-query';
import axios from 'axios';

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
const Loader = styled.h1``;

interface PokeDataType {
  types: any;
  front_default: any;
  name: string;
  id: number;
}

const List = () => {
  const { isLoading, data } = useQuery('allPokemon', fetchPokemon);

  async function fetchPokemon() {
    const maxNum = 494;
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${maxNum}`
    );

    return res.data.results.map((item: PokeDataType, index: number) => ({
      id: index + 1,
      name: item.name,
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
        index + 1
      }.gif`,
    }));
  }

  /**
   * 포켓몬 데이터 불러오기 : GET
   * 포켓몬 잡기 : POST
   * 내 포켓몬 이름 수정하기 : PUT
   * 내 포켓몬 방출하기 : DELETE
   */

  return (
    <PageContainer>
      <Header />
      {isLoading ? (
        <Loader>Loading..</Loader>
      ) : (
        <PageMiddle>
          <TypeBar />

          <PokeItemWrapper>
            <PokeItem data={data} />
          </PokeItemWrapper>
        </PageMiddle>
      )}

      <Footer />
    </PageContainer>
  );
};

export default List;
