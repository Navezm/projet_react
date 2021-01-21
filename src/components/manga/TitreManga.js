import React, {Component, Fragment} from 'react';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSmile} from '@fortawesome/free-solid-svg-icons';
import {faFrown} from '@fortawesome/free-solid-svg-icons';
import {faMeh} from '@fortawesome/free-solid-svg-icons';

class TitreManga extends Component{
    render(){
        return(
            <Fragment>
                <div className="row rounded div_titre_manga">
                    <div className="col-6 d-flex align-items-center">
                        <h4 className="text-white m-0">Solo Leveling</h4>
                    </div>
                    <div className="col-6 d-flex justify-content-end align-items-center text-white-50">
                        <FontAwesomeIcon icon={faSmile}/> <span className="mr-3 ml-1">3251</span>
                        <FontAwesomeIcon icon={faMeh}/> <span className="mr-3 ml-1">482</span>
                        <FontAwesomeIcon icon={faFrown}/> <span className="mr-3 ml-1">25</span>
                    </div>
                </div>
            </Fragment>
        );
    };
};

export default TitreManga;