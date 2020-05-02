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
  import intro10 from '../Fakk_Photo/Bag/intro10.jpg';
  import intro11 from '../Fakk_Photo/Bag/bag.jpeg';
  import intro12 from '../Fakk_Photo/Bag/intro12.jpg';
  import intro13 from '../Fakk_Photo/Bag/intro13.jpg';
  import intro14 from '../Fakk_Photo/Bag/intro14.jpg';
  import intro16 from '../Fakk_Photo/Bag/intro16.png';














  const Bag = () => {

    useEffect(() => {
   
      window.scrollTo(0, 0)     
  }, []);

    const blog1 = () =>(

        <>
         <MDBView src={intro}  id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" >
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                          พวกคุณพร้อมที่จะรักษาโลกใบนี้แล้วหรือยัง?
                      </h1>
      
                      <hr className='hr-light my-4' />
                      <MDBAnimation reveal type="fadeInUp" duration="1000ms" delay="0.7s">
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
                  <MDBAnimation reveal type="fadeInUp" >
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    โลก เป็นสถานที่ที่สิ่งมีชีวิตนานาชนิดอาศัยอยู่ร่วมกัน
                      </h1>
      
                      <MDBAnimation reveal type="fadeInUp" >
                     
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
                  <MDBAnimation reveal type="fadeInUp" >
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    ในอดีตกาล สิ่งมีชีวิตทุกชนิด ล้วนใช้ชีวิตอย่างมีความสุขท่ามกลางธรรมชาติอันงดงาม
                      </h1>
      
                      <MDBAnimation reveal type="fadeInUp" >
                     
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
                  <MDBAnimation reveal type="fadeInUp" >
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    แต่เมื่อเวลาผ่านพ้นไปหลายช่วงสหัสวรรษ 
                      </h1>
      
                      <MDBAnimation reveal type="fadeInUp" >
                     
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
                  <MDBAnimation reveal type="fadeInUp" >
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    ธรรมชาติค่อยๆถูกทำลาย สิ่งมีชีวิตต่างๆเริ่มล้มตาย
                      </h1>
      
                      <MDBAnimation reveal type="fadeInUp" >
                     
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
                  <MDBAnimation reveal type="fadeInUp" >
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    ความสมดุลของโลก ได้ถูกทำลายลง โดยสิ่งมีชีวิตที่เรียกตัวเองว่า
                      </h1>
      
                      <MDBAnimation reveal type="fadeInUp" >
                     
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
                  <MDBAnimation reveal type="fadeInUp" >
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                        มนุษย์
                      </h1>
      
                      <MDBAnimation reveal type="fadeInUp" >
                     
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
                  <MDBAnimation reveal type="fadeInUp">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                        มนุษย์ ได้ช่วงชิงทุกสิ่งทุกอย่างบนโลกนี้
                      </h1>
      
                      <MDBAnimation reveal type="fadeInUp" >
                     
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
                  <MDBAnimation reveal type="fadeInUp" >
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                        การกระทำเหล่านี้ ก่อให้เกิด สิ่งที่เรียกว่า 'ภาวะโลกร้อน'
                      </h1>
      
                      <MDBAnimation reveal type="fadeInUp" >
                     
                      </MDBAnimation>
                   
                    
                    </MDBCol>
                    </MDBAnimation>
      
                  </MDBRow>
                </MDBContainer>
                
              </MDBView>
      

        </>
    )


    const blog10 = () => (
      <>

<MDBView src={intro10} className="fix-bg" id="fakkhaw" >
    
    <MDBMask  className='rgba-black-light'/>
    
              <MDBContainer
                className='d-flex justify-content-center align-items-center '
                style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
              >
    
                <MDBRow className=" mb-5  ">
                <MDBAnimation reveal type="fadeInUp" >
    
                  <MDBCol md='12' className='mb-4 white-text text-center'>
    
                    <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                      คุณสามารถร่วมเป็นส่วนหนึ่งเพื่อช่วยเหลือโลกของเราได้
                    </h1>
    
                    <MDBAnimation reveal type="fadeInUp" >
                   
                    </MDBAnimation>
                 
                  
                  </MDBCol>
                  </MDBAnimation>
    
                </MDBRow>
              </MDBContainer>
              
            </MDBView>
    

      </>
  )
 


  const blog11 = () => (
    <>

<MDBView src={intro11} className="fix-bg" id="fakkhaw" >
  
  <MDBMask  className='rgba-black-light'/>
  
            <MDBContainer
              className='d-flex justify-content-center align-items-center '
              style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
            >
  
              <MDBRow className=" mb-5  ">
              <MDBAnimation reveal type="fadeInUp" >
  
                <MDBCol md='12' className='mb-4 white-text text-center'>
  
                  <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    โดยการรณรงค์ใช้ถุงผ้า แทนถุงพลาสติก
                  </h1>
  
                  <MDBAnimation reveal type="fadeInUp" >
                 
                  </MDBAnimation>
               
                
                </MDBCol>
                </MDBAnimation>
  
              </MDBRow>
            </MDBContainer>
            
          </MDBView>
  

    </>
)


const blog12 = () => (
  <>
  <div class="container my-5 py-5 z-depth-1">


  {/* <!--Section: Content--> */}
  <section class="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">

    {/* <!--Grid row--> */}
    <div class="row">

      {/* <!--Grid column--> */}
      <div class="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">

        <img src={intro12} class="img-fluid" alt=""
        style={{height:'350px'}}
        />

      </div>
      {/* <!--Grid column--> */}

      {/* <!--Grid column--> */}
      <div class="col-lg-6 mb-4 mb-lg-0">

        <h4 class="font-weight-bold">ผลเสียจากการใช้ถุงพลาสติก <i class="fas fa-thumbs-down ml-3 red-text"></i> 
 </h4> 

        <p class="font-weight-bold">เราคนเดียว ลด หรือ ไม่ใช้ ถุงพลาสติก จะเปลี่ยนแปลงอะไรได้?</p>
        <MDBAnimation reveal type="fadeInRight" >

        <p class="text-muted">
        ยิ่งเราใช้ถุงพลาสติกมาเท่าไร ทั้งการเผาไหม้ที่เกิดจากขั้นตอนกระบวนการผลิตถุง และการเผาทำลายถุงพลาสติกก็จะยิ่งมากขึ้นเท่านั้น
        ซึ่งกระบวนการเหล่านี้จะทำให้เกิดการปล่อยก๊าซคาร์บอนไดออกไซด์สู่ชั้นบรรยากาศของโลก
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



const blog13 = () => (
  <>
  <div class="container my-5 py-5 z-depth-1">


{/* <!--Section: Content--> */}
<section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">

 {/* <!--Grid row--> */}
 <div class="row">

   {/* <!--Grid column--> */}
   <div class="col-md-6 mb-4 mb-md-0">

     <h3 class="font-weight-bold">ใช้เวลาย่อยสลายนานมาก  

     <i class="fas fa-clock ml-3 yellow-text"></i> 
     </h3>

     <p class="text-muted">
     <MDBAnimation reveal type="fadeInLeft">
      โดยปกติ ถุงพลาสติกจะถูกใช้งานแค่ครั้งเดียวเท่านั้น หลังจากการใช้งาน คุณก็จะทิ้งมันลงถังขยะ
      แต่คุณทราบหรือไม่ว่า ถุงพลาสติกแต่ละถุงที่คุณได้ทิ้งไป ต้องใช้เวลา 450 ปีในการย่อยสลายเลยทีเดียว 
</MDBAnimation>
     </p>

   </div>
   {/* <!--Grid column--> */}

   {/* <!--Grid column--> */}
   <div class="col-md-6 mb-4 mb-md-0">

     {/* <!--Image--> */}
     <div class="view overlay z-depth-1-half">
       <img src={intro13}class="img-fluid"
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

const blog14 = () =>(
  <>

  <div class="container my-5 py-5 z-depth-1">


  {/* <!--Section: Content--> */}
  <section class="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">

    {/* <!--Grid row--> */}
    <div class="row">

      {/* <!--Grid column--> */}
      <div class="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">

        <img src={intro14} class="img-fluid" alt=""
        style={{height:'350px'}}
        />

      </div>
      {/* <!--Grid column--> */}

      {/* <!--Grid column--> */}
      <div class="col-lg-6 mb-4 mb-lg-0">

        <h4 class="font-weight-bold">ทำไมถึงไม่ใช้ซ้ำล่ะ? <i class="fas fa-recycle ml-3 red-text"></i> 
 </h4> 

      
        <MDBAnimation reveal type="fadeInRight" >

        <p class="text-muted">
        การนำถุงพลาสติกไปใช้ซ้ำอาจทำให้เกิดผลกระทบต่อระบบนิเวศเป็นอย่างมาก โดยเฉพาะการใช้ถุงพลาสติกใส่มูลฝอยจะทำให้เกิดการแปรสภาพมูลฝอยในภาวะที่ขาดอากาศเป็นผลให้เกิดก๊าซชีวภาพที่เป็นต้นเหตุของการเกิดภาวะเรือนกระจก 
        และทำให้เกิดภาวะโลกร้อนขึ้น
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


// const blog15 = () => (

// <div class="container z-depth-1 my-5 p-5">

// {/* <!-- Section --> */}
// <section>
  
//   <h3 class="font-weight-bold text-center dark-grey-text pb-2">โทษที่ตามมาจากการใช้ถุงพลาสติก</h3>
//   <hr class="w-header my-4"/>
//   <p class="lead text-center text-muted pt-2 pb-3 mb-5">ประโยชน์เพียงเล็กน้อยในช่วงเวลาสั้นๆ ของถุงพลาสติกได้ทำให้เกิดโทษต่อระบบนิเวศและชีวิตของผู้บริโภคอย่างมหาศาล</p>

//   <div class="row dark-grey-text">

//     <div class="col-md-6 col-xl-4 mb-4">
//       <div class="media">
//         <div class="mr-4">
//           <span class="text-primary"><i class="icon-fa fas fa-file-alt fa-2x"></i></span>
//         </div>
//         <div class="media-body">
//           <h6 class="font-weight-bold">เป็นอันตรายต่อสิ่งมีชีวิตทั้งในน้ำและบนบก</h6>
         
//         </div>
//       </div>
//     </div>

//     <div class="col-md-6 col-xl-4 mb-4">
//       <div class="media">
//         <div class="mr-4">
//           <span class="text-danger"><i class="icon-fa fas fa-bullhorn fa-2x"></i></span>
//         </div>
//         <div class="media-body">
//           <h6 class="font-weight-bold">St</h6>
         
//         </div>
//       </div>
//     </div>

//     <div class="col-md-6 col-xl-4 mb-4">
//       <div class="media">
//         <div class="mr-4">
//           <span class="text-info"><i class="icon-fa fas fa-code fa-2x"></i></span>
//         </div>
//         <div class="media-body">
//           <h6 class="font-weight-bold">Step Three</h6>
         
//         </div>
//       </div>
//     </div>

//     <div class="col-md-6 col-xl-4 mb-4">
//       <div class="media">
//         <div class="mr-4">
//           <span class="text-warning"><i class="icon-fa fas fa-comments fa-2x"></i></span>
//         </div>
//         <div class="media-body">
//           <h6 class="font-weight-bold">Step Four</h6>
//           <p class="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium eaque ipsa doloremque laudantium.</p>
//         </div>
//       </div>
//     </div>

//     <div class="col-md-6 col-xl-4 mb-4">
//       <div class="media">
//         <div class="mr-4">
//           <span class="text-muted"><i class="icon-fa fas fa-cogs fa-2x"></i></span>
//         </div>
//         <div class="media-body">
//           <h6 class="font-weight-bold">Step Five</h6>
//           <p class="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium eaque ipsa doloremque laudantium.</p>
//         </div>
//       </div>
//     </div>

//     <div class="col-md-6 col-xl-4 mb-4">
//       <div class="media">
//         <div class="mr-4">
//           <span class="text-success"><i class="icon-fa far fa-handshake fa-2x"></i></span>
//         </div>
//         <div class="media-body">
//           <h6 class="font-weight-bold">Step Six</h6>
//           <p class="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium eaque ipsa doloremque laudantium.</p>
//         </div>
//       </div>
//     </div>

//   </div>

// </section>
// {/* <!-- Section --> */}

// </div>

// )



const blog15 = () => (
  <>
   <div class="container my-5 py-5 z-depth-1">
 

 {/* <!--Section: Content--> */}
 <section class="text-center px-md-5 mx-md-5 dark-grey-text">

   {/* <!--Grid row--> */}
   <div class="row d-flex justify-content-center">

     {/* <!--Grid column--> */}
     <div class="col-lg-7">

       <p>บ้านฟักข้าวคุณขนิษฐาจึงได้สนับสนุนเรื่องการรณรงค์ให้ทุกคนใช้ถุงผ้า เพื่อช่วยโลกของเราให้รอดพ้นจากภาวะโลกร้อน</p>

     </div>
     {/* <!--Grid column--> */}

   </div>
   {/* <!--Grid row--> */}
 </section>
 {/* <!--Section: Content--> */}


</div>
  </>
)

const blog16 = () => (
  <>
  <div class="container my-5 p-5 z-depth-1">


{/* <!--Section: Content--> */}
<section class="dark-grey-text">

{/* <!-- Section heading --> */}
<h2 class="text-center font-weight-bold mb-4 pb-2">คุณสมบัติของถุงผ้าบ้านฟักข้าว</h2>
{/* <!-- Section description --> */}
<p class="text-center lead grey-text mx-auto mb-5">

</p>

{/* <!-- Grid row --> */}
<div class="row">

{/* <!-- Grid column --> */}
<div class="col-md-4">

{/* <!-- Grid row --> */}
<div class="row mb-5">

  {/* <!-- Grid column --> */}
  <div class="col-2 ">
    <i class="fas fa-2x fa-broom blue-text"></i>
  </div>
  {/* <!-- Grid column --> */}

  {/* <!-- Grid column --> */}
  <div class="col-10">
    <h5 class="font-weight-bold mb-3">ทำความสะอาดได้ง่าย </h5>
   
  </div>
  {/* <!-- Grid column --> */}

</div>
{/* <!-- Grid row --> */}

{/* <!-- Grid row --> */}
<div class="row my-5">

  {/* <!-- Grid column --> */}
  <div class="col-2 ">
    <i class="fas fa-2x fa-grin-hearts pink-text"></i>
  </div>
  {/* <!-- Grid column --> */}

  {/* <!-- Grid column --> */}
  <div class="col-10">
    <h5 class="font-weight-bold mb-3"> นุ่มสบายมือน่าใช้ </h5>
  
  </div>
  {/* <!-- Grid column --> */}

</div>
{/* <!-- Grid row --> */}

{/* <!-- Grid row --> */}
<div class="row mb-md-0 mt-5">

  {/* <!-- Grid column --> */}
  <div class="col-2 ">
    <i class="fas fa-2x fa-shield-alt grey-text"></i>
  </div>
  {/* <!-- Grid column --> */}
  <div class="col-10">
    <h5 class="font-weight-bold mb-3">ทนทานและใช้ซ้ำได้มากครั้ง</h5>
  
  </div>
  {/* <!-- Grid column --> */}
  <div class="col-10">
    <h5 class="font-weight-bold mb-3"></h5>
  
  </div>
  {/* <!-- Grid column --> */}

</div>
{/* <!-- Grid row --> */}

</div>
{/* <!-- Grid column --> */}

{/* <!-- Grid column --> */}
<div class="col-md-4 text-center">
<img class="img-fluid" src={intro16}
  alt="Sample image"
 />
</div>
{/* <!-- Grid column --> */}

{/* <!-- Grid column --> */}
<div class="col-md-4">

{/* <!-- Grid row --> */}
<div class="row mb-5">

  {/* <!-- Grid column --> */}
  <div class="col-2">
    <i class="fas fa-2x fa-shopping-bag orange-text"></i>
  </div>
  {/* <!-- Grid column --> */}

  {/* <!-- Grid column --> */}
  <div class="col-10">
    <h5 class="font-weight-bold mb-3">ใส่ได้หลายอย่าง</h5>
    
  </div>
  {/* <!-- Grid column --> */}

</div>
{/* <!-- Grid row --> */}

{/* <!-- Grid row --> */}
<div class="row my-5">

  {/* <!-- Grid column --> */}
  <div class="col-2">
    <i class="fas fa-2x fa-thumbs-up green-text"></i>
  </div>
  {/* <!-- Grid column --> */}

  {/* <!-- Grid column --> */}
  <div class="col-10">
    <h5 class="font-weight-bold mb-3">พร้อมใช้งานในทุกโอกาส </h5>
    
  </div>
  {/* <!-- Grid column --> */}

</div>
{/* <!-- Grid row --> */}

{/* <!-- Grid row --> */}
<div class="row mt-5">

  {/* <!-- Grid column --> */}
  <div class="col-2">
    <i class="fas fa-2x fa-plane yellow-text"></i>
  </div>
  {/* <!-- Grid column --> */}

  {/* <!-- Grid column --> */}
  <div class="col-10">
    <h5 class="font-weight-bold mb-3"> ส่งเสริมการท่องเที่ยวที่เป็นมิตรต่อสิ่งแวดล้อม </h5>
   
  </div>
  {/* <!-- Grid column --> */}

</div>
{/* <!-- Grid row --> */}

</div>
{/* <!-- Grid column --> */}

</div>
{/* <!-- Grid row --> */}

</section>
{/* <!--Section: Content--> */}


</div>
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
        {blog10()}
        {blog11()}
        {blog12()}
        {blog13()}
        {blog14()}
        {blog15()}
        {blog16()}















        </>
    )

  }


  export default Bag;