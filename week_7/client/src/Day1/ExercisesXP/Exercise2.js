import React from 'react';

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
};

const Exercise2 = () => {
  return (
    <div className="border p-3 mb-3">
      <h5>Ex 2: Object & Map</h5>
      <h3>{user.firstName} {user.lastName}</h3>
      <ul>
        {user.favAnimals.map((animal, i) => <li key={i}>{animal}</li>)}
      </ul>
    </div>
  );
}
export default Exercise2;