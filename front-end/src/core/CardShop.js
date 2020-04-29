import React, { useState, useEffect } from 'react';
import { Link,Redirect } from 'react-router-dom';
import {API} from '../config' 
import {addItem} from './cartHelpers'; 
import ShowIcon from './ShowIcon';
import Search from './Search';
import { isAuthenticated } from "../auth";


const CardShop = ({p,index,filter ,convert,goToDetail,addToCart,goToCart,convert2}) => {
  const {user} = isAuthenticated();

    
const Showbutton = () =>{
  if(isAuthenticated()){
  if(p.quantity>0 && user.role !== 1 && user.role !==2 ){
    return(<>
     <button  type="button" onClick={() => {addToCart(p); }} data-target={`#${convert2(index)}`}  data-toggle="modal" class=" py-2 btn-block btn btn-outline-info btn-rounded waves-effect px-1" >
        <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> หยิบลงรถเข็น
      </button>
        
        </>
        
        
        )
  }
}else if(isAuthenticated() ==false && p.quantity>0){
    return(<>
     <button  type="button" onClick={() => {addToCart(p); }} data-target={`#${convert2(index)}`}  data-toggle="modal" class=" py-2 btn-block btn btn-outline-info btn-rounded waves-effect px-1" >
        <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> หยิบลงรถเข็น
      </button>
        
        </>
        
        
        )
  }

}



  return(
    <>
    {/* <!-- Modal --> */}
  <div class="modal fade" id={convert(index)} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>

          <div class="row">

            <div class="col-lg-6">

              {/* <!--Carousel Wrapper--> */}
              <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails"
                data-ride="carousel">

                {/* <!--Slides--> */}
                <div class="carousel-inner text-center text-md-left" role="listbox">
                  <div class="carousel-item active">
                    <img src={`${API}/product/photo/${p._id}`}
                      alt="First slide" class="img-fluid mb-3"/>
                  </div>
              
                </div>
                {/* <!--/.Slides--> */}

             

              </div>
              {/* <!--/.Carousel Wrapper--> */}

            </div>

            <div class="col-lg-5 text-center text-md-left">

              <h2
                class="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                <strong className="mt-5">{p.name}</strong>
              </h2>
              <ShowIcon product={p}/>
              <h3 class="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                <span class="red-text font-weight-bold">
              <strong>฿{p.price}</strong>
                </span>
                {/* <span class="grey-text">
                  <small>
                    <s>$89</s>
                  </small>
                </span> */}
              </h3>

              {/* <!--Accordion wrapper--> */}
              <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

                {/* <!-- Accordion card --> */}
                <div class="card">

                  {/* <!-- Card header --> */}
                  <div class="card-header stylish-color-dark" role="tab" id="headingOne1">
                    <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                      aria-controls="collapseOne1">
                      <h5 class="mb-0 text-white">
                        คำอธิบาย
                        <i class="fas fa-angle-down rotate-icon"></i>
                      </h5>
                    </a>
                  </div>

                  {/* <!-- Card body --> */}
                  <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                    data-parent="#accordionEx">
                    <div class="card-body">
                      {p.description}
                    </div>
                  </div>
                </div>
                {/* <!-- Accordion card --> */}

                {/* <!-- Accordion card --> */}
                <div class="card">

                  {/* <!-- Card header --> */}
                  <div class="card-header mdb-color lighten-1" role="tab" id="headingTwo2">
                    <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                      aria-expanded="false" aria-controls="collapseTwo2">
                      <h5 class="mb-0 text-white">
                        รายละเอียด
                        <i class="fas fa-angle-down rotate-icon"></i>
                      </h5>
                    </a>
                  </div>

                  {/* <!-- Card body --> */}
                  <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
                    data-parent="#accordionEx">
                    <div class="card-body">
                      {p.detail}                       
                    </div>
                  </div>
                </div>
                {/* <!-- Accordion card --> */}

               

              </div>
              {/* <!--/.Accordion wrapper--> */}

              {/* <!-- Add to Cart --> */}
              <section >
                <div class="mt-4">
                  
                  <div class="row ">
                  <div class="col-md-5 text-center text-md-right ">
                  <Link to= {`/product/${p._id}`}>

                      <button  type="button" onClick={() => {goToDetail(p); }} data-dismiss="modal" class="btn-block btn-primary btn-rounded mb-sm-5 py-2  btn btn-outline-default btn-rounded waves-effect px-0 ">
                        ดูเพิ่มเติม
                      </button>   
                  </Link>                   
                      </div>

                    <div class="col-md-6 text-center text-md-left ">
                    {Showbutton()}

 
                  </div>

               
                  </div>
                </div>

                        {/* Pop Up Cart */}
                         {/* //ANCHOR pop Up */}

          

{/* // <!-- Modal: modalAbandonedCart--> */}
<div class="modal fade right" id={convert2(index)} tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
 aria-hidden="true" data-backdrop="false">
 <div class="modal-dialog modal-side modal-bottom-right modal-notify modal-info" role="document">
   {/* <!--Content--> */}
   <div class="modal-content">
     {/* <!--Header--> */}
     <div class="modal-header">
       <p class="heading">Product in the cart
       </p>

       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true" class="white-text">&times;</span>
       </button>
     </div>

     {/* <!--Body--> */}
     <div class="modal-body">

       <div class="row">
         <div class="col-3">
           <p></p>
           <p class="text-center"><i class="fas fa-shopping-cart fa-4x"></i></p>
         </div>

         <div class="col-9">
           <p>สินค้าชินนี้อยู่ในรถเข็นเรียบร้อย</p>
           <p>ต้องการดูรถเข็นหรือไม่?</p>

         </div>
       </div>
     </div>

     {/* <!--Footer--> */}
     <div class="modal-footer justify-content-center " >
     
       <button type="button" onClick={goToCart} data-dismiss="modal"  class="btn btn-info">Go to cart</button>
     
       <a type="button" class="btn btn-outline-info waves-effect" data-dismiss="modal">Cancel</a>
     </div>
   </div>
   {/* <!--/.Content--> */}
 </div>
</div>
{/* // <!-- Modal: modalAbandonedCart--> */}


             {/* {ANCHOR pop Up} */}
                   {/* Pop Up Cart */}


                   
              </section>
              {/* <!-- /.Add to Cart --> */}

            </div>

          </div>

        </div>
      </div>
    </div>
  </div>



  {/* <!-- Grid column --> */}
  <div class="col-lg-4 col-md-12 mb-4">

    {/* <!-- Card --> */}
    <div class="card card-ecommerce"  data-target={`#${convert(index)}`} data-toggle="modal" >
      <div class="view overlay ">
        <img src={`${API}/product/photo/${p._id}`} class="img-fluid "
          alt="Sample image" />
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>
      <div class="card-body">
<h5 class="card-title mb-1"><strong><a class="dark-grey-text">{p.name}</a></strong></h5>
<div className="row">
{/* <span class="badge grey mb-2 mr-1">best rated</span>
      <span class="badge badge-info mb-2 mr-1">{p.category.name}</span> */}
<ShowIcon product={p}/>  </div>


        {/* <ul class="rating">
          <li><i class="fas fa-star blue-text"></i></li>
          <li><i class="fas fa-star blue-text"></i></li>
          <li><i class="fas fa-star blue-text"></i></li>
          <li><i class="fas fa-star blue-text"></i></li>
          <li><i class="fas fa-star blue-text"></i></li>
        </ul> */}
        <div class="card-footer pb-0">
          <div class="row mb-0">
      <span class="float-left"><strong>฿{p.price}</strong></span>
            <span class="float-right">
           <i class="fas fa-shopping-cart ml-3 text-right"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Card --> */}

  </div>
  {/* <!-- Grid column --> */}


    </>


)
      }


export default CardShop
