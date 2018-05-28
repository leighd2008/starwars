import React, { Component } from 'react';
import CardList from './CardList';
// import SearchBox from './SearchBox';
import { SWfilms } from './SWfilms'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return(
      <div className='tc'>
        <h1>Star Wars The Ultimate Guide</h1>
        <CardList SWfilms={SWfilms}/>
        {/* <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button> */}
      </div>
    )
  }
}


export default App;
