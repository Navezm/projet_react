import React, { Component } from 'react';
import Section from "./components/Section";
import Footer from "./components/Footer";
import Ancre from "./components/Ancre";
import Manga from './components/Manga';
import Scan from './components/Scan';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
export class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <section className="container navBar">
            <nav className='row navList'>
              <img src="./img/manga.jpg" className='navLogo' alt=""/>
              <Link className="navHome couleur3" to="/">HOME</Link>
              <Link className="navHome couleur3" to="/manga">MANGA</Link>
              <Link className="navHome couleur3" to="/scan">SCAN</Link>
              {/* <a href="#top" className="navHome couleur2">HOME</a> */}
              {/* <a href="#top" className="navManga couleur2">MANGA</a>
              <a href="#top" className="couleur2">SCAN</a> */}
            </nav>
            <div>
                <input type="text" placeholder="Chercher par manga"/>
            </div>
          </section>
        </header>
        <Switch>
          <Route path="/manga">
            <Manga />
          </Route>
          <Route path="/scan">
            <Scan />
          </Route>
          <Route path="/">
            <Section />
          </Route>
        </Switch>
        <Ancre />
        <Footer />
      </Router>
    )
  }
}

export default App;