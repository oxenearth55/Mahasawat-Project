import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom' 
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'
import PrivateRoute from './auth/PrivateRoute'
import Dashboard from './user/UserDashboard'
import AdminRoute from './auth/AdminRoute'
import AdminDashboard from './user/AdminDashboard'
import AddCategory from './admin/AddCategory'
import AddProduct from './admin/AddProduct'
import Shop from './core/Shop'
import Product from'./core/Product'
import Cart from './core/Cart'
import Orders from './admin/Orders'
import SeeOrder from'./core/SeeOrder'
const Routes = () => {

    return (<BrowserRouter>
   
        <Switch>
            <Route path="/signin" exact component={Signin}></Route>
            <Route path="/signup" exact component={Signup}></Route>
            <Route path="/" exact component={Home}></Route> 
            <Route path="/product/:productId" exact component={Product}></Route> 
            <Route path="/shop/:searchResult/:search" exact component={Shop}></Route>
            <Route path="/cart" exact component={Cart}></Route>
            <Route path="/seeOrder" exact component={SeeOrder}></Route>




            {/* NOTE  Use provateRoute method from auth to render dashboard if user can log in 
            if not, user must go to sign in page */}
          
            {/* SECTION Normal user */}
            <PrivateRoute path="/user/dashboard" exact component={Dashboard}/>

            {/* SECTION Admin */}
            <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />

            <AdminRoute path="/create/category" exact component={AddCategory} />

            <AdminRoute path="/create/product" exact component={AddProduct} />


            <AdminRoute path="/admin/orders" exact component={Orders} />


        </Switch>

    </BrowserRouter>)
    
}

export default Routes;