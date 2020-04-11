import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getShopList,createShop } from "../admin/apiAdmin";
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBRow, MDBCol } from "mdbreact";


const AdminDashboard = () => {
    const {
        user: { _id, name, email, role,token,shop }
    } = isAuthenticated();


    const showRole = (role) => {
        if(role === 0){
            return(
                <div>Customer</div>
            )}
            else if(role === 1){
                return(
                <div>Merchant</div>
                )}
                else if(role === 2){
                    return(
                        <div>Admin</div>
                    )
                }else{
                    return(
                    <div>Please Submit Change</div>
                    )
                }
    
            };

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


 

    //NOTE this function is for Admin of the system to provide permission of merchant role 
    const adminGivePermission = () => {
  
        if(role === 2){
            return(
                <MDBListGroupItem  hover>

                <Link className="nav-link textDash" to="/admin/manage/permission">
                    Manage Permission
                </Link>
                </MDBListGroupItem>
            )
        }
    }

   

const info = () =>(
<MDBContainer>
  <MDBListGroup >
    <MDBListGroupItem  className="bg-dark text-white">User Information</MDBListGroupItem>
    <MDBListGroupItem  ><p className="dash-info">{name}</p></MDBListGroupItem>
    <MDBListGroupItem   ><p className="dash-info">{email}</p></MDBListGroupItem>
    <MDBListGroupItem   ><p className="dash-info">{showRole(role)}</p></MDBListGroupItem>
  </MDBListGroup>
</MDBContainer>
);

const links = () => (
<MDBContainer  className="mx-0 px-auto">



  <MDBListGroup >


    <MDBListGroupItem hover >  
        <Link className="nav-link textDash" to="/create/category">
            Create Category
        </Link>
                        
    </MDBListGroupItem>
    <MDBListGroupItem hover>
        
        <Link className="nav-link textDash" to="/create/product">
            Create Product
        </Link> 
    
    </MDBListGroupItem>
    <MDBListGroupItem  hover>
        
        <Link className="nav-link textDash" to="/admin/orders">
            View Orders
        </Link>
        
    </MDBListGroupItem>

    <MDBListGroupItem hover>
        <Link className="nav-link textDash" to="/admin/products">
            Manage Products
        </Link>      
    </MDBListGroupItem>

    <MDBListGroupItem hover>
        <Link className="nav-link textDash" to="/admin/manage/shop">
            Manage Bannking
        </Link>      
    </MDBListGroupItem>

        {adminGivePermission()}     

    <MDBListGroupItem  hover>
        <Link className="nav-link textDash" to={`/manage/shipping/${shop}`}>
            Manage Shipping
        </Link>    
    </MDBListGroupItem>


    <MDBListGroupItem  hover>
        <Link className="nav-link textDash" to={`/profile/${_id}`}>
             Update Profile
        </Link>    
    </MDBListGroupItem>


  </MDBListGroup>
  

</MDBContainer>

  

    );

    return (
        <Layout
            title="Dashboard"
            description={`G'day ${name}!`}
            className="container-fluid"
            headerImg="dashBoardImgLayout"

        >
            {/* <div className="row">
                <div className="col-4">{links()}</div>
                <div className="col-8">{adminInfo()}</div>
            </div> */}

<MDBRow>
<MDBCol size='6'>
    {links()}

</MDBCol>

<MDBCol size='6'>
    {info()}

</MDBCol>



</MDBRow>
         
            {/* <div className="row">
            {shopName.map((n, index) => (
                   {n}
                ))}
            </div> */}

        </Layout>
    );
};

export default AdminDashboard;
