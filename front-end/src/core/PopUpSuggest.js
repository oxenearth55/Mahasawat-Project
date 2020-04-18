import React from 'react';
import { Link} from 'react-router-dom';
import suggestion1 from './Suggestion/suggest1.png'
import suggestion2 from './Suggestion/suggest2.png'
import suggestion3 from './Suggestion/suggest3.png'





const PopUpSuggest = () => (


    // <!-- Central Modal Medium Info -->
    <div class="modal fade" id="centralModalInfo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-notify modal-lg  modal-info" role="document">
        {/* <!--Content--> */}
        <div class="modal-content">
          {/* <!--Header--> */}
          <div class="modal-header">
            <p class="heading lead">วิธีชำระเงิน</p>
   
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="dark-text">&times;</span>
            </button>
          </div>
   
          {/* <!--Body--> */}


          <div class="modal-body">
         <div class="text-center">
           <i class="fas fa-check fa-4x mb-3 animated rotateIn"></i>
           <p className="mb-5">1. คุณสามารถไปที่ 'ดูรายการ' จากเมนูด้านบน
           </p>
           <img src={suggestion1} 
              alt="slip" class="img-fluid" />
                  <p className="mb-5 mt-5">2. คุณสามารถเห็นรายการสั่งซื้อทั้งหมดได้จากหน้านี้
           </p>
           <img src={suggestion2} 
              alt="slip" class="img-fluid" />

<p className="mb-5 mt-5">3. กดปุ่ม 'คลิก' เพื่อเข้าสู่ หน้ารายการสั่งซื้อของท่าน
           </p>

           <img src={suggestion3} 
              alt="slip" class="img-fluid" />
         </div>

       

       </div>
         


   
          {/* <!--Footer--> */}
          <div class="modal-footer justify-content-center">
            {/* <a type="button" class="btn btn-primary">Get it now <i class="far fa-gem ml-1 text-white"></i></a> */}
            <a type="button" class="btn btn-outline-primary waves-effect" data-dismiss="modal">ปิด</a>
          </div>
        </div>
        {/* <!--/.Content--> */}
      </div>
    </div>
    // <!-- Central Modal Medium Info-->
)
export default PopUpSuggest;