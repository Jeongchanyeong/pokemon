import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Router from './Router';
import { Helmet } from 'react-helmet-async';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

${reset}


body{
  font-family: 'Galmuri11', sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align:center;
  height: 100vh;

  background-color : #ffffff;
}

a{
  text-decoration: none;
}
`;

function App() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/galmuri@latest/dist/galmuri.css"
        />
      </Helmet>
      <GlobalStyle />

      <Router />
    </>
  );
}

export default App;
