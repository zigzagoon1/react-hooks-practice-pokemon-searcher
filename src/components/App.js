import React, {useState, useEffect} from "react";
import PokemonPage from "./PokemonPage";

const API = 'http://localhost:3001/pokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then((pokemon) => setPokemon(pokemon));
  }, [])

  function handleFilter(value) {
    if (value === "" || value === null) {
      fetch(API)
      .then(r => r.json())
      .then((pokemon) => setPokemon(pokemon));
      return;
    }
    const filteredPokemon = pokemon.filter((mon) => {
      return mon.name.toLowerCase().includes(value);
    })
    setPokemon(filteredPokemon);
  }
  function handleAddPokemon(newPokemon) {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify(newPokemon)
    }).then(r => r.json())
    .then((newMon) => {
      const newPokemon = [newMon, ...pokemon]
      setPokemon(newPokemon);
    })
  }
  return (
    <div className="App">
      <PokemonPage pokemon={pokemon} onSearch={handleFilter} onSubmit={handleAddPokemon}/>
    </div>
  );
}

export default App;
