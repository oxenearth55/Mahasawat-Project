import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { listOrders, deleteOrder,getShop,uploadSlip} from "./apiAdmin";
import moment from "moment";


const ShowOrders = () => {

    const [orders, setOrders] = useState([]);
    // const [statusValues, setStatusValues] = useState([]);
    const [shopObject, setShopObject] = useState([]);


    const { user, token } = isAuthenticated();
    
    const [error,setError] =useState('');


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


    //SECTION Update Shop for Admin only
const getShopObject = () => {
    getShop().then(data => {
        if (data.error) {
            setError(data.error);
         } 
        else {
            setShopObject(data);
        }
    });
};


    //SECTION useEffect
    useEffect(() => {
        loadOrders();
        getShopObject();
    }, []);


    
 //NOTE show number of Order at the heading
 const showOrdersLength = (amount) => {
   
    if (orders.length > 0) {
        return (
            <h1 className="text-danger ">
                Total orders: {amount}
            </h1>
        );
    } 
};


//NOTE DELETE order
const destroy = orderId => {
    deleteOrder(orderId, user._id, token).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            loadOrders();
        }
    });
};

//NOTE Show Order related their shops


const showOrdersTable = () => {
    const number =[];
    {orders.map((o, oIndex) => {
        if(user.shop === o.shop){
            number.push(o.shop)}
        }
    )
    }






return(
    <div>  {showOrdersLength(number.length)}
  
    <table class="table table-hover">
    <thead>
        <tr>
        <th scope="col">Order ID</th>
        <th scope="col">Name</th>
        <th scope="col">Total</th>
        <th scope="col">Status</th>
        <th scope="col">See details</th>
        <th scope="col">Delete order</th>


        </tr>
    </thead>
    {orders.map((o, oIndex) => {
        if(user.shop === o.shop){
            number.push(o.shop)
                return (
    <tbody>
        <tr>
            <th scope="row">{o._id}</th>
            <td>{o.user.name}</td>
            <td>{o.amount}</td>
            <td>{o.status}</td>
            
            <td> 
                <Link className="btn btn-warning btn-sm mx-3 text-white" to={`/admin/order/${o._id}`}>
                    Click
                </Link>
            </td>

            <td>
                    <div  onClick={() => destroy(o._id)} className="btn btn-danger btn-sm">
                        Delete
                    </div>
            </td>

            </tr>
            <tr>                
        </tr>
    </tbody>
       );}
    })}
                                 
                                    
</table>                              
</div>

) 
}


    return(
        <Layout
            title="Orders"
            description={
            `you can manage all the orders here`}
            className="container-fluid"
            headerImg="dashBoardImgLayout"
        >
         {showOrdersTable()}


        </Layout>

    )
}

export default ShowOrders