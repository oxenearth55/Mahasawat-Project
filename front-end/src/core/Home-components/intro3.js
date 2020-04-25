import React from 'react';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBAnimation
} from 'mdbreact';
import Menu from '../Menu';
import boat from '../../photo/boat.jpg' 


const Intro = () => (
<MDBView  src={boat} className="fix-bg">
          <MDBMask className='rgba-black-light' />
          <Menu/>

          <MDBContainer
            className='d-flex justify-content-center align-items-center '
            style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
          >

            <MDBRow className=" mb-5  ">
              <MDBCol md='12' className='mb-4 white-text text-center'>
              <MDBAnimation reveal type="fadeInUp">

                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                 แม้ว่าคุณจะอยู่บ้าน เราก็พร้อมส่งตรงความสุขให้กับคุณ 
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase mb-4 white-text '>
                  <strong>เพราะเราใส่ใจทุกขั้นตอน</strong>
                </h5>
             
            
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>

); 

export default Intro;