import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavSection from "./section/NavSection";
import Updates from "./section/Updates";
import Categorie from "./section/Categorie";
import TopManga from "./section/TopManga";
export class Section2 extends Component {
    render() {
        return (
            <Fragment>
                <section className="container">
                    <div className="row">
                        {/* <NavSection /> */}
                            <div className="col-8 pl-0">
                                <Updates />
                            </div>
                            <div className="col-4">
                                <TopManga />
                                <Categorie />
                            </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Section2
