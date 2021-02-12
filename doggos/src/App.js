import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      doggos: []
    }
  }

  componentDidMount() {
    axios.get("https://dog.ceo/api/breed/hound/images")
      .then(res => console.log(res.data.message))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <h1>Hi WEBPT24 doggos family</h1>
      <img width="200" key={doggo} src={doggo} />
    )
  }
}

export default App;