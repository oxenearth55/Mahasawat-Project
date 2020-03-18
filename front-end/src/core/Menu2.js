import React, { useState, useEffect } from 'react';
import {Link, withRouter} from 'react-router-dom' 
import './Menu.css'
import {signout, isAuthenticated} from '../auth' 
import Shop from './Shop'
import Search from './Search'
import {itemTotal} from './cartHelpers'

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBRow } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';




// const isActive = (history,path) => {
//     if(history.location.pathname === path){
//         return {color: '#ff9900'}
//     }else{
//         return {color: 'white'}
//     }
// }
// const {history} = this.state.push


// var { user } = isAuthenticated();


const Menu = ({history,handleSearch}) => {

    // NOTE State to grab search trigger from Search component
    const [data, setData] = useState({
        search: false
        });

        const {search} = data

    useEffect(() => {
        // showCartTotal() //NOTE get object (cart) from local storage
    }, []);

    const showCartTotal = () => {
        return(
            <sub>
                  <small className="cart-badge ">{itemTotal()}</small>
            </sub>
          

        ) 
    };

    // const setSearch = (searchResult) => {
    //     const newSearch = {...data}
    //     newSearch.search = searchResult
    //     handleSearched(newSearch.search)
    // }



    const handleSearched = (searchResult) =>{
        const newSearch = {...data}
        newSearch.search = searchResult
        setData({...data, search: newSearch.search})
        handleSearch(newSearch.search)
        // setSearch(newSearch.search)
        console.log("Search result issss"+ newSearch.search)
    };

    

    

return(
    
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">ds</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
      <Link className="nav-link" to="/">HOME <span class="sr-only">(current)</span></Link>
      </li>
     
    {/* NOTE For normal user (user.role === 0) */}
    {isAuthenticated() && isAuthenticated().user.role === 0 &&(
                        <li class="nav-item">
                        <Link className="nav-link" to="/user/dashboard">DASHBOARD</Link>
                        </li>

                    )}

 {/* NOTE For Merchant user (user.role === 1) */}
 {isAuthenticated() && isAuthenticated().user.role === 1 &&(
                        <li class="nav-item">
                        <Link className="nav-link" to="/admin/dashboard">DASHBOARD</Link>
                        </li>

                    )}

                     {/* NOTE For Admin user (user.role === 2) */}

                    {isAuthenticated() && isAuthenticated().user.role === 2 &&(
                        <li class="nav-item">
                        <Link className="nav-link" to="/admin/dashboard">DASHBOARD</Link>
                        </li>

                    )}

<li class="nav-item">
                        <Link className="nav-link" to="/shop/:searchResult/:search">SHOP</Link>
                    </li>


                    {isAuthenticated() && isAuthenticated().user.role === 0 &&(
                    <li class="nav-item">
                        <Link className="nav-link" to="/seeOrder">SEE ORDER</Link>
                    </li>
                                        )}



    
    </ul>
    <Search/>

    <li className="nav-item mx-2 cart-icon navbar-light nav ">
                <Link className="nav-link" to="/cart">
                <i class="cart fas fa-2x fa-shopping-cart mx-2 my-2"></i>
                {/*NOTE Show the number of product beside Cart icon */}
                {showCartTotal()}            
                </Link>
    </li>
    <ul class="navbar-nav mr-2 mt-2 mt-lg-0">

    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      </ul>

  </div>
  
</nav>

); };

export default withRouter(Menu);