import React, {Component, Fragment} from 'react';

class ScanInfo extends Component {
    render(){
        return(
            <Fragment>
                <div className="container bg-white py-2">
                    <h3>Informations Manga</h3>
                    <p className="m-1"><span className="font-weight-bold">Manga :</span> Death Note</p>
                    <p className="m-1"><span className="font-weight-bold">Titre :</span> Responsabilité</p>
                    <p className="m-1"><span className="font-weight-bold">Chapitre :</span> 65</p>
                    <p className="m-1"><span className="font-weight-bold">Langue :</span> Anglais</p>
                    <p className="m-1"><span className="font-weight-bold">Date de sortie :</span> 30 Mars 2014</p>
                    <p className="m-1"><span className="font-weight-bold">Nombre de pages :</span> 19</p>
                </div>
                <div className="container div_nav_scan rounded-bottom">
                    <div className="row py-1">
                        <div className="col-6 d-lg-block d-sm-none">
                        </div>
                        <div className="col-lg-6 py-1 text-right">
                            <p className="text-white text-uppercase m-0 font-weight-bold">Death Note | 65</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    };
};

export default ScanInfo;