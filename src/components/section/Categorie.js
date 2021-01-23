import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";



export class Categorie extends Component {

    // addStyle = (e) => {
    //     if (e.target.className.containes("evenement")) {
    //         e.target.className.remove("evenement")
    //     } else {
    //         e.target.className.add("evenement")
    //     }
    // }
    // onMouseOver={this.addStyle}

    render() {
        return (
            <Fragment>
                <div className="topManga p-2 ">
                    <div className="my-4 text-center border-bottom titre">
                        <h4>Toutes les categories</h4>
                    </div>
                    <div className="my-3 evenement" >
                        <a href="#top" className="couleur"><FontAwesomeIcon icon={faArrowRight}/> Action <span className="float-right border">3691</span></a>
                    </div>
                    <div className="my-3 evenement">
                        <a href="#top" className="couleur"><FontAwesomeIcon icon={faArrowRight}/> Arts martiaux <span className="float-right border ">1987</span></a>
                    </div>
                    <div className="my-3 evenement">
                        <a href="#top" className="couleur"><FontAwesomeIcon icon={faArrowRight}/> Dark Fantasy <span className="float-right border ">298</span></a>
                    </div>
                    <div className="my-3 evenement">
                        <a href="#top" className="couleur"><FontAwesomeIcon icon={faArrowRight}/> Drama <span className="float-right border ">1209</span></a>
                    </div>
                    <div className="my-3 evenement">
                        <a href="#top" className="couleur"><FontAwesomeIcon icon={faArrowRight}/> Fantasy <span className="float-right border ">987</span></a>
                    </div>
                    <div className="my-3 evenement">
                        <a href="#top" className="couleur"><FontAwesomeIcon icon={faArrowRight}/> Horreur <span className="float-right border ">2198</span></a>
                    </div>
                    <div className="my-3 evenement">
                        <a href="#top" className="couleur"><FontAwesomeIcon icon={faArrowRight}/> Mystère <span className="float-right border ">128</span></a>
                    </div>
                    <div className="my-3 evenement">
                        <a href="#top" className="couleur"><FontAwesomeIcon icon={faArrowRight}/> Science-fiction <span className="float-right border ">765</span></a>
                    </div>
                    <div className="my-3 evenement">
                        <a href="#top" className="couleur"><FontAwesomeIcon icon={faArrowRight}/> Sport <span className="float-right border ">340</span></a>
                    </div>
                    <div className="my-3 evenement">
                        <a href="#top" className="couleur"><FontAwesomeIcon icon={faArrowRight}/> Thriller <span className="float-right border ">666</span></a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Categorie
