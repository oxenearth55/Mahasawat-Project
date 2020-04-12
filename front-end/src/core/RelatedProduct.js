import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {API} from '../config' 
import {addNabuaItem,addFakkhawItem,} from './cartHelpers'; 
import PopUpCart from './PopUpCart';



const RelatedProduct = ({r}) => {
    
    

    
    const addToCartRelated = (p) => {
        if(p.shop._id =='5e6a17a35c566806d6a101dd'){
          addNabuaItem(p);
        }
      else if(p.shop._id =='5e6a17ac5c566806d6a101de'){
        addFakkhawItem(p)
      }
    }

 //SECTION Show related Product 
 const showRelated = () => (
       
           <>
   <div class="col-lg-4 col-md-4 mb-4">
   
   <div class="waves-effect waves-light"><img
       src={`${API}/product/photo/${r._id}`}
       class="img-fluid"
       alt=""/></div>
   
   <div class="card">
     <div class="card-body">
   
         <p class="mb-1"><a href="" class="font-weight-bold black-text">{r.name}</a></p>
   
         {/* <p class="mb-1"><small class="mr-1"><s>$599</s></small><strong>${r.price}</strong></p> */}
   
   
       {/* <div class="amber-text fa-xs mb-1">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="far fa-star"></i>
       </div> */}
   
       <button  onClick ={()=>addToCartRelated(r)} data-toggle="modal" data-target="#modalAbandonedCart"  type="button" class="btn btn-black btn-rounded btn-sm px-3">ADD CART</button>
       <PopUpCart/>

       <Link to= {`/product/${r._id}`}>
       <button type="button" class="btn btn-outline-black btn-rounded btn-sm px-3 waves-effect">SEE MORE</button>
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

    </>
  )   

} 

export default RelatedProduct; 