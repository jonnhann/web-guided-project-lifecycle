import React from 'react';
import axios from 'axios';
import "../styles.css";

class Doggo extends React.Component {
  render() {
    const { imageUrl } = this.props;
    // ^ equivalent to const imageUrl = this.props.imageUrl
    return (
      <>
        <img className="dog-image" alt={imageUrl} width="200" key={imageUrl} src={imageUrl} />
      </>
    )
  }
}

export default Doggo;