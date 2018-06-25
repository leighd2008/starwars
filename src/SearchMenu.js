import React, { Component } from 'react';
import List from "./List";
import './SearchMenu.css';
// import ResultsList from "./ResultsList"



class SearchMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      searchResults: [],
      searchState: ''
    };

    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log('Choice has been made', event.target.value)
    // this.setState({searchResults: this.props[event.target.value]})
    // console.log('searchResults:', this.props[event.target.value])

  }

  handleSubmit(event, props) {
    event.preventDefault();
    this.setState({searchResults: this.props[this.state.value]})
    console.log(this.props[this.state.value])
  }

  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit}>
          <label>
            <br/>
            <h2>{`Choose a category and click submit twice to see items `}<br/>{`featured in ${this.props.title} `}</h2> <br/>
            <select value={this.state.value} onChange={this.handleChange}>
              <option disabled hidden value=''></option>
              {this.props.options.map(x => <option key={x} value={x}>{x.charAt(0).toUpperCase() + x.slice(1)}</option>)}
            </select>
          </label>
          <br/><br/>
          <input type="submit" value="Submit" />
          <br/>
          <h2>{"To run another search refresh the page before choosing a new category or select a different movie"}</h2><br/>
          <List searchResults={this.state.searchResults} search={this.state.value}/>

        </form>

      </div>
    );
  }
}

export default SearchMenu
