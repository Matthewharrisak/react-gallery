import React, {Component} from 'react'
import GalleryItem from '../GalleryItem/GalleryItem'


class GalleryList extends Component{

    render(){
        return(
            <>
            <h1> whats up from GalleryList</h1>
              {this.props.galleryArray.map((image) =>{
                //   {JSON.stringify(image)}
                  return <GalleryItem image={image}/>
      
              })}
            </>
        );
    }
}

export default GalleryList;