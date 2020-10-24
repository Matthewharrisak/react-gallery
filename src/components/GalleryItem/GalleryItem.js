import React, {Component} from 'react'



class GalleryItem extends Component{

    // like button function / 

    state = {
        imageDescription: false
    }

    imageClick = () => {
        console.log('whoa buddy! were clicked' , this.state.imageDescription );
        this.setState({
            imageDescription: !this.state.imageDescription // This will allow us the toggle between true / false on upon clicking the image
        })
        }
    render(){
        return(
            <>
            
            <div className="galleryWrapper">
            <div><img src={this.props.image.path}
             onClick={() => this.imageClick()} />
            </div>
            {this.props.image.imageDescription  ?
             <p> imageDescription</p>
             :
             <p>is not imageDescription</p>
             }
            <button> like </button>

            </div>
           
                  
            </>
        );
    }
}

export default GalleryItem;