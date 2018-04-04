import React, { Component } from 'react';
import './css/App.css';
import Container from './components/Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <sidebar className="App-sidebar">
        Welcome to Universe
        </sidebar> */}
        <Container />
      </div>
    );
  }
}

export default App;
