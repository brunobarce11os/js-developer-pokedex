const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('id');

function loadPokemonDetail(id) {
    pokeApi.getPokemonDetailById(id).then((pokemon) => {

        document.getElementById('pokemonName').innerText = pokemon.name;
        document.getElementById('pokemonImage').src = pokemon.photo;
        document.getElementById('pokemonImage').alt = pokemon.name;

        const typesList = document.getElementById('pokemonTypes');
        typesList.innerHTML = pokemon.types.map(type => `<li>${type}<li>`).join('');

        const abilitiesList = document.getElementById('pokemonAbilities');
        abilitiesList.innerHTML = pokemon.abilities.map(ability => `<li>${ability}</li>`).join('');


    });
}

loadPokemonDetail(pokemonId);