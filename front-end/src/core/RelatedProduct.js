import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {API} from '../config' 
import {addNabuaItem,addFakkhawItem,} from './cartHelpers'; 
import PopUpCart from './PopUpCart';
import {isAuthenticated} from '../auth' 




const RelatedProduct = ({r}) => {
    
  const {user} = isAuthenticated();

    const addToCartRelated = (p) => {
        if(p.shop._id =='5e6a17a35c566806d6a101dd'){
          addNabuaItem(p);
        }
      else if(p.shop._id =='5e6a17ac5c566806d6a101de'){
        addFakkhawItem(p)
      }
    }

const showAddCartBtn = () => {
  if(isAuthenticated()){
    if(user.role !== 1 && user.role !==2 && r.quantity>0){
        return(
            <>
            <button  onClick ={()=>addToCartRelated(r)} data-toggle="modal" data-target="#modalAbandonedCart"  type="button" class="btn btn-black btn-rounded btn-sm px-3">หยิบลงรถเข็น</button>
       <PopUpCart/>
            </>
        )
        }
}else if(isAuthenticated() ==false && r.quantity>0){
    return(
        <>
        <button  onClick ={()=>addToCartRelated(r)} data-toggle="modal" data-target="#modalAbandonedCart"  type="button" class="btn btn-black btn-rounded btn-sm px-3">หยิบลงรถเข็น</button>
       <PopUpCart/>
        </>
    )

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
   

      {showAddCartBtn()}
       

       <Link to= {`/product/${r._id}`}>
       <button type="button" class="btn btn-outline-black btn-rounded btn-sm px-3 waves-effect">ดูเพิ่มเติม</button>
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