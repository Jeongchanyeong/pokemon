import styled from 'styled-components';
import PokeItem from '../common/PokeItem';
import TypeBar from '../components/TypeBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchPokemon } from '../apis/apis';
import axios from 'axios';

/* 배치
  pokeItem -> 한줄에 5개씩.
  Header, Footer, TypeButton import
  검색창 filtering 기능 구현
  무한 스크롤 구현
*/

// url에 정보를 옮기고 pokeItem에 propd으로 export

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
  const [data, setData] = useState([]);

  // const { isLoading, data } = useQuery('allPokemon', fetchPokemon);
  const maxNum = 494;

  const PokeData = async () => {
    try {
      const res = await axios(
        `https://pokeapi.co/api/v2/pokemon?limit=${maxNum}`
      );
      console.log(res);

      const initData = res.data.results.map(
        (item: PokeDataType, index: number) => {
          return {
            id: item.id,
            name: item.name,
            front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
              index + 1
            }.gif`,
            types: item.types,
          };
        }
      );
      setData(initData);
    } catch (error) {
      console.log('에러', error);
    }
  };

  useEffect(() => {
    PokeData();
  }, []);

  console.log(PokeData);

  /**
   * 포켓몬 데이터 불러오기 : GET
   * 포켓몬 잡기 : POST
   * 내 포켓몬 이름 수정하기 : PUT
   * 내 포켓몬 방출하기 : DELETE
   */

  // const [data, setData] = useState([]);

  // const PokeData = async () => {
  //   // API 가져와서 Json 형태로 변환

  //   const res = await fetch(
  //     `https://pokeapi.co/api/v2/pokemon?limit=${maxNum}`
  //   ).then((res) => res.json());

  //   // 3세대 포켓몬 불러온 API 1 ~ maxNum까지 불러오기
  //   const initData = res.results.map((item: PokeDataType, index: number) => {
  //     return {
  //       name: item.name,
  //       front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
  //         index + 1
  //       }.gif`,
  //       types: item.types,
  //     };
  //   });

  //   setData(initData);
  // };

  // useEffect(() => {
  //   PokeData();
  // }, []);

  return (
    <PageContainer>
      <Header />

      <PageMiddle>
        <TypeBar />

        <PokeItemWrapper>
          <PokeItem data={data} />
        </PokeItemWrapper>
      </PageMiddle>

      <Footer />
    </PageContainer>
  );
};

export default List;
