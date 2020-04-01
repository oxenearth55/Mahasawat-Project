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

  import fakkhaw from '../Fakk_Photo/fakkhawSoaps.jpg';
  import dust from '../Fakk_Photo/Soap/dust.jpg';
  import work from '../Fakk_Photo/Soap/work.jpg';
  import bike from '../Fakk_Photo/Soap/bike.jpg';
  import glass from '../Fakk_Photo/Soap/glass.jpg';
  import shower from '../Fakk_Photo/Soap/shower.jpg';

  import problem1 from '../Fakk_Photo/Soap/problem1.jpg';
  import problem2 from '../Fakk_Photo/Soap/problem2.jpg';
  import problem3 from '../Fakk_Photo/Soap/problem3.jpg';

  import artSoap from '../Fakk_Photo/Soap/artSoap.jpg';
  import fakkhawPho from '../Fakk_Photo/Soap/fakkhaw.jpg';







const FakkSoap = () => {

    useEffect(() => {
   
        window.scrollTo(0, 0)     
    }, []);


    const blog1 = () =>(

        <>
         <MDBView src={fakkhaw}  id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                          พร้อมดูแลผิวพรรณของตัวเองแล้วหรือยัง?
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

      const blog5_intro =() =>(
        <>
        <MDBView src={dust}  id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                        ฝุ่นและมลพิษทางอากาศนั่นเอง 
                      </h1>
      
                      <hr className='hr-light my-4' />
                      <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="1.5s">
                      <h5 className='text-uppercase mb-4 white-text'>
                        <strong>สิ่งเหล่านี้เป็นภัยร้ายต่อผิวพรรณของเราโดยตรง</strong>
                      </h5>
                      </MDBAnimation>
                   
                    
                    </MDBCol>
                    </MDBAnimation>
      
                  </MDBRow>
                </MDBContainer>
                
              </MDBView>

        </>
      )

      const blog2_intro =() =>(
        <>
        <MDBView src={work} className="fix-bg"  id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                        ในแต่ละวัน คุณต้องออกไปเผชิญกับโลกที่กว้างใหญ่ไพศาล
                      </h1>
      
                      <hr className='hr-light my-4' />
                      <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="1.5s">
                      <h5 className='text-uppercase mb-4 white-text'>
                        <strong>เพื่อที่จะทำสิ่งใหม่ๆอยู่ตลอดเวลา</strong>
                      </h5>
                      </MDBAnimation>
                   
                    
                    </MDBCol>
                    </MDBAnimation>
      
                  </MDBRow>
                </MDBContainer>
                
              </MDBView>

        </>
      )
     
      const blog3_intro =() =>(
        <>
        <MDBView src={bike} className="fix-bg" id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                        ในช่วงที่คุณอ่อนล้าจากการผจญภัยมาตลอดทั้งวัน และกำลังวิ่งตรงดิ่งมาที่เตียงนุ่มๆของคุณ
                      </h1>
      
                      <hr className='hr-light my-4' />
                      <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="1.5s">
                      <h5 className='text-uppercase mb-4 white-text'>
                        <strong>คุณรู้หรือไม่ว่า...</strong>
                      </h5>
                      </MDBAnimation>
                   
                    
                    </MDBCol>
                    </MDBAnimation>
      
                  </MDBRow>
                </MDBContainer>
                
              </MDBView>

        </>
      )

      const blog4_intro =() =>(
        <>
        <MDBView src={glass} className="fix-bg"  id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                        ภัยเงียบที่ติดตามร่างกายของคุณจากการผจญภัย โดยที่คุณไม่รู้ตัว
                      </h1>
      
                      <hr className='hr-light my-4' />
                      <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="1.5s">
                      <h5 className='text-uppercase mb-4 white-text'>
                        <strong>คือ...</strong>
                      </h5>
                      </MDBAnimation>
                   
                    
                    </MDBCol>
                    </MDBAnimation>
      
                  </MDBRow>
                </MDBContainer>
                
              </MDBView>

        </>
      )

     
     
      const blog6_head = () => (
        <MDBAnimation reveal type="zoomIn">

        <div class="container my-5">
        
         
        {/* <!--Section: Content--> */}
        <section class="px-md-5 mx-md-5 py-5 text-center white-text elegant-color z-depth-1 rounded">
        
          <h3 class="">ผลกระทบของมลพิษต่อผิวพรรณ <i class="fas fa-skull-crossbones white-text mx-1"></i></h3>
        
        </section>
        {/* <!--Section: Content--> */}
        
        
        </div>
        </MDBAnimation>
      )


    const blog6_content = () => (
        <>
        <div class="container mt-5">


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
        <img class="card-img-top" src={problem1}alt="Card image cap"/>

        {/* <!-- Card content --> */}
        <div class="card-body">

          {/* <!-- Title --> */}
          <p class="card-title text-muted text-uppercase font-small mt-1 mb-3">ริ้วรอย</p>
          {/* <!-- Text --> */}
          <p class="mb-2">กระตุ้นการเกิดอนุมูลอิสระที่จะทำลายผิว ทำให้เกิดริ้วรอยเหี่ยวย่นก่อนวัยอันควร</p>

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
        <img class="card-img-top" src={problem2} alt="Card image cap"/>

        {/* <!-- Card content --> */}
        <div class="card-body">

          {/* <!-- Title --> */}
          <p class="card-title text-muted text-uppercase font-small mt-1 mb-3">สิว</p>
          {/* <!-- Text --> */}
          <p class="mb-2">ผิวหน้ามันขึ้น น้ำมันบนหน้าและฝุ่นจะทำให้เกิดการอุดตันของผิว และก่อให้เกิดสิว
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
        <img class="card-img-top" src={problem3} alt="Card image cap"/>

        {/* <!-- Card content --> */}
        <div class="card-body">

          {/* <!-- Title --> */}
          <p class="card-title text-muted text-uppercase font-small mt-1 mb-3">หน้าหมองคล้ำ</p>
          {/* <!-- Text --> */}
          <p class="mb-2">กระตุ้นให้หน้าแลดูหมองคล้ำ ไม่สดชื่น</p>

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

    const blog7 =() => (
        <>
         <MDBView src={shower} className="mt-5 fix-bg" id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                          เพื่อไม่ให้สิ่งเหล่านี้เกิดขึ้นกับตัวคุณ
                      </h1>
      
                      <hr className='hr-light my-4' />
                      <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="1.5s">
                      <h5 className='text-uppercase mb-4 white-text'>
                        <strong>  คุณต้องมองหาตัวช่วยที่สามารถปกป้องคุณจากภัยร้ายเหล่านี้
  </strong>
                      </h5>
                      </MDBAnimation>
                   
                    
                    </MDBCol>
                    </MDBAnimation>
      
                  </MDBRow>
                </MDBContainer>
                
              </MDBView>
        </>
    )


    const blog8 = () => (
        <div class="container my-5 py-5 z-depth-1">
 
 
        {/* <!--Section: Content--> */}
        <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
       
          {/* <!--Grid row--> */}
          <div class="row">
       
            {/* <!--Grid column--> */}
            <div class="col-md-6 mb-4 mb-md-0">
       
              <h3 class="font-weight-bold">ทำไมต้องผลฟักข้าว  
       
              <i class="fas fa-apple-alt ml-3 red-text"></i> 
              </h3>
       
              <p class="text-muted">
              <MDBAnimation reveal type="fadeInLeft">
               ในปัจจุบันผู้ประการส่วนมากแปรรูปเครื่องสำอางที่ทำมาจากพืชหรือสมุนไพรไทย เนื่องจากสรรพคุณที่มากมายและปลอดภัยต่อผู้บริโภค
               ซึ่งฟักข้าวเป็นหนึ่งในพืชพื้นบ้านที่ถูกเพาะปลูกมาอย่างช้านาน ปัจจุบันมีการวิจัยว่า ในเยื่อหุ้มเมล็ดมีแคโรทีนอยด์ สารไลโคปีน และสารเบต้าแคโรทีนที่สูง
               โดยเยื่อหุ้มเมล็ดของฟักข้าวมีปริมาณเบต้าแคโรทีน มากกว่าแครอทถึง 10 เท่า
               และมีไลโคปีนมากกว่ามะเขือเทศ 12 เท่า ซึ่งสารเหล่านี้มีความสำคัญในการต้านอนุมูลอิสระได้เป็นอย่างดี
       
       </MDBAnimation>
              </p>
        <p>by <a href="https://www.pharmacy.mahidol.ac.th/th/knowledge/article/223/ฟักข้าว-Momorodica-cochinchinensis/"><strong>ผู้ช่วยศาสตราจารย์ ดร. ภก. วิเชษฐ์ ลีลามานิตย์ </strong></a></p>
       
            </div>
            {/* <!--Grid column--> */}
       
            {/* <!--Grid column--> */}
            <div class="col-md-6 mb-4 mb-md-0">
       
              {/* <!--Image--> */}
              <div class="view overlay z-depth-1-half">
                <img src={fakkhawPho}class="img-fluid"
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
    )
    
    const blog9 = () => (
        <>
        <div class="container my-5">


{/* <!-- Section: Block Content --> */}
<section class="dark-grey-text">

  <h3 class="text-center font-weight-bold mb-4 pb-2">สบู่ฟักข้าว</h3>
  <p class="text-center text-muted w-responsive mx-auto mb-5">จากผลไม้พื้นบ้านของชุมชนมหาสวัสดิ์สูตรต้นตำหรับบ้านฟักข้าวขนิษฐา
  ผสมผสานคุณประโยชน์จากธรรมชาติ</p>

  {/* <!-- Grid row --> */}
  <div class="row">

    {/* <!-- Grid column --> */}
    <div class="col-lg-5 mb-lg-0 mb-5">

      <img src={artSoap} class="img-fluid rounded z-depth-1" alt="Sample project image"/>

    </div>
    {/* <!-- Grid column --> */}

    {/* <!-- Grid column --> */}
    <div class="col-lg-7">

      <ul class="list-unstyled fa-ul mb-0">
        <li class="d-flex justify-content-center pl-4">
          <span class="fa-li"><i class="fas fa-grin-squint fa-2x green-text"></i></span>
          <div>
            <h5 class="font-weight-bold mb-3">ลดริ้วรอย</h5>
            <p class="text-muted">สบู่ฟักข้าวสามารถลดริ้วรอยต่างๆบนใบหน้าได้ เพราะผลฟักข้าวมีมีสรรพคุณในการต่อต้านอนุมูลอิสระซี่งเป็นต้นเหตุแห่งความเสื่อมสภาพของเซลล์เป็นอย่างดี 
           </p>
          </div>
        </li>
        <li class="d-flex justify-content-center pl-4">
          <span class="fa-li"><i class="fas fa-tint fa-2x blue-text"></i></span>
          <div>
            <h5 class="font-weight-bold mb-3">อ่อนโยนต่อผิว</h5>
            <p class="text-muted">สบู่ฟักข้าวสามารถเพิ่มความชุ่มชื้นให้กับผิวหนัง และ ทำให้ผิวหนังอ่อนโยน นุ่มนวล แลดูเปล่งประกาย</p>
          </div>
        </li>
        <li class="d-flex justify-content-center pl-4">
          <span class="fa-li"><i class="fas fa-oil-can fa-2x deep-purple-text"></i></span>
          <div>
            <h5 class="font-weight-bold mb-3">ลดความมัน</h5>
            <p class="text-muted mb-0">สบู่ฟักข้าวช่วยลด แบคทีเรีย และความมันที่สะสมที่ทำให้เกิดสิวบนใบหน้า และส่วนต่างๆของร่างกายได้ดี</p>
          </div>
        </li>
      </ul>

    </div>
    {/* <!-- Grid column --> */}

  </div>
  {/* <!-- Grid row --> */}

  <hr class="my-5"/>

</section>
{/* <!-- Section: Block Content --> */}


</div>

        </>
    )

    return(

        <>
{blog1()}
{blog2_intro()}
{blog3_intro()}
{blog4_intro()}
{blog5_intro()}


{blog6_head()}
{blog6_content()}
{blog7()}
{blog8()}
{blog9()}




        </>
    )
}

export default FakkSoap ;