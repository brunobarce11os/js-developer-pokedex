# Trilha JS Developer - Pokedex

# Projeto Pokédex - Atualização: Exibição de Habilidades do Pokémon

## 📌 Descrição
Este projeto é uma Pokédex interativa que consome dados da [PokeAPI](https://pokeapi.co/). Nesta atualização, foram feitas alterações no código para exibir as **habilidades (abilities)** dos Pokémon na página de detalhes (`pokemon-detail.html`).

---

## ✅ Alterações Realizadas

### 1. `convertPokeApiDetailToPokemon` (arquivo: `poke-api.js`)

Foi adicionada uma nova propriedade ao objeto `Pokemon` chamada `abilities`, que armazena um array com os nomes das habilidades do Pokémon.

**Código adicionado:**
```js
pokemon.abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name);
```

---

### 2. `pokemon-detail.html`

Foi incluído um novo elemento `<ul>` para exibir as habilidades na interface do usuário.

**Código adicionado:**
```html
<p>Habilidades:</p>
<ul id="pokemonAbilities"></ul>
```
---

### 3. `pokemon-detail.js`

A função `loadPokemonDetail(id)` foi modificada para preencher a nova lista de habilidades com os dados vindos da API.

**Código adicionado:**
```js
const abilitiesList = document.getElementById('pokemonAbilities');
abilitiesList.innerHTML = pokemon.abilities.map(ability => `<li>${ability}</li>`).join('');
```

---

## 📎 Resultado Esperado

Agora, ao acessar a página index e clicar em algum dos itens será redirecionado para `pokemon-detail.html?id={pokemonId}`, além de ver o nome, imagem e tipos do Pokémon, também serão exibidas suas habilidades listadas em uma `<ul>`.

