import styled from 'styled-components';

import { useEffect, useRef, useState } from 'react';
import PokeItem from '../common/PokeItem';
import TypeBar from '../components/TypeBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PokeItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

interface PokeDataType {
  types: any;
  front_default: any;
  name: string;
  id: number;
}

const List = () => {
  const [data, setData] = useState([]);
  const maxNum = 494;

  const PokeData = async () => {
    // API 가져와서 Json 형태로 변환

    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${maxNum}`
    ).then((res) => res.json());

    // 3세대 포켓몬 불러온 API 1 ~ maxNum까지 불러오기
    const initData = res.results.map((item: PokeDataType, index: number) => {
      return {
        name: item.name,
        id: index + 1,
        front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
          index + 1
        }.gif`,
      };
    });

    setData(initData);
  };

  // 포켓몬 한국 이름 가져오기

  // 각 포켓몬별 타입 받아오기

  useEffect(() => {
    PokeData();
  }, []);

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
