import React, { Component } from 'react'

class ProductItem extends Component {
  constructor(props){
    super(props)
    
    this.state = {isEdit: false}
    this.onEdit = this.onEdit.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.onEditSubmit = this.onEditSubmit.bind(this)
  }
  onEdit(){
    this.setState({isEdit: true})
  }
  onEditSubmit(e){
    e.preventDefault();
    this.props.onEditSubmit(
      this.nameInput.value, 
      this.eanInput.value, 
      this.typeInput.value, 
      this.weightInput.value, 
      this.colorInput.value,
      this.props.name
    )
    //normally we use id 
    this.setState({isEdit: false})
  }
  onDelete(){
    this.props.onDelete(this.props.name)
  }
  render() {
    const {name, ean, type, weight, color} = this.props;
    return (
      <div>
          {this.state.isEdit ? (
            <div>
               <form onSubmit={this.onEditSubmit}>
                <hr/>
                <h3>Edit Products</h3>
                <input placeholder="Name" 
                  ref={nameInput => this.nameInput = nameInput}
                  defaultValue={name}
                /> 
                {' '}
                <input placeholder="EAN" 
                  ref={eanInput => this.eanInput = eanInput}
                  defaultValue={ean}
                />
                {' '}
                <input placeholder="Type" 
                  ref={typeInput => this.typeInput = typeInput}
                  defaultValue={type}
                />
                {' '}
                <input placeholder="Weight" 
                  ref={weightInput => this.weightInput = weightInput}
                  defaultValue={weight}
                />
                {' '}
                <input placeholder="Color" 
                  ref={colorInput => this.colorInput = colorInput}
                  defaultValue={color}
                />
                {' '}
                <button>Save Edited</button>
                <hr/>
              </form>
            </div>
          ): (
           <div>  
           <table style={{color: "black", border: "green solid 1px", background: "#e6e6ff" }}>
             <tr key={name}>
               <th scope="col">Name</th>
               <th scope="col">EAN</th>
               <th scope="col">Type</th>
               <th scope="col">Weight</th>
               <th scope="col">Color</th>
             </tr>
             <tr >
               <td>{name}</td>
               <td>{ean}</td>
               <td>{type}</td>
               <td>{weight}</td>
               <td>{color}</td>
               <button onClick={this.onEdit} style={{background: "blue", color: "white"}}>Edit</button>
               <button onClick={this.onDelete} style={{background: "red", color: "white"}}>Delete</button>
             </tr>
            </table>
           </div> 
          )}
      </div>
    )
  }
}
export default ProductItem