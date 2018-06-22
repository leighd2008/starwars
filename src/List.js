import React, { Component } from 'react';
import ResultsList from './ResultsList'

let Results = [];

class List extends Component{
  constructor() {
    super();
    this.state = { ready: false };

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    this.props.searchResults.map(item => {
      let url = item;

      fetch(url)
        .then(response => {
          if (response.status >= 400) {
            throw new Error ("Bad response from server");
          }
          return response.json();
        })
        .then(data => {
          Results.push(data)
        });
      return Results
      })
  }

  render(){
    {this.fetchData()}
    return(
      <div>

        <ResultsList Results={Results} search={this.props.search}/>
      </div>
    )
  }
}

export default List;
