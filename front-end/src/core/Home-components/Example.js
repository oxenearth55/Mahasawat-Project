import React from "react";
//ANCHOR Photo
import fruitGarden from '../../photo/fruitGarden.jpg'
import flower from '../../photo/flower.jpg'
import banFakk from '../../photo/banFakk.jpg'
import nabua from '../../photo/nabua.jpg'
import kaotang from '../../photo/kaotang.jpg'



const Example = () => {
  return (
    <div class="container-fluid  mt-5">


    {/* <!--Section: Content--> */}
    <section class="dark-grey-text text-center">
      
      {/* <!-- Section heading --> */}
      <h3 class="font-weight-bold mb-4 pb-2">ร้านค้าในชุมชนมหาสวัสดิ์</h3>
      {/* <!-- Section description --> */}
      <p class="grey-text w-responsive mx-auto mb-5">ชุมชนของเรามีแหล่งค้าขายสินค้าหลักๆ 5 สถานที่ด้วยกัน</p>
  
      {/* <!-- Grid row --> */}
      <div class="row justify-content-lg-center">
  
        {/* <!-- Grid column --> */}
        <div class="col-lg-2 col-md-6 mb-4">
          {/* <!-- Collection card --> */}
          <div class="card collection-card z-depth-1-half">
            {/* <!-- Card image --> */}
              <img src={fruitGarden} class="img-fluid"
                alt="" style={{height : '20rem'}}/>
            
            <p className="mt-2">สวนผลไม้ลุงบุญเลิศ</p>

            {/* <!-- Card image --> */}
          </div>
          {/* <!-- Collection card --> */}
        </div>
        {/* <!-- Grid column --> */}
  
        {/* <!-- Grid column --> */}
        <div class="col-lg-2 col-md-6 mb-4">
          {/* <!-- Collection card --> */}
          <div class="card collection-card z-depth-1-half">
            {/* <!-- Card image --> */}
            <img src={kaotang} class="img-fluid"
                alt="" style={{height : '20rem'}}/>
            
            <p className="mt-2">บ้านข้าวตังศาลาดิน</p>
            {/* <!-- Card image --> */}
          </div>
          {/* <!-- Collection card --> */}
        </div>
        {/* <!-- Grid column --> */}
  
        {/* <!-- Grid column --> */}
        <div class="col-lg-2 col-md-6 mb-4 ">
          {/* <!-- Collection card --> */}
          <div class="card collection-card z-depth-1-half ">
            {/* <!-- Card image --> */}
            <img src={flower} class="img-fluid"
                alt="" style={{height : '20rem'}}/>
            
            <p className="mt-2">ฟาร์มกล้วยไม้คุณสร้อย</p>
            {/* <!-- Card image --> */}
          </div>
          {/* <!-- Collection card --> */}
        </div>
        {/* <!-- Grid column --> */}
  
        {/* <!-- Fourth column --> */}
        <div class="col-lg-2 col-md-6 mb-4">
          {/* <!-- Collection card --> */}
          <div class="card collection-card z-depth-1-half">
            {/* <!-- Card image --> */}
            <img src={banFakk} class="img-fluid"
                alt="" style={{height : '20rem'}}/>
            
            <p className="mt-2">บ้านฟักข้าว</p>
            {/* <!-- Card image --> */}
          </div>
          {/* <!-- Collection card --> */}
        </div>
        {/* <!-- Fourth column --> */}

          {/* <!-- Five column --> */}
          <div class="col-lg-2 col-md-6 mb-4">
          {/* <!-- Collection card --> */}
          <div class="card collection-card z-depth-1-half">
            {/* <!-- Card image --> */}
            <img src={nabua} class="img-fluid"
                alt="" style={{height : '20rem'}}/>
            
            <p className="mt-2">นาบัวลุงแจ่ม</p>
            {/* <!-- Card image --> */}
          </div>
          {/* <!-- Collection card --> */}
        </div>
        {/* <!-- Five column --> */}
  
      </div>
      {/* <!-- Grid row --> */}
  
    </section>
    {/* <!--Section: Content--> */}
  
  
  </div>
  );
}

export default Example;