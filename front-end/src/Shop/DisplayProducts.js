import React, { useState, useEffect } from 'react';
import {Link, withRouter} from 'react-router-dom' 
import ProductImage from '../core/ProductImage';
import {getProducts} from './apiShop';
import { getShop } from '../admin/apiAdmin'; 



const DisplayProducts = ({shopID}) => {

    //SECTION state

    const [shopObject, setShopObject] = useState([])
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    
    
    //SECTION grab Objects from back-end
    const grabProducts = () => {       
            getProducts().then(data => {
                if (data.error) {
                    setError(data.error)
                 } 
                else {
                    setProducts(data)
                }
            });  
    }
    
    
    //SECTION useEffect
    useEffect(()=>{
        grabProducts() 
    },[] )

    //SECTION display products from the shop
    
    const showProducts = () =>{
        return( 
            products.map((p, i) => {
            
            //NOTE Display only product from บ้านฟักข้าว
            if(p.shop === shopID){
            return(
               
                <div className ="row my-4 "> 
                <h4 >{p.name}</h4> 
                <div className="col-4">

                </div>
                </div>           
    
            )
            }
            }
        
        )
        )   
        
    };
    

    return(
        <div>
            {showProducts()}
        </div>

    );
};

export default DisplayProducts;