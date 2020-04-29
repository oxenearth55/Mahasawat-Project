import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getShopList,createShop,getShop } from "../admin/apiAdmin";
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBRow, MDBCol } from "mdbreact";


const AdminDashboard = () => {
    const {
        user: { _id, name, email, role,shop }
    } = isAuthenticated();



const info = () =>(
<MDBContainer>
  <MDBListGroup >
    <MDBListGroupItem  className="bg-dark text-white">ข้อมูลผู้ใช้</MDBListGroupItem>
    <MDBListGroupItem  ><p className="dash-info">ชื่อ: {name}</p></MDBListGroupItem>
    <MDBListGroupItem   ><p className="dash-info">อีเมล: {email}</p></MDBListGroupItem>
    <MDBListGroupItem   ><p className="dash-info">หน้าที่: ผู้ดูแล</p></MDBListGroupItem>

  </MDBListGroup>
</MDBContainer>
);

const links = () => (
<MDBContainer  className="mx-0 px-auto">



  <MDBListGroup >


   

  <MDBListGroupItem  hover>

<Link className="nav-link textDash" to="/admin/manage/permission">
จัดการสิทธิ์การเข้าถึง
</Link>
</MDBListGroupItem>
    


    <MDBListGroupItem  hover>
        <Link className="nav-link textDash" to={`/profile/${_id}`}>
             อัพเดทโปรไฟล์
        </Link>    
    </MDBListGroupItem>


  </MDBListGroup>
  

</MDBContainer>

  

    );

    return (
        <Layout
            title="แผงควบคุม"
            description={`ยินดีต้อนรับ ${name}!`}
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
         

        </Layout>
    );
};

export default AdminDashboard;
