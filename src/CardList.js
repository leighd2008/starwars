import React from 'react';
import Card from './Card';


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
              opening_crawl={SWfilms[0].results[i].opening_crawl}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;
