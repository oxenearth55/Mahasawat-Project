import React, { useState, useEffect } from "react";
import {Link, withRouter} from 'react-router-dom' 
import { getCategories, list } from "./apiCore";
import Card from "./Card";

const Search = ({history,handleSearch}) => {
    const [data, setData] = useState({
        categories: [],
        category: "",
        search: "",
        results: [],
        searched: false,
        trigger: false
    });

    // const {trigger, setTrigger} = useState()
    // const searchQuery = () => {
    //     this.props.history.push(`/shop/${query}`);

    // }

    const query = () => {
        return { search: {search} || undefined, category: category }
    }
    
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


    }, []);

    const searchData = () => {
        // console.log(search, category);
        if (search) {
            list({ search: search || undefined, category: category }).then(
                response => {
                    if (response.error) {
                        console.log(response.error);
                    } else {
                        setData({ ...data, results: response, searched: true, trigger: true }); //NOTE get result from backend and keep it in state
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
        history.push(`/shop/${search}`)


        // searchQuery();
    };

    const handleChange = name => event => {
        setData({ ...data, [name]: event.target.value, searched: false,trigger: true });
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
                <h2 className="mt-4 mb-4">
                    {searchMessage(searched, results)}
                </h2>

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

   

    return (
        <div className="row">
            <div className="container mb-3">{searchForm()}</div>
            <div className="container-fluid mb-3">
                {searchedProducts(results)}
        
            </div>
        </div>
    );
};

export default withRouter(Search);