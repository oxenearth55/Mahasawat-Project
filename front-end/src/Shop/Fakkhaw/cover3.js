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
import pic from './Fakk_Photo/smell.jpg';

const cover3 = () => (


    <>
    <MDBView className="fix-bg" src={pic}  id="fakkhaw" >

<MDBMask className='rgba-black-light' />

          <MDBContainer
            className='d-flex justify-content-center align-items-center '
            style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
          >

            <MDBRow className=" mb-5  ">
              <MDBCol md='12' className='mb-4 white-text text-center'>
              <MDBAnimation reveal type="fadeInUp">

                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                    กลิ่นหอม
                </h1>
              
             
              
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          
        </MDBView>
        

    </>

)
export default cover3;