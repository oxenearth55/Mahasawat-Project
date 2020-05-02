
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

import art1 from '../Nabua_photo/Tea/tea_art.jpeg';
import pic1 from '../Nabua_photo/Tea/pic1.jpg';
import pic2 from '../Nabua_photo/Tea/pic2.jpg';
import pic3 from '../Nabua_photo/Tea/pic3.jpg';
import pic4 from '../Nabua_photo/Tea/pic4.jpg';
import pic5 from '../Nabua_photo/Tea/pic5.jpg';
import pic6 from '../Nabua_photo/Tea/pic6.jpg';





const Bag = () => {

  useEffect(() => {
 
    window.scrollTo(0, 0)     
}, []);

  const blog1 = () =>(

      <>
       <MDBView src={art1}  id="fakkhaw" >
    
    <MDBMask className='rgba-black-light' />
    
              <MDBContainer
                className='d-flex justify-content-center align-items-center '
                style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
              >
    
                <MDBRow className=" mb-5  ">
                <MDBAnimation reveal type="fadeInUp" >
    
                  <MDBCol md='12' className='mb-4 white-text text-center'>
    
                    <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                        ชาเกษรดอกบัวนาบัวลุงแจ่ม
                    </h1>
    
                    <hr className='hr-light my-4' />
                    <MDBAnimation reveal type="fadeInUp" >
                    <h5 className='text-uppercase mb-4 white-text'>
                      <strong>เพรียบพร้อมด้วยสรรพคุณ</strong>
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
       <MDBView src={pic1} className="fix-bg" id="fakkhaw" >
    
    <MDBMask className='rgba-black-light' />
    
              <MDBContainer
                className='d-flex justify-content-center align-items-center '
                style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
              >
    
                <MDBRow className=" mb-5  ">
                <MDBAnimation reveal type="fadeInUp">
    
                  <MDBCol md='12' className='mb-4 white-text text-center'>
    
                    <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    ทำไม​เราถึงต้อง​ดู​แล​สุขภาพ​ของ​ตัว​เอง?
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
       <MDBView src={pic2} className="fix-bg" id="fakkhaw" >
    
    <MDBMask className='rgba-black-light' />
    
              <MDBContainer
                className='d-flex justify-content-center align-items-center '
                style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
              >
    
                <MDBRow className=" mb-5  ">
                <MDBAnimation reveal type="fadeInUp" >
    
                  <MDBCol md='12' className='mb-4 white-text text-center'>
    
                    <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                  นี่อาจเป็นคำถามที่หลายคนอาจสงสัย
                    </h1>
    
                    <MDBAnimation reveal type="fadeInUp">
                   
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
       <MDBView src={pic3} className="fix-bg" id="fakkhaw" >
    
    <MDBMask className='rgba-black-light' />
    
              <MDBContainer
                className='d-flex justify-content-center align-items-center '
                style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
              >
    
                <MDBRow className=" mb-5  ">
                <MDBAnimation reveal type="fadeInUp" >
    
                  <MDBCol md='12' className='mb-4 white-text text-center'>
    
                    <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                  เรามาหาคำตอบกันดีกว่า
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
      <div class="container my-5 p-5 z-depth-1">


  {/* <!--Section: Content--> */}
  <section class="text-center dark-grey-text">

    {/* <!-- Section heading --> */}
    <h2 class="font-weight-bold mb-4 pb-2">เราคาดหวังอะไรกับสุขภาพของตัวเอง?</h2>
    {/* <!-- Section description --> */}
    <p class="lead grey-text mx-auto mb-5">มนุษย์ทุกคนล้วนคาดหวังสิ่งดีๆให้กับตัวเอง</p>

    {/* <!-- Grid row --> */}
    <div class="row">

      {/* <!-- Grid column --> */}
      <div class="col-md-4 mb-4">

        <i class="far fa-grin-squint fa-3x green-text"></i>
        <h5 class="font-weight-bold my-4">ผิวพรรณสดใส</h5>
        <p class="grey-text mb-md-0">
        </p>

      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div class="col-md-4 mb-4">

        <i class="fas fa-running fa-3x cyan-text"></i>
        <h5 class="font-weight-bold my-4">สุขภาพแข็งแรง</h5>
      

      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div class="col-md-4 mb-4">

        <i class="fas fa-ban fa-3x orange-text"></i>
        <h5 class="font-weight-bold my-4">ปราศจากโรคภัยไข้เจ็บ</h5>
       

      </div>
      {/* <!-- Grid column --> */}

    </div>
    {/* <!-- Grid row --> */}

  </section>
  {/* <!--Section: Content--> */}


</div>
    )
    
    
    const blog6 = () =>(

      <>
       <MDBView src={pic4} className="fix-bg" id="fakkhaw" >
    
    <MDBMask className='rgba-black-light' />
    
              <MDBContainer
                className='d-flex justify-content-center align-items-center '
                style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
              >
    
                <MDBRow className=" mb-5  ">
                <MDBAnimation reveal type="fadeInUp" >
    
                  <MDBCol md='12' className='mb-4 white-text text-center'>
    
                    <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    คุณพร้อมรับสิ่งดีๆเหล่านี้แล้วหรือยังล่ะ?
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

    const head7 = () => (
      <>
       <MDBAnimation reveal type="zoomIn">

<div class="container my-5">

 
{/* <!--Section: Content--> */}
<section class="px-md-5 mx-md-5 py-5 text-center white-text elegant-color z-depth-1 rounded">

  <h3 class="">ชาเกษรดอกบัว<i class="fas fa-spa pink-text mx-1"></i></h3>

</section>
{/* <!--Section: Content--> */}


</div>
</MDBAnimation>
      </>
    )

    const blog7 = () =>(
        <>
         <div class="container my-5 py-5 z-depth-1">
       
      
       {/* <!--Section: Content--> */}
       <section class="text-center px-md-5 mx-md-5 dark-grey-text">
      
         {/* <!--Grid row--> */}
         <div class="row d-flex justify-content-center">
      
           {/* <!--Grid column--> */}
           <div class="col-lg-7">
      
             <p>นาบัวลุงแจ่มได้นำยอดเกษรของดวกบัว มาแปรรูปเป็นน้ำชามากสรรพคุณ</p>
      
           </div>
           {/* <!--Grid column--> */}
      
         </div>
         {/* <!--Grid row--> */}
       </section>
       {/* <!--Section: Content--> */}
      
      
      </div>
        </>
      
    )
    const blog8 = () => (
      <>
      <div class="container my-5 py-5 z-depth-1">
    
    
      {/* <!--Section: Content--> */}
      <section class="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">
    
        {/* <!--Grid row--> */}
        <div class="row">
    
          {/* <!--Grid column--> */}
          <div class="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
    
            <img src={pic5} class="img-fluid" alt=""
            style={{height:'350px'}}
            />
    
          </div>
          {/* <!--Grid column--> */}
    
          {/* <!--Grid column--> */}
          <div class="col-lg-6 mb-4 mb-lg-0">
    
            <h4 class="font-weight-bold">ทำไมต้องชาเกษรดอกบัว <i class="fas fa-spa pink-text ml-3"></i> 
     </h4> 
    
            <p class="font-weight-bold">ด้วยความลงตัวของชากับดอกบัว</p>
            <MDBAnimation reveal type="fadeInRight">
    
            <p class="text-muted">
              ชาแต่ละประเภทก็มีประโยชน์ กลิ่น และรสสัมผัสที่ต่างกันออกไป แต่ชาดอกบัวเป็นชาที่มีเอกลักษณ์ด้าน กลิ่นที่หอม ชวนหลงใหล
              และรสชาติที่กลมกล่อม และ ความผสมผสานระหว่าง ชา กับ เกษรดอกบัว ที่ลงตัว 
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

    const blog9 = () => (
      <>
      <div class="container my-5 py-5 z-depth-1">
    
    
    {/* <!--Section: Content--> */}
    <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
    
     {/* <!--Grid row--> */}
     <div class="row">
    
       {/* <!--Grid column--> */}
       <div class="col-md-6 mb-4 mb-md-0">
    
         <h3 class="font-weight-bold mb-5">อุดมไปด้วยสรรพคุณมากมาย  
    
         <i class="fas fa-thumbs-up ml-3 blue-text"></i> 
         </h3>
    
         <p class="text-muted">
         <MDBAnimation reveal type="fadeInLeft">
           นาบัวลุงแจ่ม อยากให้ผู้บริโภคสัมผัสถึงคุณประโยชน์ต่างๆ จึงนำ
           เกสรดอกบัวที่ถูกคัดสรรมาอยากดี มาแปรรูปเป็นชาคุณภาพ ที่ให้โภชนาการสูงสุด
          </MDBAnimation>
         </p>
    
       </div>
       {/* <!--Grid column--> */}
    
       {/* <!--Grid column--> */}
       <div class="col-md-6 mb-4 mb-md-0">
    
         {/* <!--Image--> */}
         <div class="view overlay z-depth-1-half">
           <img src={pic6}class="img-fluid"
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

    const head10 = () => (
      <>
       <MDBAnimation reveal type="zoomIn">

<div class="container my-5">

 
{/* <!--Section: Content--> */}
<section class="px-md-5 mx-md-5 py-5 text-center white-text elegant-color z-depth-1 rounded">

  <h3 class="">สิ่งที่คุณจะได้รับจากชาเกษรดอกบัว<i class="fas fa-spa pink-text mx-1"></i></h3>

</section>
{/* <!--Section: Content--> */}


</div>
</MDBAnimation>
      </>
    )



    const blog10 = () => (
        <>
        <div class="container pt-5 my-5 z-depth-1">
  <section class="p-md-3 mx-md-5">
    <div class="row">
      <div class="col-lg-3 col-md-6 mb-5">
        <h4 class="font-weight-bold mb-3">
          <i class="fas fa-heart red-text pr-2"></i> บำรุงหัวใจ
        </h4>
        <p class="text-muted">
          บำรุงหัวใจให้แข็งแรง ลดอัตราการเกิดโรคหัวใจ
        </p>
      </div>
      <div class="col-lg-3 col-md-6 mb-5">
        <h4 class="font-weight-bold mb-3">
          <i class="fas fa-cookie-bite brown-text pr-2"></i> ลดน้ำตาลในเลือด
        </h4>
        <p class="text-muted">
        ช่วยลดอัตราการเกิดโรคเบาหวานได้เป็นอย่างดี
        </p>
      </div>
      <div class="col-lg-3 col-md-6 mb-5">
        <h4 class="font-weight-bold mb-3">
          <i class="fas fa-eye amber-text pr-2"></i> บำรุงสายตา
        </h4>
        <p class="text-muted">
          ช่วยชะลอการเสื่อมของดวงตา
        </p>
      </div>
      <div class="col-lg-3 col-md-6 mb-5">
        <h4 class="font-weight-bold mb-3">
          <i class="fas fa-shield-alt orange-text pr-2"></i> ต้านอนุมูลอิสระ
        </h4>
        <p class="text-muted">
         ชะลอการเกิดฝ้า กระ และจุดด่างดำบนในหน้า
        </p>
      </div>
      <div class="col-lg-3 col-md-6 mb-5">
        <h4 class="font-weight-bold mb-3">
          <i class="fas fa-thermometer-half lime-text pr-2"></i> ลดความดัน
        </h4>
        <p class="text-muted mb-lg-0">
        ช่วยลดความดันโลหิต
        </p>
      </div>
      <div class="col-lg-3 col-md-6 mb-5">
        <h4 class="font-weight-bold mb-3">
          <i class="fas fa-toilet blue-text pr-2"></i>การขับถ่าย
        </h4>
        <p class="text-muted mb-lg-0">
          แก้ปัญหาปัสสาวะบ่อย และ ปัญหาท้องเสีย
        </p>
      </div>
      <div class="col-lg-3 col-md-6 mb-5">
        <h4 class="font-weight-bold mb-3">
          <i class="fas fa-bed pink-text pr-2"></i> การนอนหลับ
        </h4>
        <p class="text-muted mb-md-0">
        ช่วยให้การนอนหลับง่ายขึ้น หลับสบาย
        </p>
      </div>
      <div class="col-lg-3 col-md-6 mb-5">
        <h4 class="font-weight-bold mb-3">
          <i class="fas fa-venus purple-text pr-2"></i> ประจำเดือน
        </h4>
        <p class="text-muted mb-md-0">
          ช่วยให้ประจำเดือนมาปกติ
        </p>
      </div>
    </div>
  </section>
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
      {head7()}
      {blog7()}
      {blog8()}
      {blog9()}
      {head10()}
      {blog10()}







      



      













      </>
  )

}


export default Bag;


