import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom' 
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'
import PrivateRoute from './auth/PrivateRoute'
import Dashboard from './user/UserDashboard'
import VendorRoute from './auth/VendorRoute'
import AdminRoute from './auth/AdminRoute'
import VendorDashboard from './user/VendorDashboard'
import AdminDashboard from './user/AdminDashboard'
import ManageCategory from './admin/ManageCategory'
import AddProduct from './admin/AddProduct'
import Shop from './core/Shop'
import Product from'./core/Product'
import Cart from './core/Cart'
import Orders from './admin/Orders'
import SeeOrder from'./core/SeeOrder'
import Profile from './user/Profile'
import ManageProducts from './admin/ManageProducts'
import UpdateProduct from './admin/UpdateProduct'
import ShowOrders from './admin/ShowOrders'
import ManagePermission from './admin/MangePermission'
import CreateShop from './admin/CreateShop'
import BanFakkhaw from './Shop/Fakkhaw/BanFakkhaw'
import Nabua from './Shop/Nabua/Nabua'
import UpdateMer from './admin/UpdateMer'
import SeeOrderCus from './core/SeeOrderCus'
import SelectShop from './Shop/SelectShop'
import ManageBank from './admin/ManageBank'
import ManageShipping from './admin/ManageShipping'
import UpdateCat from './admin/UpdateCat' 
import ShopContact from './admin/ShopContact'


const Routes = () => {

    return (<BrowserRouter>
   
        <Switch>
            {/* SECTION Everyone can access (visitor, customer, vendor, admin) */}
            <Route path="/signin" exact component={Signin}></Route>
            <Route path="/signup" exact component={Signup}></Route>
            <Route path="/" exact component={Home}></Route> 
            <Route path="/product/:productId" exact component={Product}></Route> 
            <Route path="/shop/:searchResult/:search" exact component={Shop}></Route>
            <Route path="/cart" exact component={Cart}></Route>
            <Route path="/shop/banfakkhaw" exact component={BanFakkhaw}></Route>
            <Route path="/shop/nabua" exact component={Nabua}></Route>
            <Route path="/select/shop" exact component={SelectShop}></Route>

            {/* NOTE  Use provateRoute method from auth to render dashboard if user can log in 
            if not, user must go to sign in page */}
          
            {/* SECTION  user that already log in (customer) */}
            <PrivateRoute path="/user/dashboard" exact component={Dashboard}/>
            <PrivateRoute path="/order/:orderId" exact component={SeeOrder}></PrivateRoute>
            <PrivateRoute path="/profile/:userId" exact component={Profile}></PrivateRoute>
            <PrivateRoute path="/order" exact component={SeeOrderCus}></PrivateRoute>



            {/* <PrivateRoute path="/profile/:userId" exact component={Profile}/> */}


            {/* SECTION Vendor */}
            <VendorRoute path="/vendor/dashboard" exact component={VendorDashboard} />
            <VendorRoute path="/vendor/category" exact component={ManageCategory} />
            <VendorRoute path="/create/product" exact component={AddProduct} />
            <VendorRoute path="/vendor/order/:orderID" exact component={Orders} />
            <VendorRoute path="/vendor/orders" exact component={ShowOrders} />
            <VendorRoute path="/vendor/products" exact component={ManageProducts} />
            <VendorRoute path="/vendor/product/update/:productId" exact component={UpdateProduct} />
            <VendorRoute path="/vendor/manage/bank" exact component={ManageBank}/> 
            <VendorRoute path="/manage/shipping/:shopId" exact component={ManageShipping}/>
            <VendorRoute path="/update/category/:catId" exact component={UpdateCat}/>
            <VendorRoute path="/vendor/shop/contact" exact component={ShopContact}/>



             {/* SECTION Admin */}
            <AdminRoute path="/admin/manage/permission" exact component={ManagePermission} />
            <AdminRoute path="/admin/update/:userId" exact component={UpdateMer} />
            <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
            <AdminRoute path="/admin/create/shop" exact component={CreateShop} />




        </Switch>

    </BrowserRouter>)
    
}

export default Routes;