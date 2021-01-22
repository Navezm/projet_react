import React, {Component, Fragment} from 'react';

class ImageManga extends Component{
    render(){
        return(
            <Fragment>
                <img src={this.props.src} alt="" className="w-100"/>
            </Fragment>
        );
    };
};

export default ImageManga;