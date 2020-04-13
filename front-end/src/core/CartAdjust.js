import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { getCart, getNabuaProducts,getfakkhawProducts, getFakkhaw } from './cartHelpers';
import { updateItemNabua,updateItemFakkhaw} from './cartHelpers'; 

const CartAdjust = ({product, productPrice,
    setRun = f => f, // NOTE default value of function 
    run = undefined,  // NOTE default value of undefined,
    adjustAmoumt = false,
    showEachTotal = false,
    nabua = false,
    fakkhaw = false
}) =>{
    const [count, setCount] = useState(product.count);

 //NOTE grab product Id for adjust amount of item
 const handleChangeNabua = productId => event => {
    setRun(!run); //NOTE run useEffect in parent Cart
    //NOTE Make sure that value don't contain negative value
    setCount(event.target.value < 1 ? 1 : event.target.value);
    
    if(event.target.value >= 1 && event.target.value<product.quantity){
      updateItemNabua(productId, event.target.value)
    } if(event.target.value >= product.quantity){
      updateItemNabua(productId, product.quantity)
      setCount(product.quantity)
    }
  };

  const handleChangeFakkhaw = productId => event => {
    setRun(!run); //NOTE run useEffect in parent Cart
    //NOTE Make sure that value don't contain negative value
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if(event.target.value >= 1){
        updateItemFakkhaw(productId, event.target.value)
    }
    if(event.target.value >= product.quantity){
      updateItemFakkhaw(productId, product.quantity)
      setCount(product.quantity)
    }
  };


  
  const showAdjustAmount = () => {
      if(adjustAmoumt && nabua==true){
        return(
        <input type="number" value="2" aria-label="Search" className="form-control"
        value={count} 
        onChange={handleChangeNabua(product._id)} 
        style={{width: '100px'}}/>
         
        )

      }if(adjustAmoumt && fakkhaw==true){
        return(
            <input type="number" value="2" aria-label="Search" className="form-control"
            value={count} 
            onChange={handleChangeFakkhaw(product._id)} 
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