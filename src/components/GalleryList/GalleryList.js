import React, {Component} from 'react'
import { render } from 'react-dom'


class GalleryList extends Component{

    render(){
        return(
            <>
            <h1> whats up from GalleryList</h1>
              {this.props.galleryArray.map((image) =>{
                //   {JSON.stringify(image)}
                  return <div><img src={image.path}/>
                      

                  </div>
      
              })}
            </>
        );
    }
}

export default GalleryList;