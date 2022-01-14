// import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import PokemonsList from "./component/pokemon/PokemonsList";
import Pokemon from "./component/pokemon/Pokemon";
import Calculator from "./component/cal/Calculator";
import Nav from "./component/Nav";
import Search from "./component/search/Search";
import ToDo from "./component/todo/ToDo";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} exact={true} />
          <Route path="/poke" exact={true}>
            <Route path="/poke" element={<PokemonsList />} exact={true} />
            <Route path="/poke/:id" element={<Pokemon />} />
          </Route>
          <Route path="/cal" element={<Calculator />} />
          <Route path="/search" element={<Search />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
