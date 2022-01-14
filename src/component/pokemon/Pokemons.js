import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Pokemons = () => {
  const [pokemons, setPokemon] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => {
        console.log(response.data.results);
        const pokes = response.data.results;
        setPokemon(pokes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Pokemons List</h1>

      {pokemons.map((poke) => {
        const ind = poke.url.split("/");

        // console.log(ind);
        // console.log(ind[ind.length - 2]);
        return (
          <div key={poke.name}>
            <Link to={`/poke/${ind[ind.length - 2]}`}>{poke.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Pokemons;
