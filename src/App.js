import React, { Component } from 'react';
import Header from './components/Header';
import Section from "./components/Section";
import Footer from "./components/Footer";
import Ancre from "./components/Ancre";
import Manga from './components/Manga';
import Scan from './components/Scan';
export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Section />
        <Ancre />
        <Manga />
        <Scan />
        <Footer />
      </div>
    )
  }
}

export default App;