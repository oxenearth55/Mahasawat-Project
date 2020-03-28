import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { listOrders, getStatusValues, updateOrderStatus } from "./apiAdmin";
import moment from "moment";
import {readOrder} from '../core/apiCore'
import PopUpSlip from '../core/PopUpSlip'


const Orders = ({match}) => {
    const [order, setOrder] = useState([]);
    const [products, setProducts] = useState([]);
    const [statusValues, setStatusValues] = useState([]);
  
    const { user, token } = isAuthenticated();

    const [address , setAddress] = useState([]);
    const [photo , setPhoto] = useState([]);


    

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
                <option>Not processed</option>
                {statusValues.map((status, index) => (
                    <option key={index} value={status}>
                        {status}
                    </option>
                ))}
            </select>
        </div>
    );

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
                           <div className="border text-white bg-dark order-id-title">Order ID: </div>
                            <div className="col-5  order-id">{order._id}</div>
                            </div>
                        </span>
                        </h2>

                        <ul className="list-group mb-2">
                            <li className="list-group-item">
                                {showStatus()}
                            </li>
                         
                            <li className="list-group-item">
                                Amount: ฿{order.amount}
                            </li>
                            <li className="list-group-item">
                                Ordered by: {user.name}
                            </li>
                            <li className="list-group-item">
                                Ordered on:{" "}
                                {/* NOTE  use moment to format the date */}
                                {moment(order.createdAt).fromNow()} 
                            </li>
                           
                        </ul>

                        <h3 className="mt-4 mb-4 font-italic">
                            Total products in the order:{" "}
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
                                {showInput("Product name", p.name)}
                                {showInput("Product price", p.price)}
                                {showInput("Product total", p.count)}
                                {showInput("Product Id", p._id)}

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
        if(order.upload == true){
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
        }else if(order.upload ==false){
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
           {showSlip()}
           {showOrder()}
         
           {showAddress()}

           
             </Layout>
    );
};

export default Orders;
