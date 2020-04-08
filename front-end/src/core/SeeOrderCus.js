import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { listOrders, deleteOrder,getShop} from "../admin/apiAdmin";
import { MDBDataTable } from 'mdbreact';



const SeeOrderCus = () => {

    const [orders, setOrders] = useState([]);
    // const [statusValues, setStatusValues] = useState([]);
    const [shopObject, setShopObject] = useState([]);


    const { user, token } = isAuthenticated();
    
    const [error,setError] =useState('');

    //SECTION TABLE WITH FILTER 

    const seeOrder = (res) => (
        <Link className="btn btn-warning btn-sm mx-3 text-white" to={`/admin/order/${res._id}`}>
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
        rows.push({orderId:res._id,name:res.shop.name, shipping:CostShipStatus,slip:slipStatus,click:seeOrder(res),delete: <div  onClick={() => destroy(res._id)} className="btn btn-danger btn-sm">
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



    const loadOrders = () => {
        //NOTE Get orders from backend
        listOrders(user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setOrders(data);
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


const showOrdersTable = () => {
    const number =[];
    {orders.map((o, oIndex) => {
        if(o.user._id === user._id){
            number.push(o.shop)}
        }
    )
    }







return(
    <div>  {showOrdersLength(number.length)}
  
    <table class="table table-hover">
    <thead>
        <tr>
        <th scope="col">Order ID</th>
        <th scope="col">Name</th>
        <th scope="col">Total</th>
        <th scope="col">Status</th>
        <th scope="col">See details</th>
        <th scope="col">Delete order</th>


        </tr>
    </thead>
    {orders.map((o, oIndex) => {
        if(o.user._id == user._id){
            number.push(o.shop)
                return (
    <tbody>
        <tr>
            <th scope="row">{o._id}</th>
            <td>{o.shop.name}</td>
            <td>{o.amount}</td>
            <td>{o.status}</td>
            
            <td> 
                <Link className="btn btn-warning btn-sm mx-3 text-white" to={`/order/${o._id}`}>
                    Click
                </Link>
            </td>

            <td>
                    <div  onClick={() => destroy(o._id)} className="btn btn-danger btn-sm">
                        Delete
                    </div>
            </td>

            </tr>
            <tr>                
        </tr>
    </tbody>
       );}
    })}
                                 
                                    
</table>                              
</div>

) 
}


    return(
        <Layout
            title="Orders"
            description={
            `you can see your orders here`}
            className="container-fluid"
            headerImg="dashBoardImgLayout"
        >
         {/* {showOrdersTable()} */}

         <MDBDataTable striped bordered small order={['age', 'asc' ]} data={dataColum} />

        </Layout>

    )
}

export default SeeOrderCus;