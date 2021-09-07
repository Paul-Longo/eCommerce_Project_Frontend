import React, { Component } from 'react'
import Product from './Product';


export default class Details extends Component {
    render() {
        
        return (
            <div>
                <h3>Name: {Product.ProductName}</h3>
                <h2>Price: ${Product.ProductPrice}</h2>
                <h4>Description: {Product.ProductDescription}</h4>

            </div>
        )
    }
}
