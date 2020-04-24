import React, {useState, useEffect} from 'react'; 
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter,  MDBTooltip, MDBCarousel, MDBCarouselInner, MDBCarouselItem } from "mdbreact";
import fruitGarden from '../../photo/fruitGarden.jpg'
import banKaoTang from '../../photo/banKaoTang.jpg'
import suan from '../../photo/suan.JPG'
import FruitProducts from './FruitGarden/FruitProducts'
import FarmProducts from './Farm/FarmProducts'
import KaotangeProducts from './KaoTang/KaotangProducts'
import ContactFruit from './FruitGarden/ContactFruit'
import ContactKao from './KaoTang/ContactKao'




const EcommercePage = () => {  

  //SECTION State
  //NOTE These state is used to display shop contents
  // const [showFruitGarden, setShowFruitGarden] = useState(false);
  // const [showKaoTang, setShowKaoTang] = useState(false);
  // const [showFarm, setShowFarm] = useState(false);

  const [showCondition, setShowCondition] = useState({
    showFruitGarden:false,
    showKaoTang:false,
    showFarm:false,
    showContactFruit:false,
    showContactKao:false,
    showContactFarm:false    
  })
  const {showFruitGarden,showKaoTang,showFarm,showContactKao,showContactFarm,showContactFruit} = showCondition

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
          <button class="btn btn-unique"
           onClick={() => setShowCondition({...showCondition,showFruitGarden:true, showKaoTang:false, 
           showFarm:false,showContactFarm:false,showContactFruit:false,showContactKao:false })}
            >ดูสินค้า</button>

          <button class="btn btn-unique" 
            onClick={() => setShowCondition({...showCondition,showFruitGarden:false, showKaoTang:false, 
              showFarm:false,showContactFarm:false,showContactFruit:true,showContactKao:false })}
          
          >ติดต่อ</button>
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
          <button  onClick={() => 
            setShowCondition({...showCondition,showKaoTang:true,showFarm:false, showFruitGarden:false,
            showContactFarm:false,showContactFruit:false,showContactKao:false })} class="btn btn-unique">ดูสินค้า</button>
          <button class="btn btn-unique" 
            onClick={() => setShowCondition({...showCondition,showFruitGarden:false, showKaoTang:false, 
              showFarm:false,showContactFarm:false,showContactFruit:false,showContactKao:true })}
          
          >ติดต่อ</button>
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
            setShowCondition({...showCondition,showFarm:true, showFruitGarden:false, showKaoTang:false,
            showContactFarm:false,showContactFruit:false,showContactKao:false })}>
              ดูสินค้า
              </button>
          <button class="btn btn-unique"
            onClick={() => setShowCondition({...showCondition,showFruitGarden:true, showKaoTang:false, 
              showFarm:false,showContactFarm:true,showContactFruit:false,showContactKao:false })}
          >ติดต่อ</button>
        </div>
        {/* <!--/.Card content--> */}  
      </div>
      {/* <!--/.Card--> */} 
    </div>  
    </div> 
  )

  //SECTION Display products 
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
const diplayKaoTang = () => {
  if(showKaoTang == true){
    return(
      <>
      <KaotangeProducts/>
      </>
    )
  }
}
  
  const displayProducts = () => {    
   return(
     <>
     {disPlayFarm()}
     {displayFruit()}
     {diplayKaoTang()}
     </>
   )
  }
//SECTION Display Contact 

const displayFruitContact = () => {
  if(showContactFruit == true){
    return(
    <ContactFruit/>
  
    )}
}

const displayKaoContact = () => {
  if(showContactKao == true){
    return(
    <ContactKao/>
  
    )}
}



const disPlayContact = () => (
  <>
  {displayFruitContact()}
  {displayKaoContact()}
  </>
)
  
  return (
      <>
      {showCard()}  
      {displayProducts()}
      {disPlayContact()}
      </>   
  );
}

export default EcommercePage;