import React from 'react';

const PlanetCard = ({ name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, residents }) => {

  return (
    <div className='tc grow bg-black br3 pa3 ma2 dib bw2 shadow-5'>
      <div>
        <h2>{name}</h2>
        <p>Rotation Period: {rotation_period}</p>
        <p>Orbital Period: {orbital_period}</p>
        <p>Diameter: {diameter}</p>
        <p>Climate:{climate}</p>
        <p>Gravity: {gravity}</p>
        <p>Terrain: {terrain}</p>
        <p>Surface_water: {surface_water}</p>
        <p>Population: {population}</p>
        {/* <p>Residents: {residents}</p> */}
      </div>
    </div>
  );
}

export default PlanetCard;
