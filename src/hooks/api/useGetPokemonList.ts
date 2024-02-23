import axios from 'axios';
import { useSuspenseQuery } from '@tanstack/react-query';
import { BASE_FRONT_URL } from '../../constants/url';

// 상황
// 1. 포켓몬 리스트 GET api에서 내가 원하는 정보들을 다 제공하지 않음
// 2. 그래서, queryFn에서 커스텀해서 return 함

// 리팩토링
// 1. queryFn 무조건 axios를 return 하도록 작성 (커스텀 x)
// 2. 대신, useQuery에서 select 옵션을 활용해서 커스텀

// 서버에서 기본으로 내려오는 데이터 타입
interface DefaultPokeDataType {
  name: string;
  url: string;
}

// 우리가 필요해서 추가한 데이터 타입
interface CustomPokeDataType extends DefaultPokeDataType {
  id: number;
  front_default: string;
}

const MAX_NUM = 494;

// axios를 반환하는 queryFn
const getPokemonList = () => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${MAX_NUM}`);
};

// useQuery 훅을 반환하는 custom hook
export const useGetPokemonList = () => {
  return useSuspenseQuery({
    queryKey: ['get-pokemon-list'],
    queryFn: getPokemonList,
    select: (data) => {
      const newData: CustomPokeDataType = data.data.results.map(
        (item: DefaultPokeDataType, index: number) => {
          return {
            ...item,
            id: index + 1,
            front_default: `${BASE_FRONT_URL}/${index + 1}.gif`,
          };
        }
      );
      return newData;
    },
  });
};
