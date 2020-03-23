import React, { useState, useEffect } from 'react';


const PopUpCorrect = () => (

 

//  <!-- Central Modal Medium Success -->
 <div class="modal fade" id="centralModalSuccess" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
   aria-hidden="true">
   <div class="modal-dialog modal-notify modal-success" role="document">
     {/* <!--Content--> */}
     <div class="modal-content">
       {/* <!--Header--> */}
       <div class="modal-header">
         <p class="heading lead">Modal Success</p>

         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true" class="white-text">&times;</span>
         </button>
       </div>

       {/* <!--Body--> */}
       <div class="modal-body">
         <div class="text-center">
           <i class="fas fa-check fa-4x mb-3 animated rotateIn"></i>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto nulla aperiam blanditiis
             ad consequatur in dolores culpa, dignissimos, eius non possimus fugiat. Esse ratione fuga, enim,
             ab officiis totam.</p>
         </div>
       </div>

       {/* <!--Footer--> */}
       <div class="modal-footer justify-content-center">
         <a type="button" class="btn btn-success">Get it now <i class="far fa-gem ml-1 text-white"></i></a>
         <a type="button" class="btn btn-outline-success waves-effect" data-dismiss="modal">No, thanks</a>
       </div>
     </div>
     {/* <!--/.Content--> */}
   </div>
 </div>
//  <!-- Central Modal Medium Success-->


);

export default PopUpCorrect;
