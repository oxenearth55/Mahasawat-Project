import React, {useState, useEffect} from 'react'; 
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter,  MDBTooltip, MDBCarousel, MDBCarouselInner, MDBCarouselItem } from "mdbreact";
import fruitGarden from '../../photo/fruitGarden.jpg'
import banKaoTang from '../../photo/banKaoTang.jpg'
import suan from '../../photo/suan.JPG'
import FruitProducts from './FruitGarden/FruitProducts'
import FarmProducts from './Farm/FarmProducts'



const EcommercePage = () => {  

  //SECTION State
  //NOTE These state is used to display shop contents
  // const [showFruitGarden, setShowFruitGarden] = useState(false);
  // const [showKaoTang, setShowKaoTang] = useState(false);
  // const [showFarm, setShowFarm] = useState(false);

  const [showCondition, setShowCondition] = useState({
    showFruitGarden:false,
    showKaoTang:false,
    showFarm:false
    
  })
  const {showFruitGarden,showKaoTang,showFarm} = showCondition


  const showCard = () => (
    <div class="row">    
    <div class="col-lg-4 col-md-6 mb-4">
      {/* <!--Card--> */}
      <div class="card card-cascade narrower mb-4" style = {{'margin-top' : '28px'}}>  
        {/* <!--Card image--> */}
        <div class="view view-cascade">
          <img src={fruitGarden}class="card-img-top"
            alt=""/>
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
        {/* <!--/.Card image--> */}
        {/* <!--Card content--> */}
        <div class="card-body card-body-cascade">
          <h5 class="pink-text"><i class="fas fa-tree green-text"></i>เสน่ห์ท่ามกลางธรรมชาติ</h5>
          {/* <!--Title--> */}
          <h4 class="card-title">สวนผลไม้ลุงบุญเลิศ</h4>
          {/* <!--Text--> */}
          <p class="card-text">สวนคุณลุงบุญเลิศ และกลุ่มแม่บ้านเกษตรกรชุมชนวัดสุวรรณเป็นศูนย์ปรัชญาเศรษฐกิจพอเพียง 
          มีการนำผลิตภัณฑ์ทางการเกษตรมาแปรรูปเป็นอาหาร และผลไม้
            </p>
          <button class="btn btn-unique" onClick={() => setShowCondition({...showCondition,showFruitGarden:true, showKaoTang:false, showFarm:false })} >ดูสินค้า</button>
          <button class="btn btn-unique">ติดต่อ</button>
        </div>
        {/* <!--/.Card content--> */}
      </div>
      {/* <!--/.Card--> */}
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      {/* <!--Card--> */}
      <div class="card card-cascade narrower mb-4" style = {{'margin-top' : '28px'}}>  
        {/* <!--Card image--> */}
        <div class="view view-cascade">
          <img src={banKaoTang} class="card-img-top"
            alt="" style={{height:'18.8rem'}}/>
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
        {/* <!--/.Card image--> */}
        {/* <!--Card content--> */}
        <div class="card-body card-body-cascade">
          <h5 class="pink-text"><i class="fas fa-cookie-bite brown-text"></i> ข้าวตัง</h5>
          {/* <!--Title--> */}
          <h4 class="card-title">บ้านข้าวตังศาลาดิน</h4>
          {/* <!--Text--> */}
          <p class="card-text">
          บ้านศาลาดิน เป็นชื่อชุมชนที่ได้ชื่อว่าเป็นแหล่งเรียนรู้เชิงนิเวศตามแนวทางเศรษฐกิจพอเพียง มีการนำข้าวกล้องและข้าวไรท์เบอรี่ที่ตากแห้ง 
          มาแปรรูปเป็นข้าวตัง
          </p>
          <a class="btn btn-unique">ดูสินค้า</a>
          <a class="btn btn-unique">ติดต่อ</a>
        </div>
        {/* <!--/.Card content--> */}
      </div>
      {/* <!--/.Card--> */}
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      {/* <!--Card--> */}
      <div class="card card-cascade narrower mb-4" style = {{'margin-top' : '28px'}}>
        {/* <!--Card image--> */}
        <div class="view view-cascade">
          <img src={suan} class="card-img-top"
            alt=""/>
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
        {/* <!--/.Card image--> */}
        {/* <!--Card content--> */}
        <div class="card-body card-body-cascade">
          <h5 class="pink-text"><i class="fas fa-leaf"></i> กล้วยไม้</h5>
          {/* <!--Title--> */}
          <h4 class="card-title">ฟาร์มกล้วยไม้คุณสร้อย</h4>
          {/* <!--Text--> */}
          <p class="card-text">
          ฟาร์มกล้วยไม้คุณสร้อย ได้จัดบรรยากาศเป็นฟาร์มเปิดซึ่งทำให้นักท่องเที่ยวได้ชมและถ่ายรูปในสวนกล้วยไม้ได้อย่างอิสระ 
          และสามารถติดต่อซื้อกลับบ้านได้ภายหลังการเยี่ยมชม
          </p>
          <button class="btn btn-unique" onClick={() => 
            setShowCondition({...showCondition,showFarm:true, showFruitGarden:false, showKaoTang:false })}>
              ดูสินค้า
              </button>
          <button class="btn btn-unique">ติดต่อ</button>
        </div>
        {/* <!--/.Card content--> */}  
      </div>
      {/* <!--/.Card--> */} 
    </div>  
    </div> 
  )
const disPlayFarm = () => {
   if(showFarm==true){
    return(
      <>
      <FarmProducts/>   
      </>
    )
   }
}
const displayFruit = () => {
  if(showFruitGarden==true ){
    return(
      <>
      <FruitProducts/>   
      </>
    )
   }

}
  
  const displayProducts = () => {    

   return(
     <>
     {disPlayFarm()}
     {displayFruit()}
     </>
   )
  
  }
  return (
      <>
      {showCard()}  
      {displayProducts()}
      </>   
  );
}

export default EcommercePage;