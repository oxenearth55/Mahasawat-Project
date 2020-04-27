import React from 'react';


const PopUpDeleteProduct = ({destroy}) => (
<>
    {/* // <!-- Central Modal Medium Danger --> */}
    <div class="modal fade" id="centralModalDanger" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-notify modal-danger" role="document">
        {/* <!--Content--> */}
        <div class="modal-content">
          {/* <!--Header--> */}
          <div class="modal-header">
            <p class="heading lead">ทำการลบสินค้า</p>
   
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="white-text">&times;</span>
            </button>
          </div>
   
          {/* <!--Body--> */}
          <div class="modal-body">
            <div class="text-center">
              <i class="fas fa-times fa-4x mb-3 animated rotateIn"></i>
              <p>คุณแน่ใจหรือไม่ ที่จะยืนยันการลบสินค้านี้</p>
            </div>
          </div>
   
          {/* <!--Footer--> */}
          <div class="modal-footer justify-content-center">
            <a type="button" data-dismiss="modal" onClick={() => destroy()} class="btn btn-danger">ลบเดี๋ยวนี้ <i class="far fa-times-circle ml-1 text-white"></i></a>
            <a type="button" class="btn btn-outline-danger waves-effect" data-dismiss="modal">ไม่ดีกว่า</a>
          </div>
        </div>
        {/* <!--/.Content--> */}
      </div>
    </div>
    {/* // <!-- Central Modal Medium Danger--> */}

</>


)
export default PopUpDeleteProduct; 