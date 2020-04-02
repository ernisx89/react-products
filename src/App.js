import React, { Component } from 'react'
import './App.css'
import Products from './products'
import ProductItem from './ProductItem'
import AddProduct from './AddProduct'

localStorage.setItem('products', JSON.stringify(Products))

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    }
    this.onAdd = this.onAdd.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.onEditSubmit = this.onEditSubmit.bind(this)
  }
  componentWillMount(){
    const products = this.getProduct()
    this.setState({products})
  }
  getProduct(){
    return this.state.products
  }
  onAdd(name, ean, type, weight, color){
    const products = this.getProduct()
    products.push({
      name,
      ean,
      type,
      weight,
      color,
    })
    this.setState({products})
  }
  onDelete(name){
    const products = this.getProduct()
    const filteredProduct = products.filter(product => {
      return product.name !== name
    })
    console.log(filteredProduct)
    //match the name of poduct to delete
    this.setState({products: filteredProduct})
  }
  onEditSubmit(name, ean, type, weight, color){
    let products = this.getProduct()
    products = products.map(product => {
        product.name = name
        product.ean = ean
        product.type = type
        product.weight = weight
        product.color = color 
        return product
    })
    this.setState({products})
  }
  render() {
    return (
      <div className="App">
        <h1>React Products Warehouse</h1>
        <AddProduct onAdd={this.onAdd}/>
        {this.state.products.map(product => {
          return (
            <ProductItem
              key={product.name}
              {...product}
              onDelete={this.onDelete}
              onEditSubmit={this.onEditSubmit}
            />
          )
        })}
      </div>
    );
  }
}

export default App;

