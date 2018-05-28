import React, { Component } from 'react';


class SearchMenu extends Component {
  constructor(){
    super();
    this.state = {selectValue: 'People'};
    this.title = {title};

    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <br/>
          {`Choose a category to see items `}<br/>{`featured in ${this.state.title}`}<br/>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="characters">Characters</option>
            <option value="planets">Planets</option>
            <option value="species">Species</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchMenu
