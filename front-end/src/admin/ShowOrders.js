import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { listOrders, deleteOrder,getShop,uploadSlip} from "./apiAdmin";
import moment from "moment";
import { MDBDataTable } from 'mdbreact';


const ShowOrders = () => {

    const [orders, setOrders] = useState([]);
    // const [statusValues, setStatusValues] = useState([]);
    const [shopObject, setShopObject] = useState([]);

    const [loading,setLoading] = useState(true);

    const { user, token } = isAuthenticated();
    
    const [error,setError] =useState('');
    
const seeOrder = (res) => (
    <Link className="btn btn-warning btn-sm mx-3 text-white" to={`/admin/order/${res._id}`}>
    คลิก
</Link>

)

// const deleteOrder = (res) => (
//     <div  onClick={() => destroy(res._id)} className="btn btn-danger btn-sm">
//                         ลบ
//     </div>
// )

  
//SECTION Table
let rows =[]
orders.map(res=>{
    let CostShipStatus = ''
    let slipStatus = ''
    if(res.shippingConfirm == true){
        CostShipStatus ='ยืนยันค่าส่งแล้ว'

    }else if(res.shippingConfirm == false){
        CostShipStatus='ยังไม่ได้ยืนยันค่าส่ง'
    } if(res.upload == true){
        slipStatus ='อัพโหลดหลักฐานการโอนเงินเรียบร้อย'
    } if(res.upload == false){
        slipStatus ='ยังไม่มีการอัพโหลดหลักฐานการโอนเงิน'
    }

    if(user.shop === res.shop._id){
    rows.push({orderId:res._id,name:res.user.name, shipping:CostShipStatus,slip:slipStatus,click:seeOrder(res),delete: <div  onClick={() => destroy(res._id)} className="btn btn-danger btn-sm">
    ลบ
</div>})
    }
})

    const dataColum ={columns:[{
        label: 'เลขรายการ',
        field: 'orderId',
        sort: 'asc',
        width: 150
      },
      {
        label: 'ชื่อ',
        field: 'name',
        sort: 'asc',
        width: 200
      },  {
        label: 'สถานะการยืนยันค่าส่ง',
        field: 'shipping',
        sort: 'asc',
        width: 200
      }, 
   
      {
        label: 'หลักฐานการโอนเงิน',
        field: 'slip',
        sort: 'asc',
        width: 200
      },    

      {
        label: 'ดูรายละเอียด',
        field: 'click',
        sort: 'asc',
        width: 200
      } , 

      {
        label: 'ลบรายการ',
        field: 'delete',
        sort: 'asc',
        width: 200
      }    

    
    ]}

dataColum.rows =rows


//SECTION load orders from backend
    const loadOrders = () => {
        //NOTE Get orders from backend
        listOrders(user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setOrders(data);
                setLoading(false);
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


    


//NOTE DELETE order
const destroy = (orderId) => {
    deleteOrder(orderId, user._id, token).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            loadOrders();
        }
    });
};


const showLoading = () => {
    if(loading){
        return(
            <div className="text-center">
            <div class="spinner-grow text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-secondary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-success" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-danger" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-warning" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-info" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-light" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-dark" role="status">
      <span class="sr-only">Loading...</span>
    </div>
            </div>
        )
    }
    }


    return(
        <Layout
            title="Orders"
            description={
            `you can manage all the orders here`}
            className="container-fluid"
            headerImg="dashBoardImgLayout"
        >
        {showLoading()}
         <MDBDataTable striped bordered small order={['age', 'asc' ]} data={dataColum} />


        </Layout>

    )
}

export default ShowOrders