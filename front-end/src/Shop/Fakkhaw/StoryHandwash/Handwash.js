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
import sick1 from '../Fakk_Photo/Handwash/sick1.jpg';
import sick2 from '../Fakk_Photo/Handwash/sick2.jpg';
import sick3 from '../Fakk_Photo/Handwash/sick3.jpg';
import sick4 from '../Fakk_Photo/Handwash/sick4.jpg';
import sick5 from '../Fakk_Photo/Handwash/sick5.jpg';
import sick6 from '../Fakk_Photo/Handwash/sick6.jpg';













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
                    พวกมันมาจากไหนกันล่ะ ? 
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
    <h2 class="font-weight-bold text-center mb-5 pb-3">พวกมันมาจาก</h2>
    <div class="row text-center d-flex justify-content-center">

      <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
      <MDBAnimation reveal type="fadeInUp" duration="1100ms" delay="0.5s">


        <i class="fas fa-mobile-alt fa-3x indigo-text mb-4"></i>

     
        <h4 class="font-weight-bold mb-4">มือถือ</h4>
        <p class="text-muted px-2 mb-lg-0">
         ความสกปรกที่สะสมในมือถือมีเชื้อแบคทีเรียซ่อนอยู่มหาสาร
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

        <i class="fas fa-money-bill-wave fa-3x green-text mb-4"></i>
        <h4 class="font-weight-bold mb-4">เงิน</h4>
        <p class="text-muted px-2 mb-md-0">
          เงินเป็นแหล่งเพาะเชื้อโรคชั้นยอดเพราะเงินผ่านใครต่อใครมานับไม่ถ้วน
        </p>
      </MDBAnimation>
      </div>
      <div class="col-lg-3 col-md-6 mb-md-0 mb-5">
      <MDBAnimation reveal type="fadeInUp" duration="1100ms" delay="3.5s">

        <i class="fas fa-street-view fa-3x orange-text mb-4"></i>
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
  <div class="container mt-5">


{/* <!--Section: Content--> */}
<section class="text-center">

  {/* <!-- Section heading --> */}
  <h3 class="font-weight-bold mb-5">ถ้าคุณไม่ล้างมือ แล้วจะเกิดอะไรขึ้นบ้าง</h3>

  {/* <!-- Grid row --> */}
  <div class="row">

    {/* <!-- Grid column --> */}
    <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">

      {/* <!-- Card --> */}
      <div class="card hoverable">

        {/* <!-- Card image --> */}
        <img class="card-img-top" src={sick1}alt="Card image cap"/>

        {/* <!-- Card content --> */}
        <div class="card-body">

          {/* <!-- Title --> */}
          <p class="card-title text-muted text-uppercase font-small mt-1 mb-3">ปวดท้อง</p>
          {/* <!-- Text --> */}
          <p class="mb-2">แน่นอนว่าคุณจะปวดท้อง ถ้าคุณนำมือไปจับอาหารแล้วนำเข้าปาก</p>

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
        <img class="card-img-top" src={sick2} alt="Card image cap"/>

        {/* <!-- Card content --> */}
        <div class="card-body">

          {/* <!-- Title --> */}
          <p class="card-title text-muted text-uppercase font-small mt-1 mb-3">ป่วย</p>
          {/* <!-- Text --> */}
          <p class="mb-2">คุณจะป่วยด้วยโรคแทรกซ้อน และคนอาจทำให้คนที่คุณรัก ป่วยไปด้วย</p>

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
        <img class="card-img-top" src={sick3} alt="Card image cap"/>

        {/* <!-- Card content --> */}
        <div class="card-body">

          {/* <!-- Title --> */}
          <p class="card-title text-muted text-uppercase font-small mt-1 mb-3">กระเป๋าแห้ง</p>
          {/* <!-- Text --> */}
          <p class="mb-2">คุณอาจหมดเงินไปกับค่ารักษาแพงๆ เพื่อรักษาตัวคุณเอง หรือคนที่คุณรัก</p>

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


const blog8 = () => (
  <>
<MDBAnimation reveal type="zoomIn">

<div class="container my-5">

 
{/* <!--Section: Content--> */}
<section class="px-md-5 mx-md-5 py-5 text-center white-text elegant-color z-depth-1 rounded">

  <h3 class="">งั้นแค่เดินไปล้างมือในห้องน้ำก็สินเรื่อง <i class="fas fa-hand-paper red-text mx-1"></i>  แต่...</h3>

</section>
{/* <!--Section: Content--> */}


</div>
</MDBAnimation>

  </>
)




const blog9 = () => (
  <div class="container my-5 py-5 z-depth-1">

 
    {/* <!--Section: Content--> */}
    <section class="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">

      {/* <!--Grid row--> */}
      <div class="row">

        {/* <!--Grid column--> */}
        <div class="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">

          <img src={sick4} class="img-fluid" alt=""/>

        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div class="col-lg-6 mb-4 mb-lg-0">

          <h5 class="font-weight-bold">คุณอาจอยู่ในสถานที่ที่ไม่สามารถหาห้องน้ำได้   <i class="fas fa-eye blue-text ml-3"></i> </h5>

          <MDBAnimation reveal type="fadeInRight" duration="1200ms" delay="0.5s">

          <p class="text-muted">
          ในบางครั้ง คุณอาจกำลังเดินซื้อสินค้าอยู่ที่ตลาดนัด ซึ่งเป็นสถานที่ที่ยากต่อการหาห้องน้ำ ทำให้คุณพลาดโอกาศในการล้างมือ 
          </p>
          </MDBAnimation>

        </div>
        {/* <!--Grid column--> */}

      </div>
      {/* <!--Grid row--> */}


    </section>
    {/* <!--Section: Content--> */}


  </div>

)

const blog10 =() => (
  <>
   <div class="container my-5 py-5 z-depth-1">
 
 
 {/* <!--Section: Content--> */}
 <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">

   {/* <!--Grid row--> */}
   <div class="row">

     {/* <!--Grid column--> */}
     <div class="col-md-6 mb-4 mb-md-0">

       <h3 class="font-weight-bold">การใช้ก๊อกน้ำในที่สาธารณะ  

       <i class="fas fa-tint ml-3 blue-text"></i> 
       </h3>

       <p class="text-muted">
       <MDBAnimation reveal type="fadeInLeft">
        มากไปกว่านั้น ถ้าคุณไปใช้ห้องน้ำสาธารณะที่ใครต่อใครใช้เพื่อล้างมือ บางทีคุณอาจได้รับเชื้อแบคทีเรียที่มากขึ้นกว่าเดิม
        เพราะที่จับก๊อกน้ำมีเชื้อแบคทีเรียถึง 229,000 ตัว ต่อตารางนิ้วเลยทีเดียว 


</MDBAnimation>
       </p>
 <p>by <a href="https://www.businesshygienetexas.com/the-dirty-truth-about-public-restrooms/"><strong>Biz Hygiene</strong></a></p>

     </div>
     {/* <!--Grid column--> */}

     {/* <!--Grid column--> */}
     <div class="col-md-6 mb-4 mb-md-0">

       {/* <!--Image--> */}
       <div class="view overlay z-depth-1-half">
         <img src={sick5}class="img-fluid"
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

const blog_header = () => (
  <>
<MDBAnimation reveal type="zoomIn">

<div class="container my-5">

 
{/* <!--Section: Content--> */}
<section class="px-md-5 mx-md-5 py-5 text-center white-text stylish-color z-depth-1 rounded">

  <h3 class="">เพื่อแก้ปัญหานั้น <i class="fas fa-check green-text mx-1"></i> ...</h3>

</section>
{/* <!--Section: Content--> */}


</div>
</MDBAnimation>

  </>
)

const blog11 = () =>(
  <>
   <div class="container my-5 py-5 z-depth-1 ">

 
{/* <!--Section: Content--> */}
<section class="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">

  {/* <!--Grid row--> */}
  <div class="row">

    {/* <!--Grid column--> */}
    <div class="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">

      <img src={sick6} class="img-fluid" alt=""/>

    </div>
    {/* <!--Grid column--> */}

    {/* <!--Grid column--> */}
    <div class="col-lg-6 mb-4 mb-lg-0">

      <h5 class="font-weight-bold">เพราะฉะนั้นคนเลยหันมาพึ่งเจลล้างมือกันมากขึ้น  </h5>

      <MDBAnimation reveal type="fadeInRight" duration="1200ms" delay="0.5s">

      <p class="text-muted">
      ถึงจะขายดีก็ตามแต่เจลส่วนมากในท้องตลาด ไม่ว่าจะเป็นตามห้าง หรือ ซื้อมาใช้เอง ล้วนมีกลิ่นแอลกอฮอล์ที่ฉุนจมูก
      เนื้อเจลเหนียวเหนอะหนะ และบางร้านค้าเมื่อรวมส่วนผสมการผลิตแล้ว แอลกอฮอล์อาจต่ำกว่ามาตารฐาน ทำให้ไม่เพียงพอต่อการฆ่าเชื้อโลก
      บนฝ่ามือของเรา 
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
        {blog7()}
        {blog8()}
        {blog9()}
        {blog10()}
        {blog11()}








          </>


    )
}
export default Handwash;