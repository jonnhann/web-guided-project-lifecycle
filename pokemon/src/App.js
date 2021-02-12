import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  constructor() {
    super();
    console.log("App constructor");
    this.state = {
      pokemon: data
    };
  }

  componentDidMount() {
    // console.log("componentDidMount");
  }

  render() {
    console.log("App render method");
    return (
      <div className="App">
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
