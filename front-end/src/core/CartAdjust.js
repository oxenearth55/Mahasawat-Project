import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { getCart, getNabuaProducts,getfakkhawProducts } from './cartHelpers';
import {addItem, updateItem,removeItem} from './cartHelpers'; 

const CartAdjust = ({product, productPrice,
    setRun = f => f, // NOTE default value of function 
    run = undefined,  // NOTE default value of undefined,
    adjustAmoumt = false,
    showEachTotal = false
}) =>{
    const [count, setCount] = useState(product.count);

 //NOTE grab product Id for adjust amount of item
 const handleChange = productId => event => {
    setRun(!run); //NOTE run useEffect in parent Cart
    //NOTE Make sure that value don't contain negative value
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if(event.target.value >= 1){
      updateItem(productId, event.target.value)
    }
  };

  const showAdjustAmount = () => {
      if(adjustAmoumt){
        return(
        <input type="number" value="2" aria-label="Search" className="form-control"
        value={count} 
        onChange={handleChange(product._id)} 
        style={{width: '100px'}}/>
         
        )

      }
    }

    const showEachTotals = () => {
        const total = productPrice*count;

        if(showEachTotal){
            setRun(!run);

            return(
                <>
                {total}
                </>
            )
        }
    }






    return (
        <>
        {showAdjustAmount()}
        {/* {showEachTotals()} */}
</>

    )
}
export default CartAdjust;