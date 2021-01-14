import React from 'react';

import '../styles/Pokedex.css';

import getPokemonImageId from '../utilities/pokedex';

const PokeCard = ({ pokemon }) => {
    const pokeImageId = getPokemonImageId(pokemon.id);
    const clickMe = (pokemon) => {
        console.log(`I am clicked - ${pokemon.id} with name:- ${pokemon.name}`);
    }
	return (
		<div className="column">
			<div className="PokeCard" onClick={() =>{clickMe(pokemon)}}>
				<img
					src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeImageId}.png`}
					alt="avatar"
					style={{ width: '100%' }}
				/>
				<div className="PokeCard-Container">
					<h4>
						<b>{pokemon.name}</b>
					</h4>
                    <div style={{fontSize:'14px'}}>
                        <i>Experience: <b>{pokemon.base_experience}</b></i>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default PokeCard;
