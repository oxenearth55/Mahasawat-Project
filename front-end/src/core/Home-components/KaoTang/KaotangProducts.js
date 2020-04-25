import React, {useState, useEffect} from 'react'; 
import RiceBerryCan from './Photo/ข้าวไรเบอรี่กระป๋อง.jpeg'
import TomyumRiceBerry from './Photo/ต้มยำไรเบอรี่.jpeg'
import KaotangOri from './Photo/ธัญพืช.jpeg'
import KaotangOriRiceBerry from './Photo/ธัญพืชไรเบอรี่.jpeg'
import MooYongCan from './Photo/หมูหยองกระป๋อง.jpeg'
import MooYongRiceBerry from './Photo/หมูหยองไรเบอรี่ถุง.jpeg'
import MooYongRiceBerryCan from './Photo/หมูหยองไรเบอรี่.jpeg'

import MooYongOri from './Photo/หมูหยองหอมมะลิ.jpeg'


const KaotangProducts = () => {

    return(
        <>
        <div class="container my-5 " >

{/* <!-- Section --> */}
<section>
  
 
  {/* <!-- Modal Can1 RiceBerry --> */}
      <div class="modal fade" id="RiceBerryCan" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                              
                              <h5 class="font-weight-normal mb-3">ข้าวตังหน้าธัญพืช</h5>

                              <p class="text-muted">บ้านศาลาดินได้นำข้าวไรซ์เบอร์รี่มาแปรรูปเป็น
                              ข้าวตังหน้าธัญพืช เพื่อรสชาติที่กลมกล่อม ความลงตัวของกลิ่นอันหอมหวนของข้าวตัง และคุณประโยชน์มากมายที่คุณจะได้รับ
                              
                               </p>

                              <ul class="list-unstyled font-small mt-5">
                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ชนิดข้าว</strong></p>
                                      <p class="text-muted mb-4">ข้าวไรซ์เบอร์รี่</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ส่วนประกอบ</strong></p>
                                      <p class="text-muted mb-4">ข้าวไรซ์เบอร์รี่, งาขาว, งาดำ, น้ำมันพืช, 
                                      กระเทียม, พริกไทย, ผักชี, น้ำตาลทราย, น้ำตาลปี๊บ</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>น้ำหนักสุทธิ</strong></p>
                                      <p class="text-muted mb-4">130 กรัม</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สถานที่ขาย</strong></p>
                                      <p className="blue-text">บ้านศาลาดิน</p>
                                  </li>
                              </ul>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6">
                              
                              <div class="view rounded-right">
                                  <img class="img" src={RiceBerryCan} alt="Sample image"
                                  style={{height:'27rem',width:'32rem'}}/>
                              </div>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                      </div>
                      {/* <!-- Grid row --> */}
                      
                  </div>
              </div>
          </div>
      </div>



  {/* <!-- Modal Tomyam --> */}
  <div class="modal fade" id="TomyumRiceBerry" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                              
                              <h5 class="font-weight-normal mb-3">ข้าวตังรสต้มยำ</h5>

                              <p class="text-muted">บ้านศาลาดินได้นำข้าวไรซ์เบอร์รี่ มาแปรรูปเป็น
                              ข้าวตังรสต้มยำเพื่อให้สัมผัสประสบการณ์ใหม่ๆกับรสชาติที่จัดจ้าน เล่าร้อน 
                             และอุดมไปด้วยคุณประโยชน์มากมาย
                              
                               </p>

                              <ul class="list-unstyled font-small mt-5">
                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ชนิดข้าว</strong></p>
                                      <p class="text-muted mb-4">ข้าวไรซ์เบอร์รี่</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ส่วนประกอบ</strong></p>
                                      <p class="text-muted mb-4">ข้าวไรซ์เบอร์รี่, งาขาว, งาดำ, น้ำมันพืช, 
                                      กระเทียม, พริกไทย, ผักชี, น้ำตาลทราย, น้ำตาลปี๊บ</p>
                                  </li>

                               

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สถานที่ขาย</strong></p>
                                      <p className="blue-text">บ้านศาลาดิน</p>
                                  </li>
                              </ul>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6">
                              
                              <div class="view rounded-right">
                                  <img class="img" src={TomyumRiceBerry} alt="Sample image"
                                  style={{height:'26rem',width:'28rem'}}/>
                              </div>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                      </div>
                      {/* <!-- Grid row --> */}
                      
                  </div>
              </div>
          </div>
      </div>


{/* <!-- Modal MooYongOri --> */}
<div class="modal fade" id="MooYongOri" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                              
                              <h5 class="font-weight-normal mb-3">ข้าวตังหน้าหมูหยอง</h5>

                              <p class="text-muted">บ้านศาลาดินได้นำ ข้าวกล้องหอมมะลิ มาแปรรูปเป็น
                              ข้าวตังหน้าหมูหยอง รสชาติที่กลมกล่อมของหมูหยอง และความลงตัวของกลิ่นอันหอมหวนของข้าวตัง 
                              ทำให้ได้ข้าวตังคุณภาพ ชวนให้คุณหลงใหล น่าลิ้มลอง มากไปกว่านั้นคุณจะได้รับคุณประโยชน์ที่ท่วมท้น
                              
                               </p>

                              <ul class="list-unstyled font-small mt-5">
                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ชนิดข้าว</strong></p>
                                      <p class="text-muted mb-4">ข้าวกล้องหอมมะลิ</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ส่วนประกอบ</strong></p>
                                      <p class="text-muted mb-4">ข้าวกล้องหอมมะลิ, หมูหยอง, น้ำมันพืช, 
                                      กระเทียม, พริกไทย, ผักชี, น้ำตาลทราย, น้ำตาลปี๊บ</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>น้ำหนักสุทธิ</strong></p>
                                      <p class="text-muted mb-4">130 กรัม</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สถานที่ขาย</strong></p>
                                      <p className="blue-text">บ้านศาลาดิน</p>
                                  </li>
                              </ul>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6">
                              
                              <div class="view rounded-right">
                                  <img class="img" src={MooYongOri} alt="Sample image"
                                  style={{height:'27rem',width:'32rem'}}/>
                              </div>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                      </div>
                      {/* <!-- Grid row --> */}
                      
                  </div>
              </div>
          </div>
      </div>


 {/* <!-- Modal KaotangOri --> */}
 <div class="modal fade" id="KaotangOri" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                              
                              <h5 class="font-weight-normal mb-3">ข้าวตังหน้าธัญพืช</h5>

                              <p class="text-muted">บ้านศาลาดินได้นำข้าวกล้องหอมมะลิมาแปรรูปเป็น
                              ข้าวตังหน้าธัญพืช เพื่อรสชาติที่กลมกล่อม ความลงตัวของกลิ่นอันหอมหวนของข้าวตัง และคุณประโยชน์มากมายที่คุณจะได้รับ
                              
                               </p>

                              <ul class="list-unstyled font-small mt-5">
                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ชนิดข้าว</strong></p>
                                      <p class="text-muted mb-4">ข้าวกล้องหอมมะลิ</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ส่วนประกอบ</strong></p>
                                      <p class="text-muted mb-4">ข้าวกล้องหอมมะลิ, งาขาว, งาดำ, น้ำมันพืช, 
                                      กระเทียม, พริกไทย, ผักชี, น้ำตาลทราย, น้ำตาลปี๊บ</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>น้ำหนักสุทธิ</strong></p>
                                      <p class="text-muted mb-4">160 กรัม</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สถานที่ขาย</strong></p>
                                      <p className="blue-text">บ้านศาลาดิน</p>
                                  </li>
                              </ul>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6">
                              
                              <div class="view rounded-right">
                                  <img class="img" src={KaotangOri} alt="Sample image"
                                  style={{height:'27rem',width:'32rem'}}/>
                              </div>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                      </div>
                      {/* <!-- Grid row --> */}
                      
                  </div>
              </div>
          </div>
      </div>



 {/* <!-- Modal KaotangOriRiceBerry --> */}
 <div class="modal fade" id="KaotangOriRiceBerry" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                              
                              <h5 class="font-weight-normal mb-3">ข้าวตังหน้าธัญพืช</h5>

                              <p class="text-muted">บ้านศาลาดินได้นำข้าวไรซ์เบอร์รี่มาแปรรูปเป็น
                              ข้าวตังหน้าธัญพืช เพื่อรสชาติที่กลมกล่อม ความลงตัวของกลิ่นอันหอมหวนของข้าวตัง และคุณประโยชน์มากมายที่คุณจะได้รับ
                              
                               </p>

                              <ul class="list-unstyled font-small mt-5">
                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ชนิดข้าว</strong></p>
                                      <p class="text-muted mb-4">ข้าวไรซ์เบอร์รี่</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ส่วนประกอบ</strong></p>
                                      <p class="text-muted mb-4">ข้าวไรซ์เบอร์รี่, งาขาว, งาดำ, น้ำมันพืช, 
                                      กระเทียม, พริกไทย, ผักชี, น้ำตาลทราย, น้ำตาลปี๊บ</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>น้ำหนักสุทธิ</strong></p>
                                      <p class="text-muted mb-4">160 กรัม</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สถานที่ขาย</strong></p>
                                      <p className="blue-text">บ้านศาลาดิน</p>
                                  </li>
                              </ul>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6">
                              
                              <div class="view rounded-right">
                                  <img class="" src={KaotangOriRiceBerry} alt="Sample image"
                                  style={{height:'27rem',width:'29rem'}}/>
                              </div>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                      </div>
                      {/* <!-- Grid row --> */}
                      
                  </div>
              </div>
          </div>
      </div>


{/* <!-- Modal MooYongCan --> */}
<div class="modal fade" id="MooYongCan" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                              
                              <h5 class="font-weight-normal mb-3">ข้าวตังหน้าหมูหยอง</h5>

                              <p class="text-muted">บ้านศาลาดินได้นำ ข้าวกล้องหอมมะลิ มาแปรรูปเป็น
                              ข้าวตังหน้าหมูหยอง รสชาติที่กลมกล่อมของหมูหยอง และความลงตัวของกลิ่นอันหอมหวนของข้าวตัง 
                              ทำให้ได้ข้าวตังคุณภาพ ชวนให้คุณหลงใหล น่าลิ้มลอง มากไปกว่านั้นคุณจะได้รับคุณประโยชน์ที่ท่วมท้น
                              
                               </p>

                              <ul class="list-unstyled font-small mt-5">
                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ชนิดข้าว</strong></p>
                                      <p class="text-muted mb-4">ข้าวกล้องหอมมะลิ</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ส่วนประกอบ</strong></p>
                                      <p class="text-muted mb-4">ข้าวกล้องหอมมะลิ, หมูหยอง, น้ำมันพืช, 
                                      กระเทียม, พริกไทย, ผักชี, น้ำตาลทราย, น้ำตาลปี๊บ</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>น้ำหนักสุทธิ</strong></p>
                                      <p class="text-muted mb-4">130 กรัม</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สถานที่ขาย</strong></p>
                                      <p className="blue-text">บ้านศาลาดิน</p>
                                  </li>
                              </ul>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6">
                              
                              <div class="view rounded-right">
                                  <img class="img" src={MooYongCan} alt="Sample image"
                                  style={{height:'27rem',width:'32rem'}}/>
                              </div>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                      </div>
                      {/* <!-- Grid row --> */}
                      
                  </div>
              </div>
          </div>
      </div>



{/* <!-- Modal MooYongRiceBerry --> */}
<div class="modal fade" id="MooYongRiceBerry" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                              
                              <h5 class="font-weight-normal mb-3">ข้าวตังหน้าหมูหยอง</h5>

                              <p class="text-muted">บ้านศาลาดินได้นำ ข้าวไรซ์เบอร์รี่ มาแปรรูปเป็น
                              ข้าวตังหน้าหมูหยอง รสชาติที่กลมกล่อมของหมูหยอง และความลงตัวของกลิ่นอันหอมหวนของข้าวตัง 
                              ทำให้ได้ข้าวตังคุณภาพ ชวนให้คุณหลงใหล น่าลิ้มลอง มากไปกว่านั้นคุณจะได้รับคุณประโยชน์ที่ท่วมท้น
                              
                               </p>

                              <ul class="list-unstyled font-small mt-5">
                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ชนิดข้าว</strong></p>
                                      <p class="text-muted mb-4">ข้าวไรซ์เบอร์รี่</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ส่วนประกอบ</strong></p>
                                      <p class="text-muted mb-4">ข้าวไรซ์เบอร์รี่, หมูหยอง, น้ำมันพืช, 
                                      กระเทียม, พริกไทย, ผักชี, น้ำตาลทราย, น้ำตาลปี๊บ</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>น้ำหนักสุทธิ</strong></p>
                                      <p class="text-muted mb-4">130 กรัม</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สถานที่ขาย</strong></p>
                                      <p className="blue-text">บ้านศาลาดิน</p>
                                  </li>
                              </ul>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6">
                              
                              <div class="view rounded-right">
                                  <img class="img" src={MooYongRiceBerry} alt="Sample image"
                                  style={{height:'27rem',width:'32rem'}}/>
                              </div>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                      </div>
                      {/* <!-- Grid row --> */}
                      
                  </div>
              </div>
          </div>
      </div>


{/* <!-- Modal MooYongRiceBerry --> */}
<div class="modal fade" id="MooYongRiceBerryCan" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                              
                              <h5 class="font-weight-normal mb-3">ข้าวตังหน้าหมูหยอง</h5>

                              <p class="text-muted">บ้านศาลาดินได้นำ ข้าวไรซ์เบอร์รี่ มาแปรรูปเป็น
                              ข้าวตังหน้าหมูหยอง รสชาติที่กลมกล่อมของหมูหยอง และความลงตัวของกลิ่นอันหอมหวนของข้าวตัง 
                              ทำให้ได้ข้าวตังคุณภาพ ชวนให้คุณหลงใหล น่าลิ้มลอง มากไปกว่านั้นคุณจะได้รับคุณประโยชน์ที่ท่วมท้น
                              
                               </p>

                              <ul class="list-unstyled font-small mt-5">
                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ชนิดข้าว</strong></p>
                                      <p class="text-muted mb-4">ข้าวไรซ์เบอร์รี่</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>ส่วนประกอบ</strong></p>
                                      <p class="text-muted mb-4">ข้าวไรซ์เบอร์รี่, หมูหยอง, น้ำมันพืช, 
                                      กระเทียม, พริกไทย, ผักชี, น้ำตาลทราย, น้ำตาลปี๊บ</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>น้ำหนักสุทธิ</strong></p>
                                      <p class="text-muted mb-4">130 กรัม</p>
                                  </li>

                                  <li>
                                      <p class="text-uppercase mb-2"><strong>สถานที่ขาย</strong></p>
                                      <p className="blue-text">บ้านศาลาดิน</p>
                                  </li>
                              </ul>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                          {/* <!-- Grid column --> */}
                          <div class="col-md-6">
                              
                              <div class="view rounded-right">
                                  <img class="img" src={MooYongRiceBerryCan} alt="Sample image"
                                  style={{height:'27rem',width:'32rem'}}/>
                              </div>
                              
                          </div>
                          {/* <!-- Grid column --> */}
                      
                      </div>
                      {/* <!-- Grid row --> */}
                      
                  </div>
              </div>
          </div>
      </div>









  <h5 class="font-weight-bold text-center white-text text-uppercase  mb-4">สินค้า</h5>
  <h3 class="font-weight-bold text-center white-text pb-2">บ้านศาลาดิน</h3>
  <hr class="w-header my-4"/>
  <p class="lead text-center text-muted white-text pt-2 mb-5">สินค้าตัวอย่างจากทางบ้านศาลาดิน</p>
      
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
          <a class="nav-link font-weight-bold text-uppercase" data-toggle="tab" href="#panel32" role="tab">หน้าหมูหยอง</a>
        </li>
        <li class="nav-item">
          <a class="nav-link font-weight-bold text-uppercase" data-toggle="tab" href="#panel33" role="tab">หน้าธัญพืช</a>
        </li>
        <li class="nav-item">
          <a class="nav-link font-weight-bold text-uppercase" data-toggle="tab" href="#panel34" role="tab">รสต้มยำ</a>
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
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#RiceBerryCan">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={RiceBerryCan} alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">ข้าวตังหน้าธัญพืช</h5>
              <p class="card-text text-uppercase mb-3">ข้าวไรซ์เบอร์รี่</p>

            </div>

          </a>
          {/* <!-- Card --> */}

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#TomyumRiceBerry">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={TomyumRiceBerry} alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">ข้าวตังรสต้มยำ</h5>
              <p class="card-text text-uppercase mb-3">ข้าวไรซ์เบอร์รี่</p>

            </div>

          </a>
          {/* <!-- Card --> */}

           {/* <!-- Card --> */}
           <a class="card hoverable mb-4" data-toggle="modal" data-target="#MooYongOri">

{/* <!-- Card image --> */}
<img class="card-img-top" src={MooYongOri} alt="Card image cap"/>

{/* <!-- Card content --> */}
<div class="card-body">

<h5 class="my-3">ข้าวตังหน้าหมูหยอง</h5>
<p class="card-text text-uppercase mb-3">ข้าวกล้องหอมมะลิ</p>

</div>

</a>
{/* <!-- Card --> */}



        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-6 col-lg-4">

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#KaotangOri">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={KaotangOri}alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">ข้าวตังหน้าธัญพืช</h5>
              <p class="card-text text-uppercase mb-3">ข้าวกล้องหอมมะลิ</p>

            </div>

          </a>
          {/* <!-- Card --> */}

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#KaotangOriRiceBerry">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={KaotangOriRiceBerry} alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">ข้าวตังหน้าธัญพืช</h5>
              <p class="card-text text-uppercase mb-3">ข้าวไรซ์เบอร์รี่</p>

            </div>

          </a>
          {/* <!-- Card --> */}

            {/* <!-- Card --> */}
            <a class="card hoverable mb-4" data-toggle="modal" data-target="#MooYongRiceBerryCan">

{/* <!-- Card image --> */}
<img class="card-img-top" src={MooYongRiceBerryCan} alt="Card image cap"/>

{/* <!-- Card content --> */}
<div class="card-body">

  <h5 class="my-3">ข้าวตังหน้าหมูหยอง</h5>
  <p class="card-text text-uppercase mb-3">ข้าวไรซ์เบอร์รี่</p>

</div>

</a>
{/* <!-- Card --> */}

        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-6 col-lg-4">

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#MooYongCan">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={MooYongCan} alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">ข้าวตังหน้าหมูหยอง</h5>
              <p class="card-text text-uppercase mb-3">ข้าวกล้อง</p>

            </div>

          </a>
          {/* <!-- Card --> */}

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#MooYongRiceBerry">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={MooYongRiceBerry} alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">ข้าวตังหน้าหมูหยอง</h5>
              <p class="card-text text-uppercase mb-3">ข้าวไรซ์เบอร์รี่</p>

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
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#MooYongRiceBerryCan">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={MooYongRiceBerryCan} alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">ข้าวตังหน้าหมูหยอง</h5>
              <p class="card-text text-uppercase mb-3">ข้าวไรซ์เบอร์รี่</p>

            </div>

          </a>
          {/* <!-- Card --> */}


           {/* <!-- Card --> */}
           <a class="card hoverable mb-4" data-toggle="modal" data-target="#MooYongRiceBerry">

{/* <!-- Card image --> */}
<img class="card-img-top" src={MooYongRiceBerry} alt="Card image cap"/>

{/* <!-- Card content --> */}
<div class="card-body">

  <h5 class="my-3">ข้าวตังหน้าหมูหยอง</h5>
  <p class="card-text text-uppercase mb-3">ข้าวไรซ์เบอร์รี่</p>

</div>

</a>
{/* <!-- Card --> */}

        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-6 col-lg-4">

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#MooYongCan">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={MooYongCan} alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">ข้าวตังหน้าหมูหยอง</h5>
              <p class="card-text text-uppercase mb-3">ข้าวกล้อง</p>

            </div>

          </a>
          {/* <!-- Card --> */}

        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-6 col-lg-4">

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#MooYongOri">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={MooYongOri} alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">ข้าวตังหน้าหมูหยอง</h5>
              <p class="card-text text-uppercase mb-3">ข้าวกล้องหอมมะลิ</p>

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
          <div class="card hoverable mb-4" data-toggle="modal" data-target="#KaotangOri">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={KaotangOri} alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">ข้าวตังหน้าธัญพืช</h5>
              <p class="card-text text-uppercase mb-3">ข้าวกล้องหอมมะลิ</p>

            </div>

          </div>
          {/* <!-- Card --> */}

        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-6 col-lg-4">

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#KaotangOriRiceBerry">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={KaotangOriRiceBerry} alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">ข้าวตังหน้าธัญพืช</h5>
              <p class="card-text text-uppercase mb-3">ข้าวไรซ์เบอร์รี่</p>

            </div>

          </a>
          {/* <!-- Card --> */}

        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-6 col-lg-4">

          {/* <!-- Card --> */}
          <a class="card hoverable mb-4" data-toggle="modal" data-target="#RiceBerryCan">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={RiceBerryCan} alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">ข้าวตังหน้าธัญพืช</h5>
              <p class="card-text text-uppercase mb-3">ข้าวไรซ์เบอร์รี่</p>

            </div>

          </a>
          {/* <!-- Card --> */}

        </div>
        {/* <!-- Grid column --> */}

      </div>
      {/* <!-- Grid row --> */}

    </div>
    {/* <!--Panel 3--> */}

    {/* <!--Panel 3--> */}
    <div class="tab-pane fade" id="panel34" role="tabpanel">

      {/* <!-- Grid row --> */}
      <div class="row">

        {/* <!-- Grid column --> */}
        <div class="col-md-12 col-lg-4">

          {/* <!-- Card --> */}
          <div class="card hoverable mb-4" data-toggle="modal" data-target="#TomyumRiceBerry">

            {/* <!-- Card image --> */}
            <img class="card-img-top" src={TomyumRiceBerry} alt="Card image cap"/>

            {/* <!-- Card content --> */}
            <div class="card-body">

              <h5 class="my-3">ข้าวตังรสต้มยำ</h5>
              <p class="card-text text-uppercase mb-3">ข้าวไรซ์เบอร์รี่</p>

            </div>

          </div>
          {/* <!-- Card --> */}

        </div>
        {/* <!-- Grid column --> */}

      
       
      </div>
      {/* <!-- Grid row --> */}

    </div>
    {/* <!--Panel 3--> */}


  </div>
  {/* <!--Tab panels--> */}

</section>
{/* <!-- Section --> */}

</div>
        </>
    )
} 
export default KaotangProducts