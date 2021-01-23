import React, {Component, Fragment} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookDead} from '@fortawesome/free-solid-svg-icons';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import {faBible} from '@fortawesome/free-solid-svg-icons';

class NavEnd extends Component{
    render(){
        return(
            <Fragment>
                <div className="container div_nav_scan">
                    <div className="row py-1">
                        <div className="col-6 py-1">
                            <a className="text-dark mx-2 rounded a_navigation a_navigation_resp" href=""><FontAwesomeIcon className="icon_scan" icon={faBookDead} /></a>
                            <a className="text-dark mx-2 rounded a_navigation a_navigation_resp" href=""><FontAwesomeIcon className="icon_scan" icon={faPen} /></a>
                            <a className="text-dark mx-2 rounded a_navigation a_navigation_resp" href=""><FontAwesomeIcon className="icon_scan" icon={faBible} /></a>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    };
};

export default NavEnd;