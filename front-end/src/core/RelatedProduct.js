import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { MDBAnimation, MDBRow, MDBCol } from "mdbreact";
import {API} from '../config' 
import {getProducts} from './apiCore';
import { getShop } from '../admin/apiAdmin';
import {addItem} from './cartHelpers'; 


const RelatedProduct = ({r}) => {
    
    const [redirect, setRedirect] = useState(false);
    const [error , setError] = useState([]);


    const addToCartRelated = () => {
        addItem(r, setRedirect(true));

    };

      //NOTE When user add product to cart, a page will display cart page automatically
  const shouldRedirect = redirect => {
    if(redirect){
      return <Redirect to ="/cart" />
    }
  };


 //SECTION Show related Product 
 const showRelated = () => (
       
           <>
   <div class="col-lg-4 col-md-4 mb-4">
   
   <a href="" class="waves-effect waves-light"><img
       src={`${API}/product/photo/${r._id}`}
       class="img-fluid"
       alt=""/></a>
   
   <div class="card">
     <div class="card-body">
   
         <p class="mb-1"><a href="" class="font-weight-bold black-text">{r.name}</a></p>
   
         <p class="mb-1"><small class="mr-1"><s>$599</s></small><strong>${r.price}</strong></p>
   
   
       {/* <div class="amber-text fa-xs mb-1">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="far fa-star"></i>
       </div> */}
   
       <button  onClick ={addToCartRelated} type="button" class="btn btn-black btn-rounded btn-sm px-3">Buy Now</button>
       <Link to= {`/product/${r._id}`}>
       <button type="button" class="btn btn-outline-black btn-rounded btn-sm px-3 waves-effect">Details</button>
       </Link>
     </div>
   
   
   
   </div>
   
   
   
   {/* <!--Grid column--> */}
   
   
   
   {/* <!--Grid column--> */}
   
   
   
   </div>
   {/* <!--Grid row--> */}
 </>
   
   
   )

   return(
    <>
    {showRelated()}
    {shouldRedirect(redirect)}

    </>
  )   

} 

export default RelatedProduct; 