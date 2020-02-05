import React, { useState,useEffect } from 'react';
import Layout from "./Layout"
import Card from "./Card"
import {getCategories, getFilteredProducts} from "./apiCore"
import Checkbox from './Checkbox'
import {prices} from './fixedPrices'
import RadioBox from './RadioBox'


const Shop = () => {

    const [myFilters, setMyFilters] = useState({ // NOTE This State contain one property which is filters
        //NOTE filters contains two properties which are categories and price as array (sub properties of filters)
        filters: {category: [], price:[]} 

    });

    const [categories, setCategories] = useState([])
    const [error, setError] = useState(false)
    const [limit, setLimit] = useState(6) //NOTE limit product number at 6
    const [skip, setSkip] = useState(0)
    const [filterResults, setFilterResults] = useState([])


    

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

    useEffect(()=>{
        init()
        loadFilteredResults(skip,limit,myFilters.filters) 
    },[] )

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
     

    return(
    <Layout
    title="Shop page"
    description="Search and find product that you prefer"
    className="container-fluid">
       
    <div className="row">

        <div className="col-4">
            
            <h4>
               Filter by categories
             </h4> 
             <Checkbox categories={categories} 
             handleFilters={filters => handleFilters(filters,"category")
            }     
    />

             <h4>
               Filter by price range
             </h4> 
             <RadioBox prices={prices} 
             handleFilters={filters => handleFilters(filters,"price")
            }     
    />
        </div>




        <div className="col-8">
            <h2 className="mb-4">Products</h2>
            <div className="row">
                {filterResults.map((product,i) =>
                    <div className="col-4 mb-4">
                        <Card key={i} product={product}/> 
                    </div>
                )}
            </div>
        </div>
    </div>

   
   
     </Layout>



    );
}

export default Shop;