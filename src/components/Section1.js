import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "./section/Carousel1";

export class Section1 extends Component {
    render() {
        return (
            <Fragment>
                <section>
                <Carousel/>
                </section>
            </Fragment>
        )
    }
}

export default Section1
