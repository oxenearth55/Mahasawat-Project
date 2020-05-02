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
  import art1 from '../Nabua_photo/SoapTea/art1.jpeg';
  import pic1 from '../Nabua_photo/SoapTea/pic1.jpg';
  import pic2 from '../Nabua_photo/SoapTea/pic2.jpg';
  import pic3 from '../Nabua_photo/SoapTea/pic3.jpg';
  import pic4 from '../Nabua_photo/SoapTea/pic4.jpg';
  import pic5 from '../Nabua_photo/SoapTea/pic5.jpg';
  import pic6 from '../Nabua_photo/SoapTea/pic6.jpeg';
  import pic7 from '../Nabua_photo/SoapTea/pic7.jpeg';
  import pic8 from '../Nabua_photo/SoapTea/pic8.jpg';

  import head1 from '../Nabua_photo/SoapTea/head1.jpg';
  import head2 from '../Nabua_photo/SoapTea/head2.jpg';




  import cut1 from '../Nabua_photo/SoapTea/cut1.png';
  import cut2 from '../Nabua_photo/SoapTea/cut2.png';










  const SoapTea = () => {

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
                  <MDBAnimation reveal type="fadeInUp">
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                          คุณพร้อมดูแลผิวพรรณของคุณแล้วหรือยัง
                      </h1>
      
                      <hr className='hr-light my-4' />
                      <MDBAnimation reveal type="fadeInUp" >
                      <h5 className='text-uppercase mb-4 white-text'>
                        <strong>ถ้าคุณพร้อมแล้ว มาเริ่มกันเลย</strong>
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
                  <MDBAnimation reveal type="fadeInUp" >
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                      ทำไมเราถึงต้องใส่ใจกับการอาบน้ำกันล่ะ
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
                      อะไรคือสิ่งที่คุณคาดหวังจากการอาบน้ำ
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
                      เราลองมาเริ่มดูประโยชน์ของการอาบน้ำกันดีกว่า
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
      <h2 class="font-weight-bold mb-4 pb-2">ประโยชน์จากการอาบน้ำ</h2>
      {/* <!-- Section description --> */}
      <p class="lead grey-text mx-auto mb-5">การอาบน้ำมีประโยชน์มากมาย</p>
  
      {/* <!-- Grid row --> */}
      <div class="row">
  
        {/* <!-- Grid column --> */}
        <div class="col-md-4 mb-4">
  
          <i class="fas fa-broom fa-3x green-text"></i>
          <h5 class="font-weight-bold my-4">ชำระสิ่งสกปรก</h5>
          <p class="grey-text mb-md-0">
          </p>
  
        </div>
        {/* <!-- Grid column --> */}
  
        {/* <!-- Grid column --> */}
        <div class="col-md-4 mb-4">
  
          <i class="fas fa-bath fa-3x blue-text"></i>
          <h5 class="font-weight-bold my-4">ผิวกายสะอาด</h5>
        
  
        </div>
        {/* <!-- Grid column --> */}
  
        {/* <!-- Grid column --> */}
        <div class="col-md-4 mb-4">
  
          <i class="fas fa-grin-squint fa-3x orange-text"></i>
          <h5 class="font-weight-bold my-4">รู้สึกสดชื่น</h5>
         
  
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
                      นอกจากประโยชน์แล้ว ยังมีอีกสิ่งหนึ่งที่คุณต้องคำนึง
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
         <MDBView src={pic5} className="fix-bg" id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" >
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                        นั่นคือ ตัวช่วยในการทำความสะอาดผิวพรรณยังไงล่ะ
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
  

      const head8 = () => (
        <>
         <MDBAnimation reveal type="zoomIn">
  
  <div class="container my-5">
  
   
  {/* <!--Section: Content--> */}
  <section class="px-md-5 mx-md-5 py-5 text-center white-text elegant-color z-depth-1 rounded">
  
    <h3 class="">สบู่เกษรดอกบัว<i class="fas fa-spa pink-text mx-1"></i></h3>
  
  </section>
  {/* <!--Section: Content--> */}
  
  
  </div>
  </MDBAnimation>
        </>
      )
  
      const blog8 = () =>(
          <>
           <div class="container my-5 py-5 z-depth-1">
         
        
         {/* <!--Section: Content--> */}
         <section class="text-center px-md-5 mx-md-5 dark-grey-text">
        
           {/* <!--Grid row--> */}
           <div class="row d-flex justify-content-center">
        
             {/* <!--Grid column--> */}
             <div class="col-lg-7">
        
               <p>

               นาบัวลุงแจ่ม อยากให้ผู้บริโภคสัมผัสถึงคุณประโยชน์ต่างๆ จึงนำ
             เกสรดอกบัวที่ถูกคัดสรรมาอยากดี มาแปรรูปเป็นสบู่มากสรรพคุณ
               </p>
        
             </div>
             {/* <!--Grid column--> */}
        
           </div>
           {/* <!--Grid row--> */}
         </section>
         {/* <!--Section: Content--> */}
        
        
        </div>
          </>
        
      )

const blog9_head = () =>(
    <>
      <MDBView src={head1} className="fix-bg" id="fakkhaw" >
      
      <MDBMask className='rgba-black-light' />
      
                <MDBContainer
                  className='d-flex justify-content-center align-items-center '
                  style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                >
      
                  <MDBRow className=" mb-5  ">
                  <MDBAnimation reveal type="fadeInUp" >
      
                    <MDBCol md='12' className='mb-4 white-text text-center'>
      
                      <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                      ทำความสะอาดผิวหน้า
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



      const blog9 = () => (
        <>
        <div class="container my-5 py-5 z-depth-1">
      
      
        {/* <!--Section: Content--> */}
        <section class="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">
      
          {/* <!--Grid row--> */}
          <div class="row">
      
            {/* <!--Grid column--> */}
            <div class="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
      
              <img src={pic6} class="img-fluid" alt=""
              style={{height:'350px'}}
              />
      
            </div>
            {/* <!--Grid column--> */}
      
            {/* <!--Grid column--> */}
            <div class="col-lg-6 mb-4 mb-lg-0">
      
              <h4 class="font-weight-bold">นิโลบล ออริจินอล <i class="fas fa-spa pink-text ml-3"></i> 
       </h4> 
      
              <p class="font-weight-bold">การผสมผสานของสบู่ และดอกบัวสำหรับล้างหน้า</p>
              <MDBAnimation reveal type="fadeInRight">
      
              <p class="text-muted">
                ด้วยคุณประโยชน์จากเกษรดอกบัวที่ท่วมท้น สามารถนำมาทำความสะอาดใบหน้า ได้อย่างสะอาดหมดจด
                 และ มีวิตตามินที่ช่วยบำรุงผิวหน้าให้ให้กระจ่างใส่ และมอบความอ่อนโยนให้กับผิวหน้า 
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

      const blog9_detail = () => (
        <>
        <div class="container my-5 p-5 z-depth-1">
  
  
  {/* <!--Section: Content--> */}
  <section class="dark-grey-text">
  
  {/* <!-- Section heading --> */}
  <h2 class="text-center font-weight-bold mb-4 pb-2">ส่วนประกอบของนิโลบล ออริจินอล
</h2>
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
          <i class="fas fa-2x fa-apple-alt yellow-text"></i>
        </div>
        {/* <!-- Grid column --> */}
  
        {/* <!-- Grid column --> */}
        <div class="col-10">
          <h6 class="font-weight-bold mb-3">Honey and paper mulberry Extract</h6>
         
        </div>
        {/* <!-- Grid column --> */}
  
      </div>
      {/* <!-- Grid row --> */}
  
      {/* <!-- Grid row --> */}
      <div class="row my-5">
  
        {/* <!-- Grid column --> */}
        <div class="col-2 ">
          <i class="fas fa-2x fa-atom blue-text"></i>
        </div>
        {/* <!-- Grid column --> */}
  
        {/* <!-- Grid column --> */}
        <div class="col-10">
          <h6 class="font-weight-bold mb-3">Glycerin</h6>
        
        </div>
        {/* <!-- Grid column --> */}
  
      </div>
      {/* <!-- Grid row --> */}
  
      {/* <!-- Grid row --> */}
      <div class="row mb-md-0 mt-5">
  
        {/* <!-- Grid column --> */}
        <div class="col-2 ">
          <i class="fas fa-2x fa-oil-can  green-text"></i>
        </div>
        {/* <!-- Grid column --> */}
        <div class="col-10">
          <h6 class="font-weight-bold mb-3">Olive, Jojoba and Coconut oil</h6>
        
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
      <img class="img-fluid" src={cut1}
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
    <i class="fas fa-2x fa-tablets orange-text"></i>
  </div>
  {/* <!-- Grid column --> */}

  {/* <!-- Grid column --> */}
  <div class="col-10">
    <h6 class="font-weight-bold mb-3">Vitamin E, C and B3</h6>     
  </div>
  
  {/* <!-- Grid column --> */}

</div>
{/* <!-- Grid row --> */}

      
      {/* <!-- Grid row --> */}
      <div class="row my-5">
  
        {/* <!-- Grid column --> */}
        <div class="col-2">
          <i class="fas fa-2x fa-cookie brown-text"></i>
        </div>
        {/* <!-- Grid column --> */}
  
        {/* <!-- Grid column --> */}
        <div class="col-10">
          <h6 class="font-weight-bold mb-3">Sweet almond oil</h6>
          
        </div>
        {/* <!-- Grid column --> */}
  
      </div>
      {/* <!-- Grid row --> */}
  
      {/* <!-- Grid row --> */}
      <div class="row mt-5">
  
        {/* <!-- Grid column --> */}
        <div class="col-2">
          <i class="fas fa-2x fa-spa pink-text"></i>
        </div>
        {/* <!-- Grid column --> */}
  
        {/* <!-- Grid column --> */}
        <div class="col-10">
          <h6 class="font-weight-bold mb-3">Lotus Extract and Stamen</h6>     
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


    const blog10_head = () =>(
        <>
          <MDBView src={head2} className="fix-bg" id="fakkhaw" >
          
          <MDBMask className='rgba-black-light' />
          
                    <MDBContainer
                      className='d-flex justify-content-center align-items-center '
                      style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
                    >
          
                      <MDBRow className=" mb-5  ">
                      <MDBAnimation reveal type="fadeInUp" >
          
                        <MDBCol md='12' className='mb-4 white-text text-center'>
          
                          <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                          ทำความสะอาดผิวกาย
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
        <div class="container my-5 py-5 z-depth-1">
      
      
      {/* <!--Section: Content--> */}
      <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
      
       {/* <!--Grid row--> */}
       <div class="row">
      
         {/* <!--Grid column--> */}
         <div class="col-md-6 mb-4 mb-md-0">
      
           <h3 class="font-weight-bold mb-5"> นิโลบล อิคซ์แทรค
  
      
           <i class="fas fa-tint ml-3 blue-text"></i> 
           </h3>
      
           <p class="text-muted">
           <MDBAnimation reveal type="fadeInLeft">
             นาบัวลุงแจ่ม อยากให้คุณได้สัมผัสประสบการณ์ที่ดี ด้วยสบู่ที่มีส่วนผสมของ
             เกสรดอกบัวที่ถูกคัดสรรมาอยากดี ทำความสะอาดผิวกายได้อย่างสะอาดหมดจด และมอบความอ่อนโยนให้กับผิวกาย
            </MDBAnimation>
           </p>
      
         </div>
         {/* <!--Grid column--> */}
      
         {/* <!--Grid column--> */}
         <div class="col-md-6 mb-4 mb-md-0">
      
           {/* <!--Image--> */}
           <div class="view overlay z-depth-1-half">
             <img src={pic7}class="img-fluid"
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
  
      const blog10_detail = () => (
        <>
        <div class="container my-5 p-5 z-depth-1">
  
  
  {/* <!--Section: Content--> */}
  <section class="dark-grey-text">
  
  {/* <!-- Section heading --> */}
  <h2 class="text-center font-weight-bold mb-4 pb-2">ส่วนประกอบของนิโลบล อิคซ์แทรค
</h2>
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
          <i class="fas fa-2x fa-apple-alt yellow-text"></i>
        </div>
        {/* <!-- Grid column --> */}
  
        {/* <!-- Grid column --> */}
        <div class="col-10">
          <h6 class="font-weight-bold mb-3">Honey, White tea, Chlorophyll Extract</h6>
         
        </div>
        {/* <!-- Grid column --> */}
  
      </div>
      {/* <!-- Grid row --> */}
  
      {/* <!-- Grid row --> */}
      <div class="row my-5">
  
        {/* <!-- Grid column --> */}
        <div class="col-2 ">
          <i class="fas fa-2x fa-atom blue-text"></i>
        </div>
        {/* <!-- Grid column --> */}
  
        {/* <!-- Grid column --> */}
        <div class="col-10">
          <h6 class="font-weight-bold mb-3">Glycerin</h6>
        
        </div>
        {/* <!-- Grid column --> */}
  
      </div>
      {/* <!-- Grid row --> */}
  
      {/* <!-- Grid row --> */}
      <div class="row mb-md-0 mt-5">
  
        {/* <!-- Grid column --> */}
        <div class="col-2 ">
          <i class="fas fa-2x fa-oil-can  green-text"></i>
        </div>
        {/* <!-- Grid column --> */}
        <div class="col-10">
          <h6 class="font-weight-bold mb-3">Olive, Jojoba and Coconut oil</h6>
        
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
      <img class="img-fluid" src={cut2}
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
    <i class="fas fa-2x fa-tablets orange-text"></i>
  </div>
  {/* <!-- Grid column --> */}

  {/* <!-- Grid column --> */}
  <div class="col-10">
    <h6 class="font-weight-bold mb-3">Vitamin E, C and B3</h6>     
  </div>
  
  {/* <!-- Grid column --> */}

</div>
{/* <!-- Grid row --> */}

      
      {/* <!-- Grid row --> */}
      <div class="row my-5">
  
        {/* <!-- Grid column --> */}
        <div class="col-2">
          <i class="fas fa-2x fa-cookie brown-text"></i>
        </div>
        {/* <!-- Grid column --> */}
  
        {/* <!-- Grid column --> */}
        <div class="col-10">
          <h6 class="font-weight-bold mb-3">Sweet almond oil</h6>
          
        </div>
        {/* <!-- Grid column --> */}
  
      </div>
      {/* <!-- Grid row --> */}
  
      {/* <!-- Grid row --> */}
      <div class="row mt-5">
  
        {/* <!-- Grid column --> */}
        <div class="col-2">
          <i class="fas fa-2x fa-spa pink-text"></i>
        </div>
        {/* <!-- Grid column --> */}
  
        {/* <!-- Grid column --> */}
        <div class="col-10">
          <h6 class="font-weight-bold mb-3">Lotus Extract and Stamen</h6>     
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
    {head8()}
    {blog8()}
    { blog9_head()}
    {blog9()}
    {blog9_detail()}
    { blog10_head()}

    {blog10()}
    {blog10_detail()}











        </>
    )
  }

  export default SoapTea;