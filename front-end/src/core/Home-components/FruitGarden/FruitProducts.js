import React, {useState, useEffect} from 'react'; 
import bua from './Photo/กลีบบัว.JPG'
import bua2 from './Photo/กลีบบัว2.JPG'
import ping from './Photo/ขนมผิง.JPG'
import ksonBua from './Photo/เกสรบัว.JPG'
import ksonBua2 from './Photo/เกสรบัว2.JPG'
import kum from './Photo/เมี่ยงคำ.JPG'
import kum2 from './Photo/เมี่ยงคำ2.JPG'
import banana from './Photo/กล้วยทอด.jpg'


const FruitProducts = () => {
    return(
        <>
        <div class="container my-5">

{/* <!-- Section --> */}
<section>
  
 
  {/* <!-- Modal bua --> */}
  <div class="modal fade" id="bua" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                              
                              <h5 class="font-weight-normal mb-3">กลีบบัวหลวงอบแห้ง</h5>

                              <p class="text-muted">
                               สวยผลไม้ลุงบุญเลิศได้นำกลีบบัวหลวงที่คัดสรรอย่างดี มาแปรรูปโดยการอบแห้ง เพื่อให้ได้ชาคุณภาพ 
                               ที่มีสรรพคุณมากมายต่อสุขภาพ และกลิ่นอันหอมหวนชวนลิ้มลอง ชวนให้หลงใหล
                              
                               </p>

                              <ul class="list-unstyled font-small mt-5">
                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ทำมาจาก</strong></p>
                                      <p class="text-muted mb-4">กลีบบัวหลวง</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ประเภท</strong></p>
                                      <p class="text-muted mb-4">อบแห้ง</p>
                                  </li>
                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สรรพคุณที่ท่านจะได้รับ</strong></p>
                                      <p class="text-muted mb-4">
                                      บำรุงหัวใจ, บำรุงโลหิต, ต่อต้านอนุมูลอิสระ, ลดไขมันในเลือด, เพิ่มภูมิคุ้มกันให้ร่างกาย

                                      </p>
                                  </li>

                              

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สถานที่ขาย</strong></p>
                                      <p className="blue-text">สวนผลไม้ลุงบุญเลิศ</p>
                                  </li>
                              </ul>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6">
                              
                              <div class="view rounded-right">
                                  <img class="img" src={bua2} alt="Sample image"
                                  style={{height:'27rem',width:'28rem'}}/>
                              </div>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                      </div>
                      {/* <!-- Grid row --> */}
                      
                  </div>
              </div>
          </div>
      </div>

{/* <!-- Modal ksonBua --> */}
<div class="modal fade" id="ksonBua" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                              
                              <h5 class="font-weight-normal mb-3">เกษรบัวหลวงอบแห้ง</h5>

                              <p class="text-muted">
                               สวยผลไม้ลุงบุญเลิศได้นำเกษรบัวหลวงที่คัดสรรอย่างดี มาแปรรูปโดยการอบแห้ง เพื่อให้ได้ชาคุณภาพ 
                               ที่มีสรรพคุณมากมายต่อสุขภาพ และกลิ่นอันหอมหวนชวนลิ้มลอง ชวนให้หลงใหล
                              
                               </p>

                              <ul class="list-unstyled font-small mt-5">
                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ทำมาจาก</strong></p>
                                      <p class="text-muted mb-4">เกษรบัวหลวง</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ประเภท</strong></p>
                                      <p class="text-muted mb-4">อบแห้ง</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สรรพคุณที่ท่านจะได้รับ</strong></p>
                                      <p class="text-muted mb-4">
                                      บำรุงหัวใจ, บำรุงโลหิต, ต่อต้านอนุมูลอิสระ, ลดไขมันในเลือด, เพิ่มภูมิคุ้มกันให้ร่างกาย

                                      </p>
                                  </li>

                              

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สถานที่ขาย</strong></p>
                                      <p className="blue-text">สวนผลไม้ลุงบุญเลิศ</p>
                                  </li>
                              </ul>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6">
                              
                              <div class="view rounded-right">
                                  <img class="img" src={ksonBua2} alt="Sample image"
                                  style={{height:'27rem',width:'28rem'}}/>
                              </div>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                      </div>
                      {/* <!-- Grid row --> */}
                      
                  </div>
              </div>
          </div>
      </div>

{/* <!-- Modal ping --> */}
<div class="modal fade" id="ping" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                              
                              <h5 class="font-weight-normal mb-3">ขนมผิง</h5>

                              <p class="text-muted">
                               เมื่อคุณได้ลิ้มลองขนมผิงจากทางสวนผลไม้ลุงบุญเลิศ คุณจะได้สัมผัสถึงความหอมที่ลงตัว ความนุ่มนวลดั่งปุยเมฆ 
                               และเนื้อสัมผัสที่เยี่ยมยอดจนละลายในปาก คุณจะได้สัมผัสถึงรสชาติอันน่าหลงใหลของขนมไทยโบราณชนิดนี้
                              
                               </p>

                              <ul class="list-unstyled font-small mt-5">
                            

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ประเภท</strong></p>
                                      <p class="text-muted mb-4">ขนมไทย</p>
                                  </li>

                              

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สถานที่ขาย</strong></p>
                                      <p className="blue-text">สวนผลไม้ลุงบุญเลิศ</p>
                                  </li>
                              </ul>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6">
                              
                              <div class="view rounded-right">
                                  <img class="img" src={ping} alt="Sample image"
                                  style={{height:'27rem',width:'28rem'}}/>
                              </div>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                      </div>
                      {/* <!-- Grid row --> */}
                      
                  </div>
              </div>
          </div>
      </div>


{/* <!-- Modal  kum --> */}
<div class="modal fade" id="kum" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                              
                              <h5 class="font-weight-normal mb-3">เมี่ยงคำบัวหลวง</h5>

                              <p class="text-muted">
                               บัวหลวงสู่เมี่ยงคำ อาหารทานเล่นพื้นบ้านมากสรรพคุณ  ทั้งรสชาติที่ลงตัวระหว่าง กลีบบัวหลวง และเครื่องเคียงต่างๆ
                               คุณจะสัมผัสถึงความอร่อยที่ลงตัว 
                    เครื่องเคียงต่างๆได้ถูกคัดสรรอย่างดีโดยคำนึงถึงเรื่องความปลอดภัยจากสารเคมี สดใหม่ และเรื่องรสชาติเป็นหลัก
                              
                               </p>

                              <ul class="list-unstyled font-small mt-5">
                            

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ประเภท</strong></p>
                                      <p class="text-muted mb-4">ของทานเล่น</p>
                                  </li>

                            

                              

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สถานที่ขาย</strong></p>
                                      <p className="blue-text">สวนผลไม้ลุงบุญเลิศ</p>
                                  </li>
                              </ul>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6">
                              
                              <div class="view rounded-right">
                                  <img class="img" src={kum2} alt="Sample image"
                                  style={{height:'27rem',width:'28rem'}}/>
                              </div>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                      </div>
                      {/* <!-- Grid row --> */}
                      
                  </div>
              </div>
          </div>
      </div>


{/* <!-- Modal  banana --> */}
<div class="modal fade" id="banana" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                              
                              <h5 class="font-weight-normal mb-3">กล้วยหอมทองทอดกรอบ</h5>

                              <p class="text-muted">
                               กล้วยหอมทองทอดกรอบ ให้สัมผัสถึงความกรอบ เคี้ยวสนุก กลิ่นกล้วยชวนติดใจ มีหลากหลายรสชาติให้คุณได้เป็นเจ้าของ
                              
                               </p>

                              <ul class="list-unstyled font-small mt-5">
                            

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ประเภท</strong></p>
                                      <p class="text-muted mb-4">ของทานเล่น</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>รสชาติ</strong></p>
                                      <p class="text-muted mb-4">รสเนยงา, รสต้มยำ, รสพิซซ่า, รสเนย, รสธรรมชาติ, รสบาร์บีคิว</p>
                                  </li>

                            

                              

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สถานที่ขาย</strong></p>
                                      <p className="blue-text">สวนผลไม้ลุงบุญเลิศ</p>
                                  </li>
                              </ul>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6">
                              
                              <div class="view rounded-right">
                                  <img class="img" src={banana} alt="Sample image"
                                  style={{height:'27rem',width:'24rem'}}/>
                              </div>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                      </div>
                      {/* <!-- Grid row --> */}
                      
                  </div>
              </div>
          </div>
      </div>





  <h5 class="font-weight-bold text-center grey-text text-uppercase  mb-4">สินค้า</h5>
  <h3 class="font-weight-bold text-center dark-grey-text pb-2">สวนผลไม้ลุงบุญเลิศ</h3>
  <hr class="w-header my-4"/>
  <p class="lead text-center text-muted pt-2 mb-5">สินค้าตัวอย่างจากทางสวนผลไม้ลุงบุญเลิศ</p>
      
  {/* <!--First row--> */}
  <div class="row">

    {/* <!--First column--> */}
    <div class="col-12 mb-4">

      {/* <!-- Nav tabs --> */}
      <ul class="nav md-pills flex-center flex-wrap mx-0" role="tablist">
        <li class="nav-item">
          <a class="nav-link active font-weight-bold text-uppercase" data-toggle="tab" href="#panel31" role="tab">ทั้งหมด</a>
        </li>
        <li class="nav-item">
          <a class="nav-link font-weight-bold text-uppercase" data-toggle="tab" href="#panel32" role="tab">กล้วยกรอบ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link font-weight-bold text-uppercase" data-toggle="tab" href="#panel33" role="tab">ขนมผิง</a>
        </li>

        <li class="nav-item">
          <a class="nav-link font-weight-bold text-uppercase" data-toggle="tab" href="#panel34" role="tab">บัวหลวงอบแห้ง</a>
        </li>

        <li class="nav-item">
          <a class="nav-link font-weight-bold text-uppercase" data-toggle="tab" href="#panel35" role="tab">เมี่ยงคำ</a>
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
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#bua">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={bua} alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">กลีบบัวหลวง</h5>
              <p class="card-text text-uppercase mb-3">อบแห้ง</p>

            </div>

          </a>
          {/* <!-- Card --> */}

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#ksonBua">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={ksonBua} alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">เกสรบัวหลวง</h5>
              <p class="card-text text-uppercase mb-3">อบแห้ง</p>

            </div>

          </a>
          {/* <!-- Card --> */}

        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-6 col-lg-4">

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#ping">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={ping} alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">ขนมผิง</h5>
              <p class="card-text text-uppercase mb-3">หอมนุ่ม</p>

            </div>

          </a>
          {/* <!-- Card --> */}

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#kum">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={kum} alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">เมี่ยงคำบัวหลวง</h5>
              <p class="card-text text-uppercase mb-3">สดใหม่</p>

            </div>

          </a>
          {/* <!-- Card --> */}

        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-6 col-lg-4">

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#banana">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={banana} alt="Card image cap"
            style={{height:'14.25rem'}}
            />

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">กล้วยหอมทอง</h5>
              <p class="card-text text-uppercase mb-3">ทอดกรอบ</p>

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
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#banana">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={banana} alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">กล้วยหอมทอง</h5>
              <p class="card-text text-uppercase mb-3">ทอดกลอง</p>

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
          <div class="card hoverable mb-4" data-toggle="modal" data-target="#ping">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={ping} alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">ขนมผิง</h5>
              <p class="card-text text-uppercase mb-3">หอมนุ่ม</p>

            </div>

          </div>
          {/* <!-- Card --> */}

        </div>
        {/* <!-- Grid column --> */}

       

      </div>
      {/* <!-- Grid row --> */}

    </div>
    {/* <!--Panel 3--> */}

 {/* <!--Panel 4--> */}
 <div class="tab-pane fade" id="panel34" role="tabpanel">

{/* <!-- Grid row --> */}
<div class="row">

  {/* <!-- Grid column --> */}
  <div class="col-md-12 col-lg-4">

    {/* <!-- Card --> */}
    <div class="card hoverable mb-4" data-toggle="modal" data-target="#bua">

      {/* <!-- Card image --> */}
      <img class="card-img-top" src={bua} alt="Card image cap"/>

      {/* <!-- Card content --> */}
      <div class="card-body">

        <h5 class="my-3">กลีบบัวหลวง</h5>
        <p class="card-text text-uppercase mb-3">อบแห้ง</p>

      </div>

    </div>
    {/* <!-- Card --> */}

  </div>
  {/* <!-- Grid column --> */}

  {/* <!-- Grid column --> */}
  <div class="col-md-6 col-lg-4">

    {/* <!-- Card --> */}
    <a class="card hoverable mb-4" data-toggle="modal" data-target="#ksonBua">

      {/* <!-- Card image --> */}
      <img class="card-img-top" src={ksonBua} alt="Card image cap"/>

      {/* <!-- Card content --> */}
      <div class="card-body">

        <h5 class="my-3">เกสรบัวหลวง</h5>
        <p class="card-text text-uppercase mb-3">อบแห้ง</p>

      </div>

    </a>
    {/* <!-- Card --> */}

  </div>
  

</div>
{/* <!-- Grid row --> */}

</div>
{/* <!--Panel 4--> */}

 {/* <!--Panel 5--> */}
 <div class="tab-pane fade" id="panel35" role="tabpanel">

{/* <!-- Grid row --> */}
<div class="row">

  {/* <!-- Grid column --> */}
  <div class="col-md-12 col-lg-4">

    {/* <!-- Card --> */}
    <div class="card hoverable mb-4" data-toggle="modal" data-target="#kum">

      {/* <!-- Card image --> */}
      <img class="card-img-top" src={kum} alt="Card image cap"/>

      {/* <!-- Card content --> */}
      <div class="card-body">

        <h5 class="my-3">เมี่ยงคำบัวหลวง</h5>
        <p class="card-text text-uppercase mb-3">สดใหม่</p>

      </div>

    </div>
    {/* <!-- Card --> */}

  </div>
  {/* <!-- Grid column --> */}
</div>
{/* <!-- Grid row --> */}

</div>
{/* <!--Panel 5--> */}

  </div>
  {/* <!--Tab panels--> */}

</section>
{/* <!-- Section --> */}

</div>
        </>
    )
} 
export default FruitProducts