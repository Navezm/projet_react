import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export class FooterAccueil extends Component {
    render() {
        return (
            <Fragment>
                <footer className="container mt-5 bas rounded-top">
                    <div className="row d-flex text-center border-bottom">
                        <div className="col-4 mt-3 mb-3">
                            <a href="" className="couleur2">Confidentialité</a>
                        </div>
                        <div className="col-4 mt-3 mb-3">
                            <a href="" className="ml-3 mr-3 couleur2">Annonce</a>
                        </div>
                        <div className="col-4 mt-3 mb-3">
                            <a href="" className="couleur2">Conditions</a>
                        </div>
                    </div>
                    <p className="text-center text-muted mt-3 pb-3 mb-0">Copyright Martin & Bryan</p>
                </footer>
            </Fragment>
        )
    }
}

export default FooterAccueil
