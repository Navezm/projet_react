import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from "@fortawesome/free-solid-svg-icons";


export class TopManga extends Component {
    render() {
        return (
            <Fragment>
                <div className="my-4 text-center border">
                    <h4>Top Manga</h4>
                </div>
                <div className="d-flex mb-5">
                    <div className="col-4">
                        <img src="./img/snk.jpg" className="w-100" alt=""/>
                    </div>
                    <div className="col-8 flex-column d-flex">
                        <a href="#top">Shingeki no Kyojin</a>
                        <span className="text-muted border"><FontAwesomeIcon icon={faEye}/> Vue 30,210,675 de fois</span>
                    </div>
                </div>
                <div className="d-flex mb-5">
                    <div className="col-4">
                        <img src="./img/boruto.jpg" className="w-100" alt=""/>
                    </div>
                    <div className="col-8 flex-column d-flex">
                        <a href="#top">Boruto</a>
                        <span className="text-muted border"><FontAwesomeIcon icon={faEye}/> Vue 20,160,864 de fois</span>
                    </div>
                </div>
                <div className="d-flex mb-5">
                    <div className="col-4">
                        <img src="./img/op.jpeg" className="w-100" alt=""/>
                    </div>
                    <div className="col-8 flex-column d-flex">
                        <a href="#top">One Piece</a>
                        <span className="text-muted border"><FontAwesomeIcon icon={faEye}/> Vue 30,210,675 de fois</span>
                    </div>
                </div>
                <div className="d-flex mb-5">
                    <div className="col-4">
                        <img src="./img/tog.jpg" className="w-100" alt=""/>
                    </div>
                    <div className="col-8 flex-column d-flex">
                        <a href="#top">Tower of God</a>
                        <span className="text-muted border"><FontAwesomeIcon icon={faEye}/> Vue 30,210,675 de fois</span>
                    </div>
                </div>
                <div className="d-flex mb-5">
                    <div className="col-4">
                        <img src="./img/dn.jpg" className="w-100" alt=""/>
                    </div>
                    <div className="col-8 flex-column d-flex">
                        <a href="#top">Death Note</a>
                        <span className="text-muted border"><FontAwesomeIcon icon={faEye}/> Vue 30,210,675 de fois</span>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default TopManga
