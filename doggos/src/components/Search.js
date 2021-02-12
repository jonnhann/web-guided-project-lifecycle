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
    console.log("submitting form", this.state.dogBreed);
    this.props.handleSearch(this.state.dogBreed);
    this.setState({
      ...this.state,
      dogBreed: ""
    })
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