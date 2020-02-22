import React, { useState, useEffect } from 'react';
 

const PaymentPage = () => {

    const showDropIn = () => (
        <div>
            {/* NOTE Check this contain token and proudct or not, if not, set it null */}
            {data.clientToken != null && products.length > 0 ? (
                
                // https://www.npmjs.com/package/braintree-web-drop-in-react 
                <div>
                    <DropIn options={{
                        authorization: data.clientToken
                    }} onInstance={instance => instance = instance }/>
                    <button className="btn btn-sucess">Checkout</button>
                </div>
    
            ): null}
        </div>

    )

return (

    <div>
        {showDropIn}
    </div>





);

};


export default PaymentPage;