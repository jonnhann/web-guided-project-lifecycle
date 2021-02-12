import React from 'react';
import axios from 'axios';
import "../styles.css";

class Doggo extends React.Component {
  render() {
    const { imageUrl } = this.props;
    return (
      <>
        <img className="dog-image" alt={`dog image ${index}`} width="200" key={doggo} src={doggo} />
      </>
    )
  }
}

export default Doggo;