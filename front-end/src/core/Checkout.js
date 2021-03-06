import React, { useState, useEffect } from 'react';
import { getProducts, processPayment, createOrder } from './apiCore';
import { emptyCart } from './cartHelpers';
import Card from './Card';
import { Link,Redirect } from 'react-router-dom';
import {isAuthenticated} from '../auth'; 





// SECTION state to handle braintree
const Checkout = (
    {products, 
        nabuaProducts,
        fakkhawProducts,
        nabuaTotal,
        fakkhawTotal,
    setRun = f => f, 
    run = undefined,
    shippingNabua,
    shippingFakkhaw,
    itemtotal




}) => {
    const [data, setData] = useState({
        loading: false,
        success: false, 
        // clientToken: null, 
        error: '', 
        instance: {}
    });

    const [aleart,setAleart] = useState(false)
    const [redirectToOrder, setRedirectToOrder] = useState(false)

    const redirectUser = () => {
        if (redirectToOrder) {
           
                return <Redirect to="/order"/>;
            
        }
    };

    const [success,setSuccess] = useState(false)
    const [address, setAddress] = useState({
      firstName:'',
      lastName:'',
      phoneNumber:'',
      village:'',
      villageNo:'',
      province:'' ,
      streetName:'',
      lane:'',
      district:'',
      subDistrict:'',
      postalNo:''

    }); 

    const {village, villageNo, province, streetName, lane, district, subDistrict, postalNo } = address;

    

    useEffect(() => {
    }, []);

    const [customerAddress, setCustomerAddress] = useState('')


//NOTE grab user data from isAuthenticated
const { user, token } = isAuthenticated();

// NOTE Send user Id and token to backend to grab client token back from braintree 
// const getToken = (userId, token) => {
//     getBraintreeClientToken(userId, token).then(data => {
//         if(data.error){
//             setData({...data, error: data.error})

//         }else{
//             setData({ clientToken:data.clientToken})
//         }
//     })
// }







//NOTE Rename of address from state => reduce confusing for using duplicated data (variable)
// let deliveryAddress = data.address;

const aleartShip = () =>{
if(aleart==true){

  return(
    
    <>
    <div class="alert alert-danger text-center" role="alert">
      โปรดเลือกการขนส่ง
</div>
    </>
  )
}
}


const buy = event => {
   
  event.preventDefault();

if(nabuaProducts[0] !=undefined){

  if(shippingNabua.shippingCost !==0 && shippingNabua.shippingCost!=undefined && ( (shippingFakkhaw.shippingCost !==undefined && shippingFakkhaw.shippingCost !==0 && fakkhawProducts[0] !==undefined) ||  (shippingFakkhaw.shippingCost == undefined && fakkhawProducts[0] ==undefined) )  ){

    const createOrderData = { //NOTE keep it as Object before storing in Datase
        products: nabuaProducts,
        amount: nabuaTotal,
        shop:'5e6a17a35c566806d6a101dd',
        address: address,
        shippingProvider:shippingNabua
        
    };

    createOrder(user._id, token, createOrderData).then(data => {
        if (data.error) {
            setData({ ...data, error: data.error });
        } else {

            setData({...data, success: true}) 
            setSuccess(true)

              
        }
        emptyCart(()=>{
          setRun(!run);                
          setData({
              loading: false,
              success: true
      
          });
          setRedirectToOrder(true)
      }) 
      

    });
    

}
else{
  setAleart(true);
}
}


if(fakkhawProducts[0] !=undefined){
  if(shippingFakkhaw.shippingCost !==0 && shippingFakkhaw.shippingCost!=undefined && ( (shippingNabua.shippingCost !==0 && shippingNabua.shippingCost !== undefined && nabuaProducts[0]  !==undefined) ||  (shippingNabua.shippingCost ==undefined && nabuaProducts[0] ==undefined) )   ){

    const createOrderData ={ //NOTE keep it as Object before storing in Datase
        products: fakkhawProducts,
        amount: fakkhawTotal,
        shop:'5e6a17ac5c566806d6a101de',
        address: address,
        shippingProvider:shippingFakkhaw
    };

    createOrder(user._id, token, createOrderData).then(data => {
        if (data.error) {
            setData({ ...data, error: data.error });
        } else {

            setData({...data, success: true}) 
            setSuccess(true)


        }
          emptyCart(()=>{
              setRun(!run);                
              setData({
                  loading: false,
                  success: true
          
              });
              setRedirectToOrder(true)
          }) 
          

    });
  }
  else{
    setAleart(true);

  }
}

//  NOTE After finished create order, remove every thing on cart page by default

};

           
        
        
        // else if(fakkhawProducts.length>0){
        //     const createOrderData ={ //NOTE keep it as Object before storing in Datase
        //         products: fakkhawProducts,
        //         amount: fakkhawTotal, //NOTE  how much user pay for this shop 
        //         address: customerAddress


        //     };
        //     //NOTE Then put it into database via createOrder method
        //     createOrder(userId,token,createOrderData)  
        //   }
           
          

            // NOTE emty cart


            

//SECTION Address handle

// NOTE grab address from a user inputs
const handleAddress = name => event => {
  setAddress({ ...address, [name]: event.target.value });
  console.log('nabua ship is ' +data.success)
};

const showAddressForm = () => {
    return(
        <>


 

                 {isAuthenticated() && (
<>
{aleartShip()}
    <form onSubmit={buy}>
      {/* // <!--Main layout--> */}
      <main class="mt-5 pt-4 ">
        <div class="container wow fadeIn">
    
          {/* <!-- Heading --> */}
          <h2 class="my-5 h2 text-center">โปรดกรอกรายละเอียดที่อยู่</h2>
    
          {/* <!--Grid row--> */}
          <div class="row justify-content-center">
    
            {/* <!--Grid column--> */}
            <div class="col-md-8 mb-4">
    
              {/* <!--Card--> */}
              <div class="card">
    
                {/* <!--Card content--> */}
                <form class="card-body">
    
                  {/* <!--Grid row--> */}
    
                    {/* <!--Grid column--> */}
                 
    
                      {/* <!--firstName--> */}
                      <div class="md-form mb-5">
                  <p for="name" class="">ชื่อ-สกุล <small className="red-text">*</small></p>
                  <input onChange={handleAddress('name')} type="text" id="name" class="form-control" placeholder="ชื่อ-สกุล" required/>
                  </div>
    
                  
                    {/* <!--Grid column--> */}
    
                    {/* <!--Grid column--> */}
                
                    {/* <!--Grid column--> */}
    
                  {/* <!--Grid row--> */}
    
                  <div class="md-form mb-5">
                  <p for="address" >เบอร์โทรศัพท์ <small className="red-text">*</small></p>
                  <input onChange={handleAddress('phoneNumber')} type="text" id="phone" class="form-control" placeholder="เบอร์ติดต่อ" required/>
                  </div>
            
               
                  {/* <!--address--> */}
                  <div class="md-form mb-5">
                  <p for="address">บ้านเลขที่ <small className="red-text">*</small></p>
                  <input onChange={handleAddress('houseNumber')} type="text" id="address" placeholder="บ้านเลขที่" class="form-control"required />
                  </div>

                   {/* <!--address--> */}
                   <div class="md-form mb-5">
                  <p for="address">หมู่บ้าน</p>
                  <input  onChange={handleAddress('village')} type="text" id="address" placeholder="หมู่บ้าน" class="form-control" />
                  </div>

                   {/* <!--address--> */}
                   <div class="md-form mb-5">
                  <p for="address" >ซอย</p>
                  <input onChange={handleAddress('lane')} type="text" id="address" placeholder="ซอย" class="form-control" />
                  </div>


                   {/* <!--address--> */}
                   <div class="md-form mb-5">
                  <p for="address" >ถนน <small className="red-text">*</small></p>
                  <input onChange={handleAddress('streetName')} type="text" id="address" placeholder="ถนน" class="form-control" required/>
                  </div>

                   {/* <!--address--> */}
                   <div class="md-form mb-5">
                  <p for="address" >ตำบล <small className="red-text">*</small></p>
                  <input onChange={handleAddress('subDistrict')} type="text" id="address" placeholder="ตำบล" class="form-control" required/>
                  </div>

                   {/* <!--address--> */}
                   <div class="md-form mb-5">
                  <p for="address" >อำเภอ <small className="red-text">*</small></p>
                  <input onChange={handleAddress('district')} type="text" id="address" placeholder="อำเภอ" class="form-control" required/>
                  </div>

              

            
    
                  {/* <!--Grid row--> */}
                  <div class="row">             
    
                    {/* <!--Grid column--> */}
                    <div class="col-lg-4 col-md-6 mb-4">
    
                      <label for="state" >จังหวัด <small className="red-text">*</small></label>
                      <select onChange={handleAddress('province')}  class="custom-select d-block w-100" id="state" required>
                      <option value="" selected>--------- เลือกจังหวัด ---------</option>
          <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
          <option value="กระบี่">กระบี่ </option>
          <option value="กาญจนบุรี">กาญจนบุรี </option>
          <option value="กาฬสินธุ์">กาฬสินธุ์ </option>
          <option value="กำแพงเพชร">กำแพงเพชร </option>
          <option value="ขอนแก่น">ขอนแก่น</option>
          <option value="จันทบุรี">จันทบุรี</option>
          <option value="ฉะเชิงเทรา">ฉะเชิงเทรา </option>
          <option value="ชัยนาท">ชัยนาท </option>
          <option value="ชัยภูมิ">ชัยภูมิ </option>
          <option value="ชุมพร">ชุมพร </option>
          <option value="ชลบุรี">ชลบุรี </option>
          <option value="เชียงใหม่">เชียงใหม่ </option>
          <option value="เชียงราย">เชียงราย </option>
          <option value="ตรัง">ตรัง </option>
          <option value="ตราด">ตราด </option>
          <option value="ตาก">ตาก </option>
          <option value="นครนายก">นครนายก </option>
          <option value="นครปฐม">นครปฐม </option>
          <option value="นครพนม">นครพนม </option>
          <option value="นครราชสีมา">นครราชสีมา </option>
          <option value="นครศรีธรรมราช">นครศรีธรรมราช </option>
          <option value="นครสวรรค์">นครสวรรค์ </option>
          <option value="นราธิวาส">นราธิวาส </option>
          <option value="น่าน">น่าน </option>
          <option value="นนทบุรี">นนทบุรี </option>
          <option value="บึงกาฬ">บึงกาฬ</option>
          <option value="บุรีรัมย์">บุรีรัมย์</option>
          <option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์ </option>
          <option value="ปทุมธานี">ปทุมธานี </option>
          <option value="ปราจีนบุรี">ปราจีนบุรี </option>
          <option value="ปัตตานี">ปัตตานี </option>
          <option value="พะเยา">พะเยา </option>
          <option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา </option>
          <option value="พังงา">พังงา </option>
          <option value="พิจิตร">พิจิตร </option>
          <option value="พิษณุโลก">พิษณุโลก </option>
          <option value="เพชรบุรี">เพชรบุรี </option>
          <option value="เพชรบูรณ์">เพชรบูรณ์ </option>
          <option value="แพร่">แพร่ </option>
          <option value="พัทลุง">พัทลุง </option>
          <option value="ภูเก็ต">ภูเก็ต </option>
          <option value="มหาสารคาม">มหาสารคาม </option>
          <option value="มุกดาหาร">มุกดาหาร </option>
          <option value="แม่ฮ่องสอน">แม่ฮ่องสอน </option>
          <option value="ยโสธร">ยโสธร </option>
          <option value="ยะลา">ยะลา </option>
          <option value="ร้อยเอ็ด">ร้อยเอ็ด </option>
          <option value="ระนอง">ระนอง </option>
          <option value="ระยอง">ระยอง </option>
          <option value="ราชบุรี">ราชบุรี</option>
          <option value="ลพบุรี">ลพบุรี </option>
          <option value="ลำปาง">ลำปาง </option>
          <option value="ลำพูน">ลำพูน </option>
          <option value="เลย">เลย </option>
          <option value="ศรีสะเกษ">ศรีสะเกษ</option>
          <option value="สกลนคร">สกลนคร</option>
          <option value="สงขลา">สงขลา </option>
          <option value="สมุทรสาคร">สมุทรสาคร </option>
          <option value="สมุทรปราการ">สมุทรปราการ </option>
          <option value="สมุทรสงคราม">สมุทรสงคราม </option>
          <option value="สระแก้ว">สระแก้ว </option>
          <option value="สระบุรี">สระบุรี </option>
          <option value="สิงห์บุรี">สิงห์บุรี </option>
          <option value="สุโขทัย">สุโขทัย </option>
          <option value="สุพรรณบุรี">สุพรรณบุรี </option>
          <option value="สุราษฎร์ธานี">สุราษฎร์ธานี </option>
          <option value="สุรินทร์">สุรินทร์ </option>
          <option value="สตูล">สตูล </option>
          <option value="หนองคาย">หนองคาย </option>
          <option value="หนองบัวลำภู">หนองบัวลำภู </option>
          <option value="อำนาจเจริญ">อำนาจเจริญ </option>
          <option value="อุดรธานี">อุดรธานี </option>
          <option value="อุตรดิตถ์">อุตรดิตถ์ </option>
          <option value="อุทัยธานี">อุทัยธานี </option>
          <option value="อุบลราชธานี">อุบลราชธานี</option>
          <option value="อ่างทอง">อ่างทอง </option>
          <option value="อื่นๆ">อื่นๆ</option>
                      </select>
                      <div class="invalid-feedback">
                        Please provide a valid state.
                      </div>
    
                    </div>
                    {/* <!--Grid column--> */}
    
                    {/* <!--Grid column--> */}
                    <div class="col-lg-4 col-md-6 mb-4">
    
                      <label for="zip">รหัสไปรษณีย์ <small className="red-text">*</small></label>
                      <input onChange={handleAddress('postalNo')} type="text" class="form-control" id="zip" placeholder="รหัสไปรษณีย์" required/>
                      <div class="invalid-feedback">
                        Zip code required.
                      </div>
    
                    </div>
                    {/* <!--Grid column--> */}
    
                  </div>
                  {/* <!--Grid row--> */}
    
                  <hr/>
    
               
                  <hr class="mb-4"/>

                  <button class="btn btn-primary btn-lg btn-block text-center" type="submit"
                  >ทำรายการสั่งซื้อ</button>
                </form>
                {/* <PopUpWarn checkout={buy}/> */}

              </div>
              {/* <!--/.Card--> */}
    
            </div>
            {/* <!--Grid column--> */}
        </div>
      </div>
    </main>
    </form>
    </>
        )}

</>

    )
    
}




//SECTION Shopping Cart 

   

//SECTION Show message

const showError = error => (
    <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
        {error}
    </div>
);

const showSuccess = () => {
  if(data.success==true){
  return(
    <div class="alert alert-success text-center mb-4" role="alert">
        <h4>ทำรายการสั่งซื้อเรียบร้อย </h4>
  </div>

  )
  }
};

const showLoading = loading => loading && <h2 className="text-danger">กำลังโหลด...</h2>;

const exute =() =>(
    <button onClick={buy} className="btn btn-primary">ทำรายการ</button>

)

const showMessage = () => {
  if(success){
  return(
    <>
    ขอบคุณที่ทำรายการสั่งซื้อกับเรา
    </>
  )
  }else if(!success){
    return(
      <>
      รถเข็นของคุณว่างอยู่
      </>
    )
  }
}

const noItemsMessage = () => {
  if(itemtotal <=0){
  return(    
    <div>
      <h2>
      {showMessage()} <br /> 
      </h2>
      <div className="row">
<Link to="/shop/:searchResult/:search">
<br/>
<br/>
<h3>ท่านสามารถเลือกสินค้าเพิ่มเติมได้ที่นี่</h3></Link>
<br/>  


      </div>
      </div>
  );

  }else{
      return(
        <>
           {isAuthenticated() ? (
            <div>
            {showAddressForm()}
            
            {/* { exute()}  */}
            </div>
    ): (
        <Link to="/signin">
        <button className="btn btn-primary">โปรดเข้าสู่ระบบก่อน</button> 
        </Link>
    )}
        </>
      )
  }
}
    return(
        <>
          
          {showSuccess()}

          {noItemsMessage()}
    
        </>

    );
}


export default Checkout;