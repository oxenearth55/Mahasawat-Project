import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation
} from 'mdbreact';
import Menu from '../Menu';

import {Link} from 'react-router-dom' 
import IntroPic from '../../photo/intro.jpg' 


const Intro = () => (
  // 'https://mdbootstrap.com/img/Photos/Others/img%20%2848%29.jpg'

<MDBView  src={IntroPic} className="fix-bg">
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
                  ร้านค้ามหาสวัสดิ์
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase mb-4 white-text '>
                  <strong>ผลิตภัณฑ์ธรรมชาติจากชุมชน</strong>
                </h5>
                <a href="#products" >
                <MDBBtn outline color='white'>
              สินค้ามหาสวัสดิ์
                </MDBBtn>
                </a>
                <a href="#shop" >
                <MDBBtn outline color='white'>
               ร้านค้าออนไลน์
                </MDBBtn>
                </a>

                <a href="#best" >
                <MDBBtn outline color='white'>
                   สินค้าขายดี
                </MDBBtn>
                </a>
                <a href="#new" >
                <MDBBtn outline color='white'>
                   สินค้ามาใหม่
                </MDBBtn>
                </a>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>

); 

export default Intro;