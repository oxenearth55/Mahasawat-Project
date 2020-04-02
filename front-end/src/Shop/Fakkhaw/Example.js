import React, { useState, useEffect } from 'react';
import handwash1 from './Fakk_Photo/handwash1.jpeg';
import handwash2 from './Fakk_Photo/handwash2.jpeg';
import handwash3 from './Fakk_Photo/handwash3.jpeg';
import soap from './Fakk_Photo/soap.jpeg';
import soap2 from './Fakk_Photo/soap2.jpeg';
import soap3 from './Fakk_Photo/soap3.jpeg';
import losion1 from './Fakk_Photo/losion1.jpeg';
import losion2 from './Fakk_Photo/losion2.jpeg';
import losion3 from './Fakk_Photo/losion3.jpeg';
import { MDBAnimation } from 'mdbreact';









const Example =()=>(

    <>
    <div class="container mt-5">


{/* <!--Section: Content--> */}
<section class="dark-grey-text text-center">

  
  
  {/* <!-- Section heading --> */}
  <h3 class="font-weight-bold mb-4 pb-2">ตัวอย่างสินค้าที่แปรรูปด้วยฟักข้าว</h3>
  {/* <!-- Section description --> */}
  <p class="text-muted w-responsive mx-auto mb-5">บ้านฟักข้าวคุณขนิษฐาให้ความสำคัญและใส่ใจกับทุกผลิตผลเพื่อที่จะสร้างสรรค์สิ่งที่ดีที่สุดให้กับคุณ</p>
  
    {/* <!--First row--> */}
    <MDBAnimation reveal type="fadeInUp" duration="1100ms" delay="0.5s">

    <div class="row">
      
      {/* <!--First column--> */}
      <div class="col-12">
        
        {/* <!-- Nav tabs --> */}
        <ul class="nav md-pills flex-center flex-wrap mx-0 " role="tablist">
          <li class="nav-item">
            <a class="nav-link active font-weight-bold" data-toggle="tab" href="#panel31" role="tab">เจลล้างมือ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link font-weight-bold" data-toggle="tab" href="#panel32" role="tab">สบู่</a>
          </li>
          <li class="nav-item">
            <a class="nav-link font-weight-bold" data-toggle="tab" href="#panel33" role="tab">โลชั่น</a>
          </li>
      
        </ul>
        
      </div>
      {/* <!--First column--> */}

  </div>
  {/* <!--First row--> */}
  
  {/* <!--Tab panels--> */}
  <div class="tab-content mt-5">

    {/* <!--Panel 1--> */}
    <div class="tab-pane fade show in active" id="panel31" role="tabpanel">

      {/* <!--First row--> */}
      <div class="row">
        
        {/* <!--First column--> */}
        <div class="col-lg-4 col-md-12 mb-4">
          {/* <!--Featured image--> */}
          <div class="view overlay zoom z-depth-2">
            <img src={handwash1}class="img-fluid"/>
          </div>
          <p class="text-uppercase text-center font-weight-bold text-muted my-4">เจลล้างมือขนาด 200 ml</p>
        </div>
        {/* <!--First column--> */}
        
        {/* <!--Second column--> */}
        <div class="col-lg-4 col-md-6 mb-4">
          {/* <!--Featured image--> */}
          <div class="view overlay zoom z-depth-2">
            <img src={handwash2} class="img-fluid"/>
          </div>
          <p class="text-uppercase text-center font-weight-bold text-muted my-4">เจลล้างมือขนาด 120 ml
 </p>
        </div>
        {/* <!--Second column--> */}
        
        {/* <!--Third column--> */}
        <div class="col-lg-4 col-md-6 mb-4">
          {/* <!--Featured image--> */}
          <div class="view overlay zoom z-depth-2">
            <img src={handwash3}class="img-fluid"/>
          </div>
          <p class="text-uppercase text-center font-weight-bold text-muted my-4">เจลล้างมือขนาด 40 ml</p>
        </div>
        {/* <!--Third column--> */}
        
      </div>
      {/* <!--First row--> */}

    </div>
    {/* <!--Panel 1--> */}

    {/* <!--Panel 2--> */}
    <div class="tab-pane fade" id="panel32" role="tabpanel">

      {/* <!--First row--> */}
      <div class="row">
        
        {/* <!--First column--> */}
        <div class="col-lg-4 col-md-12 mb-4">
          {/* <!--Featured image--> */}
          <div class="view overlay zoom z-depth-2">
            <img src={soap} class="img-fluid"/>
          </div>
          <p class="text-uppercase text-center font-weight-bold text-muted my-4">สบู่ฟักข้าว ขนาด 120 g</p>
        </div>
        {/* <!--First column--> */}
        
        {/* <!--Second column--> */}
        <div class="col-lg-4 col-md-6 mb-4">
          {/* <!--Featured image--> */}
          <div class="view overlay zoom z-depth-2">
            <img src={soap2} class="img-fluid"/>
          </div>
          <p class="text-uppercase text-center font-weight-bold text-muted my-4">สบู่ฟักข้าวรูปผลส้ม ขนาด 50 g</p>
        </div>
        {/* <!--Second column--> */}
        
        {/* <!--Third column--> */}
        <div class="col-lg-4 col-md-6 mb-4">
          {/* <!--Featured image--> */}
          <div class="view overlay zoom z-depth-2">
            <img src={soap3} class="img-fluid"/>
          </div>
          <p class="text-uppercase text-center font-weight-bold text-muted my-4">สบู่ฟักข้าว ขนาด 50 g</p>
        </div>
        {/* <!--Third column--> */}
        
      </div>
      {/* <!--First row--> */}

    </div>
    {/* <!--Panel 2--> */}

    {/* <!--Panel 3--> */}
    <div class="tab-pane fade" id="panel33" role="tabpanel">

      {/* <!--First row--> */}
      <div class="row">
        
        {/* <!--First column--> */}
        <div class="col-lg-4 col-md-12 mb-4">
          {/* <!--Featured image--> */}
          <div class="view overlay zoom z-depth-2">
            <img src={losion1} class="img-fluid"/>
          </div>
          <p class="text-uppercase text-center font-weight-bold text-muted my-4">โลชั่นขนาด 100 g</p>
        </div>
        {/* <!--First column--> */}
        
        {/* <!--Second column--> */}
        <div class="col-lg-4 col-md-6">
          {/* <!--Featured image--> */}
          <div class="view overlay zoom z-depth-2">
            <img src={losion2} class="img-fluid"/>
          </div>
          <p class="text-uppercase text-center font-weight-bold text-muted my-4">โลชั่นขนาด 60 g
            </p>
        </div>
        {/* <!--Second column--> */}
        
        {/* <!--Third column--> */}
        <div class="col-lg-4 col-md-6 mb-4">
          {/* <!--Featured image--> */}
          <div class="view overlay zoom z-depth-2">
            <img src={losion3} class="img-fluid"/>
          </div>
          <p class="text-uppercase text-center font-weight-bold text-muted my-4">โลชั่นแบบเติม 100 g</p>
        </div>
        {/* <!--Third column--> */}

      </div>
      {/* <!--First row--> */}

    </div>
    {/* <!--Panel 3--> */}


  </div>
  {/* <!--Tab panels--> */}
</MDBAnimation>
  </section>


</div>
  

    </>



);


export default Example ;