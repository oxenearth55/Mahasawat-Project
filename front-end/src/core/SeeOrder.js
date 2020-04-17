import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { uploadSlip } from "../admin/apiAdmin";
import moment from "moment";
import waiting from './Logo/waiting.png'
import confirm from './Logo/confirmation.png'
import packaging from './Logo/packaging.png'
import delivery from './Logo/delivery.png'
import {readOrder} from './apiCore'
import PopUpBank from '../core/PopUpBank'
import {getSpecificShop} from '../admin/apiAdmin'




const SeeOrder = (props) => {

    const { user, token } = isAuthenticated();
    const [slip,setSlip] =useState('');
    const [error,setError] =useState('');
    const [success,setSuccess] =useState(false);
    const [order,setOrder] =useState([]);
    const [products, setProducts] =useState([]);
    const [address , setAddress] = useState([]);
    const [empty , setEmpty] = useState(true);
    const [shopInfo,setShopInfo] = useState([]);
    const [bankAccount, setBankAccount] = useState([]);
    const [shippingProvider,setShippingProvider] = useState([]);


//NOTE Calculate Total price (Shop cost and total product price)
// const [amount, setAmount] = useState(0)
// const [shipCost, setShipCost] = useState(0)
// const Total = amount + shipCost;

    const [values, setValues] = useState({    
        photo: '',    
        error: '',
        formData: ''
    });

    const {photo,formData,} =  values; 

     // NOTE get the shop from backend
     const getShopInfo = shopId => {
        getSpecificShop(shopId).then(data => {
            if (data.error) {
                setError(true)
            } else {
                // populate the state
                setShopInfo(data)
                setBankAccount(data.bankAccount)
               
            }
        });
    };

    //NOTE use to check if shop confirm shiping cost or not
    const showConfirm = () => {
        // if(order.shippingConfirm==false){
        // return(
        //     <div className="alert alert-warning" role="alert">
        //     <h5 className="text-center">รอการยืนยันค่าส่งจากทางร้าน</h5>
        //     </div>
        // )
        // }
        
        
            return(
                <>
                {checkUpLoad()}
                {showBankAccount()}
                {showUpSlip()}
                </>
            )
        

    }
    


    const checkUpLoad = () =>
    {
        
        
        if(success){
        // setEmpty(false);
        return(
        
        <>
        <div className="alert alert-success" role="alert">
            <h5 className="text-center ">อัพโหลดการยืนยันรายการสำเร็จ</h5>
        </div>
        </>)
        }else if(empty&& !order.photo &&order.upload==false){
            return(
        <div className="alert alert-primary" role="alert">
            <h5 className="text-center ">กรุณาอัพโหลดสลิป</h5>
        </div>

            )
        }else if(order.upload == true){
            return(
            <div className="alert alert-success" role="alert">
                <h5 className="text-center ">คุณอัพโหลดรายการนี้ไปแล้ว</h5>
            </div>
            );
        }
    }


    const showUpSlip = () =>
(
    <form className="mb-3" onSubmit={clickSubmit}>
           <label className="btn btn-outline-info waves-effect">
    <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
            </label>
    {/* <input onChange={handleChange('address')} type="text" className="form-control"  /> */}

    <button className="btn btn-outline-primary"><span><i class="fas fa-upload mr-2" aria-hidden="true"></i>Upload Slip</span></button>

</form>

)

const clickSubmit = event =>{
    event.preventDefault();
if(!empty){
    uploadSlip(order._id,user._id, token, formData).then(data => {
        if (data.error) {
            setError(data.error);
        } else {
            setSuccess(true);
}
    })
}else{
    setEmpty(true)
}
}
const handleChange = name => event => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
    if(name === 'photo'){
        setEmpty(false)
        formData.set('upload', true);
    }

    console.log('Shop id is'+bankAccount.name)


}

    const loadOrder = orderId => {
        //NOTE Get orders from backend
        readOrder(orderId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setOrder(data)
                setProducts(data.products)
                setAddress(data.address)
                setShippingProvider(data.shippingProvider)
                setValues({
                    ...values,                   
                    formData: new FormData()
                    
                });
                getShopInfo(data.shop)
                // setAmount(data.amount)
                // setShipCost(data.shippingCost)
              

            }
        });
    };


    useEffect(() => {
        const orderId = props.match.params.orderId;
        loadOrder(orderId);
       
    }, []);


   

    //SECTION order status Icon

    const statusIcon = (orderStatus) => { 

            if(orderStatus === 'รอยืนยันรายการ' || orderStatus === 'เลือกอัพเดทสถานะที่นี่'){
                return (

                    <div className="container-fluid border  border-dark ">
                       
                        <div className="row mt-4"> 
                                <div className="col-3 text-center ">
                                    <img className ="logo order-status-icon" src={waiting}></img>
                                    <p className="order-status-text">รอยืนยันรายการ</p>
                                </div>

                                <div className="col-3 text-center">
                                    <img className ="logo ml-4 unStatus order-status-icon order-confirm-icon" src={confirm}></img>
                                    <p className="unStatus order-status-text ">ยืนยันรายการเรียบร้อย</p>
                                </div>    

                                <div className="col-3 text-center">
                                    <img className ="logo unStatus order-status-icon" src={packaging}></img>
                                    <p className="unStatus order-status-text">กำลังจัดสินค้า</p>
                                </div>    

                                <div className="col-3 text-center">
                                    <img className ="logo unStatus order-status-icon" src={delivery}></img>
                                    <p className="unStatus order-status-text">กำลังขนส่ง</p>
                                </div>        

                        </div>
                    </div>
                )
            }else if(orderStatus === 'ยืนยันรายการเรียบร้อย'){
                return (
                    <div className="container-fluid border  border-dark">
                       
                    <div className="row mt-4"> 
                            <div className="col-3 text-center">
                                <img className ="logo unStatus order-status-icon" src={waiting}></img>
                                <p className="unStatus order-status-text">รอยืนยันรายการ</p>
                            </div>

                            <div className="col-3 text-center">
                                <img className ="logo ml-4 order-status-icon order-confirm-icon" src={confirm}></img>
                                <p className="order-status-text">ยืนยันรายการเรียบร้อย</p>
                            </div>    

                            <div className="col-3 text-center">
                                <img className ="logo unStatus order-status-icon" src={packaging}></img>
                                <p className="unStatus order-status-text">กำลังจัดสินค้า</p>
                            </div>    

                            <div className="col-3 text-center">
                                <img className ="logo unStatus order-status-icon" src={delivery}></img>
                                <p className="unStatus order-status-text">กำลังขนส่ง</p>
                            </div>        

                    </div>
                </div>
                )

            }else if(orderStatus === 'กำลังจัดสินค้า'){
                return (
                    <div className="container-fluid border  border-dark">
                       
                    <div className="row mt-4"> 
                            <div className="col-3 text-center">
                                <img className ="logo unStatus order-status-icon" src={waiting}></img>
                                <p className="unStatus order-status-text">รอยืนยันรายการ</p>
                            </div>

                            <div className="col-3 text-center">
                                    <img className ="logo ml-4 unStatus order-status-icon order-confirm-icon" src={confirm}></img>
                                    <p className="unStatus order-status-text ">ยืนยันรายการเรียบร้อย</p>
                                </div>    

                            <div className="col-3 text-center">
                                <img className ="logo  order-status-icon" src={packaging}></img>
                                <p className=" order-status-text">กำลังจัดสินค้า</p>
                            </div>    

                            <div className="col-3 text-center">
                                <img className ="logo unStatus order-status-icon" src={delivery}></img>
                                <p className="unStatus order-status-text">กำลังขนส่ง</p>
                            </div>        

                    </div>
                </div>
                )

            }else if(orderStatus === 'กำลังขนส่ง'){
                return (
                    <div className="container-fluid border  border-dark">
                       
                    <div className="row mt-4"> 
                            <div className="col-3 text-center">
                                <img className ="logo unStatus order-status-icon " src={waiting}></img>
                                <p className="unStatus order-status-text">รอยืนยันรายการ</p>
                            </div>

                            <div className="col-3 text-center">
                                <img className ="logo ml-4 unStatus order-status-icon order-confirm-icon" src={confirm}></img>
                                <p className="unStatus order-status-text">ยืนยันรายการเรียบร้อย</p>
                            </div>    

                            <div className="col-3 text-center">
                                <img className ="logo unStatus order-status-icon" src={packaging}></img>
                                <p className="unStatus order-status-text">กำลังจัดสินค้า</p>
                            </div>    

                            <div className="col-3 text-center">
                                <img className ="logo order-status-icon" src={delivery}></img>
                                <p className="order-status-text" >กำลังขนส่ง</p>
                            </div>        

                    </div>
                </div>
                )
            }



        }

         // NOTE Reuse these style for each products in Order
    const showInput = (key, value) => (
        <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
                <div className="input-group-text">{key}</div>
            </div>
            <input
                type="text"
                value={value}
                className="form-control"
                readOnly
            />
        </div>
    );
    
    // const showPrice = () => {
    //     if(order.shippingConfirm == false){
    //         return(
    //             <>
    //             {amount}
    //             </>
    //         )
    //     }else{
    //         return(
    //             <>
    //             {Total}
    //             </>
    //         )
    //     }
    // }

    const showOrders = () => (
        

             //NOTE use this condition to match which order came from this user
             // orders contains properties such as user Object 
             // Inside user object contain _id as a property 
         <>
                <div
                    className="mt-5"
                    
                    style={{ borderBottom: "5px solid indigo" }}
                >
                    {/* <button onClick={clickSubmit} class="btn btn-primary btn-lg btn-block" type="submit">Upload Slip</button> */}

                    <h2 className="mb-5">
                        <span>
                            <div className="row">
                           <div className="border text-white bg-dark order-id-title"> เลขรายการของคุณ : </div>
                            <div className="col-5  order-id">{order._id}
                            </div>
                            </div>
                        </span>
                        
                    </h2>
                    <h4 className="mb-4">สถานะการสั่งซื้อ</h4>
                    {statusIcon(order.status)}
                    


                    <ul className="list-group mt-4 mb-2">
                        <li className="list-group-item text-white bg-dark ">
                            <h3 className="text-center ">รายละเอียด </h3>
                        </li>
                        
                        <li className="list-group-item">
                                ราคาทั้งหมด: ฿ {order.amount}
                            </li>


                            <li className="list-group-item">
                                ขนส่งด้วย: {shippingProvider.providerName}
                            </li>

                            <li className="list-group-item">
                                ค่าขนส่ง: ฿ {shippingProvider.shippingCost}
                            </li>

                        
                            
                
                           
                        <li className="list-group-item">
                        รายการของ: {user.name}
                        </li>
                        <li className="list-group-item">
                        สั่งเมื่อ:{" "}
                            {/* NOTE  use moment to format the date */}
                            {moment(order.createdAt).fromNow()} 
                        </li>
                       
                    </ul>

                    <h3 className="mt-4 mb-4 font-italic">
                    รายการสินค้าทั้งหมด:{" "}
                        {products.length}
                    </h3>

                    {products.map((p, pIndex) => (
                        <div
                            className="mb-4 "
                            key={pIndex}
                            style={{
                                padding: "20px",
                                border: "1px solid indigo"
                            }}
                        >
                            
                            {showInput("ชื่อสินค้า", p.name)}
                            {showInput("ราคา", p.price)}
                            {showInput("จำนวน", p.count)}
                                      

                        </div>
                    ))}
                </div>
   
        </>
        
     


    );


const showAddress = () => (
       <>
 <h4 className="mt-4">ที่อยู่ของคุณ</h4>
<div className="mb-4 mt-4" style={{  padding: "20px",border: "1px solid indigo"}}
                            >
{showInput("ชื่อ-สกุล",address.name )}
{showInput("เบอร์ติดต่อ",address.phoneNumber )}
{showInput("บ้านเลขที่",address.houseNumber )}
{showInput("หมู่บ้าน",address.village)}
{showInput("ซอย",address.streetName)}
{showInput("ถนน",address.lane)}
{showInput("ตำบล",address.subDistrict)}
{showInput("อำเภอ",address.district)}
{showInput("จังหวัด",address.province)}
{showInput("รหัสไปรษณี",address.postalNo)}

</div>
</>
    );

    const showBankAccount = () =>{
        return(<>
        
        <button data-toggle="modal" data-target="#centralModalInfo" 
        class="btn btn-orange">โอนเงินไปที่ 
        <i class="fas  fa-university pl-1"></i>
        
        </button>

        <PopUpBank Total= {order.amount} bank={bankAccount} shopId={shopInfo}/>
        
        </>)
    }


    const showShopName = () =>(
        <div className="bg-dark border py-2 mb-3 t">
            <h3 className="text-center text-white">  {shopInfo.name}
</h3>

       

        </div>
    )

    return(
        <Layout
            title="รายการสั่งซื้อของคุณ"
            description={`คุณสามารถอัพโหลดหลักฐานการโอนเงิน และดูรายละเอียดการสั่งซื้อได้ที่นี่`}
            className="container-fluid"
            headerImg="dashBoardImgLayout"
        > 
            {showShopName()}
            {showConfirm()}
            {showOrders()}
            {showAddress()}
            {/* {showStatus()} */}

        </Layout>

    );
        };

export default SeeOrder;