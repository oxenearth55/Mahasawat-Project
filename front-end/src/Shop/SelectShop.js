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
  import Footer from '../core/Footer'
  import Layout from '../core/Layout'
  import nabuaPhoto from '../photo/nabuaLocation.jpeg'
  import fakkhawPhoto from '../photo/fakkhawLocation.jpg'


  const SelectShop = () => {
    
const headerViedeo = () => (

        // <!-- Full Page Intro -->

        <div class="views">

          <video autoplay ="autoplay" loop='loop' mute class="video-intro" poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" >
            <source src='' type="video/mp4"/>
          </video>
          {/* <!-- Mask & flexbox options--> */}
          <div class="mask rgba-gradient d-flex justify-content-center align-items-center">
            {/* <!-- Content --> */}
            <div class="container px-md-3 px-sm-0">
              {/* <!--Grid row--> */}
              <div class="row wow fadeIn">
                {/* <!--Grid column--> */}
                <div class="col-md-12 mb-4 white-text text-center wow fadeIn">
                  <h3 class="display-3 font-weight-bold white-text mb-0 pt-md-5 pt-5">Creative Agency</h3>
                  <hr class="hr-light my-4 w-75"/>
                  <h4 class="subtext-header mt-2 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit deleniti consequuntur nihil.</h4>
                  <a href="#!" class="btn btn-rounded btn-outline-white">
                    <i class="fa fa-home"></i> Visit us
                  </a>
                </div>
                {/* <!--Grid column--> */}
              </div>
              {/* <!--Grid row--> */}
            </div>
            {/* <!-- Content --> */}
          </div>
          {/* <!-- Mask & flexbox options--> */}
        </div>

      
    );

const intro = () => (
        
<MDBView src='https://i1.wp.com/www.anneatnight.com/wp-content/uploads/2020/03/pigbrain.jpg?fit=1620%2C1079'  >

<MDBMask className='rgba-black-light' />
<Menu/>   
          <MDBContainer
            className='d-flex justify-content-center align-items-center '
            style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
          >

            <MDBRow className=" mb-5  ">
              <MDBCol md='12' className='mb-4 white-text text-center'>
              <MDBAnimation reveal type="fadeInUp">

                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 text-head '>
                  คูณสามารถเลือกดูสินค้าจากร้านค้าต่างๆได้ในหน้านี้
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase mb-4 white-text '>
                  <strong>ชุมชนมหาสวัสดิ์</strong>
                </h5>
                <ul class="smooth-scroll list-unstyled text-head">
                <MDBBtn outline color='white' className="shop-button" >
                <a href="#nabua"> <div className="text-white button-text">นาบัวลุงแจ่ม</div></a>
              
                </MDBBtn>
                <MDBBtn outline color='white' className="shop-button">
                <a href="#fakkhaw"> <div className="text-white button-text">บ้านฟักข้าว</div></a>               
                 </MDBBtn>
                <MDBBtn outline color='white' className="shop-button">
                <a href="#others"> <div className="text-white button-text">สินค้าทั้งหมด</div></a>               
                </MDBBtn>
                </ul>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        
    )

const nabuaShop = () => (
        <>
        <MDBView src={nabuaPhoto}   >

<MDBMask className='rgba-black-light' />

          <MDBContainer id="nabua"
            className='d-flex justify-content-center align-items-center '
            style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
          >

            <MDBRow className=" mb-5  ">
              <MDBCol md='12' className='mb-4 white-text text-center'>
              <MDBAnimation reveal type="fadeInUp">

                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    นาบัวลุงแจ่ม
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase mb-4 white-text '>
                  <strong>รับชมสินค้าจากทางร้าน</strong>
                </h5>
                <MDBBtn outline color='white'>
                <Link to="/shop/nabua"><div className="text-white">รับชมสินค้า</div></Link>
              
                </MDBBtn>
              
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        

        </>
    )


    const allShop = () => (
        <>
        <MDBView src='https://d2d3n9ufwugv3m.cloudfront.net/w1200-h900-cfill/topics/yJj8K-_MG_9878.jpg' >

<MDBMask className='rgba-black-light' />

          <MDBContainer id="others"
            className='d-flex justify-content-center align-items-center '
            style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
          >

            <MDBRow className=" mb-5  ">
              <MDBCol md='12' className='mb-4 white-text text-center'>
              <MDBAnimation reveal type="fadeInUp">

                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    สินค้าทั้งหมด
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase mb-4 white-text '>
                  <strong>รับชมสินค้าของทั้งสอนร้าน</strong>
                </h5>
                <MDBBtn outline color='white'>
                <Link to="/shop/:searchResult/:search"><div className="text-white">รับชมสินค้า</div></Link>
              
                </MDBBtn>
              
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

        </MDBView>
        <Footer/>

        

        </>
    )



    const FakkhawShop = () => (
        <>
        <MDBView src={fakkhawPhoto}  id="fakkhaw" >

<MDBMask className='rgba-black-light' />

          <MDBContainer
            className='d-flex justify-content-center align-items-center '
            style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
          >

            <MDBRow className=" mb-5  ">
              <MDBCol md='12' className='mb-4 white-text text-center'>
              <MDBAnimation reveal type="fadeInUp">

                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    บ้านฟักข้าว คุณขนิษฐา
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase mb-4 white-text '>
                  <strong>รับชมสินค้าจากทางร้าน</strong>
                </h5>
                <MDBBtn outline color='white'>
                <Link to="/shop/banfakkhaw"><div className="text-white">รับชมสินค้า</div></Link>
              
                </MDBBtn>
              
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          
        </MDBView>
        

        </>
    )




    return(
    
       
    <div className='rgba-black-light'>

    {intro()}
    {nabuaShop()}
    {FakkhawShop()}
    {allShop()}
    
    </div>



     ) }


  export default SelectShop;