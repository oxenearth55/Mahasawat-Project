import React, {useState, useEffect} from 'react'; 
import wanda from './Photo/แวนด้า.jpg'
import pinkMogka from './Photo/มอคคาร่าชมพู.jpg'
import redMogka from './Photo/มอคคาร่าแดง.jpg'
import yellowMogka from './Photo/มอคคาร่าเหลือง.jpg'
import wai from './Photo/หวาย.jpg'





const FarmProducts = () => {

    return(
        <>
        <div class="container my-5">

{/* <!-- Section --> */}
<section>
  
 
  {/* <!-- Modal --> */}
      <div class="modal fade" id="wanda" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
              <div class="modal-content">
                  <div class="modal-body p-0">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                      
                      {/* <!-- Grid row --> */}
                      <div class="row">
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6 py-5 pl-5">
                              
                              <h5 class="font-weight-normal mb-3">แวนด้า</h5>

                              <p class="text-muted">
                              แวนด้าเป็นหนึ่งในกล้วยไม้ที่ไม่แตกกอ และใบของแวนด้าจะมีลักษณะเรียงตัวซ้อนสลับกัน
                               ช่อดอกจะออกด้านข้างของลำต้นสลับกับใบ 
                              ส่วนกลีบดอกนอกและกลีบในมีรูปร่างคล้ายคลึงกัน 
                               ดอกสามารถออกได้ตลอดทั้งปี ดูสวยงามน่าชวนมอง 
                              </p>

                              <ul class="list-unstyled font-small mt-5">
                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สีของดอก</strong></p>
                                      <p class="text-muted mb-4">ชมพู</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ประเกท</strong></p>
                                      <p class="text-muted mb-4">กล้วยไม้</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>เอกลักษณ์</strong></p>
                                      <p class="text-muted mb-4">สีของดอกมีความสด น่าดึงดูด</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สถานที่ขาย</strong></p>
                                      <p className='blue-text'>ฟาร์มกล้วยไม้คุณสร้อย</p>
                                  </li>
                              </ul>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6">
                              
                              <div class="view rounded-right">
                                  <img class="img-fluid" src={wanda} alt="Sample image"/>
                              </div>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                      </div>
                      {/* <!-- Grid row --> */}
                      
                  </div>
              </div>
          </div>
      </div>

{/* <!-- Modal --> */}
<div class="modal fade" id="redMogka" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
              <div class="modal-content">
                  <div class="modal-body p-0">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                      
                      {/* <!-- Grid row --> */}
                      <div class="row">
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6 py-5 pl-5">
                              
                              <h5 class="font-weight-normal mb-3">มอคคาร่า</h5>

                              <p class="text-muted">
                              กล้วยไม้สกุลม็อคคาร่า (Mokara) อยู่ในวงศ์ ORCHIDACEAE 
                              กล้วยไม้ชนิดนี้จะมีสีที่ค่อนข้างหลากหลาย และโดยทั่วไป 
                              จะชอบแสงแดดเป็นอย่างมาก และมักออกดอกได้ง่ายกว่ากล้วยไม้ในสกุล 
                              แวนด้า 
                              ม็อคคาร่าเป็นกล้วยไม้ที่ออกดอกได้ดีในหน้าแล้ง  หรือเมื่อหมดฝนเข้าหนาวดอกจะดก
                              ได้ผลผลิตในปริมาณสูง   ถ้าเริ่มเข้าหน้าฝนปริมาณดอกก็จะลดลง 
                              </p>

                              <ul class="list-unstyled font-small mt-5">
                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สีของดอก</strong></p>
                                      <p class="text-muted mb-4">แดง</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ประเกท</strong></p>
                                      <p class="text-muted mb-4">กล้วยไม้</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>เอกลักษณ์</strong></p>
                                      <p class="text-muted mb-4">สีแดงสด ร้อนแรง</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สถานที่ขาย</strong></p>
                                      <p className='blue-text'>ฟาร์มกล้วยไม้คุณสร้อย</p>
                                  </li>
                              </ul>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6">
                              
                              <div class="view rounded-right">
                                  <img class="img-fluid" src={redMogka} alt="Sample image"/>
                              </div>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                      </div>
                      {/* <!-- Grid row --> */}
                      
                  </div>
              </div>
          </div>
      </div>

{/* <!-- Modal --> */}
<div class="modal fade" id="yellowMogka" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
              <div class="modal-content">
                  <div class="modal-body p-0">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                      
                      {/* <!-- Grid row --> */}
                      <div class="row">
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6 py-5 pl-5">
                              
                              <h5 class="font-weight-normal mb-3">มอคคาร่า</h5>

                              <p class="text-muted">
                              กล้วยไม้สกุลม็อคคาร่า (Mokara) อยู่ในวงศ์ ORCHIDACEAE 
                              กล้วยไม้ชนิดนี้จะมีสีที่ค่อนข้างหลากหลาย และโดยทั่วไป 
                              จะชอบแสงแดดเป็นอย่างมาก และมักออกดอกได้ง่ายกว่ากล้วยไม้ในสกุล 
                              แวนด้า 
                              ม็อคคาร่าเป็นกล้วยไม้ที่ออกดอกได้ดีในหน้าแล้ง  หรือเมื่อหมดฝนเข้าหนาวดอกจะดก
                              ได้ผลผลิตในปริมาณสูง   ถ้าเริ่มเข้าหน้าฝนปริมาณดอกก็จะลดลง 
                              </p>

                              <ul class="list-unstyled font-small mt-5">
                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สีของดอก</strong></p>
                                      <p class="text-muted mb-4">เหลือง</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ประเกท</strong></p>
                                      <p class="text-muted mb-4">กล้วยไม้</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>เอกลักษณ์</strong></p>
                                      <p class="text-muted mb-4">สีเหลือง สบายตา</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สถานที่ขาย</strong></p>
                                      <p className='blue-text'>ฟาร์มกล้วยไม้คุณสร้อย</p>
                                  </li>
                              </ul>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6">
                              
                              <div class="view rounded-right">
                                  <img class="img-fluid" src={yellowMogka} alt="Sample image" 
                                  style={{height:'30rem'}}
                                  />
                              </div>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                      </div>
                      {/* <!-- Grid row --> */}
                      
                  </div>
              </div>
          </div>
      </div>

{/* <!-- Modal --> */}
<div class="modal fade" id="pinkMogka" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
              <div class="modal-content">
                  <div class="modal-body p-0">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                      
                      {/* <!-- Grid row --> */}
                      <div class="row">
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6 py-5 pl-5">
                              
                              <h5 class="font-weight-normal mb-3">มอคคาร่า</h5>

                              <p class="text-muted">
                              กล้วยไม้สกุลม็อคคาร่า (Mokara) อยู่ในวงศ์ ORCHIDACEAE 
                              กล้วยไม้ชนิดนี้จะมีสีที่ค่อนข้างหลากหลาย และโดยทั่วไป 
                              จะชอบแสงแดดเป็นอย่างมาก และมักออกดอกได้ง่ายกว่ากล้วยไม้ในสกุล 
                              แวนด้า 
                              ม็อคคาร่าเป็นกล้วยไม้ที่ออกดอกได้ดีในหน้าแล้ง  หรือเมื่อหมดฝนเข้าหนาวดอกจะดก
                              ได้ผลผลิตในปริมาณสูง   ถ้าเริ่มเข้าหน้าฝนปริมาณดอกก็จะลดลง 
                              </p>

                              <ul class="list-unstyled font-small mt-5">
                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สีของดอก</strong></p>
                                      <p class="text-muted mb-4">ชมพู</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ประเกท</strong></p>
                                      <p class="text-muted mb-4">กล้วยไม้</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>เอกลักษณ์</strong></p>
                                      <p class="text-muted mb-4">สีชมพู เสน่ห์เกินห้ามใจ</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สถานที่ขาย</strong></p>
                                      <p className='blue-text'>ฟาร์มกล้วยไม้คุณสร้อย</p>
                                  </li>
                              </ul>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6">
                              
                              <div class="view rounded-right">
                                  <img class="img-fluid" src={pinkMogka} alt="Sample image" 
                                  style={{height:'30rem'}}
                                  />
                              </div>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                      </div>
                      {/* <!-- Grid row --> */}
                      
                  </div>
              </div>
          </div>
      </div>

{/* <!-- Modal --> */}
<div class="modal fade" id="wai" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
              <div class="modal-content">
                  <div class="modal-body p-0">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                      
                      {/* <!-- Grid row --> */}
                      <div class="row">
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6 py-5 pl-5">
                              
                              <h5 class="font-weight-normal mb-3">หวาย</h5>

                              <p class="text-muted">

                              หวายถือว่าเป็นกล้วยไม้ที่เลี้ยงในประเทศไทยได้ง่ายที่สุด 
                              เพราะสภาพอากาศบ้านเราเหมาะสมอย่างยิ่งที่จะเลี้ยง อีกทั้งยังให้ดอกง่ายทุกฤดุกาล 
                              จึงเป็นสายพันธุ์ที่มีการนำมาตัดดอกจำหน่ายส่งไปทั่วโลก 
                        
                               ดอกของหวาย มีลักษณะทั่วไปของกลีบชั้นนอกคู่บนและคู่ล่างขนาดยาวพอๆ กันโดยกลีบชั้นนอกบนจะอยู่อย่างอิสระเดี่ยวๆ 
                               ส่วนกลีบชั้นนอกคู่ล่างจะมีส่วนโคน ซึ่งมีลักษณะยื่นออกไปทางด้านหลังของส่วนล่างของดอกประสานเชื่อมติดกับฐานหรือสันหลังของเส้าเกสร 
                               และส่วนโคนของกลีบชั้นนอกคู่ล่างและส่วนฐานของเส้าเกสรซึ่งประกอบกันจะปูดออกมา มีลักษณะคล้ายเดือยที่เรียกว่า “เดือยดอก”  
                             
                             
                              </p>

                              <ul class="list-unstyled font-small mt-5">
                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สีของดอก</strong></p>
                                      <p class="text-muted mb-4">ชมพู</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ประเกท</strong></p>
                                      <p class="text-muted mb-4">กล้วยไม้</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>เอกลักษณ์</strong></p>
                                      <p class="text-muted mb-4">สีสันสดใส</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สถานที่ขาย</strong></p>
                                      <p className='blue-text'>ฟาร์มกล้วยไม้คุณสร้อย</p>
                                  </li>
                              </ul>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6">
                              
                              <div class="view rounded-right">
                                  <img class="img-fluid" src={wai} alt="Sample image" 
                                  style={{height:'30rem'}}
                                  />
                              </div>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                      </div>
                      {/* <!-- Grid row --> */}
                      
                  </div>
              </div>
          </div>
      </div>









  <h5 class="font-weight-bold text-center grey-text text-uppercase  mb-4">ฟาร์มกล้วยไม้คุณสร้อย</h5>
  <h3 class="font-weight-bold text-center dark-grey-text pb-2">สินค้า</h3>
  <hr class="w-header my-4"/>
  <p class="lead text-center text-muted pt-2 mb-5">สินค้าตัวอย่างจากทางฟาร์มกล้วยไม้คุณสร้อย</p>
      
  {/* <!--First row--> */}
  <div class="row">

    {/* <!--First column--> */}
    <div class="col-12 mb-4">

      {/* <!-- Nav tabs --> */}
      <ul class="nav md-pills flex-center flex-wrap mx-0" role="tablist">
        <li class="nav-item">
          <a class="nav-link active font-weight-bold text-uppercase " data-toggle="tab" href="#panel31" role="tab">ทั้งหมด</a>
        </li>
        <li class="nav-item">
          <a class="nav-link font-weight-bold text-uppercase" data-toggle="tab" href="#panel32" role="tab">แวนด้า</a>
        </li>
        <li class="nav-item">
          <a class="nav-link font-weight-bold text-uppercase" data-toggle="tab" href="#panel33" role="tab">มอคคาร่า</a>
        </li>
        <li class="nav-item">
          <a class="nav-link font-weight-bold text-uppercase" data-toggle="tab" href="#panel34" role="tab">หวาย</a>
        </li>
      </ul>

    </div>
    {/* <!--First column--> */}

  </div>
  {/* <!--First row--> */}

  {/* <!--Tab panels--> */}
  <div class="tab-content mb-5">

    {/* <!--Panel 1--> */}
    <div class="tab-pane fade show in active" id="panel31" role="tabpanel">

      {/* <!-- Grid row --> */}
      <div class="row">

        {/* <!-- Grid column --> */}
        <div class="col-md-12 col-lg-4">

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#wanda">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={wanda}alt="Card image cap"
            style={{height: '16rem'}}
            />

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">แวนด้า</h5>
              <p class="card-text text-uppercase mb-3">สีชมพู</p>

            </div>

          </a>
          {/* <!-- Card --> */}

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#pinkMogka">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={pinkMogka} alt="Card image cap"
             style={{height: '16rem'}}
             />

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">มอคคาร่า</h5>
              <p class="card-text text-uppercase mb-3">สีชมพู</p>

            </div>

          </a>
          {/* <!-- Card --> */}

        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-6 col-lg-4">

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#redMogka">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={redMogka} alt="Card image cap"
            style={{height:'16rem'}}
            />

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">มอคคาร่า</h5>
              <p class="card-text text-uppercase mb-3">สีแดง</p>

            </div>

          </a>
          {/* <!-- Card --> */}

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#yellowMogka">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={yellowMogka} alt="Card image cap"
             style={{height: '16rem'}}/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">มอคคาร่า</h5>
              <p class="card-text text-uppercase mb-3">สีเหลือง</p>

            </div>

          </a>
          {/* <!-- Card --> */}

        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-6 col-lg-4">

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#wai">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={wai} alt="Card image cap"
             style={{height: '16rem'}}/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">หวาย</h5>
              <p class="card-text text-uppercase mb-3">สีชมพู</p>

            </div>

          </a>
          {/* <!-- Card --> */}


        </div>
        {/* <!-- Grid column --> */}

      </div>
      {/* <!-- Grid row --> */}

    </div>
    {/* <!--Panel 1--> */}

    {/* <!--Panel 2--> */}
    <div class="tab-pane fade" id="panel32" role="tabpanel">

      {/* <!-- Grid row --> */}
      <div class="row">

        {/* <!-- Grid column --> */}
        <div class="col-md-12 col-lg-4">

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#wanda">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={wanda} alt="Card image cap"
            style={{height: '16rem'}}/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">แวนด้า</h5>
              <p class="card-text text-uppercase mb-3">สีชมพู</p>

            </div>

          </a>
          {/* <!-- Card --> */}

        </div>
        {/* <!-- Grid column --> */}

       

      </div>
      {/* <!-- Grid row --> */}

    </div>
    {/* <!--Panel 2--> */}

    {/* <!--Panel 3--> */}
    <div class="tab-pane fade" id="panel33" role="tabpanel">

      {/* <!-- Grid row --> */}
      <div class="row">

        {/* <!-- Grid column --> */}
        <div class="col-md-12 col-lg-4">

          {/* <!-- Card --> */}
          <div class="card hoverable mb-4" data-toggle="modal" data-target="#redMogka">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={redMogka} alt="Card image cap"
            style={{height: '16rem'}}/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">มอคคาร่า</h5>
              <p class="card-text text-uppercase mb-3">สีแดง</p>

            </div>

          </div>
          {/* <!-- Card --> */}

        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-6 col-lg-4">

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#yellowMogka">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={yellowMogka} alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">มอคคาร่า</h5>
              <p class="card-text text-uppercase mb-3">สีเหลือง</p>

            </div>

          </a>
          {/* <!-- Card --> */}

        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-6 col-lg-4">

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#pinkMogka">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={pinkMogka} alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">มอคคาร่า</h5>
              <p class="card-text text-uppercase mb-3">สีชมพู</p>

            </div>

          </a>
          {/* <!-- Card --> */}

        </div>
        {/* <!-- Grid column --> */}

      </div>
      {/* <!-- Grid row --> */}

    </div>
    {/* <!--Panel 3--> */}

     {/* <!--Panel 2--> */}
     <div class="tab-pane fade" id="panel34" role="tabpanel">

{/* <!-- Grid row --> */}
<div class="row">

  {/* <!-- Grid column --> */}
  <div class="col-md-12 col-lg-4">

    {/* <!-- Card --> */}
    <a class="card hoverable mb-4" data-toggle="modal" data-target="#wai">

      {/* <!-- Card image --> */}
      <img class="card-img-top" src={wai} alt="Card image cap"
      style={{height: '16rem'}}/>

      {/* <!-- Card content --> */}
      <div class="card-body">

        <h5 class="my-3">หวาย</h5>
        <p class="card-text text-uppercase mb-3">สีชมพู</p>

      </div>

    </a>
    {/* <!-- Card --> */}

  </div>
  {/* <!-- Grid column --> */}

 

</div>
{/* <!-- Grid row --> */}

</div>
{/* <!--Panel 2--> */}

  </div>
  {/* <!--Tab panels--> */}

</section>
{/* <!-- Section --> */}

</div>
        </>
    )
} 
export default FarmProducts