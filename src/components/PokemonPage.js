import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage( {pokemon = [], onSearch, onSubmit} ) {
  function search(value) {
    onSearch(value)
  }
  function handleSubmit(newPokemon) {
    onSubmit(newPokemon);
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onSubmit={handleSubmit} pokemon={pokemon}/>
      <br />
      <Search handleSearch={search}/>
      <br />
      <PokemonCollection pokemon={pokemon} />
    </Container>
  );
}

export default PokemonPage;
