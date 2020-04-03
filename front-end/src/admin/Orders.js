import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { listOrders, getStatusValues, updateOrderStatus } from "./apiAdmin";
import moment from "moment";
import {readOrder} from '../core/apiCore'
import PopUpSlip from '../core/PopUpSlip'
import { uploadSlip } from "./apiAdmin";



const Orders = ({match}) => {
    const [order, setOrder] = useState([]);
    const [products, setProducts] = useState([]);
    const [statusValues, setStatusValues] = useState([]);
  
    const { user, token } = isAuthenticated();

    const [address , setAddress] = useState([]);
    const [photo , setPhoto] = useState([]);
    
    //NOTE checkibng already update shipping cost or not
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    //NOTE Calculate Total price (Shop cost and total product price)
    const [amount, setAmount] = useState(0)
    const [shipCost, setShipCost] = useState(0)
    const Total = amount + shipCost;



    //NOTE FormData
    const [values, setValues] = useState({    
        costShipping: '',       
        formData: ''
    });

    const {costShipping,formData} =  values; 

const showCostInput = () => {
    if(order.shippingConfirm==false && !success){
        return(
            <>
            <div className="alert alert-warning" role="alert">
            <h5 className="text-center">กรุณาใส่ค่าส่งสินค้า</h5>
            </div>
            {inputCost()}
            </>
        )

        
    }else if(success){
       return(
       <div className="alert alert-success" role="alert">
            <h5 className="text-center">ระบบได้ส่งค่าส่งให้ลูกค้าเรียบร้อย</h5>
        </div>
       )

    }
}

    const inputCost = () => (
    <form className="mb-3" onSubmit={clickSubmit} >
            
            <div className="row">

            <div className="col-3">
                <input type="number" onChange={handleChange('shippingCost')} id="exampleForm2" class="form-control"/>
            </div>

            <div className="col-6">

    <button className="btn btn-outline-primary"><span><i class="fas fa-upload mr-2" aria-hidden="true"></i>ยืนยัน</span></button>
    </div>
    </div>

    </form>
    )

    const clickSubmit = event =>{
        event.preventDefault();   
        uploadSlip(order._id,user._id, token, formData).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setSuccess(true);
              }
        })
    
    }

    const handleChange = name => event => {       
        formData.set(name, event.target.value);
        formData.set('shippingConfirm', true);
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
                setPhoto(data.photo)
                setValues({
                    ...values,                   
                    formData: new FormData()
                    
                });
                setAmount(data.amount)
                setShipCost(data.shippingCost)
              

            }
        });
    };

    //NOTE load status from order  
    const loadStatusValues = () => {
        getStatusValues(user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setStatusValues(data);
            }
        });
    };

    useEffect(() => {
        loadOrder(match.params.orderID);
        loadStatusValues();
        // setAddress({...address, lastName:order.address.lastName})
        console.log('photo is '+photo.contentType)

    }, []);

   

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

    //NOTE orderId is used to check which order that we're going to set status
    const handleStatusChange = (e) => {
        updateOrderStatus(user._id, token, order._id, e.target.value).then(
            data => {
                if (data.error) {
                    console.log("Status update failed");
                } else {
                    console.log('photo is '+order.photo)

                }
            }
        );
    };

    const showStatus = ()=> (
        <div className="form-group">
            <h3 className="mark mb-4">Status: {order.status}</h3>
            <select
                className="form-control"
                onChange={e => handleStatusChange(e,order._id)}
            >
                <option>เลือกอัพเดทสถานะที่นี่</option>
                {statusValues.map((status, index) => (
                    <option key={index} value={status}>
                        {status}
                    </option>
                ))}
            </select>
        </div>
    );

    
    const showPrice = () => {
        if(order.shippingConfirm == false){
            return(
                <>
                {amount}
                </>
            )
        }else{
            return(
                <>
                {Total}
                </>
            )
        }
    }

    const showOrder = () => (
        <div className="row">
        <div className="col-md-8 offset-md-2">
         
                    <div
                        className="mt-5"
                        style={{ borderBottom: "5px solid indigo" }}
                    >
                       <h2 className="mb-5">
                        <span>
                            <div className="row">
                           <div className="border text-white bg-dark order-id-title">เลขรายการ: </div>
                            <div className="col-5  order-id">{order._id}</div>
                            </div>
                        </span>
                        </h2>

                        <ul className="list-group mb-2">
                            <li className="list-group-item">
                                {showStatus()}
                            </li>

                            <li className="list-group-item">
                                ราคาสินค้า: ฿ {amount}
                            </li>

                            <li className="list-group-item">
                                ราคาค่าส่ง: ฿ {order.shippingCost} 
                            </li>
                         
                            
                
                            <li className="list-group-item">
                                ราคาทั้งหมด: ฿ {showPrice()}
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
                                className="mb-4"
                                key={pIndex}
                                style={{
                                    padding: "20px",
                                    border: "1px solid indigo"
                                }}
                            >
                                {showInput("ชื่อสินค้า", p.name)}
                                {showInput("ราคาสินค้า", p.price)}
                                {showInput("จำนวน", p.count)}
                                {showInput("รหัสสินค้า", p._id)}

                            </div>


                        ))}
                       
        </div>
       
                    </div>
    </div>


    )

    const showAddress = () => (
        <>
 <h4 className="mt-4">ที่อยู่ของลูกค้า</h4>
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
    )

    const showSlip = () =>
    {
        if(order.upload == true && order.shippingConfirm==true){
        return(
        <>
            <div className="alert alert-success" role="alert">

                <h5 className="text-center order-aleart-slip">ลูกค้าท่านนี้อัพโหลดหลักฐานการโอนเงินเรียบร้อยแล้ว</h5>
            </div>
            <button class="btn btn-outline-cyan btn-block" data-toggle="modal" data-target="#centralModalInfo">
                See slip<i class="fas fa-image pl-1"></i>
            </button>
            <PopUpSlip order = {order}/>
        </>
        )
        }else if(order.upload ==false &&order.shippingConfirm==true){
            return(
                <>
                    <div className="alert alert-warning" role="alert">
                        <h5 className="text-center">ลูกค้าท่านนี้ยังไม่ได้อัพโหลดหลักฐานการโอนเงิน</h5>
                    </div>
                </>

            )

        }
    }

    return (
        <Layout
            title="Orders"
            description={`G'day ${
                user.name
            }, you can manage all the orders here`}
            className="container-fluid"
            headerImg="dashBoardImgLayout"
        >
            {showCostInput()}
           {showSlip()}
           {showOrder()}
         
           {showAddress()}

           
             </Layout>
    );
};

export default Orders;
