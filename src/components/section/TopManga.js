import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from "@fortawesome/free-solid-svg-icons";


export class TopManga extends Component {
    render() {
        return (
            <Fragment>
                <div className="topManga py-1 px-2 mb-3">
                <div className="my-2 text-center border-bottom titre">
                    <h4>Top Manga</h4>
                </div>
                <div className="d-flex my-4">
                    <div className="col-4">
                        <img src="./img/snk.jpg" className="w-100" alt=""/>
                    </div>
                    <div className="col-8 flex-column d-flex">
                        <a href="#top">Shingeki no Kyojin</a>
                        <span className="text-white border vue"><FontAwesomeIcon icon={faEye}/> Vue 30,210,675 de fois</span>
                    </div>
                </div>
                <div className="d-flex my-4">
                    <div className="col-4">
                        <img src="./img/boruto.jpg" className="w-100" alt=""/>
                    </div>
                    <div className="col-8 flex-column d-flex">
                        <a href="#top">Boruto</a>
                        <span className="text-white border vue"><FontAwesomeIcon icon={faEye}/> Vue 20,160,864 de fois</span>
                    </div>
                </div>
                <div className="d-flex my-4">
                    <div className="col-4">
                        <img src="./img/op.jpeg" className="w-100" alt=""/>
                    </div>
                    <div className="col-8 flex-column d-flex">
                        <a href="#top">One Piece</a>
                        <span className="text-white border vue"><FontAwesomeIcon icon={faEye}/> Vue 19,478,087 de fois</span>
                    </div>
                </div>
                <div className="d-flex my-4">
                    <div className="col-4">
                        <img src="./img/tog.jpg" className="w-100" alt=""/>
                    </div>
                    <div className="col-8 flex-column d-flex">
                        <a href="#top">Tower of God</a>
                        <span className="text-white border vue"><FontAwesomeIcon icon={faEye}/> Vue 18,986,097 de fois</span>
                    </div>
                </div>
                <div className="d-flex my-4">
                    <div className="col-4">
                        <img src="./img/dn.jpg" className="w-100" alt=""/>
                    </div>
                    <div className="col-8 flex-column d-flex">
                        <a href="#top">Death Note</a>
                        <span className="text-white border vue"><FontAwesomeIcon icon={faEye}/> Vue 17,467,926 de fois</span>
                    </div>
                </div>
                </div>
            </Fragment>
        )
    }
}

export default TopManga
