import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { listOrders, deleteOrder,getShop,updateOrderStatus} from "../admin/apiAdmin";
import { MDBDataTable } from 'mdbreact';



const SeeOrderCus = () => {

    const [orders, setOrders] = useState([]);
    // const [statusValues, setStatusValues] = useState([]);
    const [shopObject, setShopObject] = useState([]);

    const [loading,setLoading] = useState(true);
    const { user, token } = isAuthenticated();
    
    const [error,setError] =useState('');
    const [sucess,setSuccess] = useState(false);


    //SECTION TABLE WITH FILTER 

    const seeOrder = (res) => (
        <Link className="btn btn-warning btn-sm mx-3 text-white" to={`order/${res._id}`}>
        คลิก
    </Link>
    
    )


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
    
        if(res.user._id === user._id){
        rows.push({orderId:res._id,name:res.shop.name, status:res.status,slip:slipStatus,click:seeOrder(res),delete: <div  onClick={() => destroy(res._id)} className="btn btn-danger btn-sm">
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
            label: 'ชื่อร้านค้า',
            field: 'name',
            sort: 'asc',
            width: 200
          },  {
            label: 'สถานะ',
            field: 'status',
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
        // getShopObject();
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


//SECTION CANCLE ORDER 

const status = 'ยกเลิก'
const cancle = (res) => {
    // event.preventDefault();
    // NOTE Update changes to backend 
    setSuccess(true);

    updateOrderStatus( user._id, token,res, status).then(data => {
        if (data.error) {
        } else {
            loadOrders();

        }
    });
}

const aleartSucees = () => {
    if(sucess == true){
        return(<>
<div class="alert alert-success text-center" role="alert">
            คุณยกเลิกรายการสำเร็จ
</div>

        </>)

    }
}


    return(
        <Layout
            title="รายการสั่งซื้อของคุณ"
            description={
            `คุณสามารถดูรายการสั่งซื้อทั้งหมดได้ที่นี่`}
            className="container-fluid"
            headerImg="dashBoardImgLayout"
        >
         {/* {showOrdersTable()} */}

    {showLoading()}
    {aleartSucees()}
         <MDBDataTable striped bordered small order={['age', 'asc' ]} data={dataColum} />

        </Layout>

    )
}

export default SeeOrderCus;