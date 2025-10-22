// 4. Import express and create an instance
const express = require("express");
const axios = require("axios");
const app = express();

// --- Middleware ---
// This is needed to parse JSON bodies from requests (for POST and PUT)
app.use(express.json());

// The base URL for the external JSONPlaceholder API
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// --- Part 2 & 3: Implementing CRUD Endpoints ---

/**
 * 2. Read All Posts (GET /api/posts)
 * Fetches all posts from the JSONPlaceholder API.
 */
app.get("/api/posts", async (req, res) => {
  try {
    // 1. Use Axios to make the request
    const response = await axios.get(API_URL);
    // 2. Send the response data to the client
    res.status(200).json(response.data);
  } catch (error) {
    // 3. Handle errors
    res
      .status(500)
      .json({ message: "Error fetching posts", error: error.message });
  }
});

/**
 * 3. Read Single Post (GET /api/posts/:id)
 * Fetches a single post by its ID.
 */
app.get("/api/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // 1. Use Axios to make the request
    const response = await axios.get(`${API_URL}/${id}`);
    // 2. Send the response data to the client
    res.status(200).json(response.data);
  } catch (error) {
    // 3. Handle errors
    res
      .status(500)
      .json({ message: "Error fetching post", error: error.message });
  }
});

/**
 * 4. Create Post (POST /api/posts)
 * Creates a new post using the data from the request body.
 */
app.post("/api/posts", async (req, res) => {
  try {
    const postData = req.body;
    // 1. Use Axios to make the request
    const response = await axios.post(API_URL, postData);
    // 2. Send the new post (returned from API) to the client
    // 201 Created is the correct status code for a successful POST
    res.status(201).json(response.data);
  } catch (error) {
    // 3. Handle errors
    res
      .status(500)
      .json({ message: "Error creating post", error: error.message });
  }
});

/**
 * 5. Update Post (PUT /api/posts/:id)
 * Updates an existing post by its ID.
 */
app.put("/api/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    // 1. Use Axios to make the request
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    // 2. Send the updated post (returned from API) to the client
    res.status(200).json(response.data);
  } catch (error) {
    // 3. Handle errors
    res
      .status(500)
      .json({ message: "Error updating post", error: error.message });
  }
});

/**
 * 6. Delete Post (DELETE /api/posts/:id)
 * Deletes a post by its ID.
 */
app.delete("/api/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // 1. Use Axios to make the request
    await axios.delete(`${API_URL}/${id}`);
    // 2. Send an appropriate response
    // 204 No Content is standard, but we'll send a 200 with a message.
    res
      .status(200)
      .json({ message: `Post with id ${id} deleted successfully` });
  } catch (error) {
    // 3. Handle errors
    res
      .status(500)
      .json({ message: "Error deleting post", error: error.message });
  }
});

// 5. Set up the app to listen on port 5000
const PORT = 5001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
.on('error', (err) => {
    // This part is new. It will catch the real error.
    console.error("!!! SERVER FAILED TO START !!!");
    console.error(err);

    if (err.code === 'EADDRINUSE') {
        console.error(`Error: Port ${PORT} is already in use.`);
        console.error('Another program is using that port. Try a different port number.');
    }
});