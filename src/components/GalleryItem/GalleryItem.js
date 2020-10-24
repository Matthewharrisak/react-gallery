import React, {Component} from 'react'
import GalleryList from '../GalleryList/GalleryList'


class GalleryItem extends Component{

    // like button function / 

    imageClick = () => {
        console.log('whoa buddy! were clicked' );
        
    }
    render(){
        return(
            <>
            
            <div className="galleryWrapper">
            <div><img src={this.props.image.path} onClick={() => this.imageClick()} />
            </div>

           
                  </div>
            </>
        );
    }
}

export default GalleryItem;