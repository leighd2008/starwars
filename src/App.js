import React, { Component } from 'react';
import CardList from './CardList';
import Scroll from './scroll';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      SWfilms: [],
    }

  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then(response=> response.json())
      .then(films => this.setState({ SWfilms: films}));
  }

  render() {
    if (this.state.SWfilms.length === 0){
      return <h1>Loading</h1>
    } else {
      return(
        <div className='tc'>
          <h1>Star Wars The Ultimate Guide</h1>
          <h2>Click to choose a movie to Search!</h2>
          <Scroll>
            <CardList SWfilms={this.state.SWfilms.results}/>
          </Scroll>
        </div>
      )
    }

  }
}


export default App;
