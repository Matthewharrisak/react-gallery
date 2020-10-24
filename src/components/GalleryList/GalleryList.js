import React, {Component} from 'react'
import { render } from 'react-dom'


class GalleryList extends Component{

    render(){
        return(
            <>
            <h1> whats up from GalleryList</h1>
              {this.props.galleryArray.map((image) =>{
                  return image;
              })}
            </>
        )
    }
}

export default GalleryList;