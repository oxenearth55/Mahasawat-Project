import React from 'react';
import Fakkhaw from './Fakk_Photo/all.jpg';
import { MDBAnimation } from 'mdbreact';




const Blog2 = () => (
    <>
    <div class="container my-5 py-5 z-depth-1">

 
    {/* <!--Section: Content--> */}
    <section class="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">

      {/* <!--Grid row--> */}
      <div class="row">

        {/* <!--Grid column--> */}
        <div class="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">

          <img src={Fakkhaw} class="img-fluid" alt=""
          style={{height:'350px'}}
          />

        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div class="col-lg-6 mb-4 mb-lg-0">

          <h3 class="font-weight-bold">แปรรูปได้หลากหลาย   <i class="fas fa-exchange-alt blue-text ml-3"></i> </h3>

          <p class="font-weight-bold">ฟักข้าวผลสารประโยชน์</p>
          <MDBAnimation reveal type="fadeInRight" duration="1200ms" delay="0.5s">

          <p class="text-muted">
            บ้านฟักข้าวได้มีการริเริ่มนำผลฟักข้าวมาแปรรูปหลากหลายรูปแบบ อาทิเช่น 
            การทำหมี่กรอบ คุกกี้ สบู่ โลชั่นจากฟักข้าว เจลล้างมือ และ ซอสที่ใช้ทำก๋วยเตี๋ยวเย็นตาโฟ เป็นต้น
            เพื่อให้ผู้บริโภคได้สัมผัสถึงคุณค่าทางโภชนาการที่มากมายของผลฟักข้าวอย่างหลากหลายรูปแบบ
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

export default Blog2 ;