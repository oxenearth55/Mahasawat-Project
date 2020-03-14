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
import Profile from './user/Profile'
import ManageProducts from './admin/ManageProducts'
import UpdateProduct from './admin/UpdateProduct'
import Inventory from './admin/Inventory'
import ShowOrders from './admin/ShowOrders'
import ManagePermission from './admin/MangePermission'
import CreateShop from './admin/CreateShop'
import BanFakkhaw from './Shop/BanFakkhaw'
import Nabua from './Shop/Nabua'


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
            <Route path="/profile/:userId" exact component={Profile}></Route>
            <Route path="/shop/banfakkhaw" exact component={BanFakkhaw}></Route>
            <Route path="/shop/nabua" exact component={Nabua}></Route>







            {/* NOTE  Use provateRoute method from auth to render dashboard if user can log in 
            if not, user must go to sign in page */}
          
            {/* SECTION Normal user */}
            <PrivateRoute path="/user/dashboard" exact component={Dashboard}/>
            {/* <PrivateRoute path="/profile/:userId" exact component={Profile}/> */}


            {/* SECTION Admin */}
            <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />

            <AdminRoute path="/create/category" exact component={AddCategory} />

            <AdminRoute path="/create/product" exact component={AddProduct} />

            <AdminRoute path="/admin/order/:orderID" exact component={Orders} />

            <AdminRoute path="/admin/orders" exact component={ShowOrders} />


            <AdminRoute path="/admin/products" exact component={ManageProducts} />

            <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct} />

            <AdminRoute path="/admin/manage/permission" exact component={ManagePermission} />

            <AdminRoute path="/admin/create/shop" exact component={CreateShop} />


            <AdminRoute path="/admin/Inventory" exact component={Inventory}/>





        </Switch>

    </BrowserRouter>)
    
}

export default Routes;