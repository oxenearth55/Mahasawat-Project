import React, { useState, useEffect } from 'react';
// import e from 'express';

const Checkbox = ({ categories, handleFilters,products, ifCategory=false, ifShop=false }) => {
    const [checked, setCheked] = useState([]);
  
  

    const handleToggle = c => () => { //NOTE c is categories
        // return the first index or -1
        const currentFilterId = checked.indexOf(c);
        const newCheckedFilterId = [...checked];
        // if currently checked was not already in checked state > push
        // else pull/take off
        if (currentFilterId === -1) {
            newCheckedFilterId.push(c); 
        } else {
            newCheckedFilterId.splice(currentFilterId, 1); 
        }
        //NOTE keep category that was checked into Array
        setCheked(newCheckedFilterId);
        //NOTE  send it back to parent (Shop.js page on <Checkbox/> for sending it to backend)
        handleFilters(newCheckedFilterId);
    };

    const filterByCategory = () => (
        <div className="row ">

        {categories.map((c, i) => (
        <div className="col-md-3 mt-2">
        <div class="form-check">
        <li key={i} className="list-unstyled">
            <input
                onChange={handleToggle(c._id)}
                value={checked.indexOf(c._id === -1)}
                type="checkbox"
                className="form-check-input ml-4" 
            />
            <label className="form-check-label ml-5"  >{c.name}</label>
        </li>
        </div>
        </div>
    ))}
    </div>

    )
    const filterByShop = () => (
        <div className="row ">

        {products.map((p, i) => {
        
        if(p.name != 'undefined'){
        return(
        <div className="col-md-3 mt-2">
        <div class="form-check">
        <li key={i} className="list-unstyled">
            <input
                onChange={handleToggle(p._id)}
                value={checked.indexOf(p._id === -1)}
                type="checkbox"
                className="form-check-input ml-4" 
            />
            <label className="form-check-label ml-5"  >{p.name}</label>
        </li>
        </div>
        </div>
    )}})}
    </div>
        
    )


    const showFilter = () => {
        if(ifCategory == true){
            return(
                <>
                {filterByCategory()}
            </>
            )
        }else if(ifShop == true){
            return(
                <>
                {filterByShop()}
                </>
            )
        }
    }

    return( 
       <>
    {showFilter()}
       </>
    );
};

export default Checkbox;
