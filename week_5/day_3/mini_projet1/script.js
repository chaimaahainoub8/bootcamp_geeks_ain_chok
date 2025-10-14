document.addEventListener('DOMContentLoaded', () => {
    const findButton = document.getElementById('find-person-btn');
    const characterInfoDiv = document.getElementById('character-info');
    const apiUrl = 'https://www.swapi.tech/api/people/';

    findButton.addEventListener('click', fetchRandomCharacter);

    async function fetchRandomCharacter() {

        showLoading();// Affiche le message de chargement

        try {
            // Génère un ID de personnage aléatoire (l'API en contient 83)
            const randomId = Math.floor(Math.random() * 83) + 1;
            
            // Effectue le premier appel fetch pour obtenir les données du personnage
            const response = await fetch(`${apiUrl}${randomId}`);
            
            if (!response.ok) {
                throw new Error('Character not found');
            }

            const data = await response.json();
            const character = data.result.properties;

            // Effectue le deuxième appel fetch pour obtenir le nom de la planète d'origine
            const homeworldResponse = await fetch(character.homeworld);
            const homeworldData = await homeworldResponse.json();
            const homeworldName = homeworldData.result.properties.name;

            // Affiche les informations du personnage
            displayCharacterInfo(character, homeworldName);

        } catch (error) {
            // Affiche un message d'erreur en cas de problème
            displayError();
        }
    }

    function showLoading() {
        characterInfoDiv.innerHTML = `
            <i class="fas fa-spinner fa-spin"></i>
            <p>Loading...</p>
        `;
    }

    function displayCharacterInfo(character, homeworld) {
        characterInfoDiv.innerHTML = `
            <h2>${character.name}</h2>
            <p>Height: ${character.height}</p>
            <p>Gender: ${character.gender}</p>
            <p>Birth Year: ${character.birth_year}</p>
            <p>Home World: ${homeworld}</p>
        `;
    }

    function displayError() {
        characterInfoDiv.innerHTML = '<h2>Oh No! That person isnt available.</h2>';
    }
});