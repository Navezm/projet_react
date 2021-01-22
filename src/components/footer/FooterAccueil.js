import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export class FooterAccueil extends Component {
    render() {
        return (
            <Fragment>
                <footer className="container mt-5 bas">
                    <div className="row align-content-center flex-column">
                        <div className="my-3">
                            <a href="" className="couleur2">Confidentialité & Politique</a>
                            <a href="" className="ml-3 mr-3 couleur2">Annonce</a>
                            <a href="" className="couleur2">Conditions d'utilisation</a>
                        </div>
                        <div>
                            <p className="text-center text-muted">Copyrights Martin & Martin</p>
                        </div>
                    </div>
                </footer>
            </Fragment>
        )
    }
}

export default FooterAccueil
