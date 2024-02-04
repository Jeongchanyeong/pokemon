import styled from 'styled-components';

import TypeBar from '../components/TypeBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* 화면 전체 높이 */
`;

const List = () => {
  return (
    <PageContainer>
      <h1>이곳은 Listpage입니다.</h1>
    </PageContainer>
  );
};

export default List;
