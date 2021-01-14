const characters = [
	{
		id: 4,
		name: 'Charmander',
		type: 'Fire',
		base_experience: 62,
	},
	{
		id: 7,
		name: 'Squirtle',
		type: 'Water',
		base_experience: 63,
	},
	{
		id: 11,
		name: 'Metapod',
		type: 'Bug',
		base_experience: 72,
	},
	{
		id: 25,
		name: 'Pikachu',
		type: 'Electric',
		base_experience: 112,
	},
	{
		id: 12,
		name: 'Butterfree',
		type: 'Flying',
		base_experience: 178,
	},
	{
		id: 39,
		name: 'Jigglypuff',
		type: 'Normal',
		base_experience: 95,
	},
	{
		id: 94,
		name: 'Gengar',
		type: 'Poison',
		base_experience: 225,
	},
	{
		id: 133,
		name: 'Eevee',
		type: 'Normal',
		base_experience: 65,
	},
];

export function getPokemonCharacters() {
	return characters;
}

export function getRandomizedPokemons(characters, limit = Math.floor(characters.length / 2)) {
	let count = 1;
	const randomPokemons = [];
	while (count <= limit && randomPokemons.length <= Math.floor(characters.length / 2)) {
		const randomizedIndex = Math.floor(Math.random() * characters.length);
		if (randomPokemons.length === 0) {
			randomPokemons.push(characters[randomizedIndex]);
		} else {
            const pokemonIndex = randomPokemons.findIndex((pokemon) => {
                return pokemon.id === characters[randomizedIndex].id
            })

            if(pokemonIndex === -1) {
                randomPokemons.push(characters[randomizedIndex]);
            }else{
                limit ++;
            }
        }
		count++;
	}
	return randomPokemons;
}


export function getRemainingPokemons(primaryPokemonList , secondaryPokemonList) {

    return primaryPokemonList.filter((pokemon) => {
        return !secondaryPokemonList.includes(pokemon)
    })

}

export function getPokemonWinner(pokemonTeamOne , pokemonTeamTwo) {


    const teamOneScore = getPokemonTeamScore(pokemonTeamOne);
    const teamTwoScore = getPokemonTeamScore(pokemonTeamTwo);

    const championship = {

        winningTeam: teamOneScore > teamTwoScore ? pokemonTeamOne : pokemonTeamTwo,
        winningTeamScore: teamOneScore > teamTwoScore ? teamOneScore : teamTwoScore,
        losingTeam: teamOneScore < teamTwoScore ? pokemonTeamOne : pokemonTeamTwo,
        losingTeamScore: teamOneScore < teamTwoScore ? teamOneScore : teamTwoScore,
    }

    return championship;

}

function getPokemonTeamScore(pokemonTeam) {


    let pokemonTeamScore = 0;
    pokemonTeam.map((pokemon) => {
        
        return pokemonTeamScore += pokemon.base_experience;
        
    })    

    return pokemonTeamScore;

}