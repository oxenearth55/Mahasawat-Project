import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
// import { getPurchaseHistory } from "./apiUser";
import moment from "moment";
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBRow, MDBCol } from "mdbreact";


const Dashboard = () => {
    const [history, setHistory] = useState([]);

    const {
        user: { _id, name, email, role }
    } = isAuthenticated();
    const token = isAuthenticated().token;

    //NOTE  get purchase history from backend
    // const init = (userId, token) => {
    //     getPurchaseHistory(userId, token).then(data => {
    //         if (data.error) {
    //             console.log(data.error);
    //         } else {
    //             setHistory(data);
    //         }
    //     });
    // };

    useEffect(() => {
        // init(_id, token);
    }, []);

    

    // const purchaseHistory = history => {
    //     return (
    //         <div className="card mb-5">
    //             <h3 className="card-header">Purchase history</h3>
    //             <ul className="list-group">
    //                 <li className="list-group-item">
    //                     {history.map((h, i) => {
    //                         return (
    //                             <div>
    //                                 <hr />
    //                                 {h.products.map((p, i) => {
    //                                     return (
    //                                         <div key={i}>
    //                                             <h6>Product name: {p.name}</h6>
    //                                             <h6>
    //                                                 Product price: ${p.price}
    //                                             </h6>
    //                                             <h6>
    //                                                 Purchased date:{" "}
    //                                                 {moment(
    //                                                     p.createdAt
    //                                                 ).fromNow()}
    //                                             </h6>
    //                                         </div>
    //                                     );
    //                                 })}
    //                             </div>
    //                         );
    //                     })}
    //                 </li>
    //             </ul>
    //         </div>
    //     );
    // };





    const links = () => (
        <MDBContainer  className="mx-0 px-auto">
        
        
        
          <MDBListGroup >
        
        
            <MDBListGroupItem hover >  
            <Link className="nav-link" to="/cart">
                            My Cart
                        </Link>
                                
            </MDBListGroupItem>
            <MDBListGroupItem hover>
                
            <Link className="nav-link" to={`/profile/${_id}`}>
                            Update Profile
                        </Link>
            
            </MDBListGroupItem>
           
        
        
          </MDBListGroup>
          
        
        </MDBContainer>
        
          
        
            );

            const info = () =>(
                <MDBContainer>
                  <MDBListGroup >
                    <MDBListGroupItem  className="bg-dark text-white">User Information</MDBListGroupItem>
                    <MDBListGroupItem  ><p className="dash-info">{name}</p></MDBListGroupItem>
                    <MDBListGroupItem   ><p className="dash-info">{email}</p></MDBListGroupItem>
                    <MDBListGroupItem   ><p className="dash-info"> {role === 1 ? "Admin" : "Registered User"}</p></MDBListGroupItem>
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
           

<MDBRow>
<MDBCol size='6'>
    {links()}

</MDBCol>

<MDBCol size='6'>
{info()}

</MDBCol>



</MDBRow>
        </Layout>
    );
};

export default Dashboard;
