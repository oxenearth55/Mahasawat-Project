import React from "react";
import {Link} from 'react-router-dom'
//ANCHOR Photo
import magnet from '../../photo/magnet1.png'
import tea from '../../photo/tea.png'



const Example = () => {
  return (
    <div class="container my-5 py-5 ">


    {/* <!--Section: Content--> */}
    <section class="text-center">


      {/* <!--Grid row--> */}
      <div class="row">

        {/* <!--Grid column--> */}
        <div class="col-lg-4 col-md-12 mb-4">

          <Link to="/" className="waves-effect waves-light mb-3 "><img
              src={magnet} class="img-fluid"
              style={{width:'50%'}}
              alt=""/></Link>

          <div class="card">
            <div class="card-body">

              <p class="mb-1"><a href="" class="font-weight-bold black-text">JBL DX-320</a></p>

              <p class="mb-1"><small class="mr-1"><s>$599</s></small><strong>$199</strong></p>

              <div class="amber-text fa-xs mb-1">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>

              <button type="button" class="btn btn-black btn-rounded btn-sm px-3">Buy Now</button>
              <button type="button" class="btn btn-outline-black btn-rounded btn-sm px-3 waves-effect">Details</button>

            </div>
          </div>



        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div class="col-lg-4 col-md-6 mb-4">

        <Link to="/" className="waves-effect waves-light mb-3 "><img
              src={tea} class="img-fluid"
              style={{width:'78.7%'}}
              alt=""/></Link>

          <div class="card">
            <div class="card-body">

              <p class="mb-1"><a href="" class="font-weight-bold black-text">Huawei P40</a></p>

              <p class="mb-1"><small class="mr-1"><s>$599</s></small><strong>$399</strong></p>

              <div class="amber-text fa-xs mb-1">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>

              <button type="button" class="btn btn-black btn-rounded btn-sm px-3">Buy Now</button>
              <button type="button" class="btn btn-outline-black btn-rounded btn-sm px-3 waves-effect">Details</button>

            </div>
          </div>

        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div class="col-lg-4 col-md-6 mb-4">
        <Link to="/" className="waves-effect waves-light mb-3 "><img
              src={magnet} class="img-fluid"
              style={{width:'50%'}}
              alt=""/></Link>

          <div class="card">
            <div class="card-body">

              <p class="mb-1"><a href="" class="font-weight-bold black-text">Sony RX-410</a></p>

              <p class="mb-1"><small class="mr-1"><s>$599</s></small><strong>$299</strong></p>

              <div class="amber-text fa-xs mb-1">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>

              <button type="button" class="btn btn-black btn-rounded btn-sm px-3">Buy Now</button>
              <button type="button" class="btn btn-outline-black btn-rounded btn-sm px-3 waves-effect">Details</button>

            </div>
          </div>

        </div>
        {/* <!--Grid column--> */}

      </div>
      {/* <!--Grid row--> */}


    </section>
    {/* <!--Section: Content--> */}


  </div>
  );
}

export default Example;