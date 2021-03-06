import React from 'react';
import { MDBAnimation } from 'mdbreact';


const Icon = () => (

<>
<div class="container my-5 py-5 z-depth-1">


    {/* <!--Section: Content--> */}
    <section class="px-md-5 mx-md-5 dark-grey-text text-center">

      {/* <!--Grid row--> */}
      <div class="row d-flex justify-content-center">

        {/* <!--Grid column--> */}
        <div class="col-lg-8">

          {/* <!--Grid row--> */}
          <div class="row">


            {/* <!--First column--> */}

            <div class="col-md-3 col-6 mb-4">
            <MDBAnimation reveal type="fadeInUp" duration="1100ms" delay="0.5s">

              <i class="fas fa-exchange-alt fa-3x blue-text"></i>
<hr/>
            แปรรูปได้หลากหลาย
            </MDBAnimation>

            </div>

            {/* <!--/First column--> */}

            {/* <!--Second column--> */}
            <div class="col-md-3 col-6 mb-4">
            <MDBAnimation reveal type="fadeInUp" duration="1100ms" delay="1.5s">

              <i class="fas fa-heart fa-3x red-text"></i>
              <hr/>
            สรรพคุณมากมาย
            </MDBAnimation>

            </div>
            {/* <!--/Second column--> */}

            {/* <!--Third column--> */}
            <div class="col-md-3 col-6 mb-4">
            <MDBAnimation reveal type="fadeInUp" duration="1100ms" delay="2.5s">

              <i class="fas fa-leaf fa-3x green-text"></i>
              <hr/>
            กลิ่นหอม
            </MDBAnimation>

            </div>
            {/* <!--/Third column--> */}

            {/* <!--Fourth column--> */}
            <div class="col-md-3 col-6 mb-4">
            <MDBAnimation reveal type="fadeInUp" duration="1100ms" delay="3.5s">

              <i class="fas fa-grin-hearts fa-3x pink-text"></i>
              <hr/>
            น่าดึงดูด
            </MDBAnimation>

            </div>
            {/* <!--/Fourth column--> */}

          </div>
          {/* <!--/Grid row--> */}


        </div>
        {/* <!--Grid column--> */}

      </div>
      {/* <!--Grid row--> */}


    </section>
    {/* <!--Section: Content--> */}


  </div>

</>
);

export default Icon;