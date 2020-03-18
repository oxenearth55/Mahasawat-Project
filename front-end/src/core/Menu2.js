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
    
<nav class="mb-1 navbar navbar-expand-lg  default-color op-color">
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link className="nav-link text-white " to="/"><div className="text-white text-op">HOME </div><span class="sr-only">(current)</span></Link>

      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">Dropdown
        </a>
        <div class="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto nav-flex-icons">
      <li class="nav-item">
        <a class="nav-link waves-effect waves-light">
          <i class="fab fa-twitter"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link waves-effect waves-light">
          <i class="fab fa-google-plus-g"></i>
        </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-user"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right dropdown-default"
          aria-labelledby="navbarDropdownMenuLink-333">
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