import React, { useState,useEffect } from 'react';
import Layout from "./Layout"
import Card from "./Card"
import {getCategories, getFilteredProducts,getAllProducts} from "./apiCore"
import {getShop} from '../admin/apiAdmin'
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
    //ANCHOR Filter
    const [myFilters, setMyFilters] = useState({ // NOTE This State contain one property which is filters
        //NOTE filters contains one properties which is categories  as array (sub properties of filters)
        filters: {category: [], shop:[]} 

    });
    const [categories, setCategories] = useState([])
    const [error, setError] = useState(false)
    const [limit, setLimit] = useState() //NOTE limit product number at 6
    const [skip, setSkip] = useState(0)
    const [filterResults, setFilterResults] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [shopObject, setShopObject] = useState([])
    const [loading,setLoading] = useState(true);



    const getShopObject = () => {
        getShop().then(data => {
            if (data.error) {
                setError(data.error)
            } 
            else {
                setShopObject(data);
            }
        });
    };

  

    //ANCHOR Search 
    const [data, setData] = useState({
        search: false,
        results: []
        
    });

    const {search, results} =data;


    const trigger = props.match.params.search;
    const searchInput = props.match.params.searchResult;



    

    //ANCHOR ------------Life Cycle-----------------------------------------------
   
    useEffect(()=>{
        init()
        loadFilteredResults(skip,limit,myFilters.filters) 
    //NOTE   URL from router 
    const searchQuery = props.match.params.searchResult; //NOTE get searchQuery from URL
    // const categoryQuery = props.match.params.categoryResult;   
    // const trigger = props.match.params.trigger;
    searchData(searchQuery);
    window.scrollTo(0, 0)     
    getShopObject();

       
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
                setLoading(false)
            }
        })
    }

    const showLoading = () => {
        if(loading){
            return(
                <div className="text-center">
                <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-info" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-light" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-dark" role="status">
          <span class="sr-only">Loading...</span>
        </div>
                </div>
            )
        }
        }


    // NOTE grab filter (category) id that was filtered by checkbox before sending it to backend
    // NOTE  this method is used to set state from others component(Checkbox)
    const handleFilters = (filters, filterBy) => {
        const newFilters = {...myFilters}
        // NOTE filters came from Checkbox component
        newFilters.filters[filterBy] = filters 
        //this == categories that was checked
       
        loadFilteredResults(myFilters.filters) //NOTE grab category from the state and send these to backend
        setMyFilters(newFilters)
        console.log('issss ' + myFilters.filters.shop)

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
           
            <AllShop  product={results} search={true} filter ={myFilters} searchInput={searchInput}/> 
                   
            
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




const show = (trigger) =>{
   
    if(trigger == 1){
        return shopDisplay(results);
    }else{
        return defaultDisplay();
    }
}


const showFilterByShop = () =>{
if(trigger == ':search' ){
return(

 
    <div className="mb-5">
<h4 className="text-white text-center rgba-stylish-strong">
               คัดกรอง โดย ชื่อร้าน
             </h4> 
                <div className="mb-4 p-4 mb-2 rgba-blue-grey-slight border ">
             <Checkbox products={shopObject} ifShop={true}
             handleFilters={filters => handleFilters(filters,"shop")
            }     
    />
    </div>
    </div>
)}
        }

    return(
    <Layout
    title="หน้าสินค้า"
    description="คุณสามารถเลือกซื้อและรับชมสินค้ามากมายได้ที่นี่"
    className="container-fluid"
    headerImg = "shopImgLayout"
    >
     
         <h4 className="text-white text-center rgba-stylish-strong">
               คัดกรอง โดย ชนิดของสินค้า
             </h4> 
                <div className="mb-4 p-4 mb-2 rgba-blue-grey-slight border ">
             <Checkbox categories={categories} ifCategory={true}
             handleFilters={filters => handleFilters(filters,"category")
            }     
    />
    </div>

    {showFilterByShop()}

      
         {showLoading()}

    {show(trigger)}

   
     </Layout>



    );
}


export default Shop;