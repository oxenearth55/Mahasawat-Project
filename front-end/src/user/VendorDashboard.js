import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getShopList,createShop,getShop } from "../admin/apiAdmin";
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBRow, MDBCol } from "mdbreact";


const VendorDashboard = () => {
    const {
        user: { _id, name, email, role,shop }
    } = isAuthenticated();


    const showRole = (role) => {
        if(role === 0){
            return(
                <div>ลูกค้า</div>
            )}
            else if(role === 1){
                return(
                <div>หน้าที่: คนขาย</div>
                )}
                else if(role === 2){
                    return(
                        <div>หน้าที่: ผู้ดูแล</div>
                    )
                }else{
                    return(
                    <div>Please Submit Change</div>
                    )
                }
    
            };

            //SECTION SHOW SHOP NAME

            const [shopObject, setShopObject] = useState([]);
            const getShopObject = () => {
                getShop().then(data => {
                  
                        setShopObject(data);
                    
                });
            };
            
            const showShopName = () => {
                return(
                shopObject.map((res,index)=>{ 
                    if(shop == res._id){
                        return(
                            <>
                            ร้านค้าของคุณ: {res.name}
                            </>
                        )
                    }
                })
                )
            }

    useEffect(() => {
        getShopObject();
        }, []);


 

    //NOTE this function is for Admin of the system to provide permission of merchant role 
    const adminGivePermission = () => {
  
        if(role === 2){
            return(
                <MDBListGroupItem  hover>

                <Link className="nav-link textDash" to="/admin/manage/permission">
                จัดการสิทธิ์การเข้าถึง
                </Link>
                </MDBListGroupItem>
            )
        }
    }

   

const info = () =>(
<MDBContainer>
  <MDBListGroup >
    <MDBListGroupItem  className="bg-dark text-white">ข้อมูลผู้ใช้</MDBListGroupItem>
    <MDBListGroupItem  ><p className="dash-info">ชื่อ: {name}</p></MDBListGroupItem>
    <MDBListGroupItem   ><p className="dash-info">อีเมล: {email}</p></MDBListGroupItem>
    <MDBListGroupItem   ><p className="dash-info">{showRole(role)}</p></MDBListGroupItem>
    <MDBListGroupItem   ><p className="dash-info">{showShopName()}</p></MDBListGroupItem>

  </MDBListGroup>
</MDBContainer>
);

const links = () => (
<MDBContainer  className="mx-0 px-auto">



  <MDBListGroup >


    <MDBListGroupItem hover >  
        <Link className="nav-link textDash" to="/vendor/category">
            จัดการประเภทสินค้า
        </Link>
                        
    </MDBListGroupItem>
    <MDBListGroupItem hover>
        
        <Link className="nav-link textDash" to="/create/product">
            เพิ่มสินค้า
        </Link> 
    
    </MDBListGroupItem>
    <MDBListGroupItem  hover>
        
        <Link className="nav-link textDash" to="/vendor/orders">
            ดูรายการ
        </Link>
        
    </MDBListGroupItem>

    {/* <MDBListGroupItem  hover>
        
        <Link className="nav-link textDash" to="/vendor/sales/report">
            ดูยอดขาย
        </Link>
        
    </MDBListGroupItem> */}

    <MDBListGroupItem hover>
        <Link className="nav-link textDash" to="/vendor/products">
            จัดการสินค้า
        </Link>      
    </MDBListGroupItem>

    <MDBListGroupItem hover>
        <Link className="nav-link textDash" to="/vendor/shop/contact">
            จัดการข้อมูลติดต่อ
        </Link>      
    </MDBListGroupItem>


    <MDBListGroupItem hover>
        <Link className="nav-link textDash" to="/vendor/manage/bank">
            จัดการบัญชีธนาคาร
        </Link>      
    </MDBListGroupItem>

   

        {adminGivePermission()}     

    <MDBListGroupItem  hover>
        <Link className="nav-link textDash" to={`/manage/shipping/${shop}`}>
            จัดการ การขนส่ง
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

export default VendorDashboard;
