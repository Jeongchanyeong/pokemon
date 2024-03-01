import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

/* 1. API 받아오고 뿌리기
 API를 관리하는 파일, 폴더를 따로 만들어야하나? 고민해보기
 API로 어떤 데이터 받아와야하나? -> (id, name, pokemon 생김새, pokemon Type)
*/

const Wrapper = styled.div`
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

  cursor: pointer;
`;

const PokeItemInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  justify-content: space-between;

  color: #2a2a2a;
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
  padding: 10px 0px;

  img {
    cursor: pointer;
    width: 20px;
    height: auto;
  }
`;

const PokeBallClick = () => {
  // 뭐 해야할지?
  console.log('포켓볼 클릭');
};

interface PokeDataProps {
  data: any;
}

const PokeItem = ({ data }: PokeDataProps) => {
  const navigate = useNavigate();

  const GoPokeDetail = (id: number) => {
    navigate(`/detail/${id}`);
  };

  if (!data || data.length === 0) {
    return null;
  }
  return (
    <>
      {data.map((item: any) => (
        <Wrapper key={item.id} onClick={() => GoPokeDetail(item.id)}>
          <PokeItemInfo>
            <PokeId>{item.id}</PokeId>
            <PokeName>{item.name}</PokeName>
          </PokeItemInfo>

          <PokeImg>
            <img src={item.front_default} />
          </PokeImg>

          {/*  포켓볼을 컴포넌트화 시켜서 import 예정*/}
          <PokeBall>
            <img onClick={PokeBallClick} src="../assets/pokeball.png" />
          </PokeBall>
          <PokeType></PokeType>
        </Wrapper>
      ))}
    </>
  );
};

export default PokeItem;
