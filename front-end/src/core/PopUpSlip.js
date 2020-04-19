import React from 'react';
import { Link} from 'react-router-dom';
import {API} from '../config' 



const PopUpSlip = ({order}) => (


    // <!-- Central Modal Medium Info -->
    <div class="modal fade" id="centralModalInfo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-notify modal-lg  modal-info" role="document">
        {/* <!--Content--> */}
        <div class="modal-content">
          {/* <!--Header--> */}
          <div class="modal-header">
            <p class="heading lead">หลักฐานการโอนเงิน</p>
   
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="white-text">&times;</span>
            </button>
          </div>
   
          {/* <!--Body--> */}
          <div class="modal-body">
            <div class="text-center">
              <i class="fas fa-image fa-4x mb-3 animated rotateIn"></i>
              <img src={`${API}/order/slip/${order._id}`} 
              alt="slip" class="img-fluid"/>
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
export default PopUpSlip;