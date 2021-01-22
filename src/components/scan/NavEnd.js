import React, {Component, Fragment} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfo} from '@fortawesome/free-solid-svg-icons';

class NavEnd extends Component{
    render(){
        return(
            <Fragment>
                <div className="container div_nav_scan h-100 mb-2 rounded-bottom">
                    <div className="row py-1">
                        <div className="col-6 py-1">
                            <a className="text-dark mx-2 rounded a_navigation" href="#"><FontAwesomeIcon icon={faInfo} /></a>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    };
};

export default NavEnd;