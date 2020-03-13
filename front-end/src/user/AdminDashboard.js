import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getShopList,createShop } from "../admin/apiAdmin";


const AdminDashboard = () => {
    const {
        user: { _id, name, email, role,token }
    } = isAuthenticated();



    const [shopName, setShopName] = useState([])

    const loadShopList = () => {
        getShopList(_id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setShopName(data);
            }
        });
    };


    useEffect(() => {
        // loadShopList();
    }, []);


    const adminLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">Admin Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/category">
                            Create Category
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/product">
                            Create Product
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/orders">
                            View Orders
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/products">
                            Manage Products
                        </Link>
                    </li>

                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/create/shop">
                        Create Shop                       
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to={`/profile/${_id}`}>
                            Update Profile
                        </Link>
                    </li>

                    
                            {adminGivePermission()}
                   
                    
                </ul>
            </div>
        );
    };

    //NOTE this function is for Admin of the system to provide permission of merchant role 
    const adminGivePermission = () => {
  
        if(role === 2){
            return(
                <li className="list-group-item">
                <Link className="nav-link" to="/admin/manage/permission">
                    Manage Permission
            </Link>
             </li>
            )
        }
    }

    const adminInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">
                        {role === 1 || role === 2 ? "Admin" : "Registered User"}
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <Layout
            title="Dashboard"
            description={`G'day ${name}!`}
            className="container-fluid"
            headerImg="dashBoardImgLayout"

        >
            <div className="row">
                <div className="col-3">{adminLinks()}</div>
                <div className="col-9">{adminInfo()}</div>
            </div>

            {/* <div className="row">
            {shopName.map((n, index) => (
                   {n}
                ))}
            </div> */}

        </Layout>
    );
};

export default AdminDashboard;
