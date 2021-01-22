import React, {Component, Fragment} from 'react';
import ExplPart1 from './ExplicationM1';
import ExplPart2 from './ExplicationM2';
import TitreManga from './TitreManga';
import ImageManga from './ImageManga';
import ListeChap from './ListeChap';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class ExplicationManga extends Component{
    render(){
        return(
            <Fragment>
                {/* Div manga */}
                <div className="my-4 border rounded bg-white">
                    {/* Titre */}
                    <TitreManga name={this.props.titreManga} nb1={Math.floor(Math.random()*100000)} nb2={Math.floor(Math.random()*10000)} nb3={Math.floor(Math.random()*1000)}/>
                    {/* Titre */}

                    {/* Présentation manga */}
                    <div className="row p-2">
                        <div className="col-lg-3 col-sm-12 div_img_manga">
                            <ImageManga src={this.props.imageManga} />
                        </div>
                        
                        <div className="col-lg-9 col-sm-12 mt-lg-0 mt-sm-3">
                            <div className="row mt-sm-2">
                                <div className="col-lg-2 col-sm-3">
                                    {
                                        this.props.colonneTitre.map((elem)=>{
                                            return(<ExplPart1 titre={elem}/>)
                                        })
                                    }
                                </div>
                                <div className="col-lg-10 col-sm-9 rounded">
                                    {
                                        this.props.manga.map((elem)=>{
                                            return(<ExplPart2 content={elem}/>)
                                        })
                                    }
                                    {/* Partie accès chapitre & autre */}
                                    <ListeChap name={this.props.titreManga} chapitre={this.props.chapitre}/>
                                    {/* Partie accès chapitre & autre */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Présentation manga */}

                    
                </div>
                {/* Div manga */}
            </Fragment>
        );
    };
};

export default ExplicationManga;