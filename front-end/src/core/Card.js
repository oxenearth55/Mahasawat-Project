import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ProductImage from './ProductImage';
import {addItem,removeItem} from './cartHelpers'; 
import { updateCategory } from '../admin/apiAdmin';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";





const Card = ({

  product,cartUpdate = false,
  showAddToCartButton =true,
  showRemoveProductButton = false, 
  setRun = f => f, // NOTE default value of function 
  run = undefined  // NOTE default value of undefined 
}) => {

  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);
 


   const addToCart = () => {
    // console.log('added');
    addItem(product, setRedirect(true));
  };

//NOTE When user add product to cart, a page will display cart page automatically
  const shouldRedirect = redirect => {
    if(redirect){
      return <Redirect to ="/cart" />
    }
  };

  
  

  //NOTE grab product Id 
  const handleChange = productId => event => {
    setRun(!run); //NOTE run useEffect in parent Cart
    //NOTE Make sure that value don't contain negative value
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if(event.target.value >= 1){
      // updateItem(productId, event.target.value)
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
        <button onClick = {addToCart} className="btn btn-danger">
        Add to Cart
      </button>
      )
    );
};

// NOTE Show remove button in Cart 

const showRemoveButton = showRemoveProductButton => {
  
  return (
      showRemoveProductButton &&(
        <button onClick = {() => {removeItem(product._id); setRun(!run);}}
        className="btn btn-danger">
Remove       </button>
      )
    );
};


const showStock = quantity => {
  return quantity > 0 ? (
    <span className="badge badge-primary badge-pill">In Stock </span>
  ) : (
    <span className="badge bg-danger badge-primary badge-pill">Out of Stock </span>
  );
};   

const showAddandRemmoveBtn = () =>{
  if(showRemoveProductButton){
    return(
      <div className="col-6">
      {showRemoveButton(showRemoveProductButton)}
      </div>
    )
  
  }
    
    else if(showAddToCartButton){
      return(
        <div className="col-6">
          { showAddCartBtn(showAddToCartButton)}
        </div>
      );
    }
   
    
  };

  const showCard = () =>{
    return(
<MDBCardGroup>
      <MDBCard>
      <ProductImage className="card-img-top img-responsive img-card" item={product} url="product"/>
        <MDBCardBody>
          <MDBCardTitle tag="h5"> {product.name} </MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </MDBCardText>
          <Link to= {`/product/${product._id}`}>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
</Link>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>


        </MDBCardBody>
      </MDBCard>
      </MDBCardGroup>


    );
  }

  return(
    <div className="card">
      <ProductImage className="card-img-top img-responsive img-card" item={product} url="product"/>
      <div className="card-body">
      {shouldRedirect(redirect)}

        <h5 className="card-title">
          {product.name}  </h5>
          {/* NOTE Show description only 0 to .. character  */}
          <p className="card-text" style={{color: 'red'}} >฿ {product.price} </p> 
       
         <div className="row mb-3">
          {showStock(product.quantity)}
          </div>

         <div className="row">
              {/* NOTE Link to product that came from clicking */}
         <div className="col-6">
          <Link to= {`/product/${product._id}`}>
            <button className="btn btn-outline-warning">
              See Product
            </button>
          </Link>
          </div>

          {showAddandRemmoveBtn()}
        

          


        

         </div>
   
 
          {showCartUpdateOptions(cartUpdate)}
         
      </div>
    </div>
  );
}
 

export default Card;
