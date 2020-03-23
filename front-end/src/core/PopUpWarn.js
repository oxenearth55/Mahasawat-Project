import React, { useState, useEffect } from 'react';


const PopUpWarn = ({checkout}) => (


<>

 {/* <!-- Central Modal Medium Warning --> */}
 <div class="modal fade" id="centralModalWarning" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
   aria-hidden="true">
   <div class="modal-dialog modal-notify modal-warning" role="document">
     {/* <!--Content--> */}
     <div class="modal-content">
       {/* <!--Header--> */}
       <div class="modal-header">
         <p class="heading lead">คำเตือน</p>

         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true" class="white-text">&times;</span>
         </button>
       </div>

       {/* <!--Body--> */}
       <div class="modal-body">
         <div class="text-center">
           <i class="fas fa-check fa-4x mb-3 animated rotateIn"></i>
           <p>ถ้าในตะกร้ารถเข็นของท่าน มีสินค้าที่มาจาก ทั้ง นาบัวลุงแจ่ม และ บ้านฟักข้าว 
                ท่านจะต้องทำการอัพโหลดบิลแยก โดยท่านสามารถอัพโหลดบินแยกได้ที่ See order ในแถบเมนู 
                เพื่อทำการยืนยันว่าท่านได้ชำระเงินเรียบร้อยแล้ว
           </p>
         </div>
       </div>

       {/* <!--Footer--> */}
       <div class="modal-footer justify-content-center">
         <a type="button" data-dismiss="modal" onClick={checkout} type='submit' class="btn btn-warning">ทำรายการ <i class="far fa-gem ml-1 text-white"></i></a>
         <a type="button" class="btn btn-outline-warning waves-effect" data-dismiss="modal">ไว้ก่อน</a>
       </div>
     </div>
     {/* <!--/.Content--> */}
   </div>
 </div>
 {/* <!-- Central Modal Medium Warning--> */}



</>




);

export default PopUpWarn;