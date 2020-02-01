import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ProductImage from './ProductImage';

const Card = ({product}) => {
  return(
  
  <div className="col-4 my-2"> 
    <div className="card">
      <ProductImage className="card-img-top" item={product} url="product"/>
      <div className="card-body">
        <h5 className="card-title"/>
          {product.name} 
          {/* NOTE Show description only 0 to .. character  */}
          <p className="card-text">{product.description.substring(0,20)}</p> 
          <Link to="/shop">
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
  </div> 
  );
}
 

export default Card;
