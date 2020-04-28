import React from 'react'; 
import Menu from '../../core/Menu';
import Footer from '../../core/Footer';
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
  import nabuaPhoto from './Nabua_photo/nabua.jpg'

  import pic1 from './Nabua_photo/ป้าย.jpg'
  import pic2 from './Nabua_photo/เรือ2.jpg'


const Nabua = () => {
    const intro = () => (
        <>
        <MDBView src={nabuaPhoto} className="fix-bg"   >

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
                  <strong>ยินดีต้อนรับ</strong>
                </h5>              
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        

        </>
    )
const blog1 = () => (
  <>
  <MDBAnimation reveal type="fadeInUp">

<div class="container my-5 py-5 z-depth-1">


{/* <!--Section: Content--> */}
<section class="dark-grey-text text-center">

<h3 class="font-weight-bold pt-4 mb-4">นาบัวลุงแจ่ม</h3>

<h5 class="font-weight-bold font-italic mb-5">“ภูมิปัญญาท้องถิ่นสู่เกษตรพอเพียง"
</h5>

<div class="row mx-lg-5 mx-md-3">
<div class="col-md-6 mb-4">

<div class="view mb-5">
<img src={pic1} class="img-fluid" alt="smaple image"/>
</div>

<h5 class="font-weight-normal text-muted">นาบัวลุงแจ่มได้นำองค์ความรู้ต่างๆมาพัฒนาสินค้าคุณภาพ</h5>

</div>
<div class="col-md-6 mb-4">

<div class="view mb-5">
<img src={pic2}class="img-fluid" alt="smaple image"/>
</div>

<h5 class="font-weight-normal text-muted">
เราคำนึงถึงสิ่งดีๆที่ผู้บริโภคจะได้รับอยู่เสมอ
</h5>
{/* บ้านฟักข้าวได้นำผลฟักข้าวมาแปรรูปเป็นสินค้าที่มีคุณค่าทางโภชนาการมากมาย */}
</div>
</div>

</section>
{/* <!--Section: Content--> */}


</div>

</MDBAnimation>

</>
)

    return(
        <>
        <Menu/>
        {intro()}
        {blog1()}

        <Footer/>
        </>

    )
}
export default Nabua;