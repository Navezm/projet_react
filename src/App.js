import React, { Component } from 'react';
import Header from './components/Header';
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Section1 />
        <Section2 />
      </div>
    )
  }
}

export default App
