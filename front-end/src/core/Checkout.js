import React, { useState, useEffect } from 'react';
import { getProducts } from './apiCore';
import { emptyCart } from './cartHelpers';
import Card from './Card';
import { Link } from 'react-router-dom';
import {isAuthenticated} from '../auth'; 


// import "braintree-web"; // not using this package


const Checkout = ({products}) => {

    const getTotal = () => {
       
        return products.reduce((currentValue, nextValue) => { // NOTE reduce method will calculate every products in Cart
            return currentValue + nextValue.count * nextValue.price // NOTE return value of each product from caculating
        }, 0)
    }

    return(
        <div>
            <h2>Total: ${getTotal()}</h2>

        {isAuthenticated() ? (
            <button className="btn btn-success">Checkout</button>
    ): (
        <Link to="/signin">
        <button className="btn btn-primary">Please, Sign in to Checkout</button> 
        </Link>
    )}
        </div>

    );
}


export default Checkout;

