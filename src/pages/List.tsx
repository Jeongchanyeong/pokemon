import styled from 'styled-components';

import TypeBar from '../components/TypeBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import PokeDetail from '../common/PokeDetail';
import PokeItem from '../common/PokeItem';

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

  const maxNum = 494;
  const PokeData = async () => {
    // API 가져와서 Json 형태로 변환
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${maxNum}`
    ).then((res) => res.json());

    // 3세대 포켓몬 불러온 API 1 ~ 494까지 불러오기
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
  Promise.all(requests)
    .then((respones) => Promise.all(respones.map((res) => res.json())))
    .then((results) => {
      for (let result of results) {
        koreanNames.push(result.name[2].name);
      }
    });

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
