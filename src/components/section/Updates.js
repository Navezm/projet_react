import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookOpen} from "@fortawesome/free-solid-svg-icons";

export class Updates extends Component {
    render() {
        return (
            <Fragment>
                <div className="sorties py-1 px-2">
                    <div className=" text-center  updates border-bottom my-2">
                        <h4>Dernières Sorties</h4>
                    </div>
                    <div className="my-5">
                        <h5> <FontAwesomeIcon icon={faBookOpen}/><a href="#top" className="pl-3 couleur2">Shingeki no Kyojin - 135</a><span className="float-right">12/01/2021</span></h5>
                    </div>
                    <div className="my-5">
                        <h5> <FontAwesomeIcon icon={faBookOpen}/><a href="#top" className="pl-3 couleur2">Tokyo Ghoul - 120</a><span className="float-right">11/01/2021</span></h5>
                    </div>
                    <div className="my-5">
                        <h5> <FontAwesomeIcon icon={faBookOpen}/><a href="#top" className="pl-3 couleur2">Hajime No Ippo - 105</a><span className="float-right">10/01/2021</span></h5>
                    </div>
                    <div className="my-5">
                        <h5> <FontAwesomeIcon icon={faBookOpen}/><a href="#top" className="pl-3 couleur2">Death Note - 35</a><span className="float-right">09/01/2021</span></h5>
                    </div>
                    <div className="my-5">
                        <h5> <FontAwesomeIcon icon={faBookOpen}/><a href="#top" className="pl-3 couleur2">Demon Slayer - 70</a><span className="float-right">09/01/2021</span></h5>
                    </div>
                    <div className="my-5">
                        <h5> <FontAwesomeIcon icon={faBookOpen}/><a href="#top" className="pl-3 couleur2">Tower of God - 175</a><span className="float-right">08/01/2021</span></h5>
                    </div>
                    <div className="my-5">
                        <h5> <FontAwesomeIcon icon={faBookOpen}/><a href="#top" className="pl-3 couleur2">Psyren - 124</a><span className="float-right">   07/01/2021</span></h5>
                    </div>
                    <div className="my-5">
                        <h5> <FontAwesomeIcon icon={faBookOpen}/><a href="#top" className="pl-3 couleur2">One Piece - 1005</a><span className="float-right">07/01/2021</span></h5>
                    </div>
                    <div className="my-5">
                        <h5> <FontAwesomeIcon icon={faBookOpen}/><a href="#top" className="pl-3 couleur2">Boruto - 110</a><span className="float-right">07/01/2021</span></h5>
                    </div>
                    <div className="my-5">
                        <h5> <FontAwesomeIcon icon={faBookOpen}/><a href="#top" className="pl-3 couleur2">Satan 666 - 24</a><span className="float-right">06/01/2021</span></h5>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Updates
