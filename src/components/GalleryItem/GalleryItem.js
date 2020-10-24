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
            <div className="masterDiv">
            <div onClick={() => this.imageClick()} className="galleryWrapper">
            {this.state.picDescription ?
            <p> {this.props.image.description}</p>
            :
            <img src={this.props.image.path}/>}          
                <br/>
            {/* <button onClick={() => this.props.likedPictures()}> like </button> */}

            </div>
            <button onClick={() => this.props.likedPictures(this.props.image.id)}> like </button>
                <p> {this.props.image.likes} </p>
             </div>     
            </>
        );
    }
}

export default GalleryItem;