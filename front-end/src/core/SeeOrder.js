import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { listOrders, getStatusValues, updateOrderStatus, uploadSlip } from "../admin/apiAdmin";
import moment from "moment";
//Import logo.png
import waiting from './Logo/waiting.png'
import confirm from './Logo/confirmation.png'
import payment from './Logo/payment.png'
import packaging from './Logo/packaging.png'
import delivery from './Logo/delivery.png'
import ProductImage from './ProductImage'
import Card from './Card'
import {readOrder} from './apiCore'



const SeeOrder = (props) => {

    const [orders, setOrders] = useState([]);
    const { user, token } = isAuthenticated();
    const [slip,setSlip] =useState('');
    const [error,setError] =useState('');
    const [success,setSuccess] =useState(false);
    const [order,setOrder] =useState([]);
    const [products, setProducts] =useState([]);
    const [address , setAddress] = useState([]);


    const [values, setValues] = useState({    
        photo: '',    
        error: '',
        formData: ''
    });

    const {photo,formData,} =  values;


    const showUpSlip = () =>
(
    <label className="btn btn-secondary">
    <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
    {/* <input onChange={handleChange('address')} type="text" className="form-control"  /> */}


</label>
)

const clickSubmit = () =>{
    uploadSlip(order._id,user._id, token, formData).then(data => {
        if (data.error) {
            setError(data.error);
        } else {
            setSuccess(true);

}
    })

}

const handleChange = name => event => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
    console.log('Form is '+value);

    formData.append(name, value);
// Log the key/value pairs
for (var pair of formData.entries()) {
    console.log(pair[0]+ ' - ' + pair[1]); 

};

}

    const loadOrder = orderId => {
        //NOTE Get orders from backend
        readOrder(orderId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setOrder(data)
                setProducts(data.products)
                setAddress(data.address)

                setValues({
                    ...values,                   
                    formData: new FormData()
                });

            }
        });
    };


    useEffect(() => {
        const orderId = props.match.params.orderId;

        loadOrder(orderId);
       
    }, []);


   

    //SECTION order status Icon

    const statusIcon = (orderStatus) => { 

            if(orderStatus === 'Awaiting Confirmation' || orderStatus === 'Not processed'){
                return (

                    <div className="container-fluid border  border-dark">
                       
                        <div className="row mt-4"> 
                                <div className="col-3 text-center">
                                    <img className ="logo" src={waiting}></img>
                                    <p>Awaiting Confirmation</p>
                                </div>

                                <div className="col-3 text-center">
                                    <img className ="logo ml-4 unStatus" src={confirm}></img>
                                    <p className="unStatus">Order Confirmation</p>
                                </div>    

                                <div className="col-3 text-center">
                                    <img className ="logo unStatus" src={packaging}></img>
                                    <p className="unStatus">Packaging</p>
                                </div>    

                                <div className="col-3 text-center">
                                    <img className ="logo unStatus" src={delivery}></img>
                                    <p className="unStatus">Shipping</p>
                                </div>        

                        </div>
                    </div>
                )
            }else if(orderStatus === 'Order Confirmation'){
                return (
                    <div className="container-fluid border  border-dark">
                       
                    <div className="row mt-4"> 
                            <div className="col-3 text-center">
                                <img className ="logo unStatus" src={waiting}></img>
                                <p className="unStatus">Awaiting Confirmation</p>
                            </div>

                            <div className="col-3 text-center">
                                <img className ="logo ml-4" src={confirm}></img>
                                <p>Order Confirmation</p>
                            </div>    

                            <div className="col-3 text-center">
                                <img className ="logo unStatus " src={packaging}></img>
                                <p className="unStatus">Packaging</p>
                            </div>    

                            <div className="col-3 text-center">
                                <img className ="logo unStatus" src={delivery}></img>
                                <p className="unStatus">Shipping</p>
                            </div>        

                    </div>
                </div>
                )

            }else if(orderStatus === 'Packaging'){
                return (
                    <div className="container-fluid border  border-dark">
                       
                    <div className="row mt-4"> 
                            <div className="col-3 text-center">
                                <img className ="logo unStatus" src={waiting}></img>
                                <p className="unStatus">Awaiting Confirmation</p>
                            </div>

                            <div className="col-3 text-center">
                                <img className ="logo ml-4 unStatus" src={confirm}></img>
                                <p className="unStatus">Order Confirmation</p>
                            </div>    

                            <div className="col-3 text-center">
                                <img className ="logo " src={packaging}></img>
                                <p>Packaging</p>
                            </div>    

                            <div className="col-3 text-center">
                                <img className ="logo unStatus" src={delivery}></img>
                                <p className="unStatus">Shipping</p>
                            </div>        

                    </div>
                </div>
                )

            }else if(orderStatus === 'Shipping'){
                return (
                    <div className="container-fluid border  border-dark">
                       
                    <div className="row mt-4"> 
                            <div className="col-3 text-center">
                                <img className ="logo unStatus " src={waiting}></img>
                                <p className="unStatus">Awaiting Confirmation</p>
                            </div>

                            <div className="col-3 text-center">
                                <img className ="logo ml-4 unStatus" src={confirm}></img>
                                <p className="unStatus">Order Confirmation</p>
                            </div>    

                            <div className="col-3 text-center">
                                <img className ="logo unStatus " src={packaging}></img>
                                <p className="unStatus">Packaging</p>
                            </div>    

                            <div className="col-3 text-center">
                                <img className ="logo" src={delivery}></img>
                                <p >Shipping</p>
                            </div>        

                    </div>
                </div>
                )
            }else if(orderStatus === 'Cancelled'){
                return (
                    <div>
                        <p>This order is Cancelled</p>
                    </div>
                )
            }else{
                return  ''
            }



        }

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
    

    const showOrders = () => (
        

             //NOTE use this condition to match which order came from this user
             // orders contains properties such as user Object 
             // Inside user object contain _id as a property 
         <>
                <div
                    className="mt-5"
                    
                    style={{ borderBottom: "5px solid indigo" }}
                >
                    {showUpSlip()}
                    <button onClick={clickSubmit} class="btn btn-primary btn-lg btn-block" type="submit">Upload Slip</button>

                    <h2 className="mb-5">
                        <span>
                            <div className="row">
                           <div className="border text-white bg-dark"> Your Order ID: </div>
                            <div className="col-5 border">{order._id}</div>
                            </div>
                        </span>
                        
                    </h2>
                    <h4 className="mb-4">Order Status</h4>
                    {statusIcon(order.status)}
                    {order.status}
                    


                    <ul className="list-group mt-4 mb-2">
                        <li className="list-group-item text-white bg-dark ">
                            <h3 className="text-center ">Order Detail </h3>
                        </li>
                        <li className="list-group-item">
                            Transaction ID: {order.transaction_id}
                        </li>
                        <li className="list-group-item">
                            Amount: ฿{order.amount}
                        </li>
                        <li className="list-group-item">
                            Ordered by: {user.name}
                        </li>
                        <li className="list-group-item">
                            Ordered on:{" "}
                            {/* NOTE  use moment to format the date */}
                            {moment(order.createdAt).fromNow()} 
                        </li>
                       
                    </ul>

                    <h3 className="mt-4 mb-4 font-italic">
                        Total products in the order:{" "}
                        {products.length}
                    </h3>

                    {products.map((p, pIndex) => (
                        <div
                            className="mb-4 "
                            key={pIndex}
                            style={{
                                padding: "20px",
                                border: "1px solid indigo"
                            }}
                        >
                            
                            {showInput("Product name", p.name)}
                            {showInput("Product price", p.price)}
                            {showInput("Product total", p.count)}
                                      

                        </div>
                    ))}
                </div>
   
        </>
        
     


    );


const showAddress = () => (
       <>
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
</>
    );


    return(
        <Layout
            title="See Your Orders"
            description={`Hi ${
                user.name
            }, you can see your order here`}
            className="container-fluid"
            headerImg="dashBoardImgLayout"
        > 
            {showOrders()}
            {showAddress()}
            {/* {showStatus()} */}

        </Layout>

    );
        };

export default SeeOrder;