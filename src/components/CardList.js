import React from 'react';
import Card from '../containers/Card';
import moment from 'moment';


const CardList = ({ SWfilms }) => {

  return (
    <div>
      {
        SWfilms.map((film, i) => {
          return (
            <Card
              key={SWfilms[i].episode_id}
              title={SWfilms[i].title}
              episode={SWfilms[i].episode_id}
              release_date={moment(SWfilms[i].release_date).format('MM/DD/YYYY')}
              director={SWfilms[i].director}
              producer={SWfilms[i].producer}
              opening_crawl={SWfilms[i].opening_crawl}
              characters={SWfilms[i].characters}
              planets={SWfilms[i].planets}
              species={SWfilms[i].species}
              starships={SWfilms[i].starships}
              vehicles={SWfilms[i].vehicles}

              options={['characters', 'planets', 'species', 'starships', 'vehicles']}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;
