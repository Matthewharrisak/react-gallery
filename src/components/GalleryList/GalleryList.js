import React, {Component} from 'react'
import GalleryItem from '../GalleryItem/GalleryItem'


class GalleryList extends Component{

    render(){
        return(
            <>
            {/* <h1> {JSON.stringify(this.props.galleryArray)}</h1> */}

               {this.props.galleryArray.map((image) =>{
                  return <GalleryItem image={image}/>
      
              })} 
            </>
        );
    }
}

export default GalleryList;