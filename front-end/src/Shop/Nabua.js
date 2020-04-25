import React from 'react'; 
import Menu from '../core/Menu';
import Footer from '../core/Footer';
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
  import nabuaPhoto from '../photo/nabuaLocation.jpeg'


const Nabua = () => {


    const intro = () => (
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
                <Link to="/shop/:searchResult/:search"><div className="text-white">รับชมสินค้า</div></Link>
              
                </MDBBtn>
              
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        

        </>
    )


    return(
        <>
        <Menu/>
        {intro()}
        <Footer/>
        </>

    )
}
export default Nabua;