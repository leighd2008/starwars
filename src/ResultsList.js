import React from 'react';
import CharacterCard from './CharacterCard'
import PlanetCard from './PlanetCard'
import SpeciesCard from './SpeciesCard'
import StarshipCard from './StarshipCard'
import VehicleCard from './VehicleCard'
// import { Results } from './Results';


const ResultsList = ({ Results, search }) => {

  return (
    <div>
      {
        Results.map((item, i) => {
          if (search === 'characters') {
            console.log('which came first')
            return (
              <CharacterCard
                key={Results[i].name}
                name={Results[i].name}
                height={Results[i].height}
                hair_color={Results[i].hair_color}
                mass={Results[i].mass}
                skin_color={Results[i].skin_color}
                eye_color={Results[i].eye_color}
                birth_year={Results[i].birth_year}
                gender={Results[i].gender}
                species={Results[i].species}
                homeworld={Results[i].homeworld}

              />

            )
          } else if (search === 'planets') {
            return (
              <PlanetCard
                key={Results[i].name}
                name={Results[i].name}
                rotation_period={Results[i].rotation_period}
                orbital_period={Results[i].orbital_period}
                diameter={Results[i].diameter}
                climate={Results[i].climate}
                gravity={Results[i].gravity}
                terrain={Results[i].terrain}
                surface_water={Results[i].surface_water}
                population={Results[i].population}
                // residents={Results[i].residents}

              />
            );
          } else if (search === 'species') {
            return (
              <SpeciesCard
                key={Results[i].name}
                name={Results[i].name}
                classification={Results[i].classification}
                designation={Results[i].designation}
                average_height={Results[i].average_height}
                skin_colors={Results[i].skin_colors}
                hair_colors={Results[i].hair_colors}
                eye_colors={Results[i].eye_colors}
                average_lifespan={Results[i].average_lifespan}
                homeworld={Results[i].homeworld}

              />
            );
          } else if (search === 'starships') {
            return (
              <StarshipCard
                key={Results[i].name}
                name={Results[i].name}
                model={Results[i].model}
                manufacturer={Results[i].manufacturer}
                cost_in_credits={Results[i].cost_in_credits}
                length={Results[i].length}
                max_atmosphering_speed={Results[i].max_atmosphering_speed}
                crew={Results[i].crew}
                passengers={Results[i].passengers}
                cargo_capacity={Results[i].cargo_capacity}
                consumables={Results[i].consumables}
                hyperdrive_rating={Results[i].hyperdrive_rating}
                MGLT={Results[i].MGLT}
                starship_class={Results[i].starship_class}
                // pilots={Results[i].pilots}

              />
            );
          } else if (search === 'vehicles') {
            return (
              <VehicleCard
                key={Results[i].name}
                name={Results[i].name}
                model={Results[i].model}
                manufacturer={Results[i].manufacturer}
                cost_in_credits={Results[i].cost_in_credits}
                length={Results[i].length}
                max_atmosphering_speed={Results[i].max_atmosphering_speed}
                crew={Results[i].crew}
                passengers={Results[i].passengers}
                cargo_capacity={Results[i].cargo_capacity}
                consumables={Results[i].consumables}
                vehicle_class={Results[i].vehicle_class}
                // pilots={Results[i].pilots}

              />
            );
          }

        })
      }
    </div>
  );
}

export default ResultsList;
