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



  const Tea = () =>{

    useEffect(() => {
      window.scrollTo(0, 0)     
  }, []);


  const intro = () =>(

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
                      คุณพร้อมที่จะดูแลสุขภาพแล้วหรือยัง?
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
     <MDBView src={pic1} className="fix-bg" id="fakkhaw" >
  
  <MDBMask className='rgba-black-light' />
  
            <MDBContainer
              className='d-flex justify-content-center align-items-center '
              style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
            >
  
              <MDBRow className=" mb-5  ">
              <MDBAnimation reveal type="fadeInUp" duration="1200ms"delay="0.5s">
  
                <MDBCol md='12' className='mb-4 white-text text-center'>
  
                  <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                ทำไมเราถึงต้องดูแลสุขภาพตัวเองด้วยล่ะ
                  </h1>

                  <hr className='hr-light my-4' />
                  <MDBAnimation reveal type="fadeInUp" duration="1200ms" delay="1.5s">
                  <h5 className='text-uppercase mb-4 white-text'>
                    <strong>เดี๋ยวเราจะบอกเหตุผลให้คุณเอง</strong>
                  </h5>
                  </MDBAnimation>
  
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

    {intro()}
     {blog2()}
        
        </>
    )
  }
  export default Tea;