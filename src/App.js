import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Form from './Form';
import ShowAll from './ShowAll';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Form/>
        <ShowAll/>
        {/* <Route exact path="/form" component={Form} /> */}
        {/* <Route exact path="/showall" component={ShowAll} /> */}
      </div>
    </Router>
    );
  }
}

export default App;
