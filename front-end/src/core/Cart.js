import React, { useState, useEffect, Fragment } from 'react';
import Layout from './Layout';
import { getFakkhaw,getNabua,itemTotal} from './cartHelpers';
import {removeFakkhaw,removeNabua,getFakkhawShip,getNabuaShip,emptyFakkhaw,emptyNabua} from './cartHelpers'; 
import Checkout from './Checkout';
import {API} from '../config' 
import CartAdjust from './CartAdjust'
import Shipping from './Shipping'
import PopUpWarn from './PopUpWarn';
import PopUpSuggest from './PopUpSuggest';

const Cart = () => {
    //NOTE items contain products that was selected from local storage
    const [items, setItems] = useState([]);
    //NOTE useEffect will only update component when run state changes 
    const [run, setRun] = useState(false);
    const [nabuaProducts,setNabuaProducts] = useState([]);
    const [fakkhawProducts,setFakkhawProducts] = useState([]);
    const [shop,setShop] = useState('');
    const [itemtotal,setItemtotal] = useState(0);

    const [nabuaShip, setNabuaShip] = useState(); 
    const [fakkhawShip, setFakkhawShip] = useState(); 

    //SECTION useEffect 
    useEffect(() => {
        // setItems(getCart()); //NOTE get object (cart) from local storage; To show that there are any product in Cart or not
        setEmptyShip()
        setNabuaProducts(getNabua());
        setFakkhawProducts(getFakkhaw());
        setItemtotal(itemTotal())
        setFakkhawShip(getFakkhawShip())
        setNabuaShip(getNabuaShip())        
    }, [run]);


    const setEmptyShip = () =>{
      if(fakkhawProducts.length==0){
        emptyFakkhaw();
      }
      if(nabuaProducts.length==0){
        emptyNabua();
      }
    }


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
                    <strong>ชื่อสินค้า</strong>
                  </th>
                 
                  
                  <th class="font-weight-bold">
                    <strong>ราคา</strong>
                  </th>
                  <th class="font-weight-bold">
                    <strong>จำนวน</strong>
                  </th>
                  <th class="font-weight-bold">
                    <strong>สินค้าคงเหลือ</strong>
                  </th>
                   <th class="font-weight-bold">
                    <strong>ลบ</strong>
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
    setRun={setRun} run={run} fakkhaw={true}
/>           
</td>

<td>{product.quantity}</td>

        {/* <td class="font-weight-bold">
            <strong>฿ <CartAdjust product={product} productPrice={product.price} showEachTotal={true}
    
/>           </strong>
        </td> */}
        <td>
            
          <button onClick = {() => {removeFakkhaw(product._id); setRun(!run);}} type="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
            title="Remove item">X
          </button>
          


        </td>
      </tr>      
                )})}
           <tr>


      <td colspan="1">
      
        <h6 class="mt-2 px-5 mx-5">
          <strong>การจัดส่ง</strong>
          <div className="row">
          <Shipping fakkhaw={true} shopId={'5e6a17ac5c566806d6a101de' } setRun={setRun} run={run} />
         
          </div>
        </h6>
        </td>
        <td colspan="2">
        <h5 class="mt-5 ml-5">

        <strong>  ค่าจัดส่ง {fakkhawShip.shippingCost}  </strong>
       </h5>
       </td>

      <td>
        <h5 class="mt-5">
          <strong>ราคาทั้งหมด</strong>
        </h5>
      </td>
      <td class="text-right">
        <h5 class="mt-5">
          <strong>฿{getTotalFakkhaw()}</strong>
        </h5>
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
                        <strong>ชื่อสินค้า</strong>
                      </th>
                     
                      
                      <th class="font-weight-bold">
                        <strong>ราคา</strong>
                      </th>
                      <th class="font-weight-bold">
                        <strong>จำนวน</strong>
                      </th>
                       <th class="font-weight-bold">
                        <strong>สินค้าคงเหลือ</strong>
                      </th> 
                       <th class="font-weight-bold">
                        <strong>ลบ</strong>
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
    setRun={setRun} run={run} nabua={true}
/>           
</td>

<td>{product.quantity}</td>


            {/* <td class="font-weight-bold">
                <strong>฿ <CartAdjust product={product} productPrice={product.price} showEachTotal={true}
        
/>           </strong>
            </td> */}
            <td>
                
              <button onClick = {() => {removeNabua(product._id); setRun(!run);}} type="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
                title="Remove item">X
              </button>
            </td>
          </tr>      
                    )})}
               <tr>
               <td colspan="1">
      
      <h6 class="mt-2 px-5 mx-5">
        <strong>การจัดส่ง</strong>
        <div className="row">
        <Shipping nabua={true} shopId={'5e6a17a35c566806d6a101dd' } setRun={setRun} run={run} />
       
        </div>
      </h6>
      </td>
      <td colspan="2">
      <h5 class="mt-5 ml-5">

      <strong>  ค่าจัดส่ง {nabuaShip.shippingCost}  </strong>
     </h5>
     </td>

    <td>
      <h5 class="mt-5">
        <strong>ราคาทั้งหมด</strong>
      </h5>
    </td>
    <td class="text-right">
      <h5 class="mt-5">
        <strong>฿{getTotalNabua()}</strong>
      </h5>
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
   


const calculateNabuaPrice = () => {
       
  return nabuaProducts.reduce((currentValue, nextValue) => { // NOTE reduce method will calculate every products in Cart
    return currentValue + nextValue.count * nextValue.price // NOTE return value of each product from caculating

    }, 0)
}

const calculateFakkhawPrice = () => {      
    return fakkhawProducts.reduce((currentValue, nextValue) => { // NOTE reduce method will calculate every products in Cart
     return currentValue + nextValue.count * nextValue.price // NOTE return value of each product from caculating

    }, 0)
}

const getTotalFakkhaw = () => {
let total = calculateFakkhawPrice() 
if(fakkhawShip !==undefined){
if(fakkhawShip.shippingCost !== undefined && fakkhawShip!==0){
return total + fakkhawShip.shippingCost
}
else{
  return calculateFakkhawPrice() 
}
}
}

const getTotalNabua = () => {
  let total = calculateNabuaPrice() 
  if(nabuaShip !==undefined){
  if(nabuaShip.shippingCost !== undefined && nabuaShip!==0){
  return total + nabuaShip.shippingCost
  }
  else{
    return calculateNabuaPrice() 
  }
  }
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
            title="ตะกร้ารถเข็น"
            description="สินค้าที่คุณเลือก จะมาอยู่ในตะก้ารถเข็นแห่งนี้"
            className="container-fluid"
            headerImg="cartImgLayout"
        >
<div className="container">
  <div className="row">
    <div className="col  justify-content-end">
    <button type="button"  data-toggle="modal" data-target="#centralModalInfo" class="btn btn-lg  mb-4  btn btn-outline-info waves-effect">วิธีการชำระเงิน</button>

<button type="button"  data-toggle="modal" data-target="#centralModalWarning" class="btn btn-lg  mb-4  btn-outline-warning waves-effect ">คำแนะนำ</button>
</div>
</div>
</div>
  <PopUpSuggest/>

<PopUpWarn/>
        {displayNabuaProducts()}
        {diplayFakkhawProducts()}
        <>
            
            <Checkout
                 
                 nabuaProducts={nabuaProducts}
                 nabuaTotal={getTotalNabua()}
                 fakkhawProducts={fakkhawProducts}
                 fakkhawTotal={getTotalFakkhaw()}
                  setRun={setRun} 
                  run={run}
                  shippingNabua={(getNabuaShip())}
                  shippingFakkhaw={(getFakkhawShip())}
                  itemtotal={itemtotal}

                  />

                  </>
        </Layout>
    );
}


export default Cart;