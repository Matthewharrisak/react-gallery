import React, {Component} from 'react'



class GalleryItem extends Component{

    // like button function / 

    imageClick = () => {
        console.log('whoa buddy! were clicked' );
        
    }
    render(){
        return(
            <>
            
            <div className="galleryWrapper">
            <div><img src={this.props.image.path}
             onClick={() => this.imageClick()} />
             <button> like </button>
            </div>
            </div>
           
                  
            </>
        );
    }
}

export default GalleryItem;