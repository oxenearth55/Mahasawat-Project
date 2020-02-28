import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { listOrders, getStatusValues, updateOrderStatus } from "../admin/apiAdmin";
import moment from "moment";
//Import logo.png
import waiting from './Logo/waiting.png'
import confirm from './Logo/confirmation.png'
import payment from './Logo/payment.png'
import packaging from './Logo/packaging.png'
import delivery from './Logo/delivery.png'


const SeeOrder = () => {

    const [orders, setOrders] = useState([]);
    const { user, token } = isAuthenticated();


    const loadOrders = () => {
        //NOTE Get orders from backend
        listOrders(user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setOrders(data);
            }
        });
    };


    useEffect(() => {
        loadOrders();
       
    }, []);


    const showStatus = () => {
        {orders.map((o, oIndex) => {
        if(2 == 2){
            return(
                <div key={oIndex}>  {o.products.length} </div>
              
            )
        }
    })}

    }

    //SECTION order status Icon

    const statusIcon = (orderStatus) => { 

            if(orderStatus === 'Update Status'){
                return (

                    <div className="container-fluid border  border-dark">
                       
                        <div className="row mt-4"> 
                                <div className="col-3 text-center">
                                    <img className ="logo" src={waiting}></img>
                                    <p>Awaiting Confirmation</p>
                                </div>

                                <div className="col-3 text-center">
                                    <img className ="logo ml-4 unStatus" src={confirm}></img>
                                    <p className="unStatus">Order Confirmation</p>
                                </div>    

                                <div className="col-3 text-center">
                                    <img className ="logo unStatus" src={packaging}></img>
                                    <p className="unStatus">Packaging</p>
                                </div>    

                                <div className="col-3 text-center">
                                    <img className ="logo unStatus" src={delivery}></img>
                                    <p className="unStatus">Shipping</p>
                                </div>        

                        </div>
                    </div>
                )
            }else if(orderStatus === 'Order Confirmation'){
                return (
                    <div className="container-fluid border  border-dark">
                       
                    <div className="row mt-4"> 
                            <div className="col-3 text-center">
                                <img className ="logo unStatus" src={waiting}></img>
                                <p className="unStatus">Awaiting Confirmation</p>
                            </div>

                            <div className="col-3 text-center">
                                <img className ="logo ml-4" src={confirm}></img>
                                <p>Order Confirmation</p>
                            </div>    

                            <div className="col-3 text-center">
                                <img className ="logo unStatus " src={packaging}></img>
                                <p className="unStatus">Packaging</p>
                            </div>    

                            <div className="col-3 text-center">
                                <img className ="logo unStatus" src={delivery}></img>
                                <p className="unStatus">Shipping</p>
                            </div>        

                    </div>
                </div>
                )

            }else if(orderStatus === 'Packaging'){
                return (
                    <div className="container-fluid border  border-dark">
                       
                    <div className="row mt-4"> 
                            <div className="col-3 text-center">
                                <img className ="logo unStatus" src={waiting}></img>
                                <p className="unStatus">Awaiting Confirmation</p>
                            </div>

                            <div className="col-3 text-center">
                                <img className ="logo ml-4 unStatus" src={confirm}></img>
                                <p className="unStatus">Order Confirmation</p>
                            </div>    

                            <div className="col-3 text-center">
                                <img className ="logo " src={packaging}></img>
                                <p>Packaging</p>
                            </div>    

                            <div className="col-3 text-center">
                                <img className ="logo unStatus" src={delivery}></img>
                                <p className="unStatus">Shipping</p>
                            </div>        

                    </div>
                </div>
                )

            }else if(orderStatus === 'Shipping'){
                return (
                    <div className="container-fluid border  border-dark">
                       
                    <div className="row mt-4"> 
                            <div className="col-3 text-center">
                                <img className ="logo unStatus" src={waiting}></img>
                                <p className="unStatus">Awaiting Confirmation</p>
                            </div>

                            <div className="col-3 text-center">
                                <img className ="logo ml-4 unStatus" src={confirm}></img>
                                <p className="unStatus">Order Confirmation</p>
                            </div>    

                            <div className="col-3 text-center">
                                <img className ="logo unStatus " src={packaging}></img>
                                <p className="unStatus">Packaging</p>
                            </div>    

                            <div className="col-3 text-center">
                                <img className ="logo" src={delivery}></img>
                                <p >Shipping</p>
                            </div>        

                    </div>
                </div>
                )
            }else if(orderStatus === 'Cancelled'){
                return (
                    <div>
                        <p>This order is Cancelled</p>
                    </div>
                )
            }else{
                return  ''
            }



        }
    

    const showOrders = () => (
        <div>
        {orders.map((o, oIndex) => {

            //NOTE use this condition to match which order came from this user
             // orders contains properties such as user Object 
             // Inside user object contain _id as a property
            if(o.user._id == user._id){   
            return (
                <div
                    className="mt-5"
                    key={oIndex}
                    style={{ borderBottom: "5px solid indigo" }}
                >
                    <h2 className="mb-5">
                        <span>
                            <div className="row">
                           <div className="border text-white bg-dark"> Your Order ID: </div>
                            <div className="col-5 border">{o._id}</div>
                            </div>
                        </span>
                        
                    </h2>
                    <h4 className="mb-4">Order Status</h4>
                    {statusIcon(o.status)}
                    


                    <ul className="list-group mt-4 mb-2">
                        <li className="list-group-item text-white bg-dark ">
                            <h3 className="text-center ">Order Detail </h3>
                        </li>
                        <li className="list-group-item">
                            Transaction ID: {o.transaction_id}
                        </li>
                        <li className="list-group-item">
                            Amount: ฿{o.amount}
                        </li>
                        <li className="list-group-item">
                            Ordered by: {o.user.name}
                        </li>
                        <li className="list-group-item">
                            Ordered on:{" "}
                            {/* NOTE  use moment to format the date */}
                            {moment(o.createdAt).fromNow()} 
                        </li>
                        <li className="list-group-item">
                            Delivery address: {o.address}
                        </li>
                    </ul>

                    <h3 className="mt-4 mb-4 font-italic">
                        Total products in the order:{" "}
                        {o.products.length}
                    </h3>

                    {o.products.map((p, pIndex) => (
                        <div
                            className="mb-4"
                            key={pIndex}
                            style={{
                                padding: "20px",
                                border: "1px solid indigo"
                            }}
                        >
                           
                        </div>
                    ))}
                </div>
            );}
        })}
        </div>
        
     


    );

    


    return(
        <Layout
            title="See Your Orders"
            description={`Hi ${
                user.name
            }, you can see your order here`}
            className="container-fluid"
            headerImg="dashBoardImgLayout"
        > 
            {showOrders()}
            Hello {showStatus()}

        </Layout>

    );
        };

export default SeeOrder;