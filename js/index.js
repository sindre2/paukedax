import { renderPokemonUrl } from "./renderPokemonUrl.js";

//The api used.
// https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20
// https://pokeapi.co/api/v2/pokemon/1/

let pokemonList = 
{
    next: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",
    previous: "https://pokeapi.co/api/v2/pokemon/?offset=1150&limit=20"
};

//Const for dom-selectors.
const pokeList = document.querySelector(".poke-list");
const buttonNext = document.getElementById("button-next");
const buttonPrev = document.getElementById("button-prev");
const buttonHome = document.getElementById("button-home");

//Eventlisteners for the buttons: "next", "previous" and home.
buttonNext.addEventListener("click", () =>
{
    renderPokemon(`${pokemonList.next}`);
});

buttonPrev.addEventListener("click", () =>
{
    renderPokemon(`${pokemonList.previous}`);
});

buttonHome.addEventListener("click", () =>
{
    renderPokemon("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20");
});


//Function for rendering the pokemonpage.
async function renderPokemon(url)  
{
    const response = await fetch(url);
    const data = await response.json();

    pokemonList = 
        {
            ...pokemonList,
            next: data.next || "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",
            previous: data.previous || "https://pokeapi.co/api/v2/pokemon/?offset=1150&limit=20"
        };

    const bolle = data.results.map((element) => 
    {
        return renderPokemonUrl(element.url);
    });

    Promise.all(bolle).then((tull) => 
    {
        pokeList.innerHTML = tull.join("");;
    });
};

//renderPokemon-function is run at first entry of the page to render the page.
renderPokemon(`${pokemonList.next}`);