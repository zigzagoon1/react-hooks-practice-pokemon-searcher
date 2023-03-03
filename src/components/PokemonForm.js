import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm( {onSubmit, pokemon} ) {
  function handleSubmit(e) {
    let index; 
    if (e.target.name.value === "bulbasaur" || e.target.name.value === "Bulbasaur") {
      index = 1;
    }
    else {
      index = pokemon.length + 1;
    }
    console.log(e.target.name.value);
    console.log(e.target.hp.value);
    console.log(e.target.frontUrl.value);
    console.log(e.target.backUrl.value);
    const newPokemon = {
        "id": index,
        "name": e.target.name.value,
        "hp": e.target.hp.value,
        "sprites": {
          "front": e.target.frontUrl.value,
          "back": e.target.backUrl.value
        }
    };
    console.log(newPokemon);
    //onSubmit(newPokemon)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit
        }
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
