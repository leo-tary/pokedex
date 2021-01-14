import React from 'react';

import PokemonGame from './PokemonGame';

import * as pokemonObj from '../services/pokemon';


const App = () => {

    const pokemonCharacters = pokemonObj.getPokemonCharacters();
    const randomizedTeam = pokemonObj.getRandomizedPokemons(pokemonCharacters);
    const remainingTeam = pokemonObj.getRemainingPokemons(pokemonCharacters , randomizedTeam);
    const championship = pokemonObj.getPokemonWinner(randomizedTeam , remainingTeam);    
    // console.log(championship);
    return(
        <div><PokemonGame championshipResult={championship} /></div>
    )

}

export default App;