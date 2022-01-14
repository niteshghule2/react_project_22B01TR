import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Pokemon = () => {
  // console.log(useParams());
  const [poke, setPoke] = useState();
  const param = useParams();

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/" + param.id;
    // console.log(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setPoke(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Pokemons Details</h1>
      <table border="1" className="table">
        <tbody>
          <tr>
            <th style={{ textAlign: "left" }}>Name</th>
            <td>{poke ? poke.species.name : " -- "}</td>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Height </th>
            <td>{poke ? poke.height : " -- "}</td>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Weight </th>
            <td>{poke ? poke.weight : " -- "}</td>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Abilities </th>
            <td>
              {poke
                ? poke.abilities.map((ele, ind) => {
                    if (ind !== 0) {
                      return ", " + ele.ability.name;
                    }
                    return ele.ability.name;
                  })
                : " "}
            </td>
          </tr>
          <tr>
            <th style={{ textAlign: "left" }}>Base Experience</th>
            <td>{poke ? poke.base_experience : " -- "}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Pokemon;
