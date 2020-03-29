import React, { useState,useEffect } from 'react';
import Layout from "./Layout"
import Card from "./Card"
import {getCategories, getFilteredProducts, getShop} from "./apiCore"
import Checkbox from './Checkbox'
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
        //NOTE filters contains one properties which is categories  as array (sub properties of filters)
        filters: {category: []} 

    });

    const [categories, setCategories] = useState([])
    const [error, setError] = useState(false)
    const [limit, setLimit] = useState() //NOTE limit product number at 6
    const [skip, setSkip] = useState(0)
    const [filterResults, setFilterResults] = useState([])
    const [searchResults, setSearchResults] = useState([])


  

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
    // NOTE Send result (categories ID as Array) from Checkbox and RadioBox and send to backend
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
       
        loadFilteredResults(myFilters.filters) //NOTE grab category from the state and send these to backend
        setMyFilters(newFilters)

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
           
            <AllShop  product={results} search={true} filter ={myFilters}/> 
                   
            
        );
                };

//NOTE Display when user access to shop page directly (by click)
const defaultDisplay = () => {
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