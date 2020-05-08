import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { deleteOrder, getStatusValues, decreaseProductAmount,updateOrderStatus } from "./apiAdmin";
import moment from "moment";
import {readOrder} from '../core/apiCore'
import PopUpSlip from '../core/PopUpSlip'
import PopUpDelete from '../core/PopUpDelete';




const Orders = ({match}) => {
    const [order, setOrder] = useState([]);
    const [products, setProducts] = useState([]);
    const [statusValues, setStatusValues] = useState([]);
    const { user, token } = isAuthenticated();
    const [address , setAddress] = useState([]);
    const [photo , setPhoto] = useState([]);
    //NOTE checkibng already update shipping cost or not
    const [success, setSuccess] = useState(false);
    const [successUp, setSuccessUp] = useState(false);
    const [updatetext, setUpdateText] = useState('');
    const [shippingProvider,setShippingProvider] = useState([]);
    const [orderUser,setUser] = useState([]);
    

    const [error, setError] = useState(false)

    //NOTE Calculate Total price (Shop cost and total product price)
    // const [amount, setAmount] = useState(0)
    // const [shipCost, setShipCost] = useState(0)
    // const Total = amount + shipCost;



    //NOTE FormData
    const [values, setValues] = useState({    
        costShipping: '',       
        formData: ''
    });


    const [upError,setUpError] = useState(false);
    const clickSubmit = event =>{
        event.preventDefault();         
        const decreaseProduct ={ //NOTE keep it as Object before storing in Datase
            products: products          
        };
         if(updatetext !== 'เลือกอัพเดทสถานะที่นี่' && updatetext !== ''){
        if(updatetext=='กำลังขนส่ง'){
        updateOrderStatus(user._id, token, order._id, updatetext)
        decreaseProductAmount(user._id, token,decreaseProduct).then(
            data => {
                if (data.error) {
                    console.log("Status update failed");
                } else {
                    console.log('photo is '+order.photo)
                  

                }
            }
        );
        setSuccessUp(true)
        setHandleStatus(updatetext)
        setHandleUpdate(true);
        }
        
        else{
            updateOrderStatus(user._id, token, order._id, updatetext)
            setSuccessUp(true)
            setHandleStatus(updatetext)
            loadOrder(match.params.orderID);
            setHandleUpdate(true);

        }
    }else{
        setUpError(true);
    }
}

    const showUpdateError = () => {
        if(upError){
            return(
                <div className="alert alert-warning" role="alert">

        <h5 className="text-center order-aleart-slip">กรุณาเลือกสถานะเพื่อทำการอัพเดท</h5>
        </div>

            )
        }
    }

    const loadOrder = orderId => {
        //NOTE Get orders from backend
        readOrder(orderId).then(data => {
            if (data.error) {
                console.log(data.error);
                setError(data.error);
            } else {
                setOrder(data)
                setProducts(data.products)
                setAddress(data.address)
                setUser(data.user)
                setShippingProvider(data.shippingProvider)
                setPhoto(data.photo)
                setValues({
                    ...values,                   
                    formData: new FormData()
                    
                });
                // setAmount(data.amount)
                // setShipCost(data.shippingCost)
              

            }
        });
    };

    //NOTE load status from order  
    const loadStatusValues = () => {
        getStatusValues(user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setStatusValues(data);
            }
        });
    };

    useEffect(() => {
        loadOrder(match.params.orderID);
        loadStatusValues();
        // setAddress({...address, lastName:order.address.lastName})
        console.log('photo is '+photo.contentType)
        window.scrollTo(0, 0)     


    }, []);

   

    // NOTE Reuse these style for each products in Order
    const showInput = (key, value) => (
        <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
                <div className="input-group-text">{key}</div>
            </div>
            <input
                type="text"
                value={value}
                className="form-control"
                readOnly
            />
        </div>
    );


    
    //NOTE orderId is used to check which order that we're going to set status
    const handleStatusChange = (e) => {
        setUpdateText(e.target.value)
        setSuccessUp(false)
        setUpError(false)
       
    }
       

    const showSucessUpdate = () =>{
        if(successUp == true){

        return(
            <>
        <div className="alert alert-success" role="alert">

        <h5 className="text-center order-aleart-slip">อัพเดทสถาณะเป็น {updatetext} เรียบร้อย</h5>
        </div>
            </>
        )
            }
    }

    const [handleStatus, setHandleStatus] = useState('');
    const [handleUpdate, setHandleUpdate] = useState(false);

    const showStatusHeader = () => {
        if(successUp || handleUpdate ){
        return(
            <h3 className="mark mb-4 status-text">สถานะ: {handleStatus}</h3>

        )
        }
       else if(!handleUpdate){
            return(
                <h3 className="mark mb-4 status-text">สถานะ: {order.status}</h3>

            )
        }

    }

