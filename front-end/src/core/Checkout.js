import React, { useState, useEffect } from 'react';
import { getProducts, processPayment, createOrder } from './apiCore';
import { emptyCart } from './cartHelpers';
import Card from './Card';
import { Link } from 'react-router-dom';
import {isAuthenticated} from '../auth'; 



// SECTION state to handle braintree
const Checkout = (
    {products, 
        nabuaProducts,
        fakkhawProducts,
        nabuaTotal,
        fakkhawTotal,
    setRun = f => f, 
    run = undefined




}) => {
    const [data, setData] = useState({
        loading: false,
        success: false, 
        // clientToken: null, 
        error: '', 
        instance: {},
        address: ""
    });

    const [createOrderData,setCreateOrderData] =useState({
        products:[],
        amount: ''

    })

    useEffect(() => {
        setCreateOrderData(nabuaProducts,nabuaTotal)
    }, []);

    const [customerAddress, setCustomerAddress] = useState('')


//NOTE grab user data from isAuthenticated
const { user, token } = isAuthenticated();

// NOTE Send user Id and token to backend to grab client token back from braintree 
// const getToken = (userId, token) => {
//     getBraintreeClientToken(userId, token).then(data => {
//         if(data.error){
//             setData({...data, error: data.error})

//         }else{
//             setData({ clientToken:data.clientToken})
//         }
//     })
// }







//NOTE Rename of address from state => reduce confusing for using duplicated data (variable)
// let deliveryAddress = data.address;




const buy = () => {

if(nabuaProducts.lenght !=0){
    const createOrderData ={ //NOTE keep it as Object before storing in Datase
        products: nabuaProducts,
        amount: nabuaTotal,
        shop:'5e6a17a35c566806d6a101dd',
        address: customerAddress
    };

    createOrder(user._id, token, createOrderData).then(data => {
        if (data.error) {
            setData({ ...data, error: data.error });
        } else {

            setData({...data, success: data.success}) 


        }
    });

}


if(fakkhawProducts.lenght !=0){
    const createOrderData ={ //NOTE keep it as Object before storing in Datase
        products: fakkhawProducts,
        amount: fakkhawTotal,
        shop:'5e6a17ac5c566806d6a101de',
        address: customerAddress
    };

    createOrder(user._id, token, createOrderData).then(data => {
        if (data.error) {
            setData({ ...data, error: data.error });
        } else {

            setData({...data, success: data.success}) 


        }
    });
}

//  NOTE After finished create order, remove every thing on cart page by default
emptyCart(()=>{
    setRun(!run);                
    setData({
        loading: false,
        success: true

    });
}) 

};


           
        
        
        // else if(fakkhawProducts.length>0){
        //     const createOrderData ={ //NOTE keep it as Object before storing in Datase
        //         products: fakkhawProducts,
        //         amount: fakkhawTotal, //NOTE  how much user pay for this shop 
        //         address: customerAddress


        //     };
        //     //NOTE Then put it into database via createOrder method
        //     createOrder(userId,token,createOrderData)  
        //   }
           
          

            // NOTE emty cart

          

            

//SECTION Address handle

// NOTE grab address from a user inputs
const handleAddress = event => {
    setCustomerAddress(event.target.value );
};





//SECTION Shopping Cart 

   

//SECTION Show message

const showError = error => (
    <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
        {error}
    </div>
);

const showSuccess = success => (
    <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
        Thanks! Your Order was successful!
    </div>
);

const showLoading = loading => loading && <h2 className="text-danger">Loading...</h2>;

const exute =() =>(
    <button onClick={buy} className="btn btn-primary">Checkout</button>

)

    return(
        <div>
            {/* {showError(data.error)} */}
            {/* {showSuccess(data.success)} */}
            {/* {showLoading(data.loading)} */}
            {/* <h2>Total: ${getTotal()}</h2> */}

     
           {isAuthenticated() ? (
            <div>{ exute()} </div>
    ): (
        <Link to="/signin">
        <button className="btn btn-primary">Please, Sign in to Checkout</button> 
        </Link>
    )}
    
        </div>

    );
}


export default Checkout;

