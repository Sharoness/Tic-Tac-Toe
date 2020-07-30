import React from 'react';
import './App.css';
import Title from './components/Title';
import Game from './components/Game';

class App extends React.Component {
  render() {
    return <div>
      <Title/>
      <Game/>
    </div>
  }
}

export default App;
