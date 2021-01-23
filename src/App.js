import React, { Component } from 'react';
import Header from './components/Header';
import Section from "./components/Section";
import Footer from "./components/Footer";
import Ancre from "./components/Ancre";
export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Section />
        <Footer />
        <Ancre />
      </div>
    )
  }
}

export default App
