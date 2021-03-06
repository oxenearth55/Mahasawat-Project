import React, { useState, useEffect } from 'react';
import { MDBAnimation } from "mdbreact";
import {API} from '../config' 
import {getProducts} from './apiCore';
import { getShop } from '../admin/apiAdmin';
import PopUpCart from './PopUpCart';
import {isAuthenticated} from '../auth' 




const CardProduct = ({product,addCart}) => {

    const [productsBySell, setProductsBySell] = useState([]);
    const [shopObject, setShopObject] = useState([])
    const [error , setError] = useState([]);
    const [run, setRun] = useState(false);
    const {user} = isAuthenticated();


    useEffect(() => {
        loadProductsBySell();
        getShopObject();
        window.scrollTo(0, 0)     



    },[run]);

  
    //SECTION Load shop
    const getShopObject = () => {
        getShop().then(data => {
            if (data.error) {
                setError(data.error);
            } 
            else {
                setShopObject(data);
            }
        });
    };

    // SECTION Load bestseller 
    const loadProductsBySell = () => {
        // NOTE get product by sold
        getProducts('sold',3).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
        // NOTE grab data as a object from backend then store in State (Array of Object)
                setProductsBySell(data);
            }
        });
    };


    //SECTION Show Icon 
    const showOutStock = () => {
      if(product.quantity <=0){
      return(
        <>
        <span class="badge  badge-danger product mb-4 ml-xl-0 ml-4">
                        สินค้าหมด
                </span>

        </>
      )
      }
    }

    const showBestSeller = () =>
    {
        return(
            <div>
        {
        productsBySell.map((p,i) => {
            if(p._id === product._id){
                return(<span class="badge badge-secondary product mb-4 ml-xl-0 ml-4">
                        สินค้าขายดี
                </span>
                )}

        })}</div>


        );

    };

    const showShop = () =>{
        return(
            <div>
                   {
        shopObject.map((s,i) => {
            if(s._id === product.shop){
                return(<span class="badge badge-dark product mb-4 ml-xl-0 ml-4">
                        {s.name}
                </span>
                )}

        })}</div>


        )


    }


    const displayIcons = () => (
        <div className="row">

            <MDBAnimation reveal type="pulse" duration="1s" delay="1s">

                <div className="mx-0">
                    {showShop()}
                </div>
            </MDBAnimation>

            <MDBAnimation reveal type="pulse" duration="1s" delay="1.5s">

                <div className="mx-0">
                {showBestSeller()} 
                </div>
                <div className="mx-0">
                {showOutStock()} 
                </div>
            </MDBAnimation>

        </div>

    )



   
const Showbutton = () =>{
  if(isAuthenticated()){
  if(product.quantity>0 && user.role !== 1 && user.role !==2){
    return(<>
     <button type="button" onClick={() => {addCart(product); }} data-target="#modalAbandonedCart" class="btn btn-primary btn-rounded" data-toggle="modal">
        <i class="fas fa-cart-plus mr-2" taria-hidden="true"></i> หยิบลงรถเข็น
        </button></>)
  }
}else if(isAuthenticated() ==false && product.quantity>0){
  return(<>
    <button type="button" onClick={() => {addCart(product); }} data-target="#modalAbandonedCart" class="btn btn-primary btn-rounded" data-toggle="modal">
       <i class="fas fa-cart-plus mr-2" taria-hidden="true"></i> หยิบลงรถเข็น
       </button></>)
}
}


    //SECTION Render

return(
  <>
  
<div class="container my-5 py-5 z-depth-1">


{/* <!--Section: Content--> */}
<section class="text-center">

  {/* <!-- Section heading --> */}
  <h3 class="font-weight-bold mb-5">รายละเอียดสินค้า</h3>

  <div class="row">

    <div class="col-lg-6">

      {/* <!--Carousel Wrapper--> */}
      {/* <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel"> */}
    <div>
        {/* <!--Slides--> */}
        <div >
          {/* <div class="carousel-item active"> */}
          <div>
            <img src={`${API}/product/photo/${product._id}`} 
              alt="First slide" class="img-fluid"/>
          </div>
          {/* <div class="carousel-item">
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/18.jpg"
              alt="Second slide" class="img-fluid"/>
          </div>
          <div class="carousel-item">
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/19.jpg"
              alt="Third slide" class="img-fluid"/>
          </div> */}
        </div>
        {/* <!--/.Slides--> */}

        {/* <!--Thumbnails--> */}
        {/* <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a> */}
        {/* <!--/.Thumbnails--> */}

      </div>
      {/* <!--/.Carousel Wrapper--> */}

    </div>

    <div class="col-lg-5 text-center text-md-left">

      <h2 class="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
    <strong>{product.name}</strong>
      </h2>

      
      {displayIcons()}

     

     <MDBAnimation reveal type="pulse" duration="1s" delay="2.2s">

      <h3 class="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
        <span class="red-text font-weight-bold">
    <strong>฿{product.price}</strong>
        </span>
        {/* <span class="grey-text">
          <small>
            <s>฿200</s>
          </small>
        </span> */}
      </h3>
      </MDBAnimation>

      <MDBAnimation reveal type="pulse" duration="1s" delay="0.3s">

      {/* <!--Accordion wrapper--> */}
      <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

        {/* <!-- Accordion card --> */}

        <div class="card">

          {/* <!-- Card header --> */}
          <div class="card-header" role="tab" id="headingOne1">
            <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
              aria-controls="collapseOne1">
              <h5 class="mb-0">
                คำอธิบาย
                <i class="fas fa-angle-down rotate-icon"></i>
              </h5>
            </a>
          </div>

          {/* <!-- Card body --> */}
          <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
            data-parent="#accordionEx">
            <div class="card-body">
              {product.description}
            </div>
          </div>
        </div>
        {/* <!-- Accordion card --> */}

        {/* <!-- Accordion card --> */}
        <div class="card">

          {/* <!-- Card header --> */}
          <div class="card-header" role="tab" id="headingTwo2">
            <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
              aria-expanded="false" aria-controls="collapseTwo2">
              <h5 class="mb-0">
                รายละเอียด
                <i class="fas fa-angle-down rotate-icon"></i>
              </h5>
            </a>
          </div>

          {/* <!-- Card body --> */}
          <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
            data-parent="#accordionEx">
            <div class="card-body">
            {product.detail}
            </div>
          </div>
        </div>
        {/* <!-- Accordion card --> */}

        {/* <!-- Accordion card --> */}
       
        {/* <!-- Accordion card --> */}

      </div>
      </MDBAnimation>
      {/* <!--/.Accordion wrapper--> */}

      {/* <!-- Add to Cart --> */}
      <section >
       <div>

          <div class="row mt-3">
            <div class="col-md-12 text-center text-md-left text-md-right">
            {Showbutton()}
                <PopUpCart/>
           
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /.Add to Cart --> */}

    </div>

  </div>

</section>
{/* <!--Section: Content--> */}


</div>
{/* {showRelated()} */}

</>

    );
}


export default CardProduct;