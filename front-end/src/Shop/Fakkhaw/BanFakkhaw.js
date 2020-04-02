import React, { useState, useEffect } from 'react';
import Layout from '../../core/Layout';
import Menu from '../../core/Menu'
import Footer from '../../core/Footer'
import { isAuthenticated } from '../../auth';
import {getProducts} from '../apiShop';
import { Link, Redirect } from 'react-router-dom';
import { getShop } from '../../admin/apiAdmin'; 
import {getAllProducts} from '../../core/apiCore';
import AllShop from '../../core/AllShop';
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import Blog3 from './Blog3';
import Blog4 from './Blog4';
import Blog5 from './Blog5';
import Example from './Example'
import Cover from './ cover'
import BlogHeader from './BlogHeader';
import Icon from './Icon';
import Person from './Person';
import Contract from './Contract';
import Cover1 from './cover1';
import Cover2 from './cover2';
import Cover3 from './cover3';
import Cover4 from './cover4';



import { MDBAnimation } from "mdbreact";



const BanFakkhaw = () => {


const shopID = '5e6a17ac5c566806d6a101de';
const [shopObject, setShopObject] = useState([])
const [error, setError] = useState(false)
const [allProducts,setAllProducts] = useState([])
const [fakkhawProducts,setFakkhawProducts] = useState([]);



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

const loadAllProducts = () =>{
    getAllProducts().then(data => {
        if (data.error) {
            setError(data.error);
        } else {
         setAllProducts(data)
         filterFakkhawProducts(data)
         
        }
    });
}

const filterFakkhawProducts = (pro) =>{
    const array =[];
    {pro.map((p,i)=> {
        if(p.shop._id ==='5e6a17ac5c566806d6a101de'){
            array.push(p)
        }
    }

    )

}
setFakkhawProducts(array)

}

// const productCard = () =>{




// }




useEffect(()=>{
    loadAllProducts();
    window.scrollTo(0, 0)     

  
},[] )


    return(
       
<>
<Menu/>
<Cover/>

<Blog1/>

<BlogHeader/>
<Icon/>
<Cover1/>
<Blog2/>
<Example/>
<Cover2/>
<Blog3/>
<Cover3/>
<Blog4/>
<Cover4/>
<Blog5/>

<AllShop product={fakkhawProducts}/>

{/* <Person/> */}
<Contract/>
<Footer/>

</>


    );
}

export default BanFakkhaw;
