import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./header/Nav"
// import {Container} from 'react-bootstrap';
export class Header extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <Nav />
                </header>
            </Fragment>
        )
    }
}

export default Header
