import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Nav extends Component {
    render() {
        return (
            <Fragment>
                <section className="container navBar">
                    <nav className='row navList'>
                        <img src="./img/manga.jpg" className='navLogo' alt=""/>
                        <a href="#top" className="navHome couleur2">HOME</a>
                        <a href="#top" className="navManga couleur2">MANGA</a>
                        <a href="#top" className="couleur2">SCAN</a>
                    </nav>
                    <div>
                        <input type="text" placeholder="Chercher par manga"/>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Nav
