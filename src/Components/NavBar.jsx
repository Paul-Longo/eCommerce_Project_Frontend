import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';


export default class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to='/'>
<img src={logo} alt="store" className="navbar-brand filter-yellow" />
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ms-5" >
                    <Link to="/" className="nav-link">
                        Products
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ms-auto"> 
            {/* classname should push the cart button to the right, seems to only work with smaller screens? */}
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                    </span>
                    my cart
                </ButtonContainer>
            </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`