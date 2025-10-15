document.addEventListener('DOMContentLoaded', () => {

    // Get references to all the necessary HTML elements
    const pokemonSprite = document.getElementById('pokemon-sprite');
    const pokemonName = document.getElementById('pokemon-name');
    const pokemonId = document.getElementById('pokemon-id');
    const pokemonHeight = document.getElementById('pokemon-height');
    const pokemonWeight = document.getElementById('pokemon-weight');
    const pokemonType = document.getElementById('pokemon-type');
    
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const randomBtn = document.getElementById('random-btn');

    const POKEMON_COUNT = 898; // Total number of Pokémon to use (up to Gen 8)
    let currentPokemonId = 1; // Global variable to track the current Pokémon

    // Main function to fetch Pokémon data by its ID
    async function fetchPokemon(id) {
        showLoading();
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            if (!response.ok) {
                throw new Error('Pokémon not found!');
            }
            const data = await response.json();
            currentPokemonId = data.id; // Update the global ID
            displayPokemon(data);

        } catch (error) {
            displayError(error.message);
        }
    }

    // Function to update the HTML with the fetched Pokémon data
    function displayPokemon(data) {
        pokemonName.textContent = data.name;
        pokemonId.textContent = `Pokemon n° ${data.id}`;
        // The API gives height in decimetres and weight in hectograms. We convert them.
        pokemonHeight.textContent = `Height: ${data.height * 10} cm`; 
        pokemonWeight.textContent = `Weight: ${data.weight / 10} kg`;
        
        // Handle Pokémon types (a Pokémon can have more than one)
        const types = data.types.map(typeInfo => typeInfo.type.name).join(' / ');
        pokemonType.textContent = `Type: ${types}`;

        // Get the official artwork sprite
        pokemonSprite.src = data.sprites.front_default; // This uses the pixelated game sprite

        pokemonSprite.alt = data.name;
        pokemonSprite.style.display = 'block';        pokemonSprite.alt = data.name;
        pokemonSprite.style.display = 'block'; // Show the image
    }

    // Function to show a loading state
    function showLoading() {
        pokemonSprite.style.display = 'none'; // Hide the image area
        pokemonName.textContent = 'Loading...';
        pokemonId.textContent = '';
        pokemonHeight.textContent = '';
        pokemonWeight.textContent = '';
        pokemonType.textContent = '';
    }

    // Function to display an error message
    function displayError(message) {
        pokemonSprite.style.display = 'none';
        pokemonName.textContent = "Oh No!";
        pokemonId.textContent = message;
        pokemonHeight.textContent = '';
        pokemonWeight.textContent = '';
        pokemonType.textContent = '';
    }

    // --- Event Listeners for the buttons ---

    // Fetch the next Pokémon
    nextBtn.addEventListener('click', () => {
        currentPokemonId++;
        if (currentPokemonId > POKEMON_COUNT) {
            currentPokemonId = 1; // Loop back to the first Pokémon
        }
        fetchPokemon(currentPokemonId);
    });

    // Fetch the previous Pokémon
    prevBtn.addEventListener('click', () => {
        currentPokemonId--;
        if (currentPokemonId < 1) {
            currentPokemonId = POKEMON_COUNT; // Loop back to the last Pokémon
        }
        fetchPokemon(currentPokemonId);
    });

    // Fetch a random Pokémon
    randomBtn.addEventListener('click', () => {
        const randomId = Math.floor(Math.random() * POKEMON_COUNT) + 1;
        fetchPokemon(randomId);
    });

    // --- Initial Load ---
    // Fetch the first Pokémon (Bulbasaur) when the page loads
    fetchPokemon(1);
});