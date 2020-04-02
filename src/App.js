import React, { Component } from 'react'
import ListProducts from './ListProducts'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={ListProducts} />
        </div>
      </Router>
    );
  }
}

export default App;
