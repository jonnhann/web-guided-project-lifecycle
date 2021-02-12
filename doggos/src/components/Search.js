import React from 'react';

class Search extends React.Component { 
  constructor() {
    super();
    this.state = {
      dogBreed: ""
    }
  }

  handleChange = (e) => {

  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.dogBreed} type="text" />
          <button>Fetch dogs!</button>
        </form>
      </div>
    )
  }

}