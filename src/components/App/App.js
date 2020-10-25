import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = { // galleryArray is the what will store the gallery.data objects for them to then be passed to other components by using Props
    galleryArray: []
  };


  // PUT request to update the "likes" for the photo on the DOM
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


      // Gets data from "gallery.data" and displays reasign's the data to equal galleryArray by using this.setState
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
  componentDidMount = () => { // Displays getPictures on the DOM
    this.getPictures();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FakeBlock!</h1>
        </header>
        <br/>
        
        {/* GalleryList is being sent the PUT request function and the the galleryArray */}
        <GalleryList galleryArray={this.state.galleryArray} likedPictures={this.likedPictures}/> 
      </div>
    );
  }
}

export default App;
