import React, { Component } from 'react'

class AddProduct extends Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(e){
    e.preventDefault();
    this.props.onAdd(
      this.nameInput.value, 
      this.eanInput.value, 
      this.typeInput.value, 
      this.weightInput.value,
      this.colorInput.value
    )
    this.nameInput.value = ''
    this.eanInput.value = ''
    this.typeInput.value = ''
    this.weightInput.value = ''
    this.colorInput.value = ''
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <hr/>
          <h3>Add Products</h3>
          <input placeholder="Name" 
            ref={nameInput => this.nameInput = nameInput}
          /> 
          {' '}
          <input placeholder="EAN" 
            ref={eanInput => this.eanInput = eanInput}
          />
          {' '}
          <input placeholder="Type" 
            ref={typeInput => this.typeInput = typeInput}
          />
          {' '}
          <input placeholder="Weight" 
            ref={weightInput => this.weightInput = weightInput}
          />
          {' '}
          <input placeholder="Color" 
            ref={colorInput => this.colorInput = colorInput}
          />
          {' '}
          <button>Add</button>
          <hr/>
        </form>
      </div>
    )
  }
}
export default AddProduct