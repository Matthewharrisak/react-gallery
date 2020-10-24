import React, {Component} from 'react'
import GalleryList from '../GalleryList/GalleryList'


class GalleryItem extends Component{

    render(){
        return(
            <>
            <GalleryList/>
            <div className="galleryWrapper">
            <h3><img src={this.props.image.path}/> </h3>

            {/* </div>
            <div><img src={image.path}/>
                      

                  </div> */}
                  </div>
            </>
        );
    }
}

export default GalleryItem;