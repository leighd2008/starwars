import React from 'react';
import Card from './Card';
import moment from 'moment';


const CardList = ({ SWfilms }) => {
  return (
    <div>
      {
        SWfilms[0].results.map((film, i) => {
          return (
            <Card
              key={SWfilms[0].results[i].episode_id}
              title={SWfilms[0].results[i].title}
              episode={SWfilms[0].results[i].episode_id}
              release_date={moment(SWfilms[0].results[i].release_date).format('MM/DD/YYYY')}
              director={SWfilms[0].results[i].director}
              producer={SWfilms[0].results[i].producer}
              opening_crawl={SWfilms[0].results[i].opening_crawl}
              characters={SWfilms[0].results[i].characters}
              planets={SWfilms[0].results[i].planets}
              species={SWfilms[0].results[i].species}
              starships={SWfilms[0].results[i].starships}
              vehicles={SWfilms[0].results[i].vehicles}

              options={['characters', 'planets', 'species', 'starships', 'vehicles']}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;
