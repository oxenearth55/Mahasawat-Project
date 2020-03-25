import React, { useState,useEffect } from 'react';
import Layout from "./Layout"
import Card from "./Card"
import {getCategories, getFilteredProducts, getShop} from "./apiCore"
import Checkbox from './Checkbox'
import {prices} from './fixedPrices'
import RadioBox from './RadioBox'
import Search from './Search'
import {list} from './apiCore'
import { getCategory } from '../admin/apiAdmin';
import ShowProduct from './Home-components/ShowProduct';
import { Link, Redirect } from 'react-router-dom';

import { isAuthenticated } from "../auth";
import AllShop from './AllShop';
 





const Shop = props => {

    
    const { user, token } = isAuthenticated();

    //SECTION State 

    //ANCHOR Filter

    const [myFilters, setMyFilters] = useState({ // NOTE This State contain one property which is filters
        //NOTE filters contains two properties which are categories and price as array (sub properties of filters)
        filters: {category: [], price:[]} 

    });

    const [categories, setCategories] = useState([])
    const [error, setError] = useState(false)
    const [limit, setLimit] = useState(6) //NOTE limit product number at 6
    const [skip, setSkip] = useState(0)
    const [filterResults, setFilterResults] = useState([])


  

    //ANCHOR Search 
    const [data, setData] = useState({
        search: false,
        results: []
        
    });

    const {search, results} =data;


    const trigger = props.match.params.search;


    

    //ANCHOR ------------Life Cycle-----------------------------------------------
   
    useEffect(()=>{
        init()
        loadFilteredResults(skip,limit,myFilters.filters) 
    //NOTE   URL from router 
    const searchQuery = props.match.params.searchResult; //NOTE get searchQuery from URL
    // const categoryQuery = props.match.params.categoryResult;   
    // const trigger = props.match.params.trigger;
    searchData(searchQuery);
       
 },[props] )
  //----------------------------------------------------------------

 
//SECTION Filters Method 

    //NOTE grab data from backend and keep it in state as an array
    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
             setCategories(data)
             
            }
        });
    };
    // NOTE Send result (categories ID and price range as Array) from Checkbox and RadioBox and send to backend
    const loadFilteredResults = (newFilters) =>{
        getFilteredProducts(skip, limit, newFilters).then(data => { //NOTE  this method will return result that match with filter
            if(data.error){
                setError(data.error)
            }else{
                setFilterResults(data.data) //NOTE set product result in state
            }
        })
    }

    // const triggerSearch = (trigger) => {
    //     if(trigger == true){
    //    return searchData(searchQuery,categoryQuery) 
    //     }else{
    //        return defaultDisplay();
    //     }
    // };



    // NOTE grab filter (category) id that was filtered by checkbox before sending it to backend
    // NOTE  this method is used to set state from others component(Checkbox)
    const handleFilters = (filters, filterBy) => {
        const newFilters = {...myFilters}
        // NOTE filters came from Checkbox component
        newFilters.filters[filterBy] = filters //this == categories that was checked
        if(filterBy =="price"){
            
            newFilters.filters[filterBy] = handlePrice(filters) // this == price from radio btn
            //NOTE now newFilters keep Array of prices 
        }
        loadFilteredResults(myFilters.filters) //NOTE grab both category and prices from the state and send these to backend
        setMyFilters(newFilters)

    };
     //NOTE grab array from prices before sending to backend 
     const handlePrice = value => { //NOTE this parameter (value) gets prices.id
         const data = prices;
         let array = []
         for(let key in data){ // NOTE use key to access current btn that was clicked 
             if(data[key]._id === parseInt(value)){ //NOTE parseInt is invert a string into a number
                array = data[key].array
             } 

         }
         return array;
     };
     


// SECTION Search Method
     const searchData = (searchQuery, categoryQuery) => {
     
           list({search: searchQuery || undefined }).then(
               response => {
                   if (response.error) {
                       console.log(response.error);
                   } else {
                       setData({ ...data, results: response}); //NOTE get result from backend and keep it in state
                   }
               }
           );
       
   };

   
    //  const showSearchMessage = (results = [], searched) => {
    //     if (searched && results.length > 0) { //NOTE if product was searched and at least 1 for product results
    //         return `Found ${results.length} products`;
    //     }
    //     if (searched && results.length < 1) {
    //         return `No products found`;
    //     }
    // };
    
    //NOTE Display when users searched
    const shopDisplay = (results = []) => {
        return(  
            <div className="col-8">
            <div className="row">
                { results.map((product,i) => (
                    <div className="col-6 mb-4">
                        <AllShop  product={product}/> 
                    </div>
                ))}
            </div>
        </div>
        );
                };

//NOTE Display when user access to shop page directly (by click)
const defaultDisplay = () =>{
    return(  
       
        <>
                    <AllShop product={filterResults}/> 
        </>
    
    );
};

// NOTE grab search trigger from Layout => Menu => Search component as (true condition)
const handleSearch = (searchResult) =>{
    const newSearch = {...data}
    newSearch.search = searchResult
    setData({...data, search: newSearch.search})
};



const show = (trigger) =>{
   
    if(trigger == 1){
        return shopDisplay(results);
    }else{
        return defaultDisplay();
    }
}

// SECTION Link Shop name



    return(
    <Layout
    title="Shop page"
    description="Search and find product that you prefer"
    className="container-fluid"
    headerImg = "shopImgLayout"
    >
     
    <div className="row ">
        <div className="col-4 ">
         <h4 className="text-white bg-dark">
               Filter by categories
             </h4> 
                <div className="mb-4 p-3 mb-2 bg-light text-dark">
             <Checkbox categories={categories} 
             handleFilters={filters => handleFilters(filters,"category")
            }     
    />
    </div>

             <h4 className="text-white bg-dark">
               Filter by price range
             </h4> 
           <div className="bg-light text-dark">
             <RadioBox prices={prices} 
             handleFilters={filters => handleFilters(filters,"price")
            }     
    />
        </div>


        <h4 className="text-white bg-dark">
                Related Shop   
             </h4> 
           <div className="bg-light text-dark">
         
          
        <Link to= {`/shop/banfakkhaw`}>       
            บ้านฟักข้าว
        </Link>

       
       
        </div>

        <Link to= {`/shop/nabua`}>       
            นาบัวลุงแจ่ม
        </Link>
    
        </div>
        {/* {triggerSearch(trigger)} */}


         {/* {shopDisplay(data.results)} */}


    </div>

    {show(trigger)}

   
     </Layout>



    );
}


export default Shop;