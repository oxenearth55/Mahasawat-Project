import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ProductImage from './ProductImage';
import {addItem} from './cartHelpers'; 


const Card = ({product}) => {
  return(
  
    <div className="card">
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
          <Link to="/shop">
            <button className="btn button-outline-warning">
              Add to Cart
            </button>
          </Link>
          
          
         
      </div>
    </div>
  );
}
 

export default Card;
