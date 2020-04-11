import React, { useState,useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { getShop,updateShop,getSpecificShop,updateQrCode } from './apiAdmin';
import { read } from '../user/apiUser';




const ManageShop = () => {

    const [bankinfo, setBankinfo] = useState({
        personName: '',
        bankName: '',
        accountNumber: ''
    });
    const {personName, bankName, accountNumber} = bankinfo;
    const [shopObject, setShopObject] = useState([]); //NOTE sate stand for shop Arry of Object
    const { user, token } = isAuthenticated(); //NOTE Grab use info from jwt 
    const [shopID, setShopID] = useState([]);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const [showQrCode, setQrCode] = useState(false);


    const [values, setValues] = useState({
        photo:'',
        formData:''

    })

    const {photo,formData} = values


    // const {shopInfo, setShopInfo} = ([]);

    //SECTION useEffect
    useEffect(() => {
        // getUserInfo(user._id);
        getShopObject();
        getShopInfo(user.shop);
    }, []);

    //NOTE grab shop object from database
    const getShopObject = () => {
        getShop().then(data => {
            if (data.error) {
               setError(true)
             } 
            else {
                setShopObject(data);
            }
        });
    };

     // NOTE get the shop from backend
     const getShopInfo = shopId => {
        getSpecificShop(shopId).then(data => {
            if (data.error) {
                setError(true)
            } else {
                // populate the state
                setBankinfo({
                    ...bankinfo,
                    personName: data.bankAccount.personName,
                    bankName: data.bankAccount.bankName,
                    accountNumber: data.bankAccount.accountNumber                       
                });
                setShopID(data._id)
                setValues({...values,
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


    //NOTE Display shop name 
    // const shopName = () => {
    //     if(user.role === 1 || user.role === 2){
    //         return (
            
    //         shopObject.map((s, i) => {
    //             if(s._id === user.shop){
    //                 return(
    //                 <div className ="row my-4 "> 
    //                    <h4 className="text-white bg-dark px-3 py-3">ร้านค้าของคุณคือ</h4><h4 className="border px-3 py-3">  {s.name}</h4> 
    //                    </div>
    //                 );
    //             }
    //         }
                  
    //         )
    //         );
    // }
    // }

    // SECTION Update Form 
    const handleChange = name => event => {

      console.log('shop id is '+ shopID)
      if(name=='photo'){

        setBankinfo({ ...bankinfo, [name]: event.target.files[0]  });

      }else{
        setBankinfo({ ...bankinfo, [name]: event.target.value });
      }

    };

    const clickSubmit = event => {
        event.preventDefault();
        updateShop(shopID,user._id,token, {bankinfo}).then(data => {
            if (data.error) {
                // console.log(data.error);
                alert(data.error);
            } else {              
                    setBankinfo({
                        ...bankinfo,
                        personName: data.personName,
                        bankName: data.bankName,                     
                        accountNumber: data.accountNumber
                    });
                    setSuccess(true);
            }
        });
    };

    const bankUpdate = (personName, bankName, accountNumber) => (
        <form className="my-5" onSubmit={clickSubmit}>
            <h3>จัดการบัญชี</h3>
          
            <div className="form-group">
                <label className="text-muted">ชื่อ</label>
                <input type="text" onChange={handleChange('personName')} className="form-control" value={personName} />
            </div>
            <div className="form-group">
                <label className="text-muted">ชื่อธนาคาร</label>
                <input type="text" onChange={handleChange('bankName')} className="form-control" value={bankName} />
            </div>

            <div className="form-group">
                <label className="text-muted">หมายเลขบัญชี</label>
                <input type="text" onChange={handleChange('accountNumber')} className="form-control" value={accountNumber} />
            </div>
    
            <button  className="btn btn-primary">
                Submit
            </button>
        </form>
    );


    const showSuccess = success => {
        if(success){
            return(
                <>
                <div class="alert alert-success text-center" role="alert">
                     อัพเดทบัญชีสำเร็จ
                </div>
                </>
            )
        }
    }

    //SECTION QR CODE 
    const clickSubmit2 = event => {
        event.preventDefault();
        // NOTE Update changes to backend 
        updateQrCode(shopID, user._id, token, formData).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
              setSuccess(true);
            }
        });
    };


    const handleChange2 = name => event =>{
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        formData.set('photo',value)

        // setValues({...values, photo: e.target.files[0]})
    }

    const formQrCode = () => (
        <form className="my-5  border p-5  " onSubmit={clickSubmit2}>
        <h3 className='text-center'>อัพโหลด Qr Code สำหรับการโอนเงิน</h3>
        <div className="form-group text-center">
            <label className="btn btn-secondary">
                <input onChange={handleChange2('photo')} type="file" name="photo" accept="image/*" />
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
             <button type="button" onClick={()=>setQrCode(true)} class="btn btn-outline-info waves-effect">อัพเดทQrCode</button>

            </>)
        }
    }

    return(

      
         <Layout
    title="Manage Shop"
    description={`คุณสามาระตั้งค่าร้านค้าของคุณได้ที่นี่`}
    headerImg="dashBoardImgLayout"
>
    <div className="container">
    {showSuccess(success)}
    {setShowQr()}
    {showQR()}
    {bankUpdate(personName, bankName, accountNumber)}
    </div>
                

</Layout>
   
    );

}

export default ManageShop; 