import React from 'react';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBAnimation
  } from 'mdbreact';
import shop from './Fakk_Photo/shop.jpg';

const cover = () => (


    <>
    <MDBView src={shop}  id="fakkhaw" >

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
                  <strong>ยินดีต้อนรับ</strong>
                </h5>
             
              
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          
        </MDBView>
        

    </>

)
export default cover;