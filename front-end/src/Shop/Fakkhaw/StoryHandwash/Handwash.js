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
// import Intro from '../Fakk_Photo/StoryHandwash/intro.jpg';
import fakkhaw from '../Fakk_Photo/fakkhaws.jpg';
import health from '../Fakk_Photo/Handwash/blog_health.jpg';
import health2 from '../Fakk_Photo/Handwash/blog_health2.jpg';
import health3 from '../Fakk_Photo/Handwash/blog_health3.jpg';
import health4 from '../Fakk_Photo/Handwash/black.jpg';
import health5 from '../Fakk_Photo/Handwash/blog_hand.jpg';
import health6 from '../Fakk_Photo/Handwash/question.jpg';








const Handwash = () => {


  useEffect(() => {
   
    window.scrollTo(0, 0)     
}, []);


const blog1 = () =>(

  <>
   <MDBView src={health}  id="fakkhaw" >

<MDBMask className='rgba-black-light' />

          <MDBContainer
            className='d-flex justify-content-center align-items-center '
            style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
          >

            <MDBRow className=" mb-5  ">
            <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">

              <MDBCol md='12' className='mb-4 white-text text-center'>

                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    พร้อมดูแลสุขภาพตัวเองแล้วหรือยัง?
                </h1>

                <hr className='hr-light my-4' />
                <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="1.5s">
                <h5 className='text-uppercase mb-4 white-text'>
                  <strong>ถ้าคุณพร้อมแล้ว เรามาเริ่มกันดีกว่า</strong>
                </h5>
                </MDBAnimation>
             
              
              </MDBCol>
              </MDBAnimation>

            </MDBRow>
          </MDBContainer>
          
        </MDBView>

  </>

)

const blog2 = () => (
  <>
   <MDBView src={health3}  id="fakkhaw" >

<MDBMask className='rgba-black-light' />

          <MDBContainer
            className='d-flex justify-content-center align-items-center '
            style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
          >

            <MDBRow className=" mb-5  ">
            <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="1s">

              <MDBCol md='12' className='mb-4 white-text text-center'>

                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5  '>
                  คุณทราบหรือไม่ว่า เชื้อโรค หรือ ไวรัส มีอยู่ทุกหนทุกแห่งบนโลกนี้ 
                </h1>

                <hr className='hr-light my-4' />
                <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="2s">
                <h5 className='text-uppercase mb-4 white-text'>
                  <strong>และแน่นอน มันได้อยู่บนร่างกายคุณเป็นที่เรียบร้อยแล้ว</strong>
                </h5>
                </MDBAnimation>
             
              
              </MDBCol>
              </MDBAnimation>

            </MDBRow>
          </MDBContainer>
          
        </MDBView>


  </>
)

const blog3 = () => (
  <>
  <MDBView src={health4}  id="fakkhaw" >

<MDBMask className='rgba-black-light' />

          <MDBContainer
            className='d-flex justify-content-center align-items-center '
            style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
          >

            <MDBRow className=" mb-5  ">
            <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="1s">

              <MDBCol md='12' className='mb-4 white-text text-center'>

                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5  '>
                  ส่วนที่พวกเชื้อโรคชอบเกาะกันมากโดยที่คุณไม่รู้ตัว คือ...
                </h1>

                <hr className='hr-light my-4' />
              
             
              
              </MDBCol>
              </MDBAnimation>

            </MDBRow>
          </MDBContainer>
          
        </MDBView>

  </>
)
const blog4 =() => (
  <>

<MDBView src={health5}  id="fakkhaw" >

<MDBMask className='rgba-black-light' />

          <MDBContainer
            className='d-flex justify-content-center align-items-center '
            style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
          >

            <MDBRow className=" mb-5  ">
            <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="1s">

              <MDBCol md='12' className='mb-4 white-text text-center'>

                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5  '>
                    มือของคุณนั่นเอง
                </h1>

                <hr className='hr-light my-4' />
              
             
              
              </MDBCol>
              </MDBAnimation>

            </MDBRow>
          </MDBContainer>
          
        </MDBView>


  </>
)

const blog5 = () => (
  <>
  <MDBView src={health6}  id="fakkhaw" >

<MDBMask className='rgba-black-light' />

          <MDBContainer
            className='d-flex justify-content-center align-items-center '
            style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
          >

            <MDBRow className=" mb-5  ">
            <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="1s">

              <MDBCol md='12' className='mb-4 white-text text-center'>

                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5  '>
                    ทำไมเชื้อโรคถึงชอบเกาะที่มือของเรากันล่ะ ? 
                </h1>

                <hr className='hr-light my-4' />
                <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="1.5s">
                <h5 className='text-uppercase mb-4 white-text'>
                  <strong>คุณก็สงสัยเหมือนกันใช่ไหมล่ะ </strong>
                </h5>
                </MDBAnimation>              
             
              
              </MDBCol>
              </MDBAnimation>

            </MDBRow>
          </MDBContainer>
          
        </MDBView>


  </>

)

const blog6 = () => (
  <>
  <div class="container py-5 my-5 z-depth-1">
  <section class="p-md-3 mx-md-5 text-lg-left">
    <h2 class="font-weight-bold text-center mb-5 pb-3">เหตุผลหลักที่เชื้อโรคเกาะมือของเรา</h2>
    <div class="row text-center d-flex justify-content-center">

      <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
      <MDBAnimation reveal type="fadeInUp" duration="1100ms" delay="0.5s">


        <i class="fas fa-mobile-alt fa-3x indigo-text mb-4"></i>

     
        <h4 class="font-weight-bold mb-4">มือถือ</h4>
        <p class="text-muted px-2 mb-lg-0">
         ความสกปรกที่สะสมในมือถือ
        </p>
        </MDBAnimation>


      </div>
      <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
      <MDBAnimation reveal type="fadeInUp" duration="1100ms" delay="1.5s">

        <i class="fas fa-toilet pink-text fa-3x mb-4"></i>
        <h4 class="font-weight-bold mb-4">ห้องน้ำ</h4>
        <p class="text-muted px-2 mb-lg-0">
          เข้าห้องน้ำแล้วสัมผัสกับสิ่งสกปรก เช่น โถส้วม ก๊อกน้ำ และอื่นๆ
        </p>
      </MDBAnimation>
      </div>
      <div class="col-lg-3 col-md-6 mb-md-0 mb-5">
      <MDBAnimation reveal type="fadeInUp" duration="1100ms" delay="2.5s">

        <i class="fas fa-trash-alt fa-3x amber-text mb-4"></i>
        <h4 class="font-weight-bold mb-4">ขยะ</h4>
        <p class="text-muted px-2 mb-md-0">
          ขยะเป็นแหล่งสะสมแบคทีเรียและเชื้อโรคชั้นเลิศ
        </p>
      </MDBAnimation>
      </div>
      <div class="col-lg-3 col-md-6 mb-md-0 mb-5">
      <MDBAnimation reveal type="fadeInUp" duration="1100ms" delay="3.5s">

        <i class="fas fa-street-view fa-3x green-text mb-4"></i>
        <h4 class="font-weight-bold mb-4">สถานที่ต่างๆ</h4>
        <p class="text-muted px-2 mb-md-0">
          เชื้อโรคหมักหมมอยู่ตามสถานที่ต่างๆมากมายบนโลกนี้ โดยเฉพาะที่ๆ ไม่มีการทำความสะอาด
        </p>
        </MDBAnimation>
      </div>
    </div>
  </section>
</div>

  </>
)

const blog7 = () => (
  <>

  </>
)

const blogx =() => (
  <>

<div class="container my-5 py-5 z-depth-1">

 
{/* <!--Section: Content--> */}
<section class="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">

  {/* <!--Grid row--> */}
  <div class="row">

    {/* <!--Grid column--> */}
    <div class="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">

      <img src={fakkhaw} class="img-fluid" alt=""/>

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
const blogxx =() => (
  <>
  <div class="container my-5 px-5 pt-5 pb-4 z-depth-1">
  

  {/* <!--Section: Content--> */}
  <section class="dark-grey-text">
    
   
    <div class="row align-items-center">

      <div class="col-lg-6 mb-4">
        <h2 class="font-weight-normal mb-4">สาเหตุที่เชื้อโรคชอบเกาะอยู่บนฝ่ามือของเรา</h2>
        <p class="lead text-muted">Beautifully designed by best interior designers for the best web designers</p>
        <p class="text-muted">ปกติเราจะใช้มือในการจับสิ่งของต่างๆรอบตัวเรา ไม่ว่าจะเป็น</p>
      </div>

      <div class="col-lg-6 mb-4">

        <div id="mdb-lightbox-ui"></div>

        <div class="d-grid mdb-lightbox">
          <figure class="item">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(10).jpg"
              class="z-depth-1 rounded" data-size="1600x1067">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(10).jpg" />
            </a>
          </figure>
          <figure class="item">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(11).jpg"
              class="z-depth-1 rounded" data-size="1600x1067">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(11).jpg" />
            </a>
          </figure>
          <figure class="item">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(12).jpg"
              class="z-depth-1 rounded" data-size="1600x1067">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(12).jpg" />
            </a>
          </figure>
          <figure class="item">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(13).jpg"
              class="z-depth-1 rounded" data-size="1600x1067">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(13).jpg" />
            </a>
          </figure>
        </div>

      </div>

    </div>

  </section>
  {/* <!--Section: Content--> */}
  

</div>
  </>
)

const cover = () => (
    <>
     <MDBView src={fakkhaw}  id="fakkhaw" >

<MDBMask className='rgba-black-light' />

          <MDBContainer
            className='d-flex justify-content-center align-items-center '
            style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
          >

            <MDBRow className=" mb-5  ">
              <MDBCol md='12' className='mb-4 white-text text-center'>
              <MDBAnimation reveal type="fadeInUp">

                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    เจลล้างมือน้ำฟักข้าว
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase mb-4 white-text '>
                  <strong>หอม อ่อนโยน นุ่มนวล</strong>
                </h5>
             
              
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          
        </MDBView>
        

    </>
)

    return(
          <>
        {cover()}
        {blog1()}
        {blog2()}
        {blog3()}
        {blog4()}
        {blog5()}
        {blog6()}



          </>


    )
}
export default Handwash;