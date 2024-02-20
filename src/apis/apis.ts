const maxNum = 494;

export function fetchPokemon() {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${maxNum}`).then(
    (res) => res.json()
  );
}

/* 포켓몬 한국 이름 가져오기 
  
  https://pokeapi.co/api/v2/pokemon-species/1/
  names 배열 2번째 인덱스 name에 한국 이름

*/

/*  각 포켓몬별 타입 받아오기
  
  
  */
/* 포켓몬 종류 가져오기
    https://pokeapi.co/api/v2/pokemon-species/1/
    genera -> genus 첫 번째 인덱스
*/

/* 포켓몬 특성 가져오기
  https://pokeapi.co/api/v2/pokemon-species/1/
  flavor_text_entries
*/
