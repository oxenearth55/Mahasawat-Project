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
                  <small className="cart-badge text-light ">{itemTotal()}</small>
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

    const topMenu = () =>(
<header className="menu-font">
    {/*SECTION First-nav */}
    <MDBContainer className = "p-0 h-1">
        {        console.log("Search result is Menu333 " + data.search)
}

        <MDBRow>
            <div className = "col-md-4 col-sm-12 col-12 ">
                <div className = ".btn-grpup">
                    <button className="btn border dropdown-toggle my-md-4 my-2 text-white"
                     data-toggle="dropdown"
                     aria-haspopup="true"
                     aria-expanded="false">EN</button>

                     <div className="dropdown-menu">
                         <a href="/" className="dropdown-item">TH - Thai</a>
                     </div>
                </div>
            </div>
            <div className="col-md-4 col-12 text-center site-title  ">
                <h3 className="my-md-3 text-white">Mahasawat Store</h3>
            </div>
            <div className="col-md-4 col-12 text-right ">
                <p className="my-md-4 header-links">
                   {/* NOTE  if user does not login, show SignIn and SignUp btn */}
                   
                    {!isAuthenticated() && (
                        <div>
                         {/* SECTION  SignIn */}
                            <Link className="px-2 text" to="/signin">SignIn</Link>

                         {/* SECTION  SignUp */}
                            <Link className="px-2 text" to="/signup">Create an Account</Link>
                    
                        </div>

                    )}


                    {/* NOTE if user has already login, show only SignOut btn on nav */}
                    {isAuthenticated() && (
                        
                    <MDBRow>   
                        {/* NOTE Show user's name */}
                    <div className="px-2 text col-8"></div>

                        {/* SECTION  SignOut */}
                        <span  onClick={() =>
                            signout(() => {
                            history.push("/");
                            })
                        }
                        className="px-2 text col-4" to="/signin" 
                        style={{ cursor: "pointer", color: "#ffffff" }}>Sign out
                        </span>
          
                    </MDBRow>  
                    )}

  
                </p>
            </div>
           
        </MDBRow>


    </MDBContainer>

</header>
    );

    

return(
    
<header>
 {/* SECTION second nav */}
 <nav class="navbar navbar-expand-lg op-colorn navbar-dark">
  <button class="navbar-toggler  " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon "></span>
  </button>
  <a class="navbar-brand" href="#"></a>

  <div class="collapse navbar-collapse " id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0  ">
      <li class="nav-item active ">
      <Link className="nav-link text-white " to="/"><div className="text-white text-op">HOME </div><span class="sr-only">(current)</span></Link>
      </li>
     
    {/* NOTE For normal user (user.role === 0) */}
    {isAuthenticated() && isAuthenticated().user.role === 0 &&(
                        <li class="nav-item">
                        <Link className="nav-link " to="/user/dashboard"><div className="text-white">DASHBOARD</div></Link>
                        </li>

                    )}

 {/* NOTE For Merchant user (user.role === 1) */}
 {isAuthenticated() && isAuthenticated().user.role === 1 &&(
                        <li class="nav-item">
                        <Link className="nav-link" to="/admin/dashboard"><div className="text-white">DASHBOARD</div></Link>
                        </li>

                    )}

                     {/* NOTE For Admin user (user.role === 2) */}

                    {isAuthenticated() && isAuthenticated().user.role === 2 &&(
                        <li class="nav-item">
                        <Link className="nav-link" to="/admin/dashboard"><div className="text-white">DASHBOARD</div></Link>
                        </li>

                    )}

<li class="nav-item">
                        <Link className="nav-link" to="/shop/:searchResult/:search"><div className="text-white">SHOP</div></Link>
                    </li>


                    {isAuthenticated() && isAuthenticated().user.role === 0 &&(
                    <li class="nav-item">
                        <Link className="nav-link" to="/seeOrder"><div className="text-white">SEE ORDER</div></Link>
                    </li>
                                        )}



    
    </ul>
<div className="mx-auto">

<Search/>
</div>
  

    <li className="nav-item mx-2 cart-icon navbar-light nav ">
                <Link className="nav-link" to="/cart">
                <i class="cart fas fa-2x fa-shopping-cart mx-2 my-2 text-light "></i>
                {/*NOTE Show the number of product beside Cart icon */}
               {showCartTotal()}        
                </Link>
    </li>

    <li class="nav-item dropdown mr-auto nav mx-4">
        <a class="nav-link dropdown-toggle text-white" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-1.5x fa-user text-white "></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right dropdown-default"
          aria-labelledby="navbarDropdownMenuLink-333">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      </div>
  
</nav>


    {/* NOTE Links to other pages */}
    {/* <nav >
        
         <ul className="nav-links"> 
         <div className ="row">
           <li>
                <Link className="nav-link" style={isActive(history,'/')} to="/">Home</Link>
            </li>
            <li >
                <Link className="nav-link" style={isActive(history,'/signin')}  to="/signin">Sigin</Link>
            </li>
            <li>
                <Link className="nav-link" style={isActive(history,'/signup')}  to="/signup">Signup</Link>
            </li> 
            </div>
        </ul>
       
</nav> */}
</header>

); };

export default withRouter(Menu);