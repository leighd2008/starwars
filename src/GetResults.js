// copied from SearchMenu

import React, { Component } from 'react';
import ResultsList from "./ResultsList"
import './SearchMenu.css'



class SearchMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      searchResults: []
    };

    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log('Choice has been made', event.target.value)
  }

  handleSubmit(event, props) {
    event.preventDefault();
    let searchResults = []
    this.setState({searchResults: this.props[this.state.value]})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <br/>
            {`Choose a category to see items `}<br/>{`featured in ${this.props.title} `} <br/><br/>
            <select value={this.state.value} onChange={this.handleChange}>
              <option disabled hidden value=''></option>
              {this.props.options.map(x => <option key={x} value={x}>{x.charAt(0).toUpperCase() + x.slice(1)}</option>)}
            </select>
          </label>
          <br/><br/>
          <input type="submit" value="Submit" />
        </form>
        <ResultsList />
      </div>
    );
  }
}

export default SearchMenu
