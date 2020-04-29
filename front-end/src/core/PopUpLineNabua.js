import React from 'react';
import {Link} from 'react-router-dom';
import Line from './Suggestion/Line.png'





const PopUpLineNabua = () => (

    <>
  
 {/* <!-- Central Modal Medium Success --> */}
 <div class="modal fade" id="centralModalSuccess" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
   aria-hidden="true">
   <div class="modal-dialog modal-notify modal-success" role="document">
     {/* <!--Content--> */}
     <div class="modal-content">
       {/* <!--Header--> */}
       <div class="modal-header">
         <p class="heading lead">ติดต่อผ่าน Line</p>

         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true" class="white-text">&times;</span>
         </button>
       </div>

       {/* <!--Body--> */}
       <div class="modal-body">
         <div class="text-center">
           <i class="fab fa-line fa-4x mb-3 animated rotateIn"></i>
           <img src={Line} 
              alt="slip" class="img-fluid" />
              <hr/>
         </div>
       </div>

       {/* <!--Footer--> */}
       <div class="modal-footer justify-content-center">
         <a type="button" class="btn btn-outline-success waves-effect" data-dismiss="modal">ปิด</a>
       </div>
     </div>
     {/* <!--/.Content--> */}
   </div>
 </div>
 {/* <!-- Central Modal Medium Success--> */}


    </>

   
)
export default PopUpLineNabua;