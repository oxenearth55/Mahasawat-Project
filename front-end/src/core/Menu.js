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

    // const [totalCart, setTotalCart] = useState([]);

    // useEffect(() => {
    //     showCartTotal() //NOTE get object (cart) from local storage
    // }, []);


    const showCartTotal = () => {
        return(
            <sub>
                  <small className="cart-badge ">{itemTotal()}</small>
            </sub>
          

        ) 
    };

return(
    
<header className="menu-font">
    {/*SECTION First-nav */}
    <div className = "container p-0">
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

    {/* SECTION Second Nav */}

    <div className = "container-fluid p-0">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link className="nav-link" to="/">HOME</Link>
                    </li>
                    {/* NOTE For normal user (user.role === 0) */}
                    {isAuthenticated() && isAuthenticated().user.role === 0 &&(
                        <li class="nav-item">
                        <Link className="nav-link" to="/user/dashboard">DASHBOARD</Link>
                        </li>

                    )}
                    
                    {/* NOTE For admin user (user.role === 1) */}
                    {isAuthenticated() && isAuthenticated().user.role === 1 &&(
                        <li class="nav-item">
                        <Link className="nav-link" to="/admin/dashboard">DASHBOARD</Link>
                        </li>

                    )}

                    <li class="nav-item">
                    <Link className="nav-link" to="/shop/:searchResult">SHOP</Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">ABOUT US</a>
                    </li>

                </ul>
            </div>
                    
            <div className="navbar-nav">
                <Search />

                <li className="nav-item mx-2 cart-icon">
                <Link className="nav-link" to="/cart">
                <i class="fas fa-2x fa-shopping-cart mx-2 my-2"></i>
                {/*NOTE Show the number of product beside Cart icon */}
                {showCartTotal()}            
                </Link>
                </li>
             
            </div>

        </nav>
    </div>


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