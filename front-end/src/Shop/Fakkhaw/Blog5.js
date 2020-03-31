import React from 'react';
import garden from './Fakk_Photo/garden.jpg';
import { MDBAnimation } from 'mdbreact';







const Blog5 = () => (
    <>
    <div class="container my-5 py-5 z-depth-1">
 
 
 {/* <!--Section: Content--> */}
 <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">

   {/* <!--Grid row--> */}
   <div class="row">

     {/* <!--Grid column--> */}
     <div class="col-md-6 mb-4 mb-md-0">

       <h3 class="font-weight-bold"> น่าดึงดูด  <i class="fas fa-grin-hearts ml-3 pink-text"></i>
 </h3>

 <MDBAnimation reveal type="fadeInRight">

       <p class="text-muted">
       สีของฟักข้าวจะเปลี่ยนไปตาม ฤดูกาล ทำให้สินค้าที่ผลิตออกมามีสีที่ไม่เหมือนกัน ซึ่ืงเป็นเอกลักษณ์ของผลิตภัณฑ์ที่ทำมาจากผลฟักข้าว
       ที่ชวนให้น่าหลงใหล น่าลอง และ น่าสัมผัส
       </p>
</MDBAnimation>

     </div>
     {/* <!--Grid column--> */}

     {/* <!--Grid column--> */}
     <div class="col-md-6 mb-4 mb-md-0">

       {/* <!--Image--> */}
       <div class="view overlay z-depth-1-half">
         <img src={garden}class="img-fluid"
           alt=""
           style={{height:'320px', width:'450px'}}
           
           />
        
       </div>

     </div>
     {/* <!--Grid column--> */}

   </div>
   {/* <!--Grid row--> */}


 </section>
 {/* <!--Section: Content--> */}


</div>
   
</>

)

export default Blog5 ;