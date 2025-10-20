// Import axios
const axios = require('axios');

// API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// We use an async/await function to handle the promise from Axios
async function fetchPosts() {
  try {
    // Make the GET request
    const response = await axios.get(apiUrl);
    
    // Get the data (the list of posts)
    const posts = response.data;

    console.log('Fetched Post Titles:');
    
    // Display the title of each post
    posts.forEach(post => {
      console.log(`- ${post.title}`);
    });

  } catch (error) {
    // Handle any errors (e.g., network issue)
    console.error('Error fetching data:', error.message);
  }
}

// Export the function
module.exports = fetchPosts;