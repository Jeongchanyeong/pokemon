import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface DefaultPokeDataType {
  item: string;
  weight: number;
}

// 우리가 필요해서 추가한 데이터 타입
interface CustomPokeDataType extends DefaultPokeDataType {
  id: number;
  front_default: string;
}

const MAX_NUM = 494;

const getPokeDetail = () => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${MAX_NUM}/`);
};

export const useGetPokemonDetail = () => {
  return useQuery({
    queryKey: ['get-pokemon-detail'],
    queryFn: getPokeDetail,
  });
};
