import React, {Component} from 'react';
import Manga from './components/Manga';
import Scan from './components/Scan';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Manga /> */}
        <Scan />
      </div>
    );
  };
};

export default App;