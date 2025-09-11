// ====== Daily Challenge 1

const solarSystem = [
    { name: 'Mercury', color: 'gray', moons: 0 },
    { name: 'Venus', color: 'yellow', moons: 0 },
    { name: 'Earth', color: 'blue', moons: 1 },
    { name: 'Mars', color: 'red', moons: 2 },
    { name: 'Jupiter', color: 'orange', moons: 79 },
    { name: 'Saturn', color: 'goldenrod', moons: 82 },
    { name: 'Uranus', color: 'lightblue', moons: 27 },
    { name: 'Neptune', color: 'darkblue', moons: 14 }
];

// 1. Find the <section> element in the HTML where we will put the planets.
const listPlanetsSection = document.querySelector('.listPlanets');

// 2. Loop through each planet object in our solarSystem array.
for (const planetData of solarSystem) {
    
    // 3. For each planet, create a new <div> element.
    const planetDiv = document.createElement('div');
    
    // 4. Add the class "planet" to the div. This gives it the style from the CSS.
    planetDiv.classList.add('planet');
    
    // 5. Set the background color of the div to the color from our object.
    planetDiv.style.backgroundColor = planetData.color;
    
    // 6. Add the new planet div to the section so it appears on the page.
    listPlanetsSection.appendChild(planetDiv);

    // BONUS: Create the moons for this planet
    // 7. Start a new loop that runs as many times as the number of moons.
    for (let i = 0; i < planetData.moons; i++) {
        
        // 8. Create a new <div> for the moon.
        const moonDiv = document.createElement('div');
        
        // 9. Add the class "moon" to it for styling.
        moonDiv.classList.add('moon');
        
        // 10. Add the moon inside the planet's div.
        planetDiv.appendChild(moonDiv);
    }
}