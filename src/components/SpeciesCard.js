import React from 'react';

const PlanetCard = ({ name, classification, designation, average_height, skin_colors, hair_colors, eye_colors, average_lifespan, homeworld, residents }) => {

  return (
    <div className='tc grow bg-black br3 pa3 ma2 dib bw2 shadow-5'>
      <div>
        <h2>{name}</h2>
        <p>Classification: {classification}</p>
        <p>Designation: {designation}</p>
        <p>Average Height: {average_height}</p>
        <p>Skin Colors:{skin_colors}</p>
        <p>Hair Colors: {hair_colors}</p>
        <p>Eye Colors: {eye_colors}</p>
        <p>Average Lifespan: {average_lifespan}</p>
        <p>Homeworld: {homeworld}</p>
        {/* <p>residents: {residents}</p> */}
      </div>
    </div>
  );
}

export default PlanetCard;
