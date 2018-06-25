import React from 'react';

const StarshipCard = ({ name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, hyperdrive_rating, MGLT, starship_class, pilots}) => {

  return (
    <div className='tc grow bg-black br3 pa3 ma2 dib bw2 shadow-5'>
      <div>
        <h2>{name}</h2>
        <p>Model: {model}</p>
        <p>Manufacturer: {manufacturer}</p>
        <p>Cost in Credits: {cost_in_credits}</p>
        <p>Length:{length}</p>
        <p>Max Atmosphering Speed: {max_atmosphering_speed}</p>
        <p>Crew: {crew}</p>
        <p>Passengers: {passengers}</p>
        <p>Cargo Capacity: {cargo_capacity}</p>
        <p>consumables: {consumables}</p>
        <p>Hyperdrive Rating: {hyperdrive_rating}</p>
        <p>MGLT: {MGLT}</p>
        <p>Starship Class: {starship_class}</p>
        {/* <p>pilots: {pilots}</p> */}
      </div>
    </div>
  );
}

export default StarshipCard;
