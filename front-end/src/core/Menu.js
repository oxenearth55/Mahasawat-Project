import React from 'react'
import {Link, withRouter} from 'react-router-dom' 
import './Menu.css'



// const isActive = (history,path) => {
//     if(history.location.pathname === path){
//         return {color: '#ff9900'}
//     }else{
//         return {color: 'white'}
//     }
// }

const Menu = () => (
    
<header>
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
                     <Link className="px-2 text" to="/signin">SignIn</Link>
                     <Link className="px-2 text" to="/signup">Create an Account</Link>

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
                    <li class="nav-item">
                        <a class="nav-link" href="/">SHOP</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">COLLECTION</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">ABOUT US</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-nav">
                <li className="nav-item border rounded-circle mx-2 search-icon">
                <i class="fas fa-search p-2"></i>
                </li>

                <li className="nav-item border rounded-circle mx-2 cart-icon">
                <i class="fas fa-shopping-cart p-2"></i>
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

); 

export default withRouter(Menu);
