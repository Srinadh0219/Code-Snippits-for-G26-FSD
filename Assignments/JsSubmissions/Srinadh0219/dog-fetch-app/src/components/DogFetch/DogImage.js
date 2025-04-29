import React, { Component } from 'react';
import './DogImage.css';  

class DogImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',  
      loading: true, 
    };
  }

  componentDidMount() {
    setTimeout(this.fetchDogImage, 1000); 
  }

  fetchDogImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        this.setState({
          imageUrl: data.message,
          loading: false,
        });
      })
      .catch(error => {
        console.error('Error fetching dog image:', error);
      });
  };

  render() {
    const { imageUrl, loading } = this.state;

    return (
      <div className="dog-image-container">
        {loading ? (
          <h2>Loading Dog Image...</h2>
        ) : (
          <img src={imageUrl} alt="Random Dog" className="dog-image" />
        )}
      </div>
    );
  }
}

export default DogImage;

