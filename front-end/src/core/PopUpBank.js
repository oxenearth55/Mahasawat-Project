import React from 'react';


const PopUpBank = ({bank, Total}) =>{



    return(
        <>
         {/* // <!-- Central Modal Medium Info --> */}
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
              <i class="fas fa-check fa-4x mb-3 animated rotateIn"></i>
             

            {/* Input field */}

    <div class="card">

    <h5 class="card-header info-color white-text text-center py-4">
        <strong>โอนเงินมาที่</strong>
    </h5>

    <div class="card-body px-lg-5 pt-0">

        <form class="md-form" style={{color:' #757575'}}>



                    <p for="materialSaveFormName">ชื่อบัญชี</p>
                    <input    readOnly   value={bank.personName} type="text" id="materialSaveFormName" class="form-control"/>


                    <p for="materialSaveFormLastName">ชื่อธนาคาร</p>
                    <input    readOnly  value={bank.bankName} type="text" id="materialSaveFormLastName" class="form-control"/>


                    <p for="materialSaveFormEmail">เลขบัญชี</p>
                    <input     readOnly   value={bank.accountNumber} type="text" id="materialSaveFormEmail" class="form-control"/>
                  
                    <p for="materialSaveFormEmail">จำนวนเงิน</p>
                    <input     readOnly   value={`${Total} บาท`} type="text" id="materialSaveFormEmail" class="form-control"/>

        </form>
    </div>
</div>



            {/* Input field */}



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
    {/* // <!-- Central Modal Medium Info--> */}
        </>
    )
}
export default PopUpBank;