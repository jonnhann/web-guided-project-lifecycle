import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      doggos: []
    }
  }

  render() {
    return (
        <h1>Hi WEBPT24 doggos family</h1>
    )

  }
}

export default App;