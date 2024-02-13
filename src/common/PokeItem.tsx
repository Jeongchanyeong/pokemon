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
  justify-content: center;

  flex-direction: column;

  width: calc(15%);
  height: 300px;
  margin: 5px;

  padding: 30px;

  border-radius: 25px;
  background: linear-gradient(145deg, #ffffff, #eeeeee);
  box-shadow: 5px 5px 10px #e8e8e8;
`;

const PokeItemInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  justify-content: space-between;
  h1 {
    color: #000000;
  }
`;
const PokeId = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(90deg, #ffffff, #f4f4f4);
  box-shadow: 5px 5px 5px #f2f2f2;
  border-radius: 10%;
  width: 25px;
  height: 5px;
  padding: 12px;
`;

const PokeName = styled.div`
  // PokeId랑 디자인 똑같음
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(90deg, #ffffff, #f4f4f4);
  box-shadow: 5px 5px 5px #f2f2f2;
  border-radius: 10%;
  height: 5px;
  padding: 12px;

  width: auto;
`;

const PokeImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  img {
    width: 40%;
    height: auto;
  }
`;

const PokeType = styled.div`
  width: 100%;
`;

const PokeBall = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  padding: 15px;
  img {
    width: 18px;
    height: auto;
  }
`;

interface PokeDataProps {
  data: any;
}

const PokeItem = ({ data }: PokeDataProps) => {
  return (
    <>
      {data.map((item: any) => (
        <PokeWrapper key={item.id}>
          <PokeItemInfo>
            <PokeId>
              <h1>{item.id}</h1>
            </PokeId>
            <PokeName>
              <h1>{item.name}</h1>
            </PokeName>
          </PokeItemInfo>

          <PokeImg>
            <img src={item.front_default} />
          </PokeImg>

          {/*  포켓볼을 컴포넌트화 시켜서 import 예정*/}
          <PokeBall>
            <img src="../assets/pokeball.png" />
          </PokeBall>
          <PokeType>포켓몬 타입이 들어갈 자리입니다.</PokeType>
        </PokeWrapper>
      ))}
    </>
  );
};

export default PokeItem;
