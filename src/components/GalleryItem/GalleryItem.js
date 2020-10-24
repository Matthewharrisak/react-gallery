import React, {Component} from 'react'



class GalleryItem extends Component{

    // like button function / 

    state = {
        picDescription: false
    }

    imageClick = () => {
        console.log('whoa buddy! were clicked' , this.state.picDescription );
        this.setState({
            picDescription: !this.state.picDescription // This will allow us the toggle between true / false on upon clicking the image
        })
        }
    render(){
        return(
            <>
            
            <div onClick={() => this.imageClick()} className="galleryWrapper">
            {this.state.picDescription ?
            <p> {this.props.image.description}</p>
            :
            <img src={this.props.image.path}/>}          
                <br/>
            <button> like </button>

            </div>
           
                  
            </>
        );
    }
}

export default GalleryItem;