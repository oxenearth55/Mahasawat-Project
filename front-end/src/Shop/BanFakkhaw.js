import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import {getProducts} from './apiShop';
import { Link, Redirect } from 'react-router-dom';
import { getShop } from '../admin/apiAdmin'; 
import DisplayProducts from './DisplayProducts'

const BanFakkhaw = () => {


const shopID = '5e6a17ac5c566806d6a101de';
const [shopObject, setShopObject] = useState([])
const [error, setError] = useState(false)


//SECTION grab Objects from back-end
// const grabProducts = () => {
   
//         getProducts().then(data => {
//             if (data.error) {
//                 setError(data.error)
//              } 
//             else {
//                 setProducts(data)
//             }
//         });  
// }

const grabShops = () => {
    getShop().then(data => {
        if (data.error) {
            setError(data.error);
        } 
        else {
            setShopObject(data);
        }
    });
}





useEffect(()=>{
  
},[] )


    return(
        <Layout
        title="ยินดีต้อนรับสู่ บ้านฟักข้าว"
        description={`คุณขนิษฐา`}
        className="container-fluid"
        headerImg="dashBoardImgLayout"
    >   

        <DisplayProducts shopID={shopID}/>

    </Layout>


    );
}

export default BanFakkhaw;
