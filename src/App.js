import React, { Component } from 'react';
import routes from './routes'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      }
  }
  render() {
    return (
      <div className="App">
       {routes}
      </div>
    );
  }
}

export default App;
