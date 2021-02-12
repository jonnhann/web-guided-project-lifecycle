import React from 'react';
import axios from 'axios';
import "./styles.css";
import Doggo from './components/Doggo';
import Search from './components/Search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentBreed: "hound"
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

  componentDidUpdate(prevProps, prevState) {
    console.log("App CDU running");
    if (prevState.doggos !== this.state.doggos) {
      console.log("doggos have changed!");

    }
  }

  searchDoggos = dogBreed => {
    console.log("searching:", dogBreed);
    axios.get(`https://dog.ceo/api/breed/${dogBreed}/images`)
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
      <div className="App">
        <h1>Hi WEBPT24 doggos family</h1>
        <Search handleSearch={this.searchDoggos} />
        {this.state.doggos && this.state.doggos.map((imageUrl, index) => {
          return <Doggo key={`Dog image ${index}`} imageUrl={imageUrl} />
        })}
      </div>
    )
  }
}

export default App;