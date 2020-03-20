import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link,Redirect } from "react-router-dom";
import { getUsers, updateUserRole,deleteOther } from "./apiAdmin";
import {update} from '../user/apiUser'

const ManagePermission = () => {
  

    const { user, token } = isAuthenticated();

    const [users, setUsers] = useState([]);
    const [role, setRole] = useState({});

    //NOTE  grab productId and send to backend 
    const getUserObjects = productId => {
        getUsers().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setUsers(data);
            }
        });
    };

    useEffect(() => {
        getUserObjects()
    }, []);


    const showRole = (u) => {
        if(u === 0){
            return(
                <div>Customer</div>
            )}
            else if(u === 1){
                return(
                <div>Merchant</div>
                )}
                else if(u === 2){
                    return(
                        <div>Admin</div>
                    )
                }

            }

            // const handleChange = name => event => {
            //     setRole({ [name]: event.target.value });
            //   };

            // const updateRole = (uId) =>{
            //     updateUserRole(user._id, token, uId, role).then(
            //         data => {
            //             if (data.error) {
            //                 console.log("Role update failed");
            //             } else {
            //                 getUserObjects()
            //                 ;
            //             }
            //         }
            //     );

            // }

            // const handleChange = (e, uId) => {
            //     updateUserRole(user._id, token, uId, e.target.value).then(
            //         data => {
            //             if (data.error) {
            //                 console.log("Status update failed");
            //             } else {
            //                 getUserObjects()
            //                 ;
            //             }
            //         }
            //     );
            // };

    // const dropDown = (role) => (
    //     <select
    //     className="form-control"
    //     onChange={e => handleChange(e, role)}
    // >
    //     <option>Not processed</option>
    //     {role.map((r, index) => (
    //         <option key={index} value={r}>
    //             {r}
    //         </option>
    //     ))}
    // </select>
    // )

    //NOTE Prevent others user 

    const preventPermission = () => {
        if (user.role!=2) {
            return <Redirect to="/" />;
        }
    };

    //NOTE DELETE User
const destroy = otherId => {
    deleteOther(otherId, user._id, token).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            getUserObjects();
        }
    });
};
         

    return (
        <Layout
            title="Manage Products"
            description="You can Set permission here"
            className="container-fluid"
            headerImg="dashBoardImgLayout"


        >

            {preventPermission()}
          <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
      <th scope="col">Set permission</th>
      <th scope="col">Delete account</th>

    </tr>
  </thead>
  
  {users.map((u, uIndex) => {

return(
  <tbody>
    <tr>
        <th scope="row">{u.name}</th>
        <td>{u.email}</td>
        <td>{showRole(u.role)}</td>
        <td>
        {/* NOTE Go to this page with this user ID */}
        <Link to= {`/admin/update/${u._id}`}>

            <button className="btn btn-warning btn-sm text-white">Click</button>
            {/* <input type="text" onChange={handleChange(u._id)} className="form-control" v/> */}
        </Link>
            </td>
        <td><button onClick={() => destroy(u._id)} className="btn btn-danger btn-sm">Delete</button></td>
    </tr>
   
  </tbody>
     );}
     )}
</table>
       
                   
             


              

    


        </Layout>
    );
};

export default ManagePermission;
