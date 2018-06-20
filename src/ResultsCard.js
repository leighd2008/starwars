// copied from Card

import React from 'react';

const ResultsCard = ({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, species }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <div>
        <h2>{name}</h2>
        <p>{height} {mass} {hair_color} {skin_color} {eye_color} {birth_year} {gender} {homeworld} {species}</p>
      </div>
    </div>
  );
}

export default ResultsCard;
