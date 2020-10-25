import React, {Component} from 'react'



class GalleryItem extends Component{


    state = {
        picDescription: false // by setting picDecription to "false" we can use true and false to toggle between values
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
                    {/* Conditional rendering with a turnary operator  */}
                     {this.state.picDescription ?
            <p> {this.props.image.description}</p>
            :
                 // displays the image onto the DOM
                <img src={this.props.image.path}/>}          
                <br/>

            </div>
                 <button onClick={() => this.props.likedPictures(this.props.image.id)}> like </button>
                <p> {this.props.image.likes} </p>
             </div>     
            </>
        );
    }
}

export default GalleryItem;