// (Part 1, Step 4) Import express and create the instance
const express = require('express');
const app = express();

// (Part 3, Step 1) Import the dataservice
const dataService = require('./data/dataservice');

// (Part 3, Step 2) Create the endpoint
app.get('/posts-from-api', async (req, res) => {
    try {
        // Use the function from the module
        const posts = await dataService.fetchPosts();
        
        // (Part 3, Step 4) Log the success
        console.log("Data retrieved and sent successfully!");
        
        // (Part 3, Step 3) Respond with the data
        res.status(200).json(posts);

    } catch (error) {
        // Handle errors if the external API fails
        res.status(500).json({ message: "Error retrieving data from the external API" });
    }
});

// (Part 1, Step 5) Set up the listening port
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});