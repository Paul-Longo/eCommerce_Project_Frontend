import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Default from './Components/Default';
import Category from './Components/Category';
import Login from './Components/Login';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Login />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/category" component={Category} />
          <Route component={Default} />
        </Switch>


      </React.Fragment>
    );
  }
}

export default App;
