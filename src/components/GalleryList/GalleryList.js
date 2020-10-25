import React, {Component} from 'react'
import GalleryItem from '../GalleryItem/GalleryItem'


class GalleryList extends Component{

    render(){
        return(
            <>
            
                {/* Takes galleryArray and loops throguh the array with .map and pulls in the functionalilty from GalleryItem  */}
               {this.props.galleryArray.map((image) =>{
                  return <GalleryItem image={image} likedPictures={this.props.likedPictures} />
      
              })} 
            </>
        );
    }
}

export default GalleryList;