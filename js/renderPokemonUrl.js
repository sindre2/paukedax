export {renderPokemonUrl} //Exported function

//Function for rendering the image of each pokemon.
async function renderPokemonUrl(url)
{
    const response = await fetch(url)
    const data = await response.json()
            return `
            <div class="card">
                <h2>${data.id}. ${data.name.toUpperCase()}</h2>
                <img src="${data.sprites.front_default}" alt="Image of a Pokemon">
            </div>
            `;
};

