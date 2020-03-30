import React, { useState, useEffect } from 'react';

const Checkbox = ({ categories, handleFilters }) => {
    const [checked, setCheked] = useState([]);
  
  

    const handleToggle = c => () => { //NOTE c is categories
        // return the first index or -1
        const currentCategoryId = checked.indexOf(c);
        const newCheckedCategoryId = [...checked];
        // if currently checked was not already in checked state > push
        // else pull/take off
        if (currentCategoryId === -1) {
            newCheckedCategoryId.push(c); 
        } else {
            newCheckedCategoryId.splice(currentCategoryId, 1); 
        }
        //NOTE keep category that was checked into Array
        setCheked(newCheckedCategoryId);
        //NOTE  send it back to parent (Shop.js page on <Checkbox/> for sending it to backend)
        handleFilters(newCheckedCategoryId);
    };

    return( 
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

    );
};

export default Checkbox;
