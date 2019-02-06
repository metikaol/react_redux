import React, { Component } from 'react';
import Form from './Form';
import ShowAll from './ShowAll';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form/>
        <ShowAll/>
      </div>
    );
  }
}

export default App;
