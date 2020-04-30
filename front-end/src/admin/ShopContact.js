import React, { useState,useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { getShop,updateShopQrLine,getSpecificShop,updateShopContact } from './apiAdmin';
import { read } from '../user/apiUser';




const ShopContact = () => {

    const [contact, setContact] = useState({
        contactName: '',
        phoneNumber: '',
        email: '',
        lineId:'',
       
    });
    const {contactName, phoneNumber, email,lineId} = contact;

    const [photo, setPhoto] = useState({
        lineQr:'',
        formData:''
    })

    const {lineQr, formData} = photo

    const { user, token } = isAuthenticated(); //NOTE Grab use info from jwt 
    const [shopID, setShopID] = useState([]);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [shopName, setShopName] = useState('');

    const [showQrCode, setQrCode] = useState(false);


    const [values, setValues] = useState({
        photo:'',
        formData:''

    })

    // const {shopInfo, setShopInfo} = ([]);

    //SECTION useEffect
    useEffect(() => {
        // getUserInfo(user._id);
        getShopInfo(user.shop);
    }, []);

   

    //SECTION Update Shop for Admin only
 

    const showShopName = () => {
        return(
        
                    <>
                    <h4 className="mb-5 bg-dark white-text text-center py-3">ร้านค้าของคุณ: {shopName}</h4>
                    </>
             
        )
    }

     // NOTE get the shop from backend
     const getShopInfo = shopId => {
        getSpecificShop(shopId).then(data => {
            if (data.error) {
                setError(true)
            } else {
                setShopName(data.name)
                setContact({
                    ...contact,
                    contactName: data.contact.contactName,
                    phoneNumber: data.contact.phoneNumber,
                    email: data.contact.email,
                    lineId: data.contact.lineId,
                    lineQr:   data.contact.lineQr,
                    formData: new FormData()                    
                });
                setShopID(data._id)
                setPhoto({
                    ...photo,
                    lineQr:data.contact.lineQr,
                    formData: new FormData()

                })

               
            }
        });
    };
    //NOTE get user info
    const getUserInfo = userId => {
        // console.log(userId);
        //NOTE  grab user information from backend
        read(userId, token).then(data => {
            if (data.error) {
                setError(true)
            } else {
                // setBankinfo({ ...bankinfo}); //NOTE 
            }
        });
    };


   

    // SECTION Update Form 
    const handleChange = name => event => {
        const value = name === 'lineQr' ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setContact({ ...contact, [name]: value });     
    };

    const clickSubmit = event => {
        event.preventDefault();
        updateShopContact(shopID,user._id,token, {contact}).then(data => {
            if (data.error) {
                // console.log(data.error);
                alert(data.error);
            } else {              
                    setContact({
                        ...contact,
                        contactName: data.contact.contactName,
                        phoneNumber: data.contact.phoneNumber,
                        email: data.contact.email,
                        lineId: data.contact.lineId,
                        lineQr:   data.contact.lineQr
                    });
                    setSuccess(true);
            }
        });
    };

    const updateForm = () => (
        <form className="my-5" onSubmit={clickSubmit}>
            <h3>ข้อมูลการติดต่อ</h3>          
            <div className="form-group">
                <label className="text-muted">ชื่อผู้ติดต่อ</label>
                <input type="text" onChange={handleChange('contactName')} className="form-control" value={contactName} />
            </div>
            <div className="form-group">
                <label className="text-muted">เบอร์โทรศัพท์</label>
                <input type="text" onChange={handleChange('phoneNumber')} className="form-control" value={phoneNumber} />
            </div>

            <div className="form-group">
                <label className="text-muted">{`อีเมล (การแจ้งเตือนการซื้อขาย จะถูกส่งไปที่อีเมลนี้)`} </label>
                <input type="email" onChange={handleChange('email')} className="form-control" value={email} />
            </div>
    
            <div className="form-group">
                <label className="text-muted">ไลน์ไอดี </label>
                <input type="text" onChange={handleChange('lineId')} className="form-control" value={lineId} />
            </div>
            <button  className="btn btn-primary">
                ยืนยัน
            </button>
        </form>
    );


    const showSuccess = success => {
        if(success){
            return(
                <>
                <div class="alert alert-success text-center" role="alert">
                     อัพเดทการติดต่อสำเร็จ
                </div>
                </>
            )
        }
    }

    

    //SECTION QR CODE 
    const clickSubmit2 = event => {
        event.preventDefault();
        // NOTE Update changes to backend 
        updateShopQrLine(shopID, user._id, token, formData).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
              setSuccess(true);
            }
        });
    };

    const handleChange2 = name => event =>{
        const value = name === 'lineQr' ? event.target.files[0] : event.target.value;
        formData.set('lineQr',value)
    }


    const formQrCode = () => (
        <form className="my-5  border p-5  " onSubmit={clickSubmit2}>
        <h3 className='text-center'>อัพโหลดไลน์ Qr Code ที่นี่</h3>
        <div className="form-group text-center">
            <label className="btn btn-secondary">
                <input onChange={handleChange2('lineQr')} type="file" name="lineQr" accept="image/*" />
            </label>
       
        <button  className="btn btn-primary">
            อัพโหลด
        </button>
        </div>

    </form>
    )

    const showQR = () =>{
        if(showQrCode==true){
        return(
            <>
            {formQrCode()}
            </>
        )
        }
    }

    const setShowQr = () => (
        <>
        {qrBtn()}
        </>
    )

    const qrBtn = () => {
        if(showQrCode==true){
            return(
                <>
         <button type="button" onClick={()=>setQrCode(false)}class="btn btn-pink">ซ่อน</button>

                </>

            )
        } if(showQrCode==false){
            return(
            <>
             <button type="button" onClick={()=>setQrCode(true)} class="btn btn-outline-info waves-effect">อัพเดทไลน์ QrCode</button>

            </>)
        }
    }

    return(

      
         <Layout
    title="จัดการบัญชี"
    description={`คุณสามารถจัดการบัญชีธนาคารของคุณได้ที่นี่`}
    headerImg="dashBoardImgLayout"
>
    <div className="container">
    {showShopName()}
    {showSuccess(success)}
    {setShowQr()}
    {showQR()}
    {updateForm()}
    </div>
                

</Layout>
   
    );

}

export default ShopContact; 