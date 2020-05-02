import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBAnimation
  } from 'mdbreact';
  import Menu from '../core/Menu';
  import pic from '../photo/สะพาน.jpg' 


  const SelectShop = () => {

    useEffect(() => {
      window.scrollTo(0, 0)     
  }, []);
    

const intro = () => (
        
<MDBView src={pic}  >
<MDBMask className='rgba-black-light' 
/>
<Menu/>   
          <MDBContainer
            className='d-flex justify-content-center align-items-center '
            style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
          >
            <MDBRow className=" mb-5 ">
              <MDBCol md='12' className='mb-4 white-text text-center'>
              <MDBAnimation reveal type="">
                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 text-head '>
                  คุณสามารถเลือกดูร้านค้าออนไลน์จากชุมชนมหาสวัสดิ์ได้ที่นี่
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase mb-4 white-text '>
                  <strong>ชุมชนมหาสวัสดิ์</strong>
                </h5>
                <ul class="smooth-scroll list-unstyled text-head">
                <Link to ='/shop/banfakkhaw'>
                <MDBBtn  outline color='white' className="shop-button">
                 <div className="text-white button-text">บ้านฟักข้าว</div>             
                 </MDBBtn>
                 </Link>               
                <Link to ='/shop/nabua'>
                <MDBBtn outline color='white' className="shop-button" >              
                <div className="text-white button-text">นาบัวลุงแจ่ม</div>
                </MDBBtn>
                </Link>
                </ul>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        
    )
    return(      
    <div className='rgba-black-light'>
    {intro()}
    </div>
     ) }


  export default SelectShop;