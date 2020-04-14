import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import {addShipping,getSpecificShop} from './apiAdmin'
import { isAuthenticated } from '../auth';


const ManageShipping = (props) => 
{
    const { user, token } = isAuthenticated(); //NOTE Grab use info from jwt 
    const [shippingInfo, setShippingInfo] = useState([]);
   
    const [error,setError] = useState(false);
    const [sucess, setSuccess] = useState(false);
    const [shopInfo,setShopInfo] = useState([]);



    //SECTION STATE of Shipping Provider 

    const [shippingProvider1, setShippingProvider1] = useState ({
        providerName:'',
        shippingCost: 0,
        avilable: false
    })

    const [shippingProvider2, setShippingProvider2] = useState ({
        providerName:'',
        shippingCost: 0,
        avilable: false
    })

    const [shippingProvider3, setShippingProvider3] = useState ({
        providerName:'',
        shippingCost: 0,
        avilable: false
    })

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
         setShippingProvider1({...shippingProvider1,

            providerName:data.shippingProvider1.providerName,
            shippingCost:data.shippingProvider1.shippingCost,
            avilable:data.shippingProvider1.avilable
        
        })

        setShippingProvider2({...shippingProvider2,

            providerName:data.shippingProvider2.providerName,
            shippingCost:data.shippingProvider2.shippingCost,
            avilable:data.shippingProvider2.avilable
        
        })

        setShippingProvider3({...shippingProvider3,

            providerName:data.shippingProvider3.providerName,
            shippingCost:data.shippingProvider3.shippingCost,
            avilable:data.shippingProvider3.avilable
        
        })





        }
    });
};

// SECTION Update Form 

//NOTE grab info from service provider 1
const handleChange1 = name => event => {

    setShippingProvider1({ ...shippingProvider1, [name]: event.target.value });

  };

  //NOTE grab info from service provider 2

  const handleChange2 = name => event => {

    setShippingProvider2({ ...shippingProvider2, [name]: event.target.value });

  };

  //NOTE grab info from service provider 3

  const handleChange3 = name => event => {

    setShippingProvider3({ ...shippingProvider3, [name]: event.target.value });

  };

  //NOTE SUBMIT update for service provider1
  const clickSubmit1 = event => {
    event.preventDefault();
    addShipping(shopInfo._id,user._id,token, {shippingProvider1}).then(data => {
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

  //NOTE SUBMIT update for service provider1

const clickSubmit2 = event => {
    event.preventDefault();
    addShipping(shopInfo._id,user._id,token, {shippingProvider2}).then(data => {
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

  //NOTE SUBMIT update for service provider1

const clickSubmit3 = event => {
    event.preventDefault();
    addShipping(shopInfo._id,user._id,token, {shippingProvider3}).then(data => {
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









// const addProviderForm = () => (
//     <form onSubmit={clickSubmit}>
//         <h3>เพิ่มตัวเลือกการขนส่ง</h3>
//         <div className="form-group">
//             <label className="text-muted">ชื่อผู้ให้บริการ</label>
//             <input type="text" onChange={handleChange('providerName')} className="form-control"  />
//         </div>
//         <div className="form-group">
//             <label className="text-muted">ราคา</label>
//             <input type="text" onChange={handleChange('shippingCost')} className="form-control" />
//         </div>


//         <button  className="btn btn-primary">
//             ยืนยัน
//         </button>
//     </form>
// );

// const dropdowns = (res) =>{
    
//     if(res.avilable == true){
//     return(
//         <>
//         <select onChange={handleChange('avilable')} className="form-control" >
//                     <option value={true}>ใช้</option>
//                     <option value={false}>ไม่ใช้</option>
//         </select>
//         </>
//     )
//     }else if(res.avilable == false){
//         return(
//             <>

//             </>
//         )
//     }
// }

const showAvalible = (res) => {
    
    if(res == true){
   return( 
    <>
    <p>กำลังใช้งาน</p>
    </>
   )
    } if(res == false){
     return(
     <>
     <br/>
    ไม่ใช้งาน
     </>
     )
    }
}





const displayProvider1 = () => {
    return(

        <>
              <h5>ผู้ให้บริการ1</h5>

  <div class="form-row mb-5 mt-2">
    <div class="col-md-2 mb-3 mr-3">
      <label for="validationDefault01">ชื่อผู้ให้บริการ</label>
      <input type="text" onChange={handleChange1('providerName')} class="form-control" id="validationDefault01" placeholder="ชื่อ" value={shippingProvider1.providerName}
        required/>
    </div>
   
    <div class="col-md-2 mb-3 mx-5">
      <label for="validationDefault01">ราคาเหมาจ่าย</label>
      <input type="number" onChange={handleChange1('shippingCost')} class="form-control" id="validationDefault01" placeholder="ราคา" value={shippingProvider1.shippingCost}
        required/>
    </div>

    <div class="col-md-1 mb-3 mx-5">
    <label for="validationDefault01">การนำไปใช้</label>

    <select onChange={handleChange1('avilable')} className="form-control" >
    <option >เลือกสถานะ</option>
                    <option value={false}>ไม่ใช้</option>
                    <option value={true}>ใช้</option>

    </select>

   


         </div>

         <div class="col-md-2 mb-2 mx-5 mt-4">
      <label for="validationDefault01">สถานะ: </label>

        {showAvalible(shippingProvider1.avilable)}
    
    </div>
         <button onClick={clickSubmit1} class="btn btn-primary btn-sm px-3 my-3" type="submit">อัพเดท</button>

  </div>
 
  <hr/>


        </>
    )
} 

const displayProvider2 = () => {
    return(

        <>
                <h5>ผู้ให้บริการ2</h5>

  <div class="form-row mb-5 mt-2">
    <div class="col-md-2 mb-3 mr-3">
      <label for="validationDefault01">ชื่อผู้ให้บริการ</label>
      <input type="text" onChange={handleChange2('providerName')} class="form-control" id="validationDefault01" placeholder="ชื่อ" value={shippingProvider2.providerName}
        required/>
    </div>
   
    <div class="col-md-2 mb-3 mx-5">
      <label for="validationDefault01">ราคาเหมาจ่าย</label>
      <input type="number" onChange={handleChange2('shippingCost')} class="form-control" id="validationDefault01" placeholder="ราคา" value={shippingProvider2.shippingCost}
        required/>
    </div>

    <div class="col-md-1 mb-3 mx-5">
    <label for="validationDefault01">การนำไปใช้</label>

    <select onChange={handleChange2('avilable')} className="form-control" >
    <option >เลือกสถานะ</option>
                    <option value={false}>ไม่ใช้</option>
                    <option value={true}>ใช้</option>

    </select>


         </div>

         <div class="col-md-2 mb-2 mx-5 mt-4">
      <label for="validationDefault01">สถานะ: </label>

        {showAvalible(shippingProvider2.avilable)}
    
    </div>
         <button onClick={clickSubmit2} class="btn btn-primary btn-sm px-3 my-3" type="submit">อัพเดท</button>

  </div>
  <hr/>



        </>
    )
} 


const displayProvider3 = () => {
    return(

        <>
              <h5>ผู้ให้บริการ3</h5>

  <div class="form-row mb-5 mt-2">
    <div class="col-md-2 mb-3 mr-3">
      <label for="validationDefault01">ชื่อผู้ให้บริการ</label>
      <input type="text" onChange={handleChange3('providerName')} class="form-control" id="validationDefault01" placeholder="ชื่อ" value={shippingProvider3.providerName}
        required/>
    </div>
   
    <div class="col-md-2 mb-3 mx-5">
      <label for="validationDefault01">ราคาเหมาจ่าย</label>
      <input type="number" onChange={handleChange3('shippingCost')} class="form-control" id="validationDefault01" placeholder="ราคา" value={shippingProvider3.shippingCost}
        required/>
    </div>

    <div class="col-md-1 mb-3 mx-5">
    <label for="validationDefault01">การนำไปใช้</label>

    <select onChange={handleChange3('avilable')} className="form-control" >
    <option >เลือกสถานะ</option>
                    <option value={false}>ไม่ใช้</option>
                    <option value={true}>ใช้</option>

    </select>


         </div>

         <div class="col-md-2 mb-2 mx-5 mt-4">
      <label for="validationDefault01">สถานะ: </label>

        {showAvalible(shippingProvider3.avilable)}
    
    </div>
         <button onClick={clickSubmit3} class="btn btn-primary btn-sm px-3 my-3 " type="submit">อัพเดท</button>

  </div>
  <hr/>



        </>
    )
} 


const showSuccess = () => {
    if(sucess){
        getShopInfo();
        return(
            <>
            <div class="alert alert-success text-center" role="alert">
            อัพเดทสำเร็จ โปรดรีเฟรชเพื่อดูการเปลี่ยนแปลง
            </div>
            </>
        )
    }
}




    return(
        <>
          <Layout
            title="การดูแลการขนส่ง"
            description={`คุณสามารถจัดการค่าจัดส่งได้ที่นี่`}
            className="container-fluid"
            headerImg="dashBoardImgLayout"

        >

<div className="container">

<h3 className="text-center mb-5">การให้บริการขนส่ง</h3>
{showSuccess()}
          {displayProvider1()}
          {displayProvider2()}
          {displayProvider3()}


            </div>
        </Layout>


        </>
    )
}
export default ManageShipping