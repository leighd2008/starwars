import React, { Component } from 'react';
import ResultsList from '../components/ResultsList'
import List from "./List";
import './SearchMenu.css';

let results = [];

class SearchMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      searchResults: [],
      Results: [],
      submitted: false
    };

    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.setResultsData = this.setResultsData.bind(this);
  }

  fetchData = (event, props) => {
    results = [];
    this.props[event.target.value].map(item => {
      let url = item;

      fetch(url)
        .then(response => {
          if (response.status >= 400) {
            throw new Error ("Bad response from server");
          }
          return response.json();
        })
        .then(data => {
          results.push(data)

          console.log(results)
        });
      return results
      })
      this.setState(this.setResultsData(results));
  }

  setResultsData = (results) => {
    return (previousState, currentProps) => {
      return { ...previousState, Results: results};
    };
  }


  handleChange(event) {
    this.setState({value: event.target.value});
    console.log('Choice has been made', event.target.value);
    this.setState({searchResults: this.props[event.target.value]});
    this.fetchData(event);
  }

  handleSubmit(event, props) {
    event.preventDefault();
    this.setState({submitted: true});
    console.log(this.state)

  }

  render() {
    if (this.state.submitted) {
      return (
        <div >
          <form onSubmit={this.handleSubmit}>
            <label>
              <br/>
              <h2>{`Choose a category and click submit `}<br/>{`to see items featured in ${this.props.title} `}</h2> <br/>
              <select value={this.state.value} onChange={this.handleChange}>
                <option disabled hidden value=''></option>
                {this.props.options.map(x => <option key={x} value={x}>{x.charAt(0).toUpperCase() + x.slice(1)}</option>)}
              </select>
            </label>
            <br/><br/>
            <input type="submit" value="Submit" />
            <br/>
            <h2>{"To run another search choose a new category "}<br/>{"or select a different movie"}</h2><br/>

          </form>
          <ResultsList Results={this.state.Results} search={this.state.value}/>
        </div>
          )
      } else {

        return (
          <div >
            <form onSubmit={this.handleSubmit}>
              <label>
                <br/>
                <h2>{`Choose a category and click submit `}<br/>{`to see items featured in ${this.props.title} `}</h2> <br/>
                <select value={this.state.value} onChange={this.handleChange}>
                  <option disabled hidden value=''></option>
                  {this.props.options.map(x => <option key={x} value={x}>{x.charAt(0).toUpperCase() + x.slice(1)}</option>)}
                </select>
              </label>
              <br/><br/>
              <input type="submit" value="Submit" />
              <br/>
              <h2>{"To run another search choose a new category "}<br/>{"or select a different movie"}</h2><br/>
            </form>
            <ResultsList Results={this.state.Results} search={this.state.value}/>
          </div>
      );
    }
  }
}

export default SearchMenu
