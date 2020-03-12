import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link, Redirect } from 'react-router-dom';
import { readShop } from '../core/apiCore';



//NOTE get Shop Object via parameter 
const EachShop = ({shopID}) => {

//SECTION State
const [Shop, setShop] = useState({}); //grab the shop from backend 
const [error, setError] = useState(false);


//NOTE Retrive Shop Object from Backend by using shopID from Parameter
const loadSingleShop = shopId => {
    //NOTE  use read method from apiCore to get single product that related to productId
  
    readShop(shopID).then(data => {
        if (data.error) {
            setError(data.error);
        } else {
            setShop(data);
        }});
    };



    return(      
        <Layout
        title="Welcome to "
        description={`hello`}
        className="container-fluid"
        headerImg="dashBoardImgLayout"
    >   

    {Shop.name}
    
        
        {shopID}

    </Layout>

   
    )
}

export default EachShop ;