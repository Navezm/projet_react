import React, {Component, Fragment} from 'react';
import ExplPart1 from './ExplicationM1';
import ExplPart2 from './ExplicationM2';
import TitreManga from './TitreManga';
import ImageManga from './ImageManga';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class ExplicationManga extends Component{
    render(){
        return(
            <Fragment>
                {/* Solo Leveling */}
                <div className="my-4">
                    {/* Titre */}
                    <TitreManga name={this.props.titreManga}/>
                    {/* Titre */}

                    {/* Présentation manga */}
                    <div className="row my-2">
                        <div className="col-3">
                            <ImageManga src={this.props.imageManga} />
                        </div>
                        
                        <div className="col-9">
                            <div className="row">
                                <div className="col-2">
                                    {
                                        this.props.colonneTitre.map((elem)=>{
                                            return(<ExplPart1 titre={elem}/>)
                                        })
                                    }
                                </div>
                                <div className="col-10 rounded">
                                    {
                                        this.props.manga.map((elem)=>{
                                            return(<ExplPart2 content={elem}/>)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Présentation manga */}
                </div>
                {/* Solo Leveling */}
            </Fragment>
        );
    };
};

export default ExplicationManga;