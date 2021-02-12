import React from 'react';
import axios from 'axios';
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      doggos: []
    }
  }

  componentDidMount() {
    axios.get("https://dog.ceo/api/breed/hound/images")
      .then(res => { 
        this.setState({
          ...this.state,
          doggos: res.data.message
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>Hi WEBPT24 doggos family</h1>
        {this.state.doggos && this.state.doggos.map(doggo => {
          return <img className="dog-image" width="200" key={doggo} src={doggo} />
        })}
      </div>
    )
  }
}

export default App;