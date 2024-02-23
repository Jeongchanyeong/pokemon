import { useGetPokemonList } from '../hooks/api/useGetPokemonList';

import styled from 'styled-components';
import PokeItem from '../common/PokeItem';
import TypeBar from '../components/TypeBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Suspense } from 'react';

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

const List = () => {
  const { data: pokemonList } = useGetPokemonList();

  /**
   * 포켓몬 데이터 불러오기 : GET
   * 포켓몬 잡기 : POST
   * 내 포켓몬 이름 수정하기 : PUT
   * 내 포켓몬 방출하기 : DELETE
   */

  // 선언적, 명령적
  // isLoading이면 -> 로더
  // 아니면 -> 컨텐츠

  return (
    <PageContainer>
      <Header />
      <PageMiddle>
        <TypeBar />
        <Suspense fallback={<Loader>Loading..</Loader>}>
          <PokeItemWrapper>
            <PokeItem data={pokemonList} />
          </PokeItemWrapper>
        </Suspense>
      </PageMiddle>
      <Footer />
    </PageContainer>
  );
};

export default List;
