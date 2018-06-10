import React, { Component } from 'react';
import CardList from './CardList';
import { SWfilms } from './SWfilms'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      SWfilms: SWfilms,
    }

  }

  // componentDidMount() {
  //   fetch('SWapi url')
  //     .then(response=> response.json())
  //     .then(users => {this.setState({ SWfilms: SWfilms})});
  // }

  render() {
    return(
      <div className='tc'>
        <h1>Star Wars The Ultimate Guide</h1>
        <h2>Click to choose a movie to Search!</h2>
        <CardList SWfilms={this.state.SWfilms}/>
      </div>
    )
  }
}


export default App;
