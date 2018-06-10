import React, { Component } from 'react';
import SearchMenu from './SearchMenu'
import './Card.css'

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {active: false};
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleClick() {
    if (!this.state.active) {
      this.setState({ active: !this.state.active });
      document.addEventListener('click', this.handleOutsideClick, false);
    }


  };

  handleOutsideClick(e){
    if(this.node.contains(e.target)) {
      return;
    }
    this.setState({ active: !this.state.active });
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  render() {
    return(
      <div id='card' className='tc bg-black br3 pa3 ma2 dib bw2 shadow-5 '
        ref={node => { this.node =node; }}
        onClick={this.handleClick}>
        <div>
          <h2>{this.props.title}</h2>
          <h3>{`Episode ${this.props.episode}`}</h3>
          <h3>{`Released on ${this.props.release_date}`}</h3>
          <h4>{`Directed by ${this.props.director}`}</h4>
          <h4>{`Produced by `} <br/> {`${this.props.producer}`}</h4>
          <div className={this.state.active ? 'active' : 'normal'}>
            <div>
              <span>
                <pre className='tc'>
                  <p className='tc'>{this.props.opening_crawl}</p>
                </pre>
              </span>
            </div>
          </div>
          <div className={this.state.active ? 'searchMenu' : 'noDisplay'} >
            <SearchMenu title={this.props.title}
             characters={this.props.characters}
             planets={this.props.planets}
             species={this.props.species}
             starships={this.props.starships}
             vehicles={this.props.vehicles}
             options={this.props.options}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
