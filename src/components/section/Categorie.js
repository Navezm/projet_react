import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";



export class Categorie extends Component {
    render() {
        return (
            <Fragment>
                <div className="my-4 text-center border">
                    <h4>Toutes les categories</h4>
                </div>
                <div className="my-3">
                    <a href="#top" className="text-dark"><FontAwesomeIcon icon={faArrowRight}/> Action <span className="float-right border text-muted">3691</span></a>
                </div>
                <div className="my-3">
                    <a href="#top" className="text-dark"><FontAwesomeIcon icon={faArrowRight}/> Arts martiaux <span className="float-right border text-muted">1987</span></a>
                </div>
                <div className="my-3">
                    <a href="#top" className="text-dark"><FontAwesomeIcon icon={faArrowRight}/> Dark Fantasy <span className="float-right border text-muted">298</span></a>
                </div>
                <div className="my-3">
                    <a href="#top" className="text-dark"><FontAwesomeIcon icon={faArrowRight}/> Drama <span className="float-right border text-muted">1209</span></a>
                </div>
                <div className="my-3">
                    <a href="#top" className="text-dark"><FontAwesomeIcon icon={faArrowRight}/> Fantasy <span className="float-right border text-muted">987</span></a>
                </div>
                <div className="my-3">
                    <a href="#top" className="text-dark"><FontAwesomeIcon icon={faArrowRight}/> Horreur <span className="float-right border text-muted">2198</span></a>
                </div>
                <div className="my-3">
                    <a href="#top" className="text-dark"><FontAwesomeIcon icon={faArrowRight}/> Mystère <span className="float-right border text-muted">128</span></a>
                </div>
                <div className="my-3">
                    <a href="#top" className="text-dark"><FontAwesomeIcon icon={faArrowRight}/> Science-fiction <span className="float-right border text-muted">765</span></a>
                </div>
                <div className="my-3">
                    <a href="#top" className="text-dark"><FontAwesomeIcon icon={faArrowRight}/> Sport <span className="float-right border text-muted">340</span></a>
                </div>
                <div className="my-3">
                    <a href="#top" className="text-dark"><FontAwesomeIcon icon={faArrowRight}/> Thriller <span className="float-right border text-muted">666</span></a>
                </div>
            </Fragment>
        )
    }
}

export default Categorie
