import React from 'react';
import soap from './Fakk_Photo/fakkhawSoaps.jpg';
import handwash from './Fakk_Photo/handwash1.jpeg';
import losion from './Fakk_Photo/losion.jpeg';
import { MDBAnimation } from 'mdbreact';






const Blog3 = () => (
    <>
    <div class="container my-5 py-5 z-depth-1">
 
 
 {/* <!--Section: Content--> */}
 <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">

   {/* <!--Grid row--> */}
   <div class="row">

     {/* <!--Grid column--> */}
     <div class="col-md-6 mb-4 mb-md-0">

       <h3 class="font-weight-bold">ผลฟักข้าวมากคุณประโยชน์  

       <i class="fas fa-heart ml-3 red-text"></i> 
       </h3>

       <p class="text-muted">
       <MDBAnimation reveal type="fadeInLeft">

       บ้านฟักข้าวได้นำผลฟักข้าวมาแปรรูปเป็นสินค้าที่มีคุณค่าทางโภชนาการมากมาย อาทิเช่น การแปรรูปเป็นสบู่เพื่อช่วยลดและชะลอการเกิดริ้วรอย
       และ ช่วยบำรุงผิวพรรณ และเพิ่มความชุ่มชื่นให้แก่ผิวเป็นต้น
</MDBAnimation>
       </p>


     </div>
     {/* <!--Grid column--> */}

     {/* <!--Grid column--> */}
     <div class="col-md-6 mb-4 mb-md-0">

       {/* <!--Image--> */}
       <div class="view overlay z-depth-1-half">
         <img src={soap}class="img-fluid"
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

export default Blog3 ;