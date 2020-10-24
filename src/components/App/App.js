import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    galleryArray: []
  };

  likedPictures =(imageId) => {
    console.log('in likedPictures');
    axios({
      method: 'PUT',
      url: `/gallery/like/${imageId}`
    }).then((response) =>{
      console.log(response.data);
      this.getPictures();
    }).catch((error) => {
      console.log(error);
     });
    }

  getPictures =() => {
    console.log('in getPictures');
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log(response.data);
      this.setState({
        galleryArray: response.data
      });
    }).catch((error) => {
      console.log(error)
    });
  }
  componentDidMount = () => {
    this.getPictures();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        {/* {JSON.stringify(this.state)} */}

        <GalleryList galleryArray={this.state.galleryArray} likedPictures={this.likedPictures}/>
      </div>
    );
  }
}

export default App;
