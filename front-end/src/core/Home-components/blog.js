import React from "react";
import { Link } from 'react-router-dom';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
// import location1 from '../location1.jpg';
import Handwash from './picture/handwash.jpg';
import tea from './picture/tea.jpg';



import Nabualo from '../location1.jpg';



const BlogPage = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          สินค้าของเราผลิตมากจากธรรมชาติ
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          พวกเราชาวชุมชนมหาสวัสดิ์ใส่ใจทุกขั้นตอนการผลิต เพื่อสร้างสรรค์สิ่งที่ดีที่สุดให้กับผู้บริโภค        
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src= {Handwash}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
              <MDBIcon icon="allergies" className="pr-2" />
                ของใช้
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>เจลล้างมือฟักข้าว</strong>
            </h3>
            <p>
              เจลล้างมือฟักข้าวที่ถูกผลิตขึ้นมาจากชุมชนคลองมหาสวัสดิ์ สูตรเฉพาะของ บ้านฟักข้าวคุณขนิษฐา ผู้ใช้จะสัมผัสถึงความนุ่มนวล อ่อนโยนต่อผิว และ ชุ่มชื้นตลอดเวลา
              ตลอดจนกลิ่นของน้ำฟักข้าวที่ทำให้คุณรู้สึกหลงใหล
               
            </p>
            <p>
              by
              <a href="#!">
                <strong> บ้านฟักข้าว</strong>
              </a>
            </p>
         <Link to ='product/5e747ef041341508681a4661'>
         <button type="button" class="btn px-3 py-2  btn-default">
              Read more
            </button>
          </Link>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
              <MDBIcon icon="bath"  className="pr-2" />
                ของใช้
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>สบู่ฟักข้าว</strong>
            </h3>
            <p>
             สบู่ฟักข้าวจากผลไม้พื้นบ้านของชุมชนคลองมหาสวัสดิ์สูตรต้นตำหรับบ้านฟักข้าวขนิษฐา
		ผสมผสานคุณประโยชน์จากธรรมชาติผสมผสานกลิ่นที่หอม ชวนให้หลงไหลดื่มด่ำไปกลับธรรมชาติขณะใช้ทำความสะอาดร่างกาย 
    ด้วยสรรพคุณที่เหลือล้นของสบู่ฟักข้าว
            </p>
            <p>
              by
              <a href="#!">
                <strong> บ้านฟักข้าว</strong>
              </a>
            </p>
          
            <Link to ='product/5e74cc6b87d18b1180d8d7f2'>
         <button type="button" class="btn px-3 py-2 btn-danger">
              Read more
            </button>
          </Link>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/83770871_2438456216394846_5412847996389818368_n.jpg?_nc_cat=107&_nc_sid=110474&_nc_oc=AQmd06vMG4IHLhUxTrbpnb5Kyo_dAJzxjErpVLa4pQ00MkRW2L6wIFMj6RsD14uEvPpb0NtiiMbVr0FNUdeqW5jc&_nc_ht=scontent.fbkk8-2.fna&oh=3b4c09baa295597acc3993070d15c315&oe=5E99A0B3"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={tea}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="indigo-text">
              <h6 className="font-weight-bold mb-3">
              <MDBIcon icon="utensils"  className="pr-2" />
                ของทานเล่น
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>ชาเกษรดอกบัว</strong>
            </h3>
            <p>
              เกษรจากดอกบัวสู่การแปรรูป เพื่อให้ได้ชาที่มีกลิ่นหอมชวนน่าลอง รสชาติกลมกล่อม สรรพคุณท่วมล้น
              ชาเกสรดอกบัวนี้เป็นสินค้าของนาบัวลุงแจ่ม ชาที่นำมาแปรรูป เป็นชาที่ทำจากเกสรของบัวสัตตบุษย์และบัวสัตตบงกช 
              เพื่อคัดสรรสิ่งที่ดีที่สุดให้กับผู้ดื่ม
                       
            </p>
            <p>
              by
              <a href="#!">
                <strong> นาบัวลุงแจ่ม</strong>
              </a>
            </p>
          
            <Link to='product/5e73a300706ed211419762a1'>
            <button type="button" class="btn px-3 py-2  btn-info">
              Read more
            </button>
          </Link>

          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default BlogPage;