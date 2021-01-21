import React, {Component, Fragment} from 'react';

class ExplPart1 extends Component {
    render(){
        return(
            <Fragment>
                <p className="text-underline m-0 mb-2">{this.props.titre} :</p>
            </Fragment>
        );
    };
};

export default ExplPart1;