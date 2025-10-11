// Exercise 1: Giphy API

// An async function to fetch data and use "await"
async function exercise1_getHilariousGifs() {
  const url = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

  try {
    // 1. Make the request with fetch and wait for the response
    const response = await fetch(url);

    // 2. Check if the response is successful (HTTP status 200-299)
    if (!response.ok) {
      // If not, throw an error to be caught by the catch block
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    // 3. Wait for the response to be parsed as a JavaScript object
    const data = await response.json();

    // 4. Log the object to the console
    console.log('--- Exercise 1 Output ---');
    console.log(data);

  } catch (error) {
    // 5. If any error occurs (network, etc.), log it to the console
    console.error('Could not fetch GIFs:', error);
  }
}

// Call the function to run the code
exercise1_getHilariousGifs();


// Exercise 2: Giphy API (Sun)

async function exercise2_getSunGifs() {
  // Use the same API key from Exercise 1
  const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
  // Build the URL with new query parameters: q=sun, limit=10, offset=2
  const url = `https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=${apiKey}`;

  try {
    const response = await fetch(url);

    // Always check the response status
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('--- Exercise 2 Output ---');
    console.log(data);

  } catch (error) {
    console.error('Could not fetch sun GIFs:', error);
  }
}

// Call the function to run the code
exercise2_getSunGifs();


// Exercise 3: Async Function (Star Wars API)

async function exercise3_getStarshipData() {
  const url = 'https://www.swapi.tech/api/starships/9/';

  try {
    const response = await fetch(url);

    // Check the response status
    if (!response.ok) {
      throw new Error(`Network error: ${response.status}`);
    }

    // Get the JSON data
    const data = await response.json();

    // Log the "result" property of the object, as expected
    console.log('--- Exercise 3 Output ---');
    console.log(data.result);

  } catch (error) {
    // Error handling
    console.error('Error fetching the starship data:', error);
  }
}

// Call the function to run the code
exercise3_getStarshipData();


// Exercise 4: Analyze Code

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function exercise4_asyncCall() {
  console.log('--- Exercise 4 Output ---');
  console.log('calling');
  let result = await resolveAfter2Seconds();
  console.log(result);
}

// Call the function to run the code
exercise4_asyncCall();