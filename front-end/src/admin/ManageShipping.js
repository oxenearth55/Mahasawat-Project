import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import {addShipping,getSpecificShop} from './apiAdmin'
import { isAuthenticated } from '../auth';


const ManageShipping = (props) => 
{
    const { user, token } = isAuthenticated(); //NOTE Grab use info from jwt 
    const [shippingInfo, setShippingInfo] = useState([]);
    const [shipping, setShipping] = useState ({
        providerName:'',
        shippingCost: 0,
        avilable: false
    })
    const [error,setError] = useState(false);
    const [sucess, setSuccess] = useState(false);
    const [shopInfo,setShopInfo] = useState([]);

     //SECTION useEffect
     useEffect(() => {
        const shopId = props.match.params.shopId;
        getShopInfo(shopId);
    }, []);


// NOTE get the shop from backend
const getShopInfo = shopId => {
    getSpecificShop(shopId).then(data => {
        if (data.error) {
            setError(true)
        } else {
        
         setShopInfo(data);
         setShippingInfo(data.shipping);
        }
    });
};

// SECTION Update Form 
const handleChange = name => event => {

    setShipping({ ...shipping, [name]: event.target.value });

  };

  const clickSubmit = event => {
    event.preventDefault();
    addShipping(shopInfo._id,user._id,token, {shipping}).then(data => {
        if (data.error) {
            // console.log(data.error);
            alert(data.error);
        } else {              
                // setBankinfo({
                //     ...bankinfo,
                //     personName: data.personName,
                //     bankName: data.bankName,                     
                //     accountNumber: data.accountNumber
                // });
                setSuccess(true);
        }
    });
};

const addProviderForm = () => (
    <form onSubmit={clickSubmit}>
        <h3>เพิ่มตัวเลือกการขนส่ง</h3>
        <div className="form-group">
            <label className="text-muted">ชื่อผู้ให้บริการ</label>
            <input type="text" onChange={handleChange('providerName')} className="form-control"  />
        </div>
        <div className="form-group">
            <label className="text-muted">ราคา</label>
            <input type="text" onChange={handleChange('shippingCost')} className="form-control" />
        </div>


        <button  className="btn btn-primary">
            ยืนยัน
        </button>
    </form>
);

const dropdowns = (res) =>{
    
    if(res.avilable == true){
    return(
        <>
        <select onChange={handleChange('avilable')} className="form-control" >
                    <option value={true}>ใช้</option>
                    <option value={false}>ไม่ใช้</option>
        </select>
        </>
    )
    }else if(res.avilable == false){
        return(
            <>

            </>
        )
    }
}

const displayProvider = (res) => {
    return(

        <>
  <div class="form-row my-5">
    <div class="col-md-2 mb-3 mr-3">
      <label for="validationDefault01">ชื่อผู้ให้บริการ</label>
      <input type="text" onChange={handleChange('providerName')} class="form-control" id="validationDefault01" placeholder="ชื่อ" value={res.providerName}
        required/>
    </div>
   
    <div class="col-md-2 mb-3 mx-5">
      <label for="validationDefault01">ราคาเหมาจ่าย</label>
      <input type="number" onChange={handleChange('shippingCost')} class="form-control" id="validationDefault01" placeholder="ราคา" value={res.shippingCost}
        required/>
    </div>

    <div class="col-md-1 mb-3 mx-5">
    <label for="validationDefault01">การนำไปใช้</label>

    <select onChange={handleChange('avilable')} className="form-control" >
                    <option value={res.avilable}>ไม่ใช้</option>
                    <option value={true}>ใช้</option>

                   
                </select>
         </div>

    <hr/>
  </div>
 


        </>
    )
} 

    return(
        <>
          <Layout
            title="Manage Shipping"
            description={`คุณสามารถจัดการค่าจัดส่งได้ที่นี่`}
            className="container-fluid"
            headerImg="dashBoardImgLayout"

        >

<div className="container">

            {addProviderForm()}
          
            <form className="mt-5" onSubmit={clickSubmit}> 

        {shippingInfo.map((res,index) => (
            <>
            {displayProvider(res)}
            </>
        ))}
            <button class="btn btn-primary btn-sm " type="submit">อัพเดท</button>
            
            </form>
            </div>
        </Layout>


        </>
    )
}
export default ManageShipping