import styled from 'styled-components';

import TypeBar from '../components/TypeBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import PokeDetail from '../common/PokeDetail';
import PokeItem from '../common/PokeItem';

/* 1. API 활용?

1-1) API 받아오는 방법 고민 (어떻게?)
https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0 포켓몬 정보

[현재 디자인]
앞모습 : https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif
뒷모습 : https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif

[옛날 디자인]
앞모습 : https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif
뒷모습 : https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif



1-2) API 어떤걸 받아올지 고민 (무엇을?)
1-3) API를 어떻게 받아와서 처리할건지 고민 (어떻게?)
1-4) API를 받아와서 어떻게 화면에 띄울지 고민 (어떻게?)

필요한 데이터 API를 통해 가져오기
가져온 데이터 State에 보관하기
UI 생성한 후 데이터 넣어주기

*/

/* 배치
  pokeItem -> 한줄에 5개씩.
  Header, Footer, TypeButton import
  검색창 filtering 기능 구현

  무한 스크롤 구현
*/

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: red;
`;

interface PokeDataType {
  front_default: any;
  name: string;
  id: number;
}

const List = () => {
  const [data, setData] = useState([]);

  const PokeData = async () => {
    // API 가져와서 Json 형태로 변환
    const res = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
    ).then((res) => res.json());

    // 불러온 API 0 ~ 151까지 불러오기
    const initData = res.results
      .slice(0, 151)
      .map((item: PokeDataType, index: number) => {
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

  useEffect(() => {
    PokeData();
  }, []);

  return (
    <PageContainer>
      <PokeItem data={data} />
    </PageContainer>
  );
};

export default List;
