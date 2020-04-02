import React, { Component } from 'react'
import ListProducts from './ListProducts'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import AddProduct from './AddProduct';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={ListProducts} />
          <Route path="/products/create" component={AddProduct} />
        </div>
      </Router>
    );
  }
}

export default App;
