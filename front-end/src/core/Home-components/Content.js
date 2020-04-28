import React from 'react';

import Menu from '../Menu';
import boat from '../../photo/boat.jpg' 


const Content = () => (

    <>
    <div id='products'class=" mb-5 p-5 pb-5 z-depth-1 unique-color-dark">


{/* <!--Section: Content--> */}
<section class="text-center white-text">

  {/* <!-- Section heading --> */}
  <h2 class="font-weight-bold mb-4 pb-2 text-uppercase">สินค้าในชุมชนมหาสวัสดิ์</h2>
  {/* <!-- Section description --> */}
  <p class="lead mx-auto mb-5">คุณจะได้สัมผัสถึงเสน่ห์ของสินค้าต่างๆในชุมชนของเรา เพราะที่นี่ได้นำความรู้วิถีชุมชน มาแปรรูปเป็นสินค้าเกษตรคุณภาพ
  ที่เป็นเอกลักษณ์ของแต่ละสถานที่</p>

  {/* <!-- Grid row --> */}
  <div class="row">

    {/* <!-- Grid column --> */}
    <div class="col-md-4 mb-4">

      <i class="fas fa-leaf fa-3x green-text"></i>
      <h5 class="font-weight-bold my-4 text-uppercase">ธรรมชาติ</h5>
      <p class="mb-md-0 mb-5">ผลิตภัณฑ์ส่วนมากของเราแปรรูปมาจากวัตถุดิบธรรมชาติ 
      </p>

    </div>
    {/* <!-- Grid column --> */}

    {/* <!-- Grid column --> */}
    <div class="col-md-4 mb-4">

      <i class="fas fa-heart fa-3x red-text"></i>
      <h5 class="font-weight-bold my-4 text-uppercase">สุขภาพ</h5>
      <p class="mb-md-0 mb-5">ผลิตภัณฑ์ของเราเพรียบพร้อมไปด้วยสรรพคุณมากมาย
      </p>

    </div>
    {/* <!-- Grid column --> */}

    {/* <!-- Grid column --> */}
    <div class="col-md-4 mb-4">

      <i class="fas fa-grin-beam fa-3x blue-text"></i>
      <h5 class="font-weight-bold my-4 text-uppercase">สดใหม่</h5>
      <p class="mb-0">ผลิตภัณฑ์ของเรามีความสดใหม่อยู่เสมอ 
      </p>

    </div>
    {/* <!-- Grid column --> */}

  </div>
  {/* <!-- Grid row --> */}

</section>
{/* <!--Section: Content--> */}


</div>
    </>


); 

export default Content;