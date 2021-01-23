import React, {Component, Fragment} from 'react';

class ImageManga extends Component{
    render(){
        return(
            <Fragment>
                <img src={this.props.src} alt="" className="img_manga"/>
            </Fragment>
        );
    };
};

export default ImageManga;