import React, { useState, useEffect } from 'react';
import { getProducts, getBraintreeClientToken, processPayment, createOrder } from './apiCore';
import { emptyCart } from './cartHelpers';
import Card from './Card';
import { Link } from 'react-router-dom';
import {isAuthenticated} from '../auth'; 
import DropIn from 'braintree-web-drop-in-react'



// SECTION state to handle braintree
const Checkout = ({products, setRun = f => f, run = undefined }) => {
    const [data, setData] = useState({
        loading: false,
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
            setData({ clientToken:data.clientToken})
        }
    })
}



useEffect(() => {
    getToken(userId, token)
},[])

const buy = () => {
    // setData({loading:true});
    // send the nonce to your server
    // nonce = data.instance.requestPaymentMethod()
    let nonce;
    let getNonce = data.instance.requestPaymentMethod()
    .then(data => {
        // console.log(data);
        nonce = data.nonce;
        // once you have nonce (card type, card number) send nonce as 'paymentMethodNonce'
        // and also total to be charged
        // console.log(
        //     "send nonce and total to process: ",
        //     nonce,
        //     getTotal(products)
        // );
        const paymentData = {
            paymentMethodNonce: nonce, 
            amount: getTotal(products)
        }
        // NOTE Sennd these data to backend (To braintree server)
     
        processPayment(userId, token, paymentData)
        .then(response => { //NOTE this is response from payment (braintree)
            console.log(response); // SEE THE RESPONSE TRANSACTION_ID ETC


            // SECTION  create order
            const createOrderData ={ //NOTE keep it as Object before storing in Datase
                products: products,
                transaction_id: response.transaction.id, // NOTE return from braintree
                amount: response.transaction.amount, //NOTE  how much user pay for this order (return from braintree)
                address: data.address
            }
            //NOTE Then put it into database via createOrder method
            createOrder(userId,token,createOrderData)     
            setData({...data, success: response.success})
            //NOTE After finished create order, remove every thing on cart page by default
            emptyCart(()=>{
                setRun(!run);                
                setData({
                    loading: false,
                    success: true
                });
            })

            // NOTE emty cart

          

                    
           } )
        .catch(error => {console.log(error)
        setData({loading:false})
        }
        );
    })


        .catch(error =>{
            console.log(`dropin error:`,error)
            setData({...data, error: error.message})
        })
}

//SECTION Address handle

// NOTE grab address from a user inputs
const handleAddress = event => {
    setData({ ...data, address: event.target.value });
};


const showDropIn = () => (
    // NOTE onBlur means when users click anywhere on the page, the function will call automatically
    <div onBlur={() => setData({...data, error:""})}> 
        {/* NOTE Check this contain token and proudct or not, if not, set it null */}
        {data.clientToken != null && products.length > 0 ? (
            
            // https://www.npmjs.com/package/braintree-web-drop-in-react 
            <div>
                  <div className="gorm-group mb-3">
                        <label className="text-muted">Delivery address:</label>
                        <textarea
                            onChange={handleAddress}
                            className="form-control"
                            value={data.address}
                            placeholder="Type your delivery address here..."
                        />
                    </div>

                <DropIn
                        options={{
                            authorization: data.clientToken,
                            paypal: {
                                flow: 'vault'
                            }
                        }}
                        onInstance={instance => (data.instance = instance)}
                    />
                  <button onClick={buy} className="btn btn-danger btn-block">Pay</button>
            </div>

        ): null}
    </div>
);


//SECTION Shopping Cart 

    const getTotal = () => {
       
        return products.reduce((currentValue, nextValue) => { // NOTE reduce method will calculate every products in Cart
            return currentValue + nextValue.count * nextValue.price // NOTE return value of each product from caculating
        }, 0)
    }

//SECTION Show message

const showError = error => (
    <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
        {error}
    </div>
);

const showSuccess = success => (
    <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
        Thanks! Your payment was successful!
    </div>
);

const showLoading = loading => loading && <h2 className="text-danger">Loading...</h2>;


    return(
        <div>
            {showError(data.error)}
            {showSuccess(data.success)}
            {showLoading(data.loading)}
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

