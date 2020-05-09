import React, { useState, useEffect,useContext } from 'react';
import {Link, withRouter} from 'react-router-dom' 
import './Menu.css'
import {signout, isAuthenticated} from '../auth' 
import Shop from './Shop'
import Search from './Search'
import {itemTotal,getCart} from './cartHelpers'



// const isActive = (history,path) => {
//     if(history.location.pathname === path){
//         return {color: '#ff9900'}
//     }else{
//         return {color: 'white'}
//     }
// }
// const {history} = this.state.push


// var { user } = isAuthenticated();


const Menu = ({history,handleSearch
  }) => {
    const value = useContext(itemTotal());
    const [items,setItems] = ([]);
    const [run, setRun] = useState(false);
    const {user} = isAuthenticated();


    // NOTE State to grab search trigger from Search component
    const [data, setData] = useState({
        search: false
        });

        const {search} = data

    useEffect(() => {
        // showCartTotal()
     
        //NOTE get object (cart) from local storage
    }, []);

    const showCartTotal = () => {
        return(
            <sub className="text-white">
                  <small className="cart-badge white-text ">{itemTotal()}</small>
            </sub>
          

        ) 
    };


    const showCart = () => {
        if(isAuthenticated()){
            if(user.role !== 1 && user.role !==2){
                return(
                    <>
                <Link className="nav-link" to="/cart">
                <i class=" fas fa-2x fa-shopping-cart mx-2 my-2 text-white "></i>
                {/*NOTE Show the number of product beside Cart icon */}
               {showCartTotal()}        
                </Link>
                    </>
                )}

        }else if(isAuthenticated() ==false){
            return(
                <>
                <Link className="nav-link" to="/cart">
                <i class="fas fa-2x fa-shopping-cart mx-2 my-2 text-white "></i>
                {/*NOTE Show the number of product beside Cart icon */}
               {showCartTotal()}        
                </Link>
                </>
            )

        }
    
}

return(
    
<header>
 {/* SECTION second nav */}
 <nav class="navbar fixed-top menu-nav navbar-expand-lg op-colorn navbar-dark">
  <button class="navbar-toggler  " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon "></span>
  </button>
  <a class="navbar-brand" href="#"></a>

  <div class="collapse navbar-collapse " id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0  ">
      <li class="nav-item  ">
      <Link className="nav-link text-white " to="/"><div className="text-white text-op">หน้าหลัก </div></Link>
      </li>
     
    

 {/* NOTE For Merchant user (user.role === 1) */}
 {isAuthenticated() && isAuthenticated().user.role === 1 &&(
                        <li class="nav-item">
                        <Link className="nav-link" to="/vendor/dashboard"><div className="text-white">แผงควบคุม</div></Link>
                        </li>

                    )}

                     {/* NOTE For Admin user (user.role === 2) */}

                    {isAuthenticated() && isAuthenticated().user.role === 2 &&(
                        <li class="nav-item">
                        <Link className="nav-link" to="/admin/dashboard"><div className="text-white">แผงควบคุม</div></Link>
                        </li>

                    )}

                    <li class="nav-item">
                        <Link className="nav-link" to="/shop/:searchResult/:search"><div className="text-white">ดูสินค้า</div></Link>
                    </li>

                    <li class="nav-item">
                        <Link className="nav-link" to="/select/shop"><div className="text-white">ร้านค้า</div></Link>
                    </li>


                    {isAuthenticated() && isAuthenticated().user.role === 0 &&(
                    <li class="nav-item">
                        <Link className="nav-link" to="/order"><div className="text-white">ดูรายการ</div></Link>
                    </li>



                                        )}


                                        {/* NOTE For normal user (user.role === 0) */}
    {isAuthenticated() && isAuthenticated().user.role === 0 &&(
                        <li class="nav-item">
                        <Link className="nav-link " to="/user/dashboard"><div className="text-white">โปรไฟล์</div></Link>
                        </li>
                    )}   
    </ul>
<div className="mx-auto py-2">

<Search/>
</div>
  
{showCart()}

    <li class="nav-item dropdown mr-auto nav mx-4">
        <a class="nav-link dropdown-toggle text-white" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-1.5x fa-user text-white "></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right dropdown-default"
          aria-labelledby="navbarDropdownMenuLink-333">
        
          {!isAuthenticated() && (
         <>
        <Link class="dropdown-item" to="/signin">
             ลงชื่อเข้าใช้
        </Link>

        <Link class="dropdown-item" to="/signup">
            สร้างบัญชี
        </Link>
              </>         
         
        
                    )}

           {isAuthenticated() && (
                        
                        <a class="dropdown-item" href="#">  
                            {/* NOTE Show user's name */}
                      
    
                            {/* SECTION  SignOut */}
                            <div  onClick={() =>
                                signout(() => {
                                history.push("/");
                                })
                            }
                             to="/signin" 
                            >ลงชื่อออก
                            </div>
              
                            </a>
                        )}
                    
        </div>
      </li>
      </div>
  
</nav>
</header>

); };

export default withRouter(Menu);