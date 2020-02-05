import React, { useState,useEffect, useContext } from 'react';
import Layout from "./Layout"
import Card from "./Card"
import {getCategories, getFilteredProducts, list} from "./apiCore"
import Checkbox from './Checkbox'
import {prices} from './fixedPrices'
import RadioBox from './RadioBox'
import Search from './Search'


const Shop = () => {
    // NOTE results contain products result according to search component
    const [myFilters, setMyFilters] = useState({ // NOTE This State contain one property which is filters
        //NOTE filters contains two properties which are categories and price as array (sub properties of filters)
        filters: {category: [], price:[]} 

    });
    const [data, setData] = useState({
        category: "",
        search: "",
        results: [],
        searched: false,
        test:"Test"
        
    });
    const {  category, search, results, searched } = data;

    const [categories, setCategories] = useState([])
    const [error, setError] = useState(false)
    const [limit, setLimit] = useState(6) //NOTE limit product number at 6
    const [skip, setSkip] = useState(0)
    const [filterResults, setFilterResults] = useState([])
    const [searchFilter, setSearchFilter] = useState([])


    

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
        loadCategories();

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

     

     

    // NOTE Get categories from backend via apiCore
    const loadCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setData({ ...data, categories: data });
            }
        });
    };

    useEffect(() => {
    }, []);

    const searchData = () => {
        // console.log(search, category);
        if (search) {
            list({ search: search || undefined, category: category }).then(
                response => {
                    if (response.error) {
                        console.log(response.error);
                    } else {
                        setData({ ...data, results: response, searched: true }); //NOTE get result from backend and keep it in state

                    }

                }
            );
        }
    };

    const searchSubmit = e => {
        e.preventDefault();
        searchData(); 
    };

    const handleChange = name => event => {
        setData({ ...data, [name]: event.target.value, searched: false });

    };

    const searchMessage = (searched, results) => {
        if (searched && results.length > 0) { //NOTE if product was searched and at least 1 for product results
            return `Found ${results.length} products`; // Show number of product that was found
        }
        if (searched && results.length < 1) {
            return `No products found`;
        }
    };


    const searchedProducts = (results=[] ) => { //NOTE defalut = empty array
        return (
            <div>
                <h2 className="mt-4 mb-4">
                    {searchMessage(searched, results)}
                </h2>
                <div className="row">
                    {results.map((product, i) => (
                            <Card key={i} product={product} />
                    ))}
                </div>
 
            </div>
        );
    };

    const searchForm = () => (
        <form onSubmit={searchSubmit}>
            <span className="input-group-text">
                <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <select
                            className="btn mr-2"
                            onChange={handleChange("category")}
                        >
                            <option value="All">All</option>
                            {/* NOTE grab categories from the state */}
                            {categories.map((c, i) => (
                                <option key={i} value={c._id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <input
                        type="search"
                        className="form-control"
                        onChange={handleChange("search")}
                        placeholder="Search by name"
                    />
                </div>
                <div
                    className="btn input-group-append"
                    style={{ border: "none" }}
                >
                    <button className="input-group-text">Search</button>
                </div>
            </span>
        </form>
    );
    
    const displayResult = () => {

        if(search) {
            return searchedProducts(results)
        }else {
            return filterResults.map((product,i) =>
            <Card key={i} product={product}/>
            
    )
        }

    };

    return(
    <Layout
    title="Shop page"
    description="Search and find product that you prefer"
    className="container-fluid"
    
    >
    
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
         
            </div>
            {searchForm()}
            {displayResult()}

        </div>
    </div>
   
   
     </Layout>



    );
}

export default Shop;