import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link,Redirect } from "react-router-dom";
import { getUsers, updateUserRole,deleteOther } from "./apiAdmin";
import {update} from '../user/apiUser'
import { MDBDataTable } from 'mdbreact';

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
                <div>ลูกค้า</div>
            )}
            else if(u === 1){
                return(
                <div>พ่อค้า</div>
                )}
                else if(u === 2){
                    return(
                        <div>ผู้ดูแลระบบ</div>
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


//SECTION TABLE FILTER 



const seeUser = (res) => (
    <Link className="btn btn-warning btn-sm mx-3 text-white" to= {`/admin/update/${res._id}`}>
    คลิก
</Link>)


let rows =[]
    users.map(res=>{
        let role = ''
        if(res.role === 0){
            role = 'ลูกค้า'
          }
            else if(res.role === 1){
                role = 'พ่อค้า'
             }
                else if(res.role === 2){
                    role = 'ผู้ดูแลระบบ'
                }

                // <div  onClick={() => destroy(res._id)} className="btn btn-danger btn-sm">
    
        rows.push({name:res.name, email:res.email,role:role ,shop:res.shop.name,permission:seeUser(res)})
    
        
    })
    
        const dataColum ={columns:[
          {
            label: 'ชื่อผู้ใช้',
            field: 'name',
            sort: 'asc',
            width: 200
          },  {
            label: 'อีเมล',
            field: 'email',
            sort: 'asc',
            width: 200
          }, 
       
          {
            label: 'บทบาท',
            field: 'role',
            sort: 'asc',
            width: 200
          },    

          {
            label: 'ร้านค้า',
            field: 'shop',
            sort: 'asc',
            width: 200
          },    
    
    
          {
            label: 'ตั้งค่าการเข้าถึง',
            field: 'permission',
            sort: 'asc',
            width: 200
          } , 
    
        //   {
        //     label: 'ลบรายการ',
        //     field: 'delete',
        //     sort: 'asc',
        //     width: 200
        //   }    
    
        
        ]}
    
    dataColum.rows =rows
         

    return (
        <Layout
            title="การจัดการสิทธิ์การเข้าถึง"
            description="คุณสามารถแก้ไขสิทธิการเข้าถึงของคนอื่นๆได้ที่นี่"
            className="container-fluid"
            headerImg="dashBoardImgLayout"


        >

<MDBDataTable striped bordered small order={['age', 'asc' ]} data={dataColum} />

                   
             


              

    


        </Layout>
    );
};

export default ManagePermission;
