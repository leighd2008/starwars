
// copied from CardList
import React from 'react';
import ResultsCard from './ResultsCard'
import { Results } from './Results';


const ResultsList = ({ Results }) => {

  return (
    <div>
      {
        Results.map((item, i) => {
          return (
            <ResultsCard
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
          );
        })
      }
    </div>
  );
}

export default ResultsList;
