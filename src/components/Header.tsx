import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: #d6d6d6;
  padding: 12px;

  img {
    width: 150px;
    height: auto;
  }
`;

const Logo = styled.div``;
const Header = () => {
  const navigate = useNavigate();

  const goListPage = () => {
    navigate('/list');
  };
  const goMyPokemon = () => {
    navigate('/myPokemon');
  };

  return (
    <Wrapper>
      <Logo onClick={goListPage}>
        <img src="../assets/pokemonTitle.png" />
      </Logo>

      <div onClick={goMyPokemon}>myPokemon</div>
      <input></input>
    </Wrapper>
  );
};

export default Header;
