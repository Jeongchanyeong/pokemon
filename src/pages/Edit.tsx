import React from 'react';

const Edit = () => {
  const message = {
    edit: `이름을 @@@로 수정하시겠습니까?`,
    editSuccess: `이름을 성공적으로 수정하였습니다`,
    delete: `@@@을 정말로 방출하시겠습니까?`,
    deleteSuccess: `그동안 고마웠어, 다음에 보자 @@@!!`,
  };

  return <h1>포켓몬 수정 페이지 입니다.</h1>;
};

export default Edit;
