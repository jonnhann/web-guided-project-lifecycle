import React from 'react';

class Doggo extends React.Component {
  render() {
    const { imageUrl } = this.props;
    // ^ equivalent to const imageUrl = this.props.imageUrl
    return (
      <>
        <img className="dog-image" alt={imageUrl} width="200" src={imageUrl} />
      </>
    )
  }
}

export default Doggo;