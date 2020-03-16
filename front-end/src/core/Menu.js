import React, { useState, useEffect } from 'react';
import {Link, withRouter} from 'react-router-dom' 
import './Menu.css'
import {signout, isAuthenticated} from '../auth' 
import Shop from './Shop'
import Search from './Search'
import {itemTotal} from './cartHelpers'



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
    
<header className="menu-font">
    {/*SECTION First-nav */}
    <div className = "container p-0 h-1">
        {        console.log("Search result is Menu333 " + data.search)
}

        <div className = "row">
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
                        
                    <div className="row">   
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
          
                    </div>  
                    )}

  
                </p>
            </div>
           
        </div>


    </div>

 {/* SECTION second nav */}
<nav class="navbar navbar-expand-lg navbar-light bg-light">

<a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarSupportedContent navbarTogglerDemo02">
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

                    <li class="nav-item">
                        <Link className="nav-link" to="/seeOrder">SEE ORDER</Link>
                    </li>


                    <li class="nav-item">
                        <Link className="nav-link" to="/user/dashboard">ABOUT US</Link>
                    </li>

                       

                      

        
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
     
    </ul>
   <Search/>
    
    <li className="nav-item mx-2 cart-icon navbar-light nav ">
                <Link className="nav-link" to="/cart">
                <i class="cart fas fa-2x fa-shopping-cart mx-2 my-2"></i>
                {/*NOTE Show the number of product beside Cart icon */}
                {showCartTotal()}            
                </Link>
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