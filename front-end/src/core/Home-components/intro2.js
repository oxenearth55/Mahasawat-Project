import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBFormInline,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation
} from 'mdbreact';
import Menu from '../Menu';

import sapan from '../../photo/sapan.jpg' 




const Intro = () => (

<MDBView  src={sapan} >
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
                ท่านสามารถเดินทางมาซื้อผลิตภัณฑ์จากหน้าร้านได้
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase mb-4 white-text '>
                  <strong>เพื่อสัมผัสกับธรรมชาติท่ามกลางชุมชน</strong>
                </h5>
             
            
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>

); 

export default Intro;