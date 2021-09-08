import React, { Component } from 'react';
import axios from "axios";


class Cart extends Component {
    state = {
        chosenProducts: [],
    
    }

    componentDidMount(){
        this.addItemsToCart();
      
    }

    async addItemsToCart(){
       let response = await axios.get('https://localhost:44394/api/cart')
        .then(response => this.setState({
          product: response.data
         
          
          
        }));
        console.log('you are adding plants to cart')

        return response
        
        }

        handleChange =(event) => {
            console.log (event.target.value)
            this.setState({
                
                chosenProducts: event.target.value
            });
           
        }
        
        handleSubmit = (event) => {
            event.preventDefault();
            this.props.addItemsToCart(this.state.chosenProducts);
           
        };

    render() {
        return (
            <div>

                   <button onClick={this.addItemsToCart}></button>
            </div>
         );
            
        
    }
}

export default Cart;