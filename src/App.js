import React, { Component } from 'react';
import Header from './components/Header';
import Section1 from "./components/Section1";
export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Section1 />
      </div>
    )
  }
}

export default App
