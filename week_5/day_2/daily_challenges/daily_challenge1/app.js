// Select the DOM elements
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const gifContainer = document.getElementById('gif-container');
const deleteAllBtn = document.getElementById('delete-all-btn');

const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'; // Provided API Key

// Event listener for the form submission
form.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevents the page from reloading
    const searchTerm = input.value;
    await fetchGif(searchTerm);
    form.reset(); // Clears the search field after submission
});

// Async function to fetch a GIF
async function fetchGif(category) {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${category}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const gifData = await response.json();

        // Check if data actually exists
        if (gifData.data && gifData.data.images) {
            const gifUrl = gifData.data.images.downsized_medium.url;
            appendGif(gifUrl);
        } else {
            alert("No GIF found for this category. Please try something else!");
        }

    } catch (error) {
        console.error("Could not fetch GIF:", error);
        alert("An error occurred during the search.");
    }
}

// Function to add the GIF (and its delete button) to the page
function appendGif(url) {
    const gifWrapper = document.createElement('div');
    gifWrapper.classList.add('gif-wrapper');

    const img = document.createElement('img');
    img.src = url;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';
    deleteBtn.classList.add('delete-btn');

    // Listener to delete a single GIF
    deleteBtn.addEventListener('click', function() {
        gifWrapper.remove();
    });

    gifWrapper.appendChild(img);
    gifWrapper.appendChild(deleteBtn);
    gifContainer.appendChild(gifWrapper);
}

// Listener for the "Delete All" button
deleteAllBtn.addEventListener('click', function() {
    gifContainer.innerHTML = ''; // Clears all content from the container
});