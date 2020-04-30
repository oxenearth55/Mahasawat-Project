import React from 'react';
import {API} from '../config' 





const PopUpContact = ({contact}) => (

    <>
  {/* <!-- Central Modal Medium Info --> */}
 <div class="modal fade" id="centralModalContact" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
   aria-hidden="true">
   <div class="modal-dialog modal-notify modal-info" role="document">
     {/* <!--Content--> */}
     <div class="modal-content">
       {/* <!--Header--> */}
       <div class="modal-header">
         <p class="heading lead">ข้อมูลการติดต่อ</p>

         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true" class="white-text">&times;</span>
         </button>
       </div>

       {/* <!--Body--> */}
       <div class="modal-body">
         <div class="text-center">
           <i class="fas fa-phone-alt fa-4x mb-3 animated rotateIn"></i>
           </div>

           <div className='mt-5'>
          <h4> ชื่อ: {contact.contactName}</h4>
          <h4> โทร: {contact.phoneNumber}</h4>
          <h4> อีเมล: {contact.email}</h4>
          <h4> ไลน์ไอดี: {contact.lineId}</h4>



         </div>
       </div>

       {/* <!--Footer--> */}
       <div class="modal-footer justify-content-center">
         <a type="button" class="btn btn-outline-primary waves-effect" data-dismiss="modal">ปิด</a>
       </div>
     </div>
     {/* <!--/.Content--> */}
   </div>
 </div>
 {/* <!-- Central Modal Medium Info--> */}

    </>

   
)
export default PopUpContact