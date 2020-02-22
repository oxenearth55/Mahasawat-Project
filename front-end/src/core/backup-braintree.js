import React, { useState, useEffect } from 'react';
import { getProducts, getBraintreeClientToken } from './apiCore';
import { emptyCart } from './cartHelpers';
import Card from './Card';
import { Link } from 'react-router-dom';
import {isAuthenticated} from '../auth'; 
import DropIn from 'braintree-web-drop-in-react'


// import "braintree-web"; // not using this package

// SECTION state to handle braintree
const Checkout = ({products}) => {
    const [data, setData] = useState({
        success: false, 
        clientToken: null, 
        error: '', 
        instance: {},
        address: ''
    })

//NOTE grab user data from isAuthenticated
const userId = isAuthenticated() && isAuthenticated().user._id 
const token = isAuthenticated() && isAuthenticated().token

// NOTE Send user Id and token to backend to grab client token back from braintree 
const getToken = (userId, token) => {
    getBraintreeClientToken(userId, token).then(data => {
        if(data.error){
            setData({...data, error: data.error})

        }else{
            setData({...data, clientToken:data.clientToken})
        }
    })
}



useEffect(() => {
    getToken(userId, token)
},[])


const showDropIn = () => (
    <div>
        {/* NOTE Check this contain token and proudct or not, if not, set it null */}
        {data.clientToken != null && products.length > 0 ? (
            
            // https://www.npmjs.com/package/braintree-web-drop-in-react 
            <div>
                <DropIn option={{
                    authorization: data.clientToken
                }} onInstance={instance => instance = instance }/>
                <button className="btn btn-sucess">Checkout</button>
            </div>

        ): null}
    </div>
)


//SECTION Shopping Cart 

    const getTotal = () => {
       
        return products.reduce((currentValue, nextValue) => { // NOTE reduce method will calculate every products in Cart
            return currentValue + nextValue.count * nextValue.price // NOTE return value of each product from caculating
        }, 0)
    }



    return(
        <div>
            <h2>Total: ${getTotal()}</h2>

        {isAuthenticated() ? (
            <div>{showDropIn()}</div>
    ): (
        <Link to="/signin">
        <button className="btn btn-primary">Please, Sign in to Checkout</button> 
        </Link>
    )}
        </div>

    );
}


export default Checkout;

