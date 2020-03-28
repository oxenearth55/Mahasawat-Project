import React, { useState,useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { getShop,updateShop,getSpecificShop } from './apiAdmin';
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

     // NOTE get product from backend by senind product ID from params
     const getShopInfo = shopId => {
        getSpecificShop(shopId).then(data => {
            if (data.error) {
                setError(true)
            } else {
                // populate the state
                setBankinfo({
                    ...bankinfo,
                    personName: data.personName,
                    bankName: data.bankName,
                    accountNumber: data.accountNumber                       
                });
                setShopID(data._id)
        
               
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
    const shopName = () => {
        if(user.role === 1 || user.role === 2){
            return (
            
            shopObject.map((s, i) => {
                if(s._id === user.shop){
                    return(
                    <div className ="row my-4 "> 
                       <h4 className="text-white bg-dark px-3 py-3">ร้านค้าของคุณคือ</h4><h4 className="border px-3 py-3">  {s.name}</h4> 
                       </div>
                    );
                }
            }
                  
            )
            );
    }
    }

    // SECTION Update Form 
    const handleChange = name => event => {

      
        setBankinfo({ ...bankinfo, [name]: event.target.value });

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
            }
        });
    };

    const bankUpdate = (personName, bankName, accountNumber) => (
        <form onSubmit={clickSubmit}>
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


            <div className="form-group">
                <label className="text-muted">description</label>
                <input type="text" onChange={handleChange('description')} className="form-control" value={accountNumber} />
            </div>
            <button  className="btn btn-primary">
                Submit
            </button>
        </form>
    );




    return(

      
         <Layout
    title="Manage Shop"
    description={`คุณสามาระตั้งค่าร้านค้าของคุณได้ที่นี่`}
    headerImg="dashBoardImgLayout"
>
    <>

    {shopName()}
    {bankUpdate()}


{user.shop}
    </>
                

</Layout>
   
    );

}

export default ManageShop; 