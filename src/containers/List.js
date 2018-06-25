import React, { Component } from 'react';
import ResultsList from '../components/ResultsList'

let Results = [];

class List extends Component{
  constructor() {
    super();
    this.state = { Results: [] };

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData = () => {
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

          console.log(Results)
        });
      return Results
      })
  }


    componentDidMount() {
      this.fetchData()
      this.setState({ Results: Results})
    }

  render(){
      this.fetchData()

    return(
      <div>
          <ResultsList Results={this.state.Results} search={this.props.search}/>
      </div>
    )
  }
}

export default List;
