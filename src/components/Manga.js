import React, {Component, Fragment} from 'react';
import ExplicationManga from './manga/ExplicationManga';
import TitreManga from './manga/TitreManga';
import ImageManga from './manga/ImageManga';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class Manga extends Component {
    

    render(){
        return(
            <Fragment>
                {/* Section manga */}
                <section className="container my-4">
                    {/* Titre */}
                    <TitreManga />
                    {/* Titre */}

                    {/* Présentation manga */}
                    <div className="row my-2">
                        {/* Image */}
                        <div className="col-3">
                           <ImageManga />
                        </div>
                        {/* Image */}
                        
                        {/* Informations */}
                        <div className="col-9">
                            <ExplicationManga />
                        </div>
                        {/* Informations */}
                    </div>
                    {/* Présentation manga */}
                    
                </section>
                {/* Section manga */}
            </Fragment>
        );
    };
};

export default Manga;