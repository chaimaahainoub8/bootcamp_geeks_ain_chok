// 3. Import axios
const axios = require('axios');

// The external API URL
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// 3. Create the fetchPosts function
const fetchPosts = async () => {
    try {
        // Make the GET request
        const response = await axios.get(API_URL);
        // Returns the response data
        return response.data;
    } catch (error) {
        console.error("Error fetching posts:", error.message);
        throw new Error("Unable to fetch data");
    }
};

// 4. Export the function
module.exports = {
    fetchPosts
};