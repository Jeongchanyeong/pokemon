import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #ff0000;

  img {
    width: 220px;
    height: auto;
  }
`;

const Logo = styled.div``;
const Header = () => {
  const navigate = useNavigate();
  const goListPage = () => {
    navigate('/');
  };

  return (
    <Wrapper>
      <Logo onClick={goListPage}>
        <img src="../assets/pokemonTitle.png" />
      </Logo>
    </Wrapper>
  );
};

export default Header;
