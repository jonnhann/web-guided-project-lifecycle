import React from 'react';

class Search extends React.Component { 
  constructor() {
    super();
    this.state = {
      dogBreed: ""
    }
  }

  render() {
    return (
      <div>
        <form>
          <input onChange={ } value={this.state.dogBreed} type="text" />
          <button>Fetch dogs!</button>
        </form>
      </div>
    )
  }

}