import React from 'react';

class Search extends React.Component { 
  constructor() {
    super();
    this.state = {
      dogBreed: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      dogBreed: e.target.value
    })
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

export default Search;