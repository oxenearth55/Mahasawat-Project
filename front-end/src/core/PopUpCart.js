import React from 'react';
import { Link} from 'react-router-dom';


const PopUpCart = () => {

 
  



    return(
//   {/* //ANCHOR pop Up */}

            
 
//  {/* // <!-- Modal: modalAbandonedCart--> */}
 <div class="modal fade right" id="modalAbandonedCart" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
   aria-hidden="true" data-backdrop="false">
   <div class="modal-dialog modal-side modal-bottom-right modal-notify modal-info" role="document">
     {/* <!--Content--> */}
     <div class="modal-content">
       {/* <!--Header--> */}
       <div class="modal-header">
         <p class="heading">รถเข็น
         </p>
 
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true" class="white-text">&times;</span>
         </button>
       </div>
 
       {/* <!--Body--> */}
       <div class="modal-body">
 
         <div class="row">
           <div class="col-3">
             <p></p>
             <p class="text-center"><i class="fas fa-shopping-cart fa-4x"></i></p>
           </div>
 
           <div class="col-9">
             <p>สินค้าชินนี้อยู่ในรถเข็นเรียบร้อย</p>
             <p>ต้องการดูรถเข็นหรือไม่?</p>

           </div>
         </div>
       </div>
 
       {/* <!--Footer--> */}
       <div class="modal-footer justify-content-center">
       <Link to ="/cart" >    
         <a type="button" class="btn btn-info">ไปที่รถเข็น</a>
         </Link>
 
         <a type="button" class="btn btn-outline-info waves-effect" data-dismiss="modal">ดูสินค้าอื่นต่อ</a>
       </div>
     </div>
     {/* <!--/.Content--> */}
   </div>
 </div>
//  {/* // <!-- Modal: modalAbandonedCart--> */}


            //   {/* {ANCHOR pop Up} */}


    )



}






export default PopUpCart;