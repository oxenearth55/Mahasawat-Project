import React, { useState, useEffect } from 'react';
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
  import {getAllProducts} from '../../core/apiCore';
  import AllShop from '../../core/AllShop';

  import nabuaPhoto from './Nabua_photo/nabua.jpg'
  import {getSpecificShop} from '../../admin/apiAdmin'

  import pic1 from './Nabua_photo/ป้าย.jpg'
  import pic2 from './Nabua_photo/เรือ2.jpg'
  import pic3 from './Nabua_photo/ชาเกษร.jpg'
  import pic4 from './Nabua_photo/faceWash.jpeg'
  import pic5 from './Nabua_photo/เรือ.jpg'
  import pic6 from './Nabua_photo/facebook.png'






const Nabua = () => {

  const [nabuaProducts,setNabuaProducts] = useState([]);
  const [shopContact, setShopContact] = useState([]);
  const [allProducts,setAllProducts] = useState([]);
  const [error, setError] = useState(false);


//NOTE Grab all products from the backend
  useEffect(()=>{
    loadAllProducts();
    getShopInfo();
    window.scrollTo(0, 0)     
},[] )

const loadAllProducts = () =>{
  getAllProducts().then(data => {
      if (data.error) {
          setError(data.error);
      } else {
       setAllProducts(data)
       filterNabuaProducts(data)
       
      }
  });
}

const filterNabuaProducts = (pro) =>{
  const array =[];
  {pro.map((p,i)=> {
      if(p.shop._id ==='5e6a17a35c566806d6a101dd'){
          array.push(p)
      }
  }

  )
  setNabuaProducts(array)

}
}

  // NOTE get the shop from backend
  const getShopInfo = () => {
    getSpecificShop('5e6a17a35c566806d6a101dd').then(data => {
        if (data.error) {
            setError(data.error)
        } else {
            // populate the state
          
            setShopContact(data.contact)
           
        }
    });
};


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

const head2 = () =>(
  <>
   <div class="container my-5">
{/* <!--Section: Content--> */}
  <section class="px-md-5 mx-md-5 py-5 text-center white-text elegant-color z-depth-1 rounded">

  <h3 class="">นาบัวลุงแจ่ม ได้นำเกษรดอกบัว <i class="fas fa-spa pink-text mx-1"></i> มาแปรรูปเป็นสินค้ามากสรรพคุณ</h3>

</section>
{/* <!--Section: Content--> */}


</div>

  </>
)

const blog2 = () =>(
  <>
  <div class="container my-5 py-5 z-depth-1">


  {/* <!--Section: Content--> */}
  <section class="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">

    {/* <!--Grid row--> */}
    <div class="row">

      {/* <!--Grid column--> */}
      <div class="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">

        <img src={pic3} class="img-fluid" alt=""
        style={{height:'350px'}}
        />

      </div>
      {/* <!--Grid column--> */}

      {/* <!--Grid column--> */}
      <div class="col-lg-6 mb-4 mb-lg-0">

        <h3 class="font-weight-bold">ชาเกษรดอกบัว<i class="fas fa-mug-hot green-text ml-3"></i> </h3>

        <p class="font-weight-bold">ด้วยความลงตัวของชากับดอกบัว</p>
        <MDBAnimation reveal type="fadeInRight" duration="1200ms" delay="0.5s">

        <p class="text-muted">
         นาบัวลุมแจ่มได้นำเกษรดอกบัวที่ได้ทำการเพาะปลูกเอง มาแปรรูปชาที่อุดมไปด้วยสรรพคุณมากมาย 
         และมีเอกลักษณ์ด้าน กลิ่นที่หอม น่าหลงใหล และรสชาติที่กลมกล่อม 
         ทั้งหมดนี้จึงทำให้ การผสมผสานระหว่าง ชา กับ เกษรดอกบัว ลงตัวอย่างมาก
        </p>
        </MDBAnimation>

      </div>
      {/* <!--Grid column--> */}

    </div>
    {/* <!--Grid row--> */}


  </section>
  {/* <!--Section: Content--> */}


</div>

</>
)

const blog3 = () =>(
<>
<div class="container my-5 py-5 z-depth-1">


{/* <!--Section: Content--> */}
<section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">

{/* <!--Grid row--> */}
<div class="row">

 {/* <!--Grid column--> */}
 <div class="col-md-6 mb-4 mb-md-0">

   <h3 class="font-weight-bold">สบู่เกษรดอกบัว  

   <i class="fas fa-bath ml-3 blue-text"></i> 
   </h3>

   <p class="text-muted">
   <MDBAnimation reveal type="fadeInLeft">

   การผสมผสานของสบู่ และเกษรดอกบัวสำหรับทำความสะอาดผิวหน้า และผิวกาย
   สามารถนำมาทำความสะอาดได้อย่างสะอาดหมดจด นอกจากนี้ยังมีวิตตามินที่ช่วยบำรุงผิวหน้าให้ให้กระจ่างใส่ และมอบความอ่อนโยนให้กับผิวหน้า


</MDBAnimation>
   </p>


 </div>
 {/* <!--Grid column--> */}

 {/* <!--Grid column--> */}
 <div class="col-md-6 mb-4 mb-md-0">

   {/* <!--Image--> */}
   <div class="view overlay z-depth-1-half">
     <img src={pic4}class="img-fluid"
       alt=""
       style={{height:'320px', width:'450px'}}
       
       />
    
   </div>

 </div>
 {/* <!--Grid column--> */}

</div>
{/* <!--Grid row--> */}


</section>
{/* <!--Section: Content--> */}


</div>

</>
)


const intro2 = () => (
  <>
  <MDBView src={pic5} className="fix-bg"   >

<MDBMask className='rgba-black-light' />

    <MDBContainer id="nabua"
      className='d-flex justify-content-center align-items-center '
      style={{ height: '100%', width: '100%', paddingTop: '2rem' }}
    >

      <MDBRow className=" mb-5  ">
        <MDBCol md='12' className='mb-4 white-text text-center'>
        <MDBAnimation reveal type="fadeInUp">

          <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
              นอกจากนี้ เรายังมีผลิตภัณฑ์อื่นๆอีกมาก 
          </h1>
            
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </MDBView>
  

  </>
)

const contact = () => (

  <>
  <div class="container mt-5 mb-5 ">
  <div class="container my-5 py-5 z-depth-1">

{/* <!--Section: Content--> */}
<section class="px-md-5 mx-md-5 dark-grey-text">

{/* <!--Grid row--> */}
<div class="row d-flex justify-content-center">

  {/* <!--Grid column--> */}
  <div class="col-lg-7 text-dark-grey">

    <h3 className='text-center mb-4'>ติดต่อนาบัวลุงแจ่ม</h3>
    <hr/>
<h5 className='my-4'>ชื่อ: {shopContact.contactName}</h5>
<h5 className='my-4'>เบอร์โทรศัพท์: {shopContact.phoneNumber}</h5> 
<h5 className='my-4'>อีเมล: {shopContact.email}</h5> 
<h5 className='my-4'>ไลน์: {shopContact.lineId}</h5> 




  </div>
  {/* <!--Grid column--> */}

</div>
{/* <!--Grid row--> */}
</section>
{/* <!--Section: Content--> */}
</div>

{/* <!--Section: Content--> */}
<section class="text-center">

 

  {/* <!-- Featured image --> */}
  <img src={pic6} class="img-fluid z-depth-1 rounded mb-4"
    alt=""/>

  <p class="mb-4">
    <strong>
      Facebook Fanpage      
    </strong>
  </p>

  {/* <!-- Interactions --> */}
  <div class="social-buttons smooth-scroll">
    {/* <!--Facebook--> */}
    <a href="https://www.facebook.com/%E0%B8%99%E0%B8%B2%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%A5%E0%B8%B8%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%88%E0%B8%A1-Jam-Cafe-346613946070195/">
    <button type="button" class="btn btn-sm btn-fb my-0" >
      <i class="fab fa-facebook-f fa-2x "></i>
    </button>
    </a>
   
  
  </div>
  {/* <!-- Interactions --> */}

</section>
{/* <!--Section: Content--> */}


</div>

  </>
)

    return(
        <>
        <Menu/>
        {intro()}
        {blog1()}
        {head2()}
        {blog2()}
        {blog3()}
        {intro2()}
        <AllShop product={nabuaProducts} />

{contact()}

        <Footer/>
        </>

    )
}
export default Nabua;