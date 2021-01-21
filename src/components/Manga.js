import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSmile} from '@fortawesome/free-solid-svg-icons';
import {faFrown} from '@fortawesome/free-solid-svg-icons';
import {faMeh} from '@fortawesome/free-solid-svg-icons';

class Manga extends Component {
    render(){
        return(
            <Fragment>
                {/* Section manga */}
                <section className="container my-4">
                    {/* Explication */}
                    <div className="row bg-info rounded">
                        <div className="col-6 d-flex align-items-center">
                            <h4 className="text-white">Solo Leveling</h4>
                        </div>
                        <div className="col-6 d-flex justify-content-end align-items-center text-white-50">
                            <FontAwesomeIcon icon={faSmile}/> <span className="mr-3 ml-1">3251</span>
                            <FontAwesomeIcon icon={faMeh}/> <span className="mr-3 ml-1">482</span>
                            <FontAwesomeIcon icon={faFrown}/> <span className="mr-3 ml-1">25</span>
                        </div>
                    </div>
                    {/* Explication */}
                    {/* Présentation manga */}
                    <div className="row my-2">
                        <div className="col-3">
                            <img src="./img/solo-leveling.jpg" alt="" className="w-100"/>
                        </div>
                        <div className="col-9">
                            {/* Nom alternatif */}
                            <div className="row">
                                <div className="col-3">

                                </div>
                                <div className="col-9">

                                </div>
                            </div>
                            {/* Nom alternatif */}
                            {/* Origine */}
                            <div className="row">
                                <div className="col-3">

                                </div>
                                <div className="col-9">

                                </div>
                            </div>
                            {/* Origine */}
                            {/* Auteur */}
                            <div className="row">
                                <div className="col-3">

                                </div>
                                <div className="col-9">

                                </div>
                            </div>
                            {/* Auteur */}
                        </div>
                    </div>
                    {/* Présentation manga */}
                </section>
                {/* Section manga */}
            </Fragment>
        )
    };
};

export default Manga;