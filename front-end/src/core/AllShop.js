import React, { useState, useEffect } from 'react';
import { Link,Redirect } from 'react-router-dom';
import {API} from '../config' 
import {addItem} from './cartHelpers'; 
import ShowIcon from './ShowIcon';
import CardShop from './CardShop';




const AllShop = ({product,search=false,filter}) => {
    
    //SECTION State
    const [cartRedirect, setCartRedirect] = useState(false);
    const [productRedirect, setProductRedirect] = useState(false);
    const [selectProduct, setSelectProduct] = useState([]);


    const addToCart = (p) => {
        addItem(p);

    };

    const notFoundProduct = (product) =>{
      if(product.length == 0){
        return(
          <h5 className="text-center alert alert-warning">ไม่พบสินค้าที่ท่านต้องการ</h5>

        )
      }

    }


//SECTION Set Modal
const convert  = (index) => {
 const number = index
 
 return  'a'+number;

 
}
const convert2 = (index) => {
  const number = index
 
 return  'b'+number;

}

//SECTION Redirect after having a trigger

//NOTE Redirect to Cart page by wating a user to click ADD CART btn. This method always render
const shouldRedirect = cartRedirect => {
  if(cartRedirect){
    return <Redirect to ="/cart" />
  
};
}
//NOTE When having trigger on ADD CART btn, set this state to true
const goToCart = () =>{
  setCartRedirect(true);
}




//NOTE Redirect to Product Detail Page by wating a user to click SEE MORE btn. This method always render

const redirectDetail = (p) => {
  if(productRedirect){
    return <Redirect to ={`/product/${p._id}`}/>
  }

}

//NOTE When having trigger on SEE MORE btn, set this state to true
// this mehod grab product from map function and set it into the state
const goToDetail = (p) =>{
  setProductRedirect(true);
  setSelectProduct(p);
}


const searchShow =() => {
  if(search){
  return(
    <>
     <div class="container my-5">

{/* <!-- Section: Block Content --> */}
<section>
  
  <h3 class="font-weight-bold text-center dark-grey-text mb-5">สินค้า</h3>
  {notFoundProduct(product)}

  {/* <!-- Grid row --> */}
  <div class="row">

  { product.map((p,index) => {
    for (var i=0; i < filter.filters.category.length; i++) {
  if(p.category == filter.filters.category[i]){
  return(
      <>
<CardShop p={p} index={index} convert={convert} goToDetail={goToDetail} 
      addToCart={addToCart} goToCart={goToCart} convert2={convert2} />
   </>
     )
     
    
    }} if(filter.filters.category.length==0){
        return(
        <>
<CardShop p={p} index={index} convert={convert} goToDetail={goToDetail} 
      addToCart={addToCart} goToCart={goToCart} convert2={convert2} />
        </>
        )
     }


} 
          
          )}

  </div>
  {/* <!-- Grid row --> */}


</section>
{/* <!-- Section: Block Content --> */}

</div>
    </>
  )
  }
}

const defaultShow =() =>{
  if(!search){

       return( <>
        <div class="container my-5">

{/* <!-- Section: Block Content --> */}
<section>
  
  <h3 class="font-weight-bold text-center dark-grey-text mb-5">สินค้า</h3>
  {notFoundProduct(product)}

  {/* <!-- Grid row --> */}
  <div class="row">

  { product.map((p,index) => (
      <>
      <CardShop p={p} index={index} convert={convert} goToDetail={goToDetail} 
      addToCart={addToCart} goToCart={goToCart} convert2={convert2} />

    </>
          )
          
          )}

  </div>
  {/* <!-- Grid row --> */}


</section>
{/* <!-- Section: Block Content --> */}

</div>
        </>)

  }
  }

   return(
    <>
    {shouldRedirect(cartRedirect)}
    {redirectDetail(selectProduct)}
    {defaultShow()}
    {searchShow()}

    
    </>
  )   

}


export default AllShop; 