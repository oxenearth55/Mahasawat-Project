import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



import fakkhaw from '../../photo/fakkhawLocation.jpg'
import nabua from '../../photo/nabuaLocation.jpeg'
import soapfakk from '../../photo/soap.jpg'
import losionfakk from '../../photo/losion.jpeg'
import bag from '../../photo/bag.jpeg'
import tea from '../../photo/tee.jpeg'
import bodywash from '../../photo/bodywash.jpeg'
import yamong from '../../photo/yamong.jpeg'
import {getAllProducts} from '../apiCore'
import {API} from '../../config' 










const ShowShop = () => {

  const [allProducts,setAllProducts] = useState([]);
  const [error, setError] = useState(false);



  const loadAllProducts = () =>{
    getAllProducts().then(data => {
        if (data.error) {
            setError(data.error);
        } else {
         setAllProducts(data)
         
        }
    });
}

useEffect(() => {
    //NOTE grab product
    loadAllProducts();
 
}, []);


  
  const showShop = () =>(
    <>
        <div class="container my-5">


{/* <!--Section: Content--> */}
<section class="magazine-section dark-grey-text">

  {/* <!-- Section heading --> */}
  <h3 class="text-center font-weight-bold mb-4 pb-2">ร้านค้าจากชุมชนมหาสวัสดิ์</h3>
  {/* <!-- Section description --> */}
  <p class="text-center w-responsive mx-auto mb-5">ชุมชนมหาสวัสดิ์เป็นชุมชนที่โดดเด่นในเรื่องของการแปรรูปผลิตภัณฑ์
  ธรรมชาติ อาทิเช่น น้ำฟักข้าว, สบู่ฟักข้าว, ชาเกษรดอกบัว และ อื่นๆอีกมากมาย ที่ทำให้คุณอยากลิ้มรสสัมผัส
  </p>
 
  {/* <!-- Grid row --> */}
  <div class="row">

    {/* <!-- Grid column --> */}
    <div class="col-lg-6 col-md-12">

      {/* <!-- Featured news --> */}
      <div class="single-news mb-4">

        {/* <!-- Image --> */}
        <div class="view overlay rounded z-depth-1-half mb-4 mr-0 ">
          <img class="img-fluid " src='https://lh3.googleusercontent.com/proxy/NL0iloXcxi76iLxDFDINQHsz5Ee9vDXv7KxIjHHm1sclD900gZ4lTfAQTqTeJkpNbfTbJFDawWPCk-mm2UovScsAuPNASnAsnAITSaT0uPApukjWhTq3IoX2'alt="Sample image"
         />
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>

        {/* <!-- Data --> */}
        <div class="news-data d-flex justify-content-between">
          <a href="#!" class="light-blue-text">
            <h6 class="font-weight-bold"><i class="fas fa-shopping-cart pr-2"></i>บ้านฟักข้าว</h6>
          </a>
        </div>

        {/* <!-- Excerpt --> */}
        <h3 class="font-weight-bold dark-grey-text mb-3"><a>บ้านฟักข้าวคุณขนิษฐา</a></h3>
        <p class="dark-grey-text">สินค้าของเราแปรรูปมาจากฟักข้าว ซึ่งให้สรรพคุณมากมาย อาทิเช่น 
        ลดริ้วรอย และ ทำให้ผิวดูอ่อนกว่าวัย และ อื่นๆอีกมากมาย
</p>

  </div>
      {/* <!-- Featured news --> */}

      {allProducts.map((p, i) => {
             if('5e6a17a35c566806d6a101dd'=== p.shop && i<=3 ){
             
           return(
           <>
       
      {/* <!-- Small news --> */}
      <div class="single-news mb-4">

        {/* <!-- Grid row --> */}
        <div class="row">

          {/* <!-- Grid column --> */}
          <div class="col-md-3">

            {/* <!--Image--> */}
            <div class="view overlay rounded z-depth-1 mb-4">
              <img class="img-fluid"  src={`${API}/product/photo/${p._id}`} alt="Sample image"/>
              <a>
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div class="col-md-9">

            {/* <!-- Excerpt --> */}
           <p class="font-weight-bold dark-grey-text">{p.name}</p>
            <div class="d-flex justify-content-between">
              <div class="col-11 text-truncate pl-0 mb-3">
           <a href="#!" class="dark-grey-text">{p.description}</a>
              </div>
              <a><Link to= {`/product/${p._id}`} class="fas fa-angle-double-right text-dark"></Link></a>
            </div>

          </div>
          {/* <!-- Grid column --> */}

        </div>
        {/* <!-- Grid row --> */}

      </div>
      {/* <!-- Small news --> */}

       
      </>
         )}}) 
           }    
    
          

     

    </div>
    {/* <!-- Grid column --> */}

    {/* <!-- Grid column --> */}
    <div class="col-lg-6 col-md-12">

      {/* <!-- Featured news --> */}
      <div class="single-news mb-4">

        {/* <!-- Image --> */}
        <div class="view overlay rounded z-depth-1-half mb-4">
          <img class="img-fluid" src={'https://ubon.town/wp-content/uploads/2018/08/%E0%B8%97%E0%B8%B8%E0%B9%88%E0%B8%87%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B8%9A%E0%B8%B1%E0%B8%A7-960x636.jpg'} 

          alt="Sample image"/>
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>

        {/* <!-- Data --> */}
        <div class="news-data d-flex justify-content-between">
          <a href="#!" class="pink-text">
            <h6 class="font-weight-bold"><i class="fas fa-home pr-2"></i>นาบัวลุงแจ่ม</h6>
          </a>
        </div>

        {/* <!-- Excerpt --> */}
        <h3 class="font-weight-bold dark-grey-text mb-3"><a>นาบัวลุงแจ่ม</a></h3>
        <p class="dark-grey-text">สินค้าของเราแปรรูปเด่นๆของเราคือ ชาเกษรดอก และ สบู่ ที่คัดสรรจากธรรมชาติอย่างดี
        
        
      </p>

      </div>
      {/* <!-- Featured news --> */}

      {/* <!-- Small news --> */}
      <div class="single-news mb-4">

        {/* <!-- Grid row --> */}
        <div class="row">

          {/* <!-- Grid column --> */}
          <div class="col-md-3">

            {/* <!--Image--> */}
            <div class="view overlay rounded z-depth-1 mb-4">
              <img class="img-fluid" src={tea} alt="Sample image"/>
              <a>
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div class="col-md-9">

            {/* <!-- Excerpt --> */}
            <p class="font-weight-bold dark-grey-text">ชาเกษรดอกบัว</p>
            <div class="d-flex justify-content-between">
              <div class="col-11 text-truncate pl-0 mb-3">
                <a href="#!" class="dark-grey-text">   การนำเกรษรดอกบัวให้อยู่ในรูปของน้ำชา เพื่อให้สามารถดื่มได้ 
        ซสรรพคุณมากมาย</a>
              </div>
              <a><Link to= '' class="fas fa-angle-double-right text-dark"></Link></a>
            </div>
          </div>
          {/* <!-- Grid column --> */}

        </div>
        {/* <!-- Grid row --> */}

      </div>
      {/* <!-- Small news --> */}

      {/* <!-- Small news --> */}
      <div class="single-news mb-4">

        {/* <!-- Grid row --> */}
        <div class="row">

          {/* <!-- Grid column --> */}
          <div class="col-md-3">

            {/* <!--Image--> */}
            <div class="view overlay rounded z-depth-1 mb-4">
              <img class="img-fluid" src={bodywash}alt="Sample image"/>
              <a>
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div class="col-md-9">

            {/* <!-- Excerpt --> */}
            <p class="font-weight-bold dark-grey-text">สบู่อาบน้ำเกษรดอกบัว</p>
            <div class="d-flex justify-content-between">
              <div class="col-11 text-truncate pl-0 mb-3">
                <a href="#!" class="dark-grey-text">สบู่อาบน้ำที่มีส่วนผสมของเกษรดอกบัวซึ่งมีสรรพคุณในการ</a>
              </div>
              <a><Link to= '' class="fas fa-angle-double-right text-dark"></Link></a>
            </div>

          </div>
          {/* <!-- Grid column --> */}

        </div>
        {/* <!-- Grid row --> */}

      </div>
      {/* <!-- Small news --> */}

      {/* <!-- Small news --> */}
      <div class="single-news mb-4">

        {/* <!-- Grid row --> */}
        <div class="row">

          {/* <!-- Grid column --> */}
          <div class="col-md-3">

            {/* <!--Image--> */}
            <div class="view overlay rounded z-depth-1 mb-md-0 mb-4">
              <img class="img-fluid" src={yamong}
                alt="Sample image"/>
              <a>
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div class="col-md-9">

            {/* <!-- Excerpt --> */}
            <p class="font-weight-bold dark-grey-text">ยาหม่องเกษรดอกบัว</p>
            <div class="d-flex justify-content-between">
              <div class="col-11 text-truncate pl-0">
                <a href="#!" class="dark-grey-text">ยาหม่องที่มีส่วนผสมของเกษรดอกบัวซึ่งมีสรรพคุณในการ</a>
              </div>
              <a><Link to= '' class="fas fa-angle-double-right text-dark"></Link></a>
            </div>

          </div>
          {/* <!-- Grid column --> */}

        </div>
        {/* <!-- Grid row --> */}

      </div>
      {/* <!-- Small news --> */}

    </div>
    {/* <!-- Grid column --> */}

  </div>
  {/* <!-- Grid row --> */}

</section>
{/* <!--Section: Content--> */}


</div>
    </>
  );



   

    const blog = () =>(
        <div class="container my-5">


  {/* <!--Section: Content--> */}
  <section class="magazine-section dark-grey-text">

    {/* <!-- Section heading --> */}
    <h3 class="text-center font-weight-bold mb-4 pb-2">ร้านค้าจากชุมชนมหาสวัสดิ์</h3>
    {/* <!-- Section description --> */}
    <p class="text-center w-responsive mx-auto mb-5">ชุมชนมหาสวัสดิ์เป็นชุมชนที่โดดเด่นในเรื่องของการแปรรูปผลิตภัณฑ์
    ธรรมชาติ อาทิเช่น น้ำฟักข้าว, สบู่ฟักข้าว, ชาเกษรดอกบัว และ อื่นๆอีกมากมาย ที่ทำให้คุณอยากลิ้มรสสัมผัส
    </p>
   
  	{/* <!-- Grid row --> */}
    <div class="row">

      {/* <!-- Grid column --> */}
      <div class="col-lg-6 col-md-12">

        {/* <!-- Featured news --> */}
        <div class="single-news mb-4">

          {/* <!-- Image --> */}
          <div class="view overlay rounded z-depth-1-half mb-4 mr-0 ">
            <img class="img-fluid " src='https://lh3.googleusercontent.com/proxy/NL0iloXcxi76iLxDFDINQHsz5Ee9vDXv7KxIjHHm1sclD900gZ4lTfAQTqTeJkpNbfTbJFDawWPCk-mm2UovScsAuPNASnAsnAITSaT0uPApukjWhTq3IoX2'alt="Sample image"
           />
            <a>
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>

          {/* <!-- Data --> */}
          <div class="news-data d-flex justify-content-between">
            <a href="#!" class="light-blue-text">
              <h6 class="font-weight-bold"><i class="fas fa-shopping-cart pr-2"></i>บ้านฟักข้าว</h6>
            </a>
          </div>

          {/* <!-- Excerpt --> */}
          <h3 class="font-weight-bold dark-grey-text mb-3"><a>บ้านฟักข้าวคุณขนิษฐา</a></h3>
          <p class="dark-grey-text">สินค้าของเราแปรรูปมาจากฟักข้าว ซึ่งให้สรรพคุณมากมาย อาทิเช่น 
          ลดริ้วรอย และ ทำให้ผิวดูอ่อนกว่าวัย และ อื่นๆอีกมากมาย
</p>

    </div>
        {/* <!-- Featured news --> */}

       
         
        {/* <!-- Small news --> */}
        <div class="single-news mb-4">

          {/* <!-- Grid row --> */}
          <div class="row">

            {/* <!-- Grid column --> */}
            <div class="col-md-3">

              {/* <!--Image--> */}
              <div class="view overlay rounded z-depth-1 mb-4">
                <img class="img-fluid"  src={soapfakk} alt="Sample image"/>
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>

            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-9">

              {/* <!-- Excerpt --> */}
           <p class="font-weight-bold dark-grey-text">สบู่ฟักข้าว</p>
              <div class="d-flex justify-content-between">
                <div class="col-11 text-truncate pl-0 mb-3">
           <a href="#!" class="dark-grey-text">สบู่ที่ถูกแปรรูปมาจากฟักข้าวที่มีคุณสมบัติที่ช่วยในเรื่องของ</a>
                </div>
                <a><Link to= '' class="fas fa-angle-double-right text-dark"></Link></a>
              </div>

            </div>
            {/* <!-- Grid column --> */}

          </div>
          {/* <!-- Grid row --> */}

        </div>
        {/* <!-- Small news --> */}

           {/* <!-- Small news --> */}
           <div class="single-news mb-4">

{/* <!-- Grid row --> */}
<div class="row">

  {/* <!-- Grid column --> */}
  <div class="col-md-3">

    {/* <!--Image--> */}
    <div class="view overlay rounded z-depth-1 mb-4">
      <img class="img-fluid"  src={losionfakk} alt="Sample image"/>
      <a>
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

  </div>
  {/* <!-- Grid column --> */}

  {/* <!-- Grid column --> */}
  <div class="col-md-9">

    {/* <!-- Excerpt --> */}
 <p class="font-weight-bold dark-grey-text">โรชั่นฟักข้าว</p>
    <div class="d-flex justify-content-between">
      <div class="col-11 text-truncate pl-0 mb-3">
 <a href="#!" class="dark-grey-text">โรชั่นที่ถูกแปรรูปมาจากฟักข้าวที่มีคุณสมบัติที่ช่วยในเรื่องของ</a>
      </div>
      <a><Link to= '' class="fas fa-angle-double-right text-dark"></Link></a>
    </div>

  </div>
  {/* <!-- Grid column --> */}

</div>
{/* <!-- Grid row --> */}

</div>
{/* <!-- Small news --> */}


   {/* <!-- Small news --> */}
   <div class="single-news mb-4">

{/* <!-- Grid row --> */}
<div class="row">

  {/* <!-- Grid column --> */}
  <div class="col-md-3">

    {/* <!--Image--> */}
    <div class="view overlay rounded z-depth-1 mb-4">
      <img class="img-fluid"  src={bag} alt="Sample image"/>
      <a>
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

  </div>
  {/* <!-- Grid column --> */}

  {/* <!-- Grid column --> */}
  <div class="col-md-9">

    {/* <!-- Excerpt --> */}
 <p class="font-weight-bold dark-grey-text">ถุงผ้า</p>
    <div class="d-flex justify-content-between">
      <div class="col-11 text-truncate pl-0 mb-3">
 <a href="#!" class="dark-grey-text">ถุงผ้าลดโลกร้อนที่สามารถบรรจุสินค้าได้มากมาย</a>
      </div>
      <a><Link to= '' class="fas fa-angle-double-right text-dark"></Link></a>
    </div>

  </div>
  {/* <!-- Grid column --> */}

</div>
{/* <!-- Grid row --> */}

</div>
{/* <!-- Small news --> */}


      
            

       

      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div class="col-lg-6 col-md-12">

        {/* <!-- Featured news --> */}
        <div class="single-news mb-4">

          {/* <!-- Image --> */}
          <div class="view overlay rounded z-depth-1-half mb-4">
            <img class="img-fluid" src={'https://ubon.town/wp-content/uploads/2018/08/%E0%B8%97%E0%B8%B8%E0%B9%88%E0%B8%87%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B8%9A%E0%B8%B1%E0%B8%A7-960x636.jpg'} 

            alt="Sample image"/>
            <a>
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>

          {/* <!-- Data --> */}
          <div class="news-data d-flex justify-content-between">
            <a href="#!" class="pink-text">
              <h6 class="font-weight-bold"><i class="fas fa-home pr-2"></i>นาบัวลุงแจ่ม</h6>
            </a>
          </div>

          {/* <!-- Excerpt --> */}
          <h3 class="font-weight-bold dark-grey-text mb-3"><a>นาบัวลุงแจ่ม</a></h3>
          <p class="dark-grey-text">สินค้าของเราแปรรูปเด่นๆของเราคือ ชาเกษรดอก และ สบู่ ที่คัดสรรจากธรรมชาติอย่างดี
          
          
        </p>

        </div>
        {/* <!-- Featured news --> */}

        {/* <!-- Small news --> */}
        <div class="single-news mb-4">

          {/* <!-- Grid row --> */}
          <div class="row">

            {/* <!-- Grid column --> */}
            <div class="col-md-3">

              {/* <!--Image--> */}
              <div class="view overlay rounded z-depth-1 mb-4">
                <img class="img-fluid" src={tea} alt="Sample image"/>
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>

            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-9">

              {/* <!-- Excerpt --> */}
              <p class="font-weight-bold dark-grey-text">ชาเกษรดอกบัว</p>
              <div class="d-flex justify-content-between">
                <div class="col-11 text-truncate pl-0 mb-3">
                  <a href="#!" class="dark-grey-text">   การนำเกรษรดอกบัวให้อยู่ในรูปของน้ำชา เพื่อให้สามารถดื่มได้ 
          ซสรรพคุณมากมาย</a>
                </div>
                <a><Link to= '' class="fas fa-angle-double-right text-dark"></Link></a>
              </div>
            </div>
            {/* <!-- Grid column --> */}

          </div>
          {/* <!-- Grid row --> */}

        </div>
        {/* <!-- Small news --> */}

        {/* <!-- Small news --> */}
        <div class="single-news mb-4">

          {/* <!-- Grid row --> */}
          <div class="row">

            {/* <!-- Grid column --> */}
            <div class="col-md-3">

              {/* <!--Image--> */}
              <div class="view overlay rounded z-depth-1 mb-4">
                <img class="img-fluid" src={bodywash}alt="Sample image"/>
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>

            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-9">

              {/* <!-- Excerpt --> */}
              <p class="font-weight-bold dark-grey-text">สบู่อาบน้ำเกษรดอกบัว</p>
              <div class="d-flex justify-content-between">
                <div class="col-11 text-truncate pl-0 mb-3">
                  <a href="#!" class="dark-grey-text">สบู่อาบน้ำที่มีส่วนผสมของเกษรดอกบัวซึ่งมีสรรพคุณในการ</a>
                </div>
                <a><Link to= '' class="fas fa-angle-double-right text-dark"></Link></a>
              </div>

            </div>
            {/* <!-- Grid column --> */}

          </div>
          {/* <!-- Grid row --> */}

        </div>
        {/* <!-- Small news --> */}

        {/* <!-- Small news --> */}
        <div class="single-news mb-4">

          {/* <!-- Grid row --> */}
          <div class="row">

            {/* <!-- Grid column --> */}
            <div class="col-md-3">

              {/* <!--Image--> */}
              <div class="view overlay rounded z-depth-1 mb-md-0 mb-4">
                <img class="img-fluid" src={yamong}
                  alt="Sample image"/>
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>

            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-9">

              {/* <!-- Excerpt --> */}
              <p class="font-weight-bold dark-grey-text">ยาหม่องเกษรดอกบัว</p>
              <div class="d-flex justify-content-between">
                <div class="col-11 text-truncate pl-0">
                  <a href="#!" class="dark-grey-text">ยาหม่องที่มีส่วนผสมของเกษรดอกบัวซึ่งมีสรรพคุณในการ</a>
                </div>
                <a><Link to= '' class="fas fa-angle-double-right text-dark"></Link></a>
              </div>

            </div>
            {/* <!-- Grid column --> */}

          </div>
          {/* <!-- Grid row --> */}

        </div>
        {/* <!-- Small news --> */}

      </div>
      {/* <!-- Grid column --> */}

    </div>
    {/* <!-- Grid row --> */}

  </section>
  {/* <!--Section: Content--> */}


</div>


    )


    return(

        <>
        {blog()}
        </>
    )


}
export default ShowShop;