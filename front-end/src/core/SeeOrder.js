import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { listOrders, getStatusValues, updateOrderStatus } from "../admin/apiAdmin";
import moment from "moment";


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
                        <span className="bg-primary">
                            Order ID: {o._id}
                        </span>
                    </h2>

                    <ul className="list-group mb-2">
                        <li className="list-group-item">
                        
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
            title="Orders"
            description={`G'day ${
                user.name
            }, you can see your order here`}
            className="container-fluid"
            headerImg="dashBoardImgLayout"
        > 
            {showOrders()}
            Hello {showStatus()}

        </Layout>

    );

}

export default SeeOrder;