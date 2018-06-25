import React from 'react';

const CharacterCard = ({ CHname, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, species }) => {

  return (
    <div className='tc grow bg-black br3 pa3 ma2 dib bw2 shadow-5'>
      <div>
        <h2>{CHname}</h2>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
        <p>Hair Color: {hair_color}</p>
        <p>Skin Color:{skin_color}</p>
        <p>Eye Color: {eye_color}</p>
        <p>Birth Year: {birth_year}</p>
        <p>Gender: {gender}</p>
        <p>Homeworld: {homeworld}</p>
        <p>Species: {species}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
