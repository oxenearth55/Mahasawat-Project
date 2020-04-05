import React, { useState, useEffect } from 'react';

import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBAnimation
  } from 'mdbreact';

  import intro from '../Fakk_Photo/Bag/art1.jpeg';
  import intro2 from '../Fakk_Photo/Bag/intro2.jpg';
  import intro3 from '../Fakk_Photo/Bag/intro3.jpg';
  import intro4 from '../Fakk_Photo/Bag/intro4.jpg';
  import intro5 from '../Fakk_Photo/Bag/intro5.jpg';
  import intro6 from '../Fakk_Photo/Bag/intro6.jpg';
  import intro7 from '../Fakk_Photo/Bag/intro7.jpg';
  import act1 from '../Fakk_Photo/Bag/act1.jpg';
  import act2 from '../Fakk_Photo/Bag/act2.jpg';
  import act3 from '../Fakk_Photo/Bag/act3.jpg';
  import intro9 from '../Fakk_Photo/Bag/intro9.jpg';









  const Bag = () => {


    const blog1 = () =>(

        <>
         <MDBView src={intro}  id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                          พวกคุณพร้อมที่จะรักษาโลกใบนี้แล้วหรือยัง?
                      </h1>
      
                      <hr className='hr-light my-4' />
                      <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="1.5s">
                      <h5 className='text-uppercase mb-4 white-text'>
                        <strong>ถ้าคุณพร้อมแล้ว เรามาเริ่มกันเลย</strong>
                      </h5>
                      </MDBAnimation>
                   
                    
                    </MDBCol>
                    </MDBAnimation>
      
                  </MDBRow>
                </MDBContainer>
                
              </MDBView>
      
        </>
      
      )


      const blog2 = () =>(

        <>
         <MDBView src={intro2} className="fix-bg" id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    โลก เป็นสถานที่ที่สิ่งมีชีวิตนานาชนิดอาศัยอยู่ร่วมกัน
                      </h1>
      
                      <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="1.5s">
                     
                      </MDBAnimation>
                   
                    
                    </MDBCol>
                    </MDBAnimation>
      
                  </MDBRow>
                </MDBContainer>
                
              </MDBView>
      
        </>
      
      )


      const blog3 = () =>(

        <>
         <MDBView src={intro3} className="fix-bg" id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    ในอดีตกาล สิ่งมีชีวิตทุกชนิด ล้วนใช้ชีวิตอย่างมีความสุขท่ามกลางธรรมชาติอันงดงาม
                      </h1>
      
                      <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="1.5s">
                     
                      </MDBAnimation>
                   
                    
                    </MDBCol>
                    </MDBAnimation>
      
                  </MDBRow>
                </MDBContainer>
                
              </MDBView>
      
        </>
      
      )

      const blog4 = () =>(

        <>
         <MDBView src={intro4} className="fix-bg" id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    แต่เมื่อเวลาผ่านพ้นไปหลายช่วงสหัสวรรษ 
                      </h1>
      
                      <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="1.5s">
                     
                      </MDBAnimation>
                   
                    
                    </MDBCol>
                    </MDBAnimation>
      
                  </MDBRow>
                </MDBContainer>
                
              </MDBView>
      
        </>
      
      )

      const blog5 = () =>(

        <>
         <MDBView src={intro5} className="fix-bg" id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    ธรรมชาติค่อยๆถูกทำลาย สิ่งมีชีวิตต่างๆเริ่มล้มตาย
                      </h1>
      
                      <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="1.5s">
                     
                      </MDBAnimation>
                   
                    
                    </MDBCol>
                    </MDBAnimation>
      
                  </MDBRow>
                </MDBContainer>
                
              </MDBView>
      
        </>
      
      )

      const blog6 = () =>(

        <>
         <MDBView src={intro6} className="fix-bg" id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    ความสมดุลของโลก ได้ถูกทำลายลง โดยสิ่งมีชีวิตที่เรียกตัวเองว่า
                      </h1>
      
                      <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="1.5s">
                     
                      </MDBAnimation>
                   
                    
                    </MDBCol>
                    </MDBAnimation>
      
                  </MDBRow>
                </MDBContainer>
                
              </MDBView>
      
        </>
      
      )

      const blog7 = () =>(

        <>
         <MDBView src={intro7} className="fix-bg" id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                        มนุษย์
                      </h1>
      
                      <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="1.5s">
                     
                      </MDBAnimation>
                   
                    
                    </MDBCol>
                    </MDBAnimation>
      
                  </MDBRow>
                </MDBContainer>
                
              </MDBView>
      
        </>
      
      )

      const blog7_2 = () =>(

        <>
         <MDBView src={intro7} className="fix-bg" id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                        มนุษย์ ได้ช่วงชิงทุกสิ่งทุกอย่างบนโลกนี้
                      </h1>
      
                      <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="1.5s">
                     
                      </MDBAnimation>
                   
                    
                    </MDBCol>
                    </MDBAnimation>
      
                  </MDBRow>
                </MDBContainer>
                
              </MDBView>
      
        </>
      
      )


      const blog8_head = () => (
        <MDBAnimation reveal type="zoomIn">

        <div class="container my-5">
        
         
        {/* <!--Section: Content--> */}
        <section class="px-md-5 mx-md-5 py-5 text-center white-text elegant-color z-depth-1 rounded">
        
          <h3 class="">ตัวอย่างการกระทำของมนุษย์<i class="fas fa-skull-crossbones white-text mx-1"></i></h3>
        
        </section>
        {/* <!--Section: Content--> */}
        
        
        </div>
        </MDBAnimation>
      )


    const blog8_content = () => (
        <>
        <div className="container mt-5 mb-5">


{/* <!--Section: Content--> */}
<section class="text-center">

  {/* <!-- Section heading --> */}
  {/* <h3 class="font-weight-bold mb-5">สิ่งดีๆที่เจลล้างมือบ้านฟักข้าวมอบให้กับคุณ</h3> */}

  {/* <!-- Grid row --> */}
  <div class="row">

    {/* <!-- Grid column --> */}
    <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">

      {/* <!-- Card --> */}
      <div class="card hoverable">

        {/* <!-- Card image --> */}
        <img class="card-img-top" src={act1}alt="Card image cap"/>

        {/* <!-- Card content --> */}
        <div class="card-body">

          {/* <!-- Title --> */}
          <p class="card-title text-muted text-uppercase font-small mt-1 mb-3">โรงงานอุสาหกรรม</p>
          {/* <!-- Text --> */}
          <p class="mb-2">การปล่อยสารพิษจากโรงงานอุตสาหกรรม</p>

        </div>

      </div>
      {/* <!-- Card --> */}

    </div>
    {/* <!-- Grid column --> */}

    {/* <!-- Grid column --> */}
    <div class="col-lg-4 col-md-6 mb-md-0 mb-4">

      {/* <!-- Card --> */}
      <div class="card hoverable">

        {/* <!-- Card image --> */}
        <img class="card-img-top" src={act2} alt="Card image cap"/>

        {/* <!-- Card content --> */}
        <div class="card-body">

          {/* <!-- Title --> */}
          <p class="card-title text-muted text-uppercase font-small mt-1 mb-3">การทำลายป่า</p>
          {/* <!-- Text --> */}
          <p class="mb-2">การทำลายป่าไม้ในธรรมชาติ
</p>

        </div>

      </div>
      {/* <!-- Card --> */}

    </div>
    {/* <!-- Grid column --> */}

    {/* <!-- Grid column --> */}
    <div class="col-lg-4 col-md-6 mb-0">

      {/* <!-- Card --> */}
      <div class="card hoverable">

        {/* <!-- Card image --> */}
        <img class="card-img-top" src={act3} alt="Card image cap"/>

        {/* <!-- Card content --> */}
        <div class="card-body">

          {/* <!-- Title --> */}
          <p class="card-title text-muted text-uppercase font-small mt-1 mb-3">การจราจร</p>
          {/* <!-- Text --> */}
          <p class="mb-2">การปล่อยสารพิษจากท่อไอเสีย</p>

        </div>

      </div>
      {/* <!-- Card --> */}

    </div>
    {/* <!-- Grid column --> */}

  </div>
  {/* <!-- Grid row --> */}

</section>
{/* <!--Section: Content--> */}


</div>
  
        </>
    )

    const blog9 = () => (
        <>

<MDBView src={intro9} className="fix-bg" id="fakkhaw" >
      
      <MDBMask  overlay="black-strong



"  />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                        การกระทำเหล่านี้ ก่อให้เกิด สิ่งที่เรียกว่า 'ภาวะโลกร้อน'
                      </h1>
      
                      <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="1.5s">
                     
                      </MDBAnimation>
                   
                    
                    </MDBCol>
                    </MDBAnimation>
      
                  </MDBRow>
                </MDBContainer>
                
              </MDBView>
      

        </>
    )

    return(
        <>
        {blog1()}
        {blog2()}
        {blog3()}
        {blog4()}
        {blog5()}
        {blog6()}
        {blog7()}
        {blog7_2()}
        {blog8_head()}
        {blog8_content()}
        {blog9()}









        </>
    )

  }


  export default Bag;