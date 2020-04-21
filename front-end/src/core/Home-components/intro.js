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

import {Link} from 'react-router-dom' 
import IntroPic from '../../photo/intro.jpg' 




const Intro = () => (
  // 'https://mdbootstrap.com/img/Photos/Others/img%20%2848%29.jpg'

<MDBView  src={IntroPic}>
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
                <Link to="/shop/:searchResult/:search">
                <MDBBtn outline color='white'>
                <div className="text-white">ร้านค้า</div>
                </MDBBtn>
                </Link>
                <MDBBtn outline color='white'>
                   เกี่ยวกับเรา
                </MDBBtn>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>

); 

export default Intro;