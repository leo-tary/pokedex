import React from 'react';

import PokeCard from './PokeCard';

import '../styles/Pokedex.css';

const PokeDex = ({ winningTeam, winningTeamScore, losingTeam, losingTeamScore }) => {
	const renderPokemonCharacters = (team) => {
		return team.map((character) => {
			return (
				<React.Fragment key={character.id}>
					<PokeCard pokemon={character} />
				</React.Fragment>
			);
		});
	};

	return (
		<div>
			<div>
				<span style={{ color: 'green' }}>Winning Hand Score:</span>{' '}
				<span style={{ color: 'green', fontWeight: 'bold', marginRight: '10px' }}>{winningTeamScore}</span>
				<span style={{ color: 'red' }}>Losing Hand Score:</span>{' '}
				<span style={{ color: 'red', fontWeight: 'bold' }}>{losingTeamScore}</span>
			</div>
			<div className="row">{renderPokemonCharacters(winningTeam)}</div>
			<div className="row">{renderPokemonCharacters(losingTeam)}</div>
		</div>
	);
};

export default PokeDex;
