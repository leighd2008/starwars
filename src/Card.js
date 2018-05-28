import React from 'react';
// import SearchBox from './SearchBox'
import Scroll from './Scroll';
import Toggle from './Toggle';
import SearchMenu from './SearchMenu';

const Card = ({ title, episode, opening_crawl }) => {
  return (
    <div className='tc grow bg-dark-blue br3 pa3 ma2 dib bw2 shadow-5 '>
      <div>
        <h2>{title}</h2>
        <h3>{`Episode ${episode}`}</h3>
        <Scroll>
          <pre>{opening_crawl}</pre>
        </Scroll>
        <SearchMenu title={title}/>
        {/* <Toggle>
          <button>

          </button>
        </Toggle> */}
        {/* <button onClick={listPlanets}>
          List Planets
        </button>
        <button onClick={listSpecies}>
          List Species
        </button>
        <button onClick={listStarShips}>
          List Starships
        </button>
        <button onClick={listVehicles}>
          List Vehicles
        </button> */}
        <div>

        </div>
      </div>
    </div>
  );

}

export default Card;
