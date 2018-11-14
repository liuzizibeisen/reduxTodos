import React, { Component } from 'react';
import { Todos } from './module/todos/index.js'
import { Filters } from './module/filters/index.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>todos</h1>
        <div className="content">
          <Todos />
          <Filters />
        </div>
      </div>
    );
  }
}

export default App;
