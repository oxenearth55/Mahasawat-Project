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

  import art1 from '../Fakk_Photo/Lotion/art1.jpeg';
  import art2 from '../Fakk_Photo/Lotion/art2.jpeg';

  import adventure from '../Fakk_Photo/Lotion/blog2.jpg';
  import meeting from '../Fakk_Photo/Lotion/meeting.jpg';
  import agree from '../Fakk_Photo/Lotion/agree.jpg';
  import skin from '../Fakk_Photo/Lotion/skin.jpg';
  import fakk from '../Fakk_Photo/Lotion/fakk.jpg';
  import lotion from '../Fakk_Photo/Lotion/showLotion.png';








const Lotion = () => {
    
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

      const blog2 = () =>(

        <>
         <MDBView src={adventure} className="fix-bg" id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                        การพจญภัยเป็นสิ่งหนึ่งที่สำคัญที่สุดในชีวิตของมนุษย์
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
         <MDBView src={meeting} className="fix-bg" id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                        ไม่ว่าจะเป็นการออกไปพบปะผู้คน ทำงาน หรือท่องเที่ยวก็ตาม
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
         <MDBView src={agree} className="fix-bg" id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                        เราเข้าใจว่าสิ่งเหล่านี้สำคัญกับคุณมาก
                      </h1>
      
                      <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="1.5s">
                     
                      </MDBAnimation>

                      <hr className='hr-light my-4' />
                      <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="1.5s">
                      <h5 className='text-uppercase mb-4 white-text'>
                        <strong>แต่ยังมีอีกสิ่งหนึ่งที่สำคัญพอๆกัน...</strong>
                      </h5>
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
         <MDBView src={skin} className="fix-bg" id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                        นั่นคือการดูแลรักษาผิวพรรณของคุณ
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

      const blog6 = () => (
    
       <div class="container my-5">


{/* <!--Section: Content--> */}
<section class="dark-grey-text text-center">

  <h6 class="font-weight-normal text-uppercase font-small grey-text mb-4">ทำไมเราถึงต้องคำนึงถึงผิวพรรณด้วยล่ะ</h6>
  {/* <!-- Section heading --> */}
  <h3 class="font-weight-bold black-text mb-4 pb-2">มีปัจจัยหลายอย่างที่คุณควรคำนึงถึง</h3>
  <hr class="w-header"/>
  {/* <!-- Section description --> */}
  <p class="lead text-muted mx-auto mt-4 pt-2 mb-5">เพราะในแต่ละวันเราต้องเผชิญกับหลายสิ่งหลายอย่างที่สามารถทำร้ายผิวของเรา</p>

  {/* <!--First row--> */}
  <div class="row">

    {/* <!--Grid column--> */}
    <div class="col-md-3 mb-4">

      {/* <!-- Card --> */}
      <a href="#!" class="card hoverable">
        
        {/* <!-- Card content --> */}
        <div class="card-body my-4">

            <p><i class="fas fa-sun fa-2x text-muted"></i></p>
          <h5 class="black-text mb-0">แสงแดด</h5>
          
        </div>

      </a>
      {/* <!-- Card --> */}

    </div>
    {/* <!--Grid column--> */}

    {/* <!--Grid column--> */}
    <div class="col-md-3 mb-4">

      {/* <!-- Card --> */}
      <a href="#!" class="card hoverable">
        
        {/* <!-- Card content --> */}
        <div class="card-body my-4">

            <p><i class="fas fa-smog fa-2x text-muted"></i></p>
          <h5 class="black-text mb-0">ฝุ่น</h5>
          
        </div>

      </a>
      {/* <!-- Card --> */}

    </div>
    {/* <!--Grid column--> */}
    
    {/* <!--Grid column--> */}
    <div class="col-md-3 mb-4">

      {/* <!-- Card --> */}
      <a href="#!" class="card hoverable">
        
        {/* <!-- Card content --> */}
        <div class="card-body my-4">

            <p><i class="fas fa-smoking fa-2x text-muted"></i></p>
          <h5 class="black-text mb-0">ควันบุหรี่</h5>
          
        </div>

      </a>
      {/* <!-- Card --> */}

    </div>
    {/* <!--Grid column--> */}
    
    {/* <!--Grid column--> */}
    <div class="col-md-3 mb-4">

      {/* <!-- Card --> */}
      <a href="#!" class="card hoverable">
        
        {/* <!-- Card content --> */}
        <div class="card-body my-4">

            <p><i class="fas fa-skull-crossbones fa-2x text-muted"></i></p>
          <h5 class="black-text mb-0">มลพิษต่างๆ</h5>
          
        </div>

      </a>
      {/* <!-- Card --> */}

    </div>
    {/* <!--Grid column--> */}

  </div>
  {/* <!--First row--> */}

  </section>


</div>
    
    )

    const blog7 = () => (
        <>
        <div class="container my-5 p-5 z-depth-1">

        {/* <!--Section: Content--> */}
  <section class="text-center dark-grey-text">

    {/* <!-- Section heading --> */}
    <h2 class="font-weight-bold mb-4 pb-2">ปัจจัยเหล่านี้</h2>
    {/* <!-- Section description --> */}
    <p class="lead grey-text mx-auto mb-5">สิ่งเหล่านี้จะเป็นตัวกระตุ้นให้เกิดอนุมูลอิสระ หรือ เรียกง่ายๆว่าขยะที่เกิดจากการทำงานตามปกติของร่างกาย
    อนุมูลอิสระจะทำลายคอลลาเจน ซึ่งเป็นโครงสร้างสำคัญ สำหรับผิวหนัง ที่อยู่ในชั้นหนังแท้ และก่อให้เกิดผลเสียมากมายต่อผิวพรรณของเรา </p>

    {/* <!-- Grid row --> */}
    <div class="row">

      {/* <!-- Grid column --> */}
      <div class="col-md-4 mb-4">

        <i class="fas fa-exclamation fa-3x red-text"></i>
        <h5 class="font-weight-bold my-4">ผิวแห้งหยาบ</h5>
        

      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div class="col-md-4 mb-4">

        <i class="fas  fa-exclamation fa-3x cyan-text"></i>
        <h5 class="font-weight-bold my-4">ผิวเหี่ยวย่น</h5>
       

      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div class="col-md-4 mb-4">

        <i class="fas  fa-exclamation fa-3x orange-text"></i>
        <h5 class="font-weight-bold my-4">ผิวคล้ำ ฝ้าขึ้น</h5>
       

      </div>
      {/* <!-- Grid column --> */}

    </div>
    {/* <!-- Grid row --> */}

  </section>
  {/* <!--Section: Content--> */}


</div>
        </>
    )
    


      const blog8 = () =>(

        <>
         <MDBView src={fakk} className="fix-bg" id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                        เพราะฉะนั้น การดูแลผิว ปล่อยให้เป็นหน้าที่ของฟักข้าว
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


      const blog9 = () => (
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
                <img src={art2}class="img-fluid"
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


    const blog10 = () => (
        <MDBAnimation reveal type="zoomIn">

        <div class="container my-5">
        
         
        {/* <!--Section: Content--> */}
        <section class="px-md-5 mx-md-5 py-5 text-center white-text elegant-color z-depth-1 rounded">
        
          <h3 class="">สิ่งที่คุณจะได้รับหลังใช้โลชั่นฟักข้าว <i class="fas fa-heart red-text mx-1"></i></h3>
        
        </section>
        {/* <!--Section: Content--> */}
        
        
        </div>
        </MDBAnimation>
      )


    const blog11 = () => (
        <>
        <div class="container my-5 p-5 z-depth-1">


{/* <!--Section: Content--> */}
<section class="dark-grey-text">

  {/* <!-- Section heading --> */}
  <h2 class="text-center font-weight-bold mb-4 pb-2">โลชั่นฟักข้าว</h2>
  {/* <!-- Section description --> */}
  <p class="text-center lead grey-text mx-auto mb-5">

  </p>

  {/* <!-- Grid row --> */}
  <div class="row">

    {/* <!-- Grid column --> */}
    <div class="col-md-4">

      {/* <!-- Grid row --> */}
      <div class="row my-5">

        {/* <!-- Grid column --> */}
        <div class="col-2 ">
          <i class="fas fa-2x fa-angle-up green-text"></i>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-10">
          <h5 class="font-weight-bold mb-3">ช่วยให้ผิวขาวกระจ่างใส</h5>
         
        </div>
        {/* <!-- Grid column --> */}

      </div>
      {/* <!-- Grid row --> */}

      {/* <!-- Grid row --> */}
      <div class="row my-5">

        {/* <!-- Grid column --> */}
        <div class="col-2 ">
          <i class="fas fa-2x fa-angle-down red-text"></i>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-10">
          <h5 class="font-weight-bold mb-3">ลดเลือนจุดด่างดำตามผิวหนัง</h5>
        
        </div>
        {/* <!-- Grid column --> */}

      </div>
      {/* <!-- Grid row --> */}

      {/* <!-- Grid row --> */}
      <div class="row mb-md-0 mt-5">

        {/* <!-- Grid column --> */}
        <div class="col-2 ">
          <i class="fas fa-2x fa-wheelchair deep-purple-text"></i>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-10">
          <h5 class="font-weight-bold mb-3">ชะรอริ้วรอยต่างๆ</h5>
        
        </div>
        {/* <!-- Grid column --> */}

      </div>
      {/* <!-- Grid row --> */}

    </div>
    {/* <!-- Grid column --> */}

    {/* <!-- Grid column --> */}
    <div class="col-md-4 text-center">
      <img class="img-fluid" src={lotion}
        alt="Sample image"
        style={{height:'400px'}}/>
    </div>
    {/* <!-- Grid column --> */}

    {/* <!-- Grid column --> */}
    <div class="col-md-4">

      {/* <!-- Grid row --> */}
      <div class="row my-5">

        {/* <!-- Grid column --> */}
        <div class="col-2">
          <i class="fas fa-2x fa-shield-alt purple-text"></i>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-10">
          <h5 class="font-weight-bold mb-3">ต้านอนุมูลอิสระ</h5>
          
        </div>
        {/* <!-- Grid column --> */}

      </div>
      {/* <!-- Grid row --> */}

      {/* <!-- Grid row --> */}
      <div class="row my-5">

        {/* <!-- Grid column --> */}
        <div class="col-2">
          <i class="fas fa-2x fa-tint blue-text"></i>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-10">
          <h5 class="font-weight-bold mb-3">คงความชุ่มชื้นของผิว</h5>
          
        </div>
        {/* <!-- Grid column --> */}

      </div>
      {/* <!-- Grid row --> */}

      {/* <!-- Grid row --> */}
      <div class="row mt-5">

        {/* <!-- Grid column --> */}
        <div class="col-2">
          <i class="fas fa-2x fa-heart red-text"></i>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-10">
          <h5 class="font-weight-bold mb-3">กลิ่นหอมชวนหลงใหล</h5>
         
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
        {blog8()}
        {blog9()}
        {blog10()}
        {blog11()}











        </>
    )
};

export default Lotion;

