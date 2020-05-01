import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import fakkhaw from '../../photo/banFakk.jpg'
import nabua from '../../photo/nabua.jpg'












const ShowShop = () => {

    const blog = () =>(
        <div id='shop' class="container my-5">


  {/* <!--Section: Content--> */}
  <section class="magazine-section dark-grey-text">

    {/* <!-- Section heading --> */}
    <h3 class="text-center font-weight-bold mb-4 pb-2 homecomponent-head">จุดเริ่มต้นร้านค้าออนไลน์ชุมชน</h3>
    {/* <!-- Section description --> */}
    <p class="text-center w-responsive mx-auto mb-5 homecomponent-sub">
      ร้านค้าออนไลน์ได้ถูกริเริ่มการใช้งานจาก ทางบ้านฟักข้าวคุณขนิษฐา และนาบัวลุงแจ่ม เพื่อเป็นจุดเริ่มต้น การยกระดับ และพัฒนา
      ไปสู่สหกรณ์ของชุมชน ในอนาคตอันใกล้
    
    </p>
   
  	{/* <!-- Grid row --> */}
    <div class="row">

      {/* <!-- Grid column --> */}
      <div class="col-lg-6 col-md-12">

        {/* <!-- Featured news --> */}
        <div class="single-news mb-4">

          {/* <!-- Image --> */}
          <div class="view overlay rounded z-depth-1-half mb-4 mr-0 ">
            <img class="img-fluid " src={fakkhaw} alt="Sample image"
           />
            <a>
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>

          {/* <!-- Data --> */}
          <div class="news-data d-flex justify-content-between">
            <a href="#!" class="light-blue-text">
              <h6 class="font-weight-bold"><i class="fas fa-store pr-2"></i>บ้านฟักข้าว</h6>
            </a>
          </div>

          {/* <!-- Excerpt --> */}
          <h3 class="font-weight-bold dark-grey-text mb-3"><a>บ้านฟักข้าวคุณขนิษฐา</a></h3>
          <p class="dark-grey-text">สินค้าของเราแปรรูปมาจากฟักข้าว ซึ่งให้สรรพคุณมากมาย อาทิเช่น 
          ลดริ้วรอย และ ทำให้ผิวดูอ่อนกว่าวัย และ อื่นๆอีกมากมาย
</p>

<Link to="/shop/banfakkhaw" className="blue-text">คลิกเพื่อดูเพิ่มเติม</Link>
    </div>
      

      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div class="col-lg-6 col-md-12">

        {/* <!-- Featured news --> */}
        <div class="single-news mb-4">

          {/* <!-- Image --> */}
          <div class="view overlay rounded z-depth-1-half mb-4">
            <img class="img-fluid" src={nabua} 

            alt="Sample image"/>
            <a>
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>

          {/* <!-- Data --> */}
          <div class="news-data d-flex justify-content-between">
            <a href="#!" class="pink-text">
              <h6 class="font-weight-bold"><i class="fas fa-store-alt pr-2"></i>นาบัวลุงแจ่ม</h6>
            </a>
          </div>

          {/* <!-- Excerpt --> */}
          <h3 class="font-weight-bold dark-grey-text mb-3"><a>นาบัวลุงแจ่ม</a></h3>
          <p class="dark-grey-text">สินค้าของเราแปรรูปเด่นๆของเราคือ ชาเกษรดอก และ สบู่ ที่คัดสรรจากธรรมชาติอย่างดี    
        </p>
        <Link to="/shop/nabua" className="pink-text">คลิกเพื่อดูเพิ่มเติม</Link> 
        </div>
      </div>
      {/* <!-- Grid column --> */}
    </div>
    {/* <!-- Grid row --> */}
  </section>
  {/* <!--Section: Content--> */}
</div>
    )


    return(

        <>
        {blog()}
        </>
    )


}
export default ShowShop;