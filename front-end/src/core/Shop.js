import React, { useState,useEffect } from 'react';
import Layout from "./Layout"
import Card from "./Card"
import {getCategories, getFilteredProducts} from "./apiCore"
import Checkbox from './Checkbox'
import {prices} from './fixedPrices'
import RadioBox from './RadioBox'
import Search from './Search'
import {list} from './apiCore'
import { getCategory } from '../admin/apiAdmin';



const Shop = props => {

    

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
    // NOTE Send result from Checkbox and RadioBox and send to backend
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
     
        console.log(`Intitial Object is ${ categoryQuery}`);
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
    <h2 className="mt-4 mb-4">
            {/* {showSearchMessage(results, search)} */}
            </h2>
            <div className="row">
                { results.map((product,i) => (
                    <div className="col-4 mb-4">
                        <Card key={i} product={product}/> 
                    </div>
                ))}
            </div>
        </div>      
        );
                };

//NOTE Display when user access to shop page directly (by click)
const defaultDisplay = () =>{
    return(  
        <div className="col-8">
        <div className="row">
       { console.log("Search result issss"+ data.search)}
            { filterResults.map((product,i) => (
                <div className="col-6 mb-4">
                    <Card key={i} product={product}/> 
                </div>
            ))}
        </div>
    </div>
    
    );

};


const handleSearch = (searchResult) =>{
    const newSearch = {...data}
    newSearch.search = searchResult
    setData(newSearch)
    console.log("Search result issss"+ newSearch.search)
};


    return(
    <Layout
    title="Shop page"
    description="Search and find product that you prefer"
    className="container-fluid"
    handleSearch ={search => handleSearch(search)}>
       
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
        </div>
        {/* {triggerSearch(trigger)} */}


         {defaultDisplay()}
         {/* {shopDisplay(data.results)} */}


    </div>

   
   
     </Layout>



    );
}


export default Shop;