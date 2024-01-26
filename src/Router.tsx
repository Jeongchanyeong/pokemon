import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './pages/List';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import MyPokemon from './pages/MyPokemon';
import Start from './pages/Start';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/my" element={<MyPokemon />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
