import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { getCart, getNabuaProducts,getfakkhawProducts } from './cartHelpers';
import {addItem, updateItem,removeItem} from './cartHelpers'; 
import Card from './Card';
import Checkout from './Checkout';
import {API} from '../config' 
import CartAdjust from './CartAdjust'
import Checkout2 from './CheckOut2';



const Cart = () => {
    //NOTE items contain products that was selected from local storage
    const [items, setItems] = useState([]);
    //NOTE useEffect will only update component when run state changes 
    const [run, setRun] = useState(false);
    const [nabuaProducts,setNabuaProducts] = useState([]);
    const [fakkhawProducts,setFakkhawProducts] = useState([]);
    const [shop,setShop] = useState('');


    



    //SECTION useEffect 
    useEffect(() => {
        setItems(getCart()); //NOTE get object (cart) from local storage
        setNabuaProducts(getNabuaProducts());
        setFakkhawProducts(getfakkhawProducts());
    }, [run]);

    //SECTION Display Cart 

   const showItemsFakkhaw = (items) =>{
    return (
        <div class="container my-5 py-3 z-depth-1 rounded">

        
        {/* <!--Section: Content--> */}
        <section class="dark-grey-text">
      
          {/* <!-- Shopping Cart table --> */}
          <div class="table-responsive">
      
            <table class="table product-table mb-0">
      
              {/* <!-- Table head --> */}
              <thead class="mdb-color lighten-5">
                <tr>
                  <th></th>
                  <th class="font-weight-bold">
                    <strong>Product</strong>
                  </th>
                 
                  
                  <th class="font-weight-bold">
                    <strong>Price</strong>
                  </th>
                  <th class="font-weight-bold">
                    <strong>QTY</strong>
                  </th>
                  {/* <th class="font-weight-bold">
                    <strong>Amount</strong>
                  </th> */}
                   <th class="font-weight-bold">
                    <strong>Remove</strong>
                  </th>
                  <th></th>
                </tr>
              </thead>
              {/* <!-- /.Table head --> */}
      
              {/* <!-- Table body --> */}
             
        
        {/* //ANCHOR Table body */}
        <tbody>
            {items.map((product, i) => {  
              
                return(
        <tr>
        <th scope="row">
          <img src={`${API}/product/photo/${product._id}`} alt="" class="img-fluid z-depth-0 cartPhoto" />
        </th>
        <td>
          <h5>
            <strong class="mt-3">{product.name}</strong>
          </h5>
          {/* <p class="text-muted">Apple</p> */}
        </td>
       
        
        <td>฿{product.price}</td>
        <td>
    <CartAdjust product={product} productPrice={product.price} adjustAmoumt={true}
    setRun={setRun} run={run} 
/>           
</td>
        {/* <td class="font-weight-bold">
            <strong>฿ <CartAdjust product={product} productPrice={product.price} showEachTotal={true}
    
/>           </strong>
        </td> */}
        <td>
            
          <button onClick = {() => {removeItem(product._id); setRun(!run);}} type="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
            title="Remove item">X
          </button>
          


        </td>
      </tr>      
                )})}
           <tr>
      <td colspan="3"></td>
      <td>
        <h4 class="mt-2">
          <strong>Total</strong>
        </h4>
      </td>
      <td class="text-right">
        <h4 class="mt-2">
          <strong>฿{getTotalFakkhaw()}</strong>
        </h4>
      </td>
      <td colspan="3" class="text-right">
      
      </td>
    </tr>
           </tbody>
              {/* //ANCHOR Table body */}
              </table>

</div>
{/* <!-- /.Shopping Cart table --> */}

</section>
{/* <!--Section: Content--> */}


</div>


    );

   }

    //SECTION Display products from local storage 
    const showItemsNabua = (items) => {
      
        return (
            <div class="container my-5 py-3 z-depth-1 rounded">

            
            {/* <!--Section: Content--> */}
            <section class="dark-grey-text">
          
              {/* <!-- Shopping Cart table --> */}
              <div class="table-responsive">
          
                <table class="table product-table mb-0">
          
                  {/* <!-- Table head --> */}
                  <thead class="mdb-color lighten-5">
                    <tr>
                      <th></th>
                      <th class="font-weight-bold">
                        <strong>Product</strong>
                      </th>
                     
                      
                      <th class="font-weight-bold">
                        <strong>Price</strong>
                      </th>
                      <th class="font-weight-bold">
                        <strong>QTY</strong>
                      </th>
                      {/* <th class="font-weight-bold">
                        <strong>Amount</strong>
                      </th> */}
                       <th class="font-weight-bold">
                        <strong>Remove</strong>
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  {/* <!-- /.Table head --> */}
          
                  {/* <!-- Table body --> */}
                 
            
            {/* //ANCHOR Table body */}
            <tbody>
                {items.map((product, i) => {  
                  
                    return(
            <tr>
            <th scope="row">
              <img src={`${API}/product/photo/${product._id}`} alt="" class="img-fluid z-depth-0 cartPhoto"/>
            </th>
            <td>
              <h5>
                <strong class="mt-3">{product.name}</strong>
              </h5>
              {/* <p class="text-muted">Apple</p> */}
            </td>
           
            
            <td>฿{product.price}</td>
            <td>
            
    <CartAdjust product={product} productPrice={product.price} adjustAmoumt={true}
    setRun={setRun} run={run} 
/>           
</td>

            {/* <td class="font-weight-bold">
                <strong>฿ <CartAdjust product={product} productPrice={product.price} showEachTotal={true}
        
/>           </strong>
            </td> */}
            <td>
                
              <button onClick = {() => {removeItem(product._id); setRun(!run);}} type="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
                title="Remove item">X
              </button>
            </td>
          </tr>      
                    )})}
               <tr>
          <td colspan="3"></td>
          <td>
            <h4 class="mt-2">
              <strong>Total</strong>
            </h4>
          </td>
          <td class="text-right">
            <h4 class="mt-2">
              <strong>฿{getTotalNabua()}</strong>
            </h4>
          </td>
          <td colspan="3" class="text-right">
          
          </td>
        </tr>
               </tbody>
                  {/* //ANCHOR Table body */}
                  </table>

</div>
{/* <!-- /.Shopping Cart table --> */}

</section>
{/* <!--Section: Content--> */}


</div>


        );
    };
//NOTE if not have anything in localsotage (cart)
    const noItemsMessage = () => {
        if(items.length <=0){
        return(    
            <h2>
                Your cart is empty. <br /> <Link to="/shop/:searchResult/:search">Continue shopping</Link>
            </h2>
        );

        }else{
            return(
            <>
             <Checkout
                  
                  nabuaProducts={nabuaProducts}
                  nabuaTotal={getTotalNabua()}
                  fakkhawProducts={fakkhawProducts}
                  fakkhawTotal={getTotalFakkhaw()}
                   setRun={setRun} 
                   run={run}
                   
                   />


            </>
            );
        }
    
};

//SECTION Display shop related to product.shop  
const [showNabua,setShowNabua] =useState (false); // use to display shop if it is valid
const [showfakkhawProducts,setShowFakkhawProducts] =useState(false);




 


//SECTION show total from each shop

const showTotal = () => {
    //Nbbua
    if(shop === 'nabua'){
        return(
            <>
            {getTotalNabua()}
            </>
        )
        //Fakkhaw
    }else if(shop === 'fakkhaw'){
            return(
                <>
                {getTotalFakkhaw()}
                </>
            )
    }
}
   


const getTotalNabua = () => {
       
    return nabuaProducts.reduce((currentValue, nextValue) => { // NOTE reduce method will calculate every products in Cart
        return currentValue + nextValue.count * nextValue.price // NOTE return value of each product from caculating
    }, 0)
}

const getTotalFakkhaw = () => {
       
    return fakkhawProducts.reduce((currentValue, nextValue) => { // NOTE reduce method will calculate every products in Cart
        return currentValue + nextValue.count * nextValue.price // NOTE return value of each product from caculating
    }, 0)
}

//SECTION Display products 

const displayNabuaProducts = () =>{
    if(nabuaProducts.length > 0){
        return(
    <div>
        <h2 className="text-white bg-dark text-center">สินค้าของร้านนาบัวลุงแจ่ม</h2>
        {/* <h2 className="border rounded-lg col-2 bg-dark text-white">Total: ${getTotalNabua()}</h2>     */}
        {showItemsNabua(nabuaProducts)} 
    </div>
        );
    } 
    
    
}

const diplayFakkhawProducts = () =>{
    if(fakkhawProducts.length > 0 ){
        return(
        <>
            <h2 className="text-white bg-dark text-center">สินค้าของร้านฟักข้าว</h2>
            {/* <h2>Total: ${getTotalFakkhaw()}</h2>  */}
            {showItemsFakkhaw(fakkhawProducts)}
        </>

        );
    }
} 



//SECTION Render 
    return (
        <Layout
            title="Shopping Cart"
            description="Manage your cart items. Add remove checkout or continue shopping."
            className="container-fluid"
            headerImg="cartImgLayout"
        >

   <>
        {displayNabuaProducts()}
        {diplayFakkhawProducts()}

        {noItemsMessage()}


   </>


              

        </Layout>
    );
}


export default Cart;