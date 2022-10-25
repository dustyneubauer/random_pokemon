const pokemonName = document.querySelector('.pokemonName');
const pokeNum = document.querySelector('.pokeNum');
const pokemonImg = document.querySelector('.pokemonImg');
const pokeTypeMain = document.querySelector('.pokeTypeMain');
const pokeTypeSecondary = document.querySelector('.pokeTypeSecondary');

const pokeTypeMainContainer = document.querySelector('.pokeTypeMainContainer');
const pokeTypeSecondaryContainer = document.querySelector('.pokeTypeSecondaryContainer');

const capitalize = (str) => str[0].toUpperCase() + str.substr(1);


function getPokemon() {
    const pokeNumber = Math.floor(Math.random() * 151 + 1);
    console.log("My name is");
    console.group();
    console.log("Dustin Neubauer");
    console.groupEnd();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
        .then(res => res.json())
        .then(data => {
            pokeNum.textContent = (data['id']);
            pokemonName.textContent = capitalize(data['name']);
            pokemonImg.src = data['sprites']['front_default'] || '';
            const dataTypes = data['types'];
            const dataFirstType = dataTypes[0];
            const dataSecondType = dataTypes[1];
            pokeTypeMain.textContent = capitalize(dataFirstType['type']['name']);
            if (dataSecondType) {
                pokeTypeSecondaryContainer.classList.remove('hide');
                pokeTypeSecondary.textContent = capitalize(dataSecondType['type']['name']);
            } else {
                pokeTypeSecondaryContainer.classList.add('hide');
                pokeTypeSecondary.textContent = '';
            }
        });

}