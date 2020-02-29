import React, { useState, useEffect } from "react";
import {Link, withRouter} from 'react-router-dom' 
import { getCategories, list } from "./apiCore";
import Card from "./Card";
import './Search.css';


const Search = ({history,handleSearch}) => {
    const [data, setData] = useState({
        categories: [],
        category: "",
        search: "",
        results: [],
        searched: false,
        trigger: "0"
    });
    
    const { categories, category, search, results, searched, trigger} = data;
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
        loadCategories();
        searchForm();


    }, []);

    const searchData = () => {
        // console.log(search, category);
        if (search) {
            list({ search: search || undefined, category: category }).then(
                response => {
                    if (response.error) {
                        console.log(response.error);
                    } else {
                        setData({ ...data, results: response, searched: true, trigger: 1 }); //NOTE get result from backend and keep it in state
                        // console.log(`Result from Search ${data}`)
                    }
                }
            );
        }
    };
   

    const searchSubmit = e => {
        e.preventDefault();
        searchData();
        // console.log("check trigger " + trigger)

        // history.push(`/shop/${search}/${category}/${trigger}`)

        //NOTE if input box is blank, when user click submit btn again, it will display default product
       
        
            if(trigger == 1){
                if(search.length >= 1){
                    history.push(`/shop/${search}/${trigger}`)
                }
                else{
                    history.push(`/shop/:searchResult/:search`)
                }
            }else{
                history.push(`/shop/:searchResult/:search`)
        }
       

        const newSearch = {...data}
        newSearch.searched = true
        // handleSearch(newSearch.searched)


        // searchQuery();
    };

    const handleChange = name => event => {
        setData({ ...data, [name]: event.target.value, searched: false,trigger: 1 });
        
    };

    const searchMessage = (searched, results) => {
        if (searched && results.length > 0) { //NOTE if product was searched and at least 1 for product results
            return `Found ${results.length} products`;
        }
        if (searched && results.length < 1) {
            return `No products found`;
        }
    };

    const searchedProducts = (results = []) => { //NOTE defalut = empty array
        return (
            <div>
                {/* <h2 className="mt-4 mb-4">
                </h2> */}

                {/* <div className="row">
                    {results.map((product, i) => (
                        <div className="col-4 mb-3">
                            <Card key={i} product={product} />
                        </div>
                    ))}
                </div> */}
            </div>
        );
    };

    const searchForm = () => (
        <form onSubmit={searchSubmit}>

       <div class="container-fluid h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
          <input class="search_input" onChange={handleChange("search")}
 type="text" name="" placeholder="Search by name"/>
       <div class="search_icon">
           <div className="colorbtn">
           <button>
           <i class="fas fa-search"></i> 
           </button>
           </div>
       </div>
        </div>
      </div>
    </div>
    </form>
    );

   

    return (
    <div>  {searchForm()}</div>
         
           
    );
};

export default withRouter(Search);