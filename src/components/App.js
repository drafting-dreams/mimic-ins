import React from 'react';
import Header from './common/header';
//import { Switch,  Route } from 'react-router-dom';
//import HomePage from './home/HomePage';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header/>
        </div>
        (/* just to get the page to scroll */)
        <div style={{'height': '2000px'}}/>
      </div>
    );
  }
}

export default App;
