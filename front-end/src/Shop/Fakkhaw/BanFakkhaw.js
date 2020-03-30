import React, { useState, useEffect } from 'react';
import Layout from '../../core/Layout';
import { isAuthenticated } from '../../auth';
import {getProducts} from '../apiShop';
import { Link, Redirect } from 'react-router-dom';
import { getShop } from '../../admin/apiAdmin'; 
import DisplayProducts from '../DisplayProducts'
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import Blog3 from './Blog3';
import BlogHeader from './BlogHeader';
import Icon from './Icon';




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
    window.scrollTo(0, 0)     

  
},[] )


    return(
        <Layout
        title="ยินดีต้อนรับสู่ บ้านฟักข้าว"
        description={`คุณขนิษฐา`}
        className="container-fluid"
        headerImg="dashBoardImgLayout"
    >   
<>
<Blog1/>
<BlogHeader/>
<Icon/>

<Blog2/>
<Blog3/>

</>
    </Layout>


    );
}

export default BanFakkhaw;
