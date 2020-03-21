import React, { useState, useEffect } from 'react';
import { getProducts, processPayment, createOrder } from './apiCore';
import { emptyCart } from './cartHelpers';
import Card from './Card';
import { Link } from 'react-router-dom';
import {isAuthenticated} from '../auth'; 



// SECTION state to handle braintree
const Checkout = (
    {products, 
        nabuaProducts,
        fakkhawProducts,
        nabuaTotal,
        fakkhawTotal,
    setRun = f => f, 
    run = undefined




}) => {
    const [data, setData] = useState({
        loading: false,
        success: false, 
        // clientToken: null, 
        error: '', 
        instance: {},
        address: ""
    });

    const [createOrderData,setCreateOrderData] =useState({
        products:[],
        amount: ''

    })

    useEffect(() => {
        setCreateOrderData(nabuaProducts,nabuaTotal)
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




const buy = () => {

if(nabuaProducts.lenght !=0){
    const createOrderData ={ //NOTE keep it as Object before storing in Datase
        products: nabuaProducts,
        amount: nabuaTotal,
        shop:'5e6a17a35c566806d6a101dd',
        address: customerAddress
    };

    createOrder(user._id, token, createOrderData).then(data => {
        if (data.error) {
            setData({ ...data, error: data.error });
        } else {

            setData({...data, success: data.success}) 


        }
    });

}


if(fakkhawProducts.lenght !=0){
    const createOrderData ={ //NOTE keep it as Object before storing in Datase
        products: fakkhawProducts,
        amount: fakkhawTotal,
        shop:'5e6a17ac5c566806d6a101de',
        address: customerAddress
    };

    createOrder(user._id, token, createOrderData).then(data => {
        if (data.error) {
            setData({ ...data, error: data.error });
        } else {

            setData({...data, success: data.success}) 


        }
    });
}

//  NOTE After finished create order, remove every thing on cart page by default
emptyCart(()=>{
    setRun(!run);                
    setData({
        loading: false,
        success: true

    });
}) 

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
const handleAddress = event => {
    setCustomerAddress(event.target.value );
};

const showAddressForm = () => {
    return(
        <>
       
    
    //   {/* // <!--Main layout--> */}
      <main class="mt-5 pt-4">
        <div class="container wow fadeIn">
    
          {/* <!-- Heading --> */}
          <h2 class="my-5 h2 text-center">Checkout form</h2>
    
          {/* <!--Grid row--> */}
          <div class="row">
    
            {/* <!--Grid column--> */}
            <div class="col-md-8 mb-4">
    
              {/* <!--Card--> */}
              <div class="card">
    
                {/* <!--Card content--> */}
                <form class="card-body">
    
                  {/* <!--Grid row--> */}
                  <div class="row">
    
                    {/* <!--Grid column--> */}
                    <div class="col-md-6 mb-2">
    
                      {/* <!--firstName--> */}
                      <div class="md-form ">
                        <input type="text" id="firstName" class="form-control"/>
                        <label for="firstName" class="">First name</label>
                      </div>
    
                    </div>
                    {/* <!--Grid column--> */}
    
                    {/* <!--Grid column--> */}
                    <div class="col-md-6 mb-2">
    
                      {/* <!--lastName--> */}
                      <div class="md-form">
                        <input type="text" id="lastName" class="form-control"/>
                        <label for="lastName" class="">Last name</label>
                      </div>
    
                    </div>
                    {/* <!--Grid column--> */}
    
                  </div>
                  {/* <!--Grid row--> */}
    
            
                  {/* <!--email--> */}
                  <div class="md-form mb-5">
                    <p for="email" class="">Email (optional)</p>
                    <input type="text" id="email" class="form-control" placeholder="youremail@example.com"/>
    
                  </div>
    
                  {/* <!--address--> */}
                  <div class="md-form mb-5">
                  <p for="address" class="">Address</p>
                  <input type="text" id="address" class="form-control" placeholder="1234 Main St"/>
                  </div>
                  <div class="md-form mb-5">
                  <p for="address" class="">Phone Number</p>
                  <input type="text" id="phone" class="form-control" placeholder="08X-"/>
                  </div>
            
    
                  {/* <!--Grid row--> */}
                  <div class="row">
    
                   
    
                    {/* <!--Grid column--> */}
                    <div class="col-lg-4 col-md-6 mb-4">
    
                      <label for="state">State</label>
                      <select class="custom-select d-block w-100" id="state" required>
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
    
                      <label for="zip">Zip</label>
                      <input type="text" class="form-control" id="zip" placeholder="" required/>
                      <div class="invalid-feedback">
                        Zip code required.
                      </div>
    
                    </div>
                    {/* <!--Grid column--> */}
    
                  </div>
                  {/* <!--Grid row--> */}
    
                  <hr/>
    
               
                  <hr class="mb-4"/>
                  <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
    
                </form>
    
              </div>
              {/* <!--/.Card--> */}
    
            </div>
            {/* <!--Grid column--> */}
        </div>
      </div>
    </main>
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

const showSuccess = success => (
    <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
        Thanks! Your Order was successful!
    </div>
);

const showLoading = loading => loading && <h2 className="text-danger">Loading...</h2>;

const exute =() =>(
    <button onClick={buy} className="btn btn-primary">Checkout</button>

)

    return(
        <div>
            {/* {showError(data.error)} */}
            {/* {showSuccess(data.success)} */}
            {/* {showLoading(data.loading)} */}
            {/* <h2>Total: ${getTotal()}</h2> */}

     
           {isAuthenticated() ? (
            <div>{ exute()} </div>
    ): (
        <Link to="/signin">
        <button className="btn btn-primary">Please, Sign in to Checkout</button> 
        </Link>
    )}
    
        </div>

    );
}


export default Checkout;

