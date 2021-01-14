
export default function getPokemonImageId(pokeId) {

    // console.log(getPokeIdLength(pokeId));
    const pokeIdLength = getPokeIdLength(pokeId);
    if(pokeIdLength === 2) {
        pokeId = `0${pokeId}`;
    }else if(pokeIdLength === 1) {
        pokeId = `00${pokeId}`;
    }else {
        return pokeId;
    }    

    return pokeId;

} 

function getPokeIdLength(pokeId) {

    return pokeId.toString().length;;

}