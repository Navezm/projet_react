import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookOpen} from "@fortawesome/free-solid-svg-icons";

export class Updates extends Component {
    render() {
        return (
            <Fragment>
                <div className="my-4 updates border">
                    <h4>Dernières Sorties</h4>
                </div>
                    <div className="my-4">
                        <h5> <FontAwesomeIcon icon={faBookOpen}/><a href="#top" className="pl-3">Shingeki no Kyojin - 135</a><span className="float-right">12/01/2021</span></h5>
                    </div>
                    <div className="my-4">
                        <h5> <FontAwesomeIcon icon={faBookOpen}/><a href="#top" className="pl-3">Tokyo Ghoul - 120</a><span className="float-right">11/01/2021</span></h5>
                    </div>
                    <div className="my-4">
                        <h5> <FontAwesomeIcon icon={faBookOpen}/><a href="#top" className="pl-3">Hajime No Ippo - 105</a><span className="float-right">10/01/2021</span></h5>
                    </div>
                    <div className="my-4">
                        <h5> <FontAwesomeIcon icon={faBookOpen}/><a href="#top" className="pl-3">Death Note - 35</a><span className="float-right">09/01/2021</span></h5>
                    </div>
                    <div className="my-4">
                        <h5> <FontAwesomeIcon icon={faBookOpen}/><a href="#top" className="pl-3">Demon Slayer - 70</a><span className="float-right">09/01/2021</span></h5>
                    </div>
                    <div className="my-4">
                        <h5> <FontAwesomeIcon icon={faBookOpen}/><a href="#top" className="pl-3">Tower of God - 175</a><span className="float-right">08/01/2021</span></h5>
                    </div>
                    <div className="my-4">
                        <h5> <FontAwesomeIcon icon={faBookOpen}/><a href="#top" className="pl-3">Psyren - 124</a><span className="float-right">   07/01/2021</span></h5>
                    </div>
                    <div className="my-4">
                        <h5> <FontAwesomeIcon icon={faBookOpen}/><a href="#top" className="pl-3">One Piece - 1005</a><span className="float-right">07/01/2021</span></h5>
                    </div>
                    <div className="my-4">
                        <h5> <FontAwesomeIcon icon={faBookOpen}/><a href="#top" className="pl-3">Boruto - 110</a><span className="float-right">07/01/2021</span></h5>
                    </div>
                    <div className="my-4">
                        <h5> <FontAwesomeIcon icon={faBookOpen}/><a href="#top" className="pl-3">Satan 666 - 24</a><span className="float-right">06/01/2021</span></h5>
                    </div>
            </Fragment>
        )
    }
}

export default Updates
