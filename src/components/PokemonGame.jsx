import React from 'react';

import PokeDex from './PokeDex';

const PokemonGame = ({ championshipResult }) => {
	const winningTeam = championshipResult.winningTeam;
	const winningTeamScore = championshipResult.winningTeamScore;
	const losingTeam = championshipResult.losingTeam;
	const losingTeamScore = championshipResult.losingTeamScore;

	return (
		<div>
			<PokeDex
				winningTeam={winningTeam}
				winningTeamScore={winningTeamScore}
				losingTeam={losingTeam}
				losingTeamScore={losingTeamScore}
			/>
		</div>
	);
};

export default PokemonGame;
