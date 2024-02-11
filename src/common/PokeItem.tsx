import React from 'react';
import styled from 'styled-components';

/* 1. API 받아오고 뿌리기
 API 받아 올 것임
 어디서 useEffect로 받아와서 어디서 뿌려야하나?
 API를 관리하는 파일, 폴더를 따로 만들어야하나? 고민해보기

 API를 관리하는 파일을 파서 받아오고 여기서 받을 데이터를 객체로 만든다? (API 받아오는 방법 알아보기)
 API로 어떤 데이터 받아와야하나? -> (id, name, pokemon 생김새, pokemon Type)

*/

const PokeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 20px;

  background-color: #787878;
  margin: 5px;

  img {
    height: auto;
  }
`;

const PokeItemInfo = styled.div`
  padding: 30px;
  h1 {
    color: whitesmoke;
  }
`;

interface PokeDataProps {
  data: any;
}

const PokeType = styled.div`
  padding: 30px;
`;
const PokeItem = ({ data }: PokeDataProps) => {
  return (
    <>
      {data.map((item: any) => (
        <PokeWrapper key={item.id}>
          <PokeItemInfo>
            <h1>{item.id}</h1>
            <h1>{item.name}</h1>
          </PokeItemInfo>

          <img src={item.front_default} />
          <PokeType>포켓몬 타입이 들어갈 자리입니다.</PokeType>
        </PokeWrapper>
      ))}
    </>
  );
};

export default PokeItem;
