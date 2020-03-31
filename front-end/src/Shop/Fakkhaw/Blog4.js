import React from 'react';
import Fakkhaw from './Fakk_Photo/handwash1.jpeg';
import { MDBAnimation } from 'mdbreact';



const Blog4 = () => (
    <>
    <div class="container my-5 py-5 z-depth-1">

 
    {/* <!--Section: Content--> */}
    <section class="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">

      {/* <!--Grid row--> */}
      <div class="row">

        {/* <!--Grid column--> */}
        <div class="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">

          <img src={Fakkhaw} class="img-fluid" alt=""/>

        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div class="col-lg-6 mb-4 mb-lg-0">

          <h3 class="font-weight-bold"> กลิ่นหอม<i class="fas fa-leaf ml-3 green-text"></i></h3>

          <p class="font-weight-bold">ชวนให้คุณหลงใหล</p>
          <MDBAnimation reveal type="fadeInRight">

          <p class="text-muted">
          การรับรู้กลิ่นนั้นเป็นสิ่งที่ลึกซึ้งและละเอียดอ่อนมาก หลายครั้งที่ได้สูดกลิ่นอายบางอย่างเข้าไป แล้วเกิดความประทับใจจนไม่อาจจะบรรยายให้ออกมาเป็นคำพูดได้ถูก
        ผลของฟักข้าวเมื่อนำมาแปรรูปเป็นผลิตภัณฑ์แล้ว ผลิตภัณฑ์ชิ้นนั้นก็จะมีกลิ่นหอมหวานชวนให้ผู้คนหลงใหลในความเป็นธรรมชาติของผลฟักข้าว
        
          </p>
          </MDBAnimation>

        </div>
        {/* <!--Grid column--> */}

      </div>
      {/* <!--Grid row--> */}


    </section>
    {/* <!--Section: Content--> */}


  </div>

</>

)

export default Blog4 ;