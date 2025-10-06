import robots from './robots.js';

const container = document.getElementById('robot-container');
const searchInput = document.getElementById('search-box');


const displayRobots = (robotList) => {
 
    container.innerHTML = '';

    
    robotList.forEach(({ name, email, image }) => {
        const card = document.createElement('div');
        card.classList.add('robot-card');

        card.innerHTML = `
            <img src="${image}" alt="${name}">
            <h2>${name}</h2>
            <p>${email}</p>
        `;

        container.appendChild(card);
    });
};

searchInput.addEventListener('input', (event) => {
    const searchText = event.target.value.toLowerCase();
    
    const filteredRobots = robots.filter(robot => 
        robot.name.toLowerCase().includes(searchText)
    );

    displayRobots(filteredRobots);
});

displayRobots(robots);