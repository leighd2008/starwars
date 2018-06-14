import React, { Component } from 'react';
import CardList from './CardList';
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
          {console.log('app.js', this.state.SWfilms)}
          <CardList SWfilms={this.state.SWfilms.results}/>
        </div>
      )
    }

  }
}


export default App;
