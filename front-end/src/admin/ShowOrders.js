import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { listOrders, deleteOrder,getShop} from "./apiAdmin";
import { MDBDataTable } from 'mdbreact';
import moment from "moment";


const ShowOrders = () => {

    const [orders, setOrders] = useState([]);
    // const [statusValues, setStatusValues] = useState([]);
    const [shopObject, setShopObject] = useState([]);

    const [loading,setLoading] = useState(true);

    const { user, token } = isAuthenticated();
    
    const [error,setError] = useState('');

    const [deleteSucc,setDeleteSucc] = useState(false)
    
const seeOrder = (res) => (
    <Link className="btn btn-warning btn-sm mx-3 text-white" to={`/vendor/order/${res._id}`}>
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
    rows.push({orderId:res._id,time:moment(res.createdAt).format('YYYY-MM-DD'),name:res.user.name,status:res.status,slip:slipStatus,click:seeOrder(res)
})
    }
})

    const dataColum ={columns:[{
        label: 'เลขรายการ',
        field: 'orderId',
        sort: 'asc',
        width: 150
      },
      {
        label: 'สั่งเมื่อ',
        field: 'time',
        sort: 'asc',
        width: 200
      },  
      {
        label: 'ชื่อ',
        field: 'name',
        sort: 'asc',
        width: 200
      },  

      {
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

const showShopName = () => {
    return(
    shopObject.map((res,index)=>{ 
        if(user.shop == res._id){
            return(
                <>
                <h4 className="mb-5 bg-dark white-text text-center py-3">ร้านค้าของคุณ: {res.name}</h4>
                </>
            )
        }
    })
    )
}



    //SECTION useEffect
    useEffect(() => {
        loadOrders();
        getShopObject();
        window.scrollTo(0, 0)     

    }, []);


    




const showAleart = () =>{
    if(deleteSucc){
        return(
            <>
        <div class="alert alert-success text-center" role="alert">
            คุณลบรายการสำเร็จ
        </div>
            
            </>
        )
    }
}

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
            title="รายการสั่งซื้อทั้งหมด"
            description={
            `คุณสามารถดูรายการสั่งซื้อทั้งหมดได้ที่นี่`}
            className="container-fluid"
            headerImg="dashBoardImgLayout"
        >
        {showAleart()}
        {showShopName()}
        {showLoading()}

         <MDBDataTable striped bordered small order={['age', 'asc' ]} data={dataColum} />


        </Layout>

    )
}

export default ShowOrders