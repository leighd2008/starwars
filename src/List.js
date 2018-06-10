import React, { Component } from 'react';

class List extends Component{
  render(){
    return(
      <div>
        <ul>
          {
              this.props.searchResults.map(item =>
                <li key={item}>{item}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default List;
