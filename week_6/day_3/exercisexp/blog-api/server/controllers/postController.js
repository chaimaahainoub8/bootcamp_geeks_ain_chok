const PostModel = require('../models/postModel');

const getAllPosts = async (req, res) => {
    try {
        const posts = await PostModel.getAllPosts();
        res.json(posts);
    } catch (err) { res.status(500).json({ error: err.message }); }
};

const getPostById = async (req, res) => {
    try {
        const post = await PostModel.getPostById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
    } catch (err) { res.status(500).json({ error: err.message }); }
};

const createPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const newPost = await PostModel.createPost(title, content);
        res.status(201).json(newPost);
    } catch (err) { res.status(500).json({ error: err.message }); }
};

const updatePost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const updatedPost = await PostModel.updatePost(req.params.id, title, content);
        if (!updatedPost) return res.status(404).json({ message: 'Post not found' });
        res.json(updatedPost);
    } catch (err) { res.status(500).json({ error: err.message }); }
};

const deletePost = async (req, res) => {
    try {
        const deletedPost = await PostModel.deletePost(req.params.id);
        if (!deletedPost) return res.status(404).json({ message: 'Post not found' });
        res.json({ message: 'Post deleted successfully' });
    } catch (err) { res.status(500).json({ error: err.message }); }
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };