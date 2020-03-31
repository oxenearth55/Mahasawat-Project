import React, { useState, useEffect } from 'react';
import Shop from './Fakk_Photo/shop.jpg';
import Fakkhaws from './Fakk_Photo/fakkhaws.jpg';
import { MDBAnimation } from 'mdbreact';

const Blog1 =()=>(

    <>
              <MDBAnimation reveal type="fadeInUp">

    <div class="container my-5 py-5 z-depth-1">


{/* <!--Section: Content--> */}
<section class="dark-grey-text text-center">
  
  <h3 class="font-weight-bold pt-4 mb-4">บ้านฟักข้าวคุณขนิษฐา</h3>
  
  <h5 class="font-weight-bold font-italic mb-5">“กิจการในกลุ่มแปรรูปผลิตภัณฑ์จากฟักข้าวเกษตรพัฒนา"
  </h5>

  <div class="row mx-lg-5 mx-md-3">
    <div class="col-md-6 mb-4">
      
      <div class="view mb-5">
        <img src={Shop} class="img-fluid" alt="smaple image"/>
      </div>

      <h5 class="font-weight-normal text-muted">บ้านฟักข้าวได้นำองค์ความรู้ต่างๆมาพัฒนาสินค้าคุณภาพ</h5>

       </div>
       <div class="col-md-6 mb-4">
      
      <div class="view mb-5">
        <img src={Fakkhaws}class="img-fluid" alt="smaple image"/>
      </div>

      <h5 class="font-weight-normal text-muted">
      ผลิตภัณฑ์ส่วนใหญ่ของเราผลิตมาจากผลฟักข้าว
      </h5>
      {/* บ้านฟักข้าวได้นำผลฟักข้าวมาแปรรูปเป็นสินค้าที่มีคุณค่าทางโภชนาการมากมาย */}
    </div>
  </div>

</section>
{/* <!--Section: Content--> */}


</div>

</MDBAnimation>

    </>



);


export default Blog1 ;