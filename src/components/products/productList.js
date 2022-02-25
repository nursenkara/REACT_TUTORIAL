import axios from 'axios'
import React, { Component } from 'react'

export default class productList extends Component {
  state = {
    products:[]
  }
  componentDidMount(){
    axios.get(`https://localhost:44341/api/products/getall`).then( res => {
      const products = res.data.data;
      this.setState({products})
    })
  }
  render() {
    return (
      <div>productList
        <ul>
          {
            this.state.products.map(product => 
              
                <li key={product.id}>{product.name}</li>
         
            )
          }
        </ul>
      </div>
    )
  }
}