//SECTION UPDATE STATUS
const [showBtn, setShowBtn] = useState(false);
    const showStatus = ()=> (

         <form className="my-5  border p-5  " onSubmit={clickSubmit}>
             {showStatusHeader()}
            <div className="form-group text-center">

            <select
                className="form-control"
                onChange={e => handleStatusChange(e,order._id)}
            >
                <option value="เลือกอัพเดทสถานะที่นี่">เลือกอัพเดทสถานะที่นี่</option>
                {statusValues.map((status, index) => (
                    <option key={index} value={status}>
                        {status}
                    </option>
                ))}
            </select>
            <button  className="btn btn-primary mt-3">
            อัพโหลด
        </button>
            </div>
        </form>
    );


const [showFormStatus, setShowFormStatus] = useState(false);
    const showForm = () =>{
        if(showFormStatus==true){
        return(
            <>
            {showStatus()}
            </>
        )
        }
    }

    const showFormBtn = () => (
        <>
        {statusBtn()}
        </>
    )

    const statusBtn = () => {
        if(showFormStatus==true){
            return(
                <>
         <button type="button" onClick={()=>setShowFormStatus(false)}class="btn btn-pink">ซ่อน</button>

                </>

            )
        } if(showFormStatus==false){
            return(
            <>
             <button type="button" onClick={()=>setShowFormStatus(true)} class="btn btn-outline-info waves-effect">อัพเดทสถานะ</button>

            </>)
        }
    }

    
const button = () => (
    <>
    {showFormBtn()}
    {showForm()}


    </>
)

    const showOrder = () => (
        <div className="row">
        <div className="col-md-8 offset-md-2">
       {showSucessUpdate()}
       {showUpdateError()}
         
                    <div
                        className="mt-5"
                        style={{ borderBottom: "5px solid indigo" }}
                    >
                       <h2 className="mb-5">
                        <span>
                            <div className="row">
                           <div className="border text-white bg-dark order-id-title">เลขรายการ: </div>
                            <div className="col-5  order-id">{order._id}</div>
                            </div>
                        </span>
                        </h2>

                        <ul className="list-group mb-2">
                            <li className="list-group-item">
                                {showStatus()}
                            </li>

                            <li className="list-group-item">
                                ราคาทั้งหมด: ฿ {order.amount}
                            </li>

                            <li className="list-group-item">
                                ขนส่งด้วย: {shippingProvider.providerName}
                            </li>
                            <li className="list-group-item">
                                ค่าส่ง: ฿ {shippingProvider.shippingCost} 
                            </li>
                         
                            
{/*                 
                            <li className="list-group-item">
                                ราคาทั้งหมด: ฿ {showPrice()}
                            </li> */}

                            <li className="list-group-item">
                                สั่งซื้อโดย: {orderUser.name}
                            </li>
                            <li className="list-group-item">
                                อีเมลผู้สั่งซื้อ: {orderUser.email}
                            </li>
                            <li className="list-group-item">
                                สั่งเมื่อ:{" "}
                                {/* NOTE  use moment to format the date */}
                                {moment(order.createdAt).format('YYYY-MM-DD')} 
                            </li>
                           
                        </ul>

                        <h3 className="mt-4 mb-4 font-italic">
                            รายการสินค้าทั้งหมด:{" "}
                            {products.length}
                        </h3>

                        {products.map((p, pIndex) => (
                            <div
                                className="mb-4"
                                key={pIndex}
                                style={{
                                    padding: "20px",
                                    border: "1px solid indigo"
                                }}
                            >
                                {showInput("ชื่อสินค้า", p.name)}
                                {showInput("ราคาสินค้า", p.price)}
                                {showInput("จำนวน", p.count)}
                                {showInput("รหัสสินค้า", p._id)}

                            </div>


                        ))}
                       
        </div>
       
                    </div>
    </div>


    )

    const showAddress = () => (
        <div className="container">
 <h4 className="mt-4">ที่อยู่ของลูกค้า</h4>
<div className="mb-4 mt-4" style={{  padding: "20px",border: "1px solid indigo"}}
                            >
{showInput("ชื่อ-สกุล",address.name )}
{showInput("เบอร์ติดต่อ",address.phoneNumber )}
{showInput("บ้านเลขที่",address.houseNumber )}
{showInput("หมู่บ้าน",address.village)}
{showInput("ซอย",address.streetName)}
{showInput("ถนน",address.lane)}
{showInput("ตำบล",address.subDistrict)}
{showInput("อำเภอ",address.district)}
{showInput("จังหวัด",address.province)}
{showInput("รหัสไปรษณี",address.postalNo)}

</div>

</div>
    )

    const showSlip = () =>
    {
        if(order.upload == true ){
        return(
        <>
            <div className="alert alert-success" role="alert">

                <h5 className="text-center order-aleart-slip">ลูกค้าท่านนี้อัพโหลดหลักฐานการโอนเงินเรียบร้อยแล้ว</h5>
            </div>
            <button class="btn btn-outline-cyan btn-block mb-5" data-toggle="modal" data-target="#centralModalInfo">
                คลิกเพื่อดูหลักฐานการโอนเงิน<i class="fas fa-image pl-1"></i>
            </button>
            <PopUpSlip order = {order}/>
        </>
        )
        }else if(order.upload ==false){
            return(
                <>
                    <div className="alert alert-warning" role="alert">
                        <h5 className="text-center">ลูกค้าท่านนี้ยังไม่ได้อัพโหลดหลักฐานการโอนเงิน</h5>
                    </div>
                </>

            )

        }
    }


//SECTION DELETE order
const [deleteSuccess, setDeleteSuccess] = useState(false);
const [redirect, setRedirect] = useState(false);
const destroy = () => {
    deleteOrder(match.params.orderID, user._id, token).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            setDeleteSuccess(true);
        }
    });
};



const deleteBtn = () => {
    return(
        <div className="container-fluid mb-4">
            <div className="row">

           

                <div className="col justify-content-end">
                {displaySlipBtn()}


                    <button type="button" class="btn btn-danger btn-sm ml-5" data-toggle="modal" data-target="#centralModalDanger">ลบรายการนี้</button>
                </div>
    <PopUpDelete o={order} destroy={destroy}/>
</div>
        </div>
    )
}

const showOrderInfo = () => {
    if(!deleteSuccess && !error){
        return(
            <>
                    {deleteBtn()}

            <div className='container'>

        <div className="mb-4">
           </div>
           {displaySlip()}
           {showOrder()}         
           {showAddress()}
            </div>
            </>
        )

    }
}

const showDeleteSuccess = () => {
    if(deleteSuccess){
    return(
        <div class="alert alert-success text-center" role="alert">
        รายการ "{order._id}" ถูกลบเรียบร้อยแล้ว
      </div>
    )
    }if(error){
        return(
        <div class="alert alert-warning text-center" role="alert">
        {error}
      </div>
        )
    }
}

const goBack = () => {
    if(deleteSuccess || error){
    return(
    <div className="mt-5 mb-5 pb-5">
        <Link to="/vendor/orders" className="text-warning mb-5">
           <h4> กลับไปที่หน้า รายการสั่งซื้อทั้งหมด </h4>
        </Link>
    </div>
);
    }
    }

    const [triggerSlip, setTriggerShowSlip] = useState(false);
    const displaySlipBtn = () =>{
        if(triggerSlip){
        return(
            <>
         <button type="button" onClick={()=>setTriggerShowSlip(false)}class="btn btn-pink mb-4">ปิด</button>
            </>
        )
        }
        if(!triggerSlip){
            return(
            <>
             <button type="button" onClick={()=>setTriggerShowSlip(true)} class="btn btn-outline-info btn-lg waves-effect mb-4">ดูหลักฐานการโอนเงิน <i class="fas ml-2 fa-plus"></i></button>
    
            </>)
        }
        }
    

const displaySlip = () => {
    if(triggerSlip){
        return(
            <>
            {showSlip()}
            </>
        )
    }

}
    

    return (
        <Layout
            title="รายการสั่งซื้อ"
            description={`สวัสดีคุณ ${
                user.name
            }, คุณสามารถรายละเอียดรายการสั่งซื้อได้ที่นี่`}
            className="container-fluid"
            headerImg="dashBoardImgLayout"
        >
            
            {showDeleteSuccess()}
        {showOrderInfo()}
        
       {goBack()}
           
             </Layout>
    );
};

export default Orders;
