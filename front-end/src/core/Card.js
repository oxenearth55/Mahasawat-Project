import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ProductImage from './ProductImage';
import {addItem, updateItem,removeItem} from './cartHelpers'; 
import { updateCategory } from '../admin/apiAdmin';


const Card = ({

  product,cartUpdate = false,
  showAddToCartButton =true,
  showRemoveProductButton = false

}) => {

  const {redirect, setRedirect} = useState(false)
  const [count, setCount] = useState(product.count);
 


  
  const addToCart = () => {
    //NOTE add Item to local storage
    addItem(product, () => {
      setRedirect(true)
    })
  }
//NOTE When user add product to cart, a page will display cart page automatically
  const shouldRedirect = redirect => {
    if(redirect){
      return <Redirect to ="/cart"/>
    }
  };

  

  //NOTE grab product Id 
  const handleChange = productId => event => {
    //NOTE Make sure that value don't contain negative value
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if(event.target.value >= 1){
      updateItem(productId, event.target.value)
    }
  };

  const showCartUpdateOptions = cartUpdate => {
    return (cartUpdate && (
    <div className="input-grpup mb-3 ">
      <div className="input-group-prepend">
        <span className="input-group-text">Adjust Quantity</span>
      </div>
   {/* NOTE Send product_.id to metohd handleChange to know that which product (in Cart) that we going to adjust */}
   <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
         </div>
    )
    );
  };


//NOTE Add a product to local storage
const showAddCartBtn = showAddToCartButton => {
  
  return (
      showAddToCartButton &&(
        <button onClick = {addToCart} className="btn button-outline-warning">
        Add to Cart
      </button>
      )
    );
};

// NOTE Show remove button in Cart 

const showRemoveButton = showRemoveProductButton => {
  
  return (
      showRemoveProductButton &&(
        <button onClick = {() => removeItem(product._id)} className="btn button-outline-warning">
Remove       </button>
      )
    );
};

  return(
    <div className="card">
      {shouldRedirect(redirect)}
      <ProductImage className="card-img-top" item={product} url="product"/>
      <div className="card-body">
        <h5 className="card-title"/>
          {product.name} 
          {/* NOTE Show description only 0 to .. character  */}
          <p className="card-text">{product.description.substring(0,20)}</p> 
         
          {/* NOTE Link to product that came from clicking */}
         
          <Link to= {`/product/${product._id}`}>
            <button className="btn button-outline-primary">
              See Product
            </button>
          </Link>
   
           {showAddCartBtn(showAddToCartButton)}
 
          {showRemoveButton(showRemoveProductButton)}
          {showCartUpdateOptions(cartUpdate)}
         
      </div>
    </div>
  );
}
 

export default Card;
