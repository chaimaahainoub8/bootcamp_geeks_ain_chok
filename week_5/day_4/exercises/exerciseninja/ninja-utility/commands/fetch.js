const axios = require('axios');
const chalk = require('chalk');

async function fetchPosts() {
  try {
    // Fetch a sample post
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    const post = response.data;
    
    console.log(chalk.green.bold('--- Fetched Post (ID 1) ---'));
    console.log(chalk.cyan('Title:'), post.title);
    console.log(chalk.cyan('Body:'), post.body);

  } catch (error) {
    console.error(chalk.red('Error fetching data:', error.message));
  }
}

module.exports = fetchPosts;