import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  position: fixed;

  width: 100%;
  height: 60px;
  background-color: #b4cbbe;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
  font-size: 30px;
  font-family: 'Black Han Sans', sans-serif;
  color: #ffaa00;
  -webkit-text-stroke: 2px #2c2c2c;

  cursor: pointer;

  img {
    padding-right: 18px;
    width: 40px;
    height: auto;
  }
`;

const PokemonLinkWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 2;

  height: 100%;

  font-size: 14px;
  font-family: 'Black Han Sans', sans-serif;
  -webkit-text-stroke: 1px #ffffff;
  color: #2c2c2c;
`;
const PokemonLink = styled.span`
  margin: 18px;
  cursor: pointer;
`;

const SearchBar = styled.input`
  flex: 1;
  padding: 11px 11px 11px 20px;
  margin-right: 45px;

  border: none;
  border-radius: 10px;

  font-family: 'Galmuri11', sans-serif;
`;

const Header = () => {
  const navigate = useNavigate();

  const goListPage = () => {
    navigate('/list');
  };
  const goMyPokemon = () => {
    navigate('/myPokemon');
  };
  const goStartPage = () => {
    navigate('/');
  };
  const goDetailPage = () => {
    navigate('/detail');
  };
  const goEditPage = () => {
    navigate('/edit');
  };

  return (
    <Wrapper>
      <Logo onClick={goListPage}>
        <img src="../assets/pikachu.png" />
        <span>In My Poketmon</span>
      </Logo>
      <PokemonLinkWrapper>
        <PokemonLink onClick={goListPage}>Encyclopedia</PokemonLink>
        <PokemonLink onClick={goMyPokemon}>myPokemon List</PokemonLink>
        <PokemonLink onClick={goDetailPage}>Detail</PokemonLink>
        <PokemonLink onClick={goEditPage}>Edit</PokemonLink>
      </PokemonLinkWrapper>

      <SearchBar placeholder="포켓몬 이름으로 검색"></SearchBar>
    </Wrapper>
  );
};

export default Header;
