import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { listOrders, getStatusValues, updateOrderStatus } from "./apiAdmin";
import moment from "moment";


const ShowOrders = () => {

    const [orders, setOrders] = useState([]);
    const [statusValues, setStatusValues] = useState([]);

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


    





    return(
        <Layout
            title="Orders"
            description={
            `you can manage all the orders here`}
            className="container-fluid"
            headerImg="dashBoardImgLayout"
        >
          
          
           <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Name</th>
                <th scope="col">Total</th>
                <th scope="col">Status</th>
                <th scope="col">See details</th>

                </tr>
            </thead>
            {orders.map((o, oIndex) => {
                        return (
            <tbody>
                <tr>
                    <th scope="row">{o._id}</th>
                    <td>{o.user.name}</td>
                    <td>{o.amount}</td>
                    <td>{o.status}</td>
                    <td> 
                        <Link className="btn btn-danger btn-sm" to={`/admin/order/${o._id}`}>
                            Click
                        </Link>
                    </td>

                    </tr>
                    <tr>                
                </tr>
            </tbody>
               );
            })}
                                         
                                            
        </table>                              
      


        </Layout>

    )
}

export default ShowOrders