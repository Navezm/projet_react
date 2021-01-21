import React, {Component, Fragment} from 'react';

class ExplPart2 extends Component {
    render(){
        return(
            <Fragment>
                <p className="m-0 mb-2 text-justify div_explication_manga">{this.props.content}</p>
            </Fragment>
        );
    };
};

export default ExplPart2;