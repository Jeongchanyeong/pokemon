import styled from 'styled-components';

/* 1. API 받아오고 뿌리기
 API 받아 올 것임
 어디서 useEffect로 받아와서 어디서 뿌려야하나?
 API를 관리하는 파일, 폴더를 따로 만들어야하나? 고민해보기

 API를 관리하는 파일을 파서 받아오고 여기서 받을 데이터를 객체로 만든다? (API 받아오는 방법 알아보기)
 API로 어떤 데이터 받아와야하나? -> (id, name, pokemon 생김새, pokemon Type)

*/

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 65%;
  height: 85%;
  background-color: #ededed;

  border-radius: 20px;

  padding: 30px;
  margin: 0px 30px;
`;

const PokeInfoLeft = styled.div`
  display: flex;

  flex-direction: column;

  height: 100%;

  background-color: #858585;

  flex: 1;
`;

const PokeImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ededed;
  flex: 7;
  img {
    width: 50%;
    height: auto;
  }
`;

const PokeType = styled.div`
  background-color: #7e7e7e;
  width: 100%;
  flex: 1;
`;

const PokeInfoRight = styled.div`
  // Left랑 비슷함
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  height: 100%;

  background-color: #ededed;
  flex: 1;
`;

const PokeItemInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const PokeId = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b2b2b2;
  border-radius: 10%;
  height: 5px;
  padding: 12px;
`;
const PokeName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b2b2b2;
  border-radius: 10%;
  height: 5px;
  padding: 12px;
`;
const PokeRoot = styled.div`
  background-color: #b2b2b2;
  padding: 30px;

  border-radius: 20px;
`;
const PokeStory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #b2b2b2;
  padding: 30px;

  border-radius: 20px;
  width: 80%;
  height: 80px;
  padding: 30px;
`;

const PokeBody = styled.div`
  display: flex;
`;
const PokeBodyDetail = styled.div`
  div {
    width: 35px;
    padding: 5px;
    background-color: #b2b2b2;
    border-radius: 5px;
    margin: 0px 20px 10px;
  }
`;

const PokeVisual = styled.div`
  display: flex;
`;

const PokeVisualDetail = styled.div`
  margin: 0px 10px;
  border-radius: 10px;
  background-color: #b2b2b2;
`;

interface PokeDataProps {
  data: any;
}

const PokeDetail = ({ data }: PokeDataProps) => {
  if (!data || data.length === 0) {
    return null;
  }

  console.log(data);

  return (
    <Wrapper>
      <PokeInfoLeft>
        <PokeImg>
          <img src={data.front_default} />
        </PokeImg>
        <PokeType>타입</PokeType>
      </PokeInfoLeft>

      <PokeInfoRight>
        <PokeItemInfo>
          <PokeId>{data.id}</PokeId>
          <PokeName>{data.name}</PokeName>
        </PokeItemInfo>

        <PokeRoot>
          <div>씨앗 포켓몬</div>
        </PokeRoot>

        <PokeStory>
          <div>이상해씨는 풀잎을 좋아하며 어쩌다가 태어났어요</div>
        </PokeStory>

        <PokeBody>
          <PokeBodyDetail>
            <div>신장</div>
            <span>{data.height}</span>
          </PokeBodyDetail>
          <PokeBodyDetail>
            <div>무게</div>
            <span>{data.weight}</span>
          </PokeBodyDetail>
        </PokeBody>

        <PokeVisual>
          <PokeVisualDetail>
            <img src={data.front_default} />
          </PokeVisualDetail>
          <PokeVisualDetail>
            <img src={data.back_default} />
          </PokeVisualDetail>
          <PokeVisualDetail>
            <img src={data.old_front_default} />
          </PokeVisualDetail>
          <PokeVisualDetail>
            <img src={data.old_back_default} />
          </PokeVisualDetail>
        </PokeVisual>
      </PokeInfoRight>
    </Wrapper>
  );
};

export default PokeDetail;
