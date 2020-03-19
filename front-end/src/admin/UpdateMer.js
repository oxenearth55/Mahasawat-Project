import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { getShop } from './apiAdmin';
import { read, updateOther, updateUser } from '../user/apiUser';




const UpdateMer = props =>{
    
    const {user,token} = isAuthenticated();
    const [shopObject, setShopObject] = useState([])
    const [shopObjectID, setShopObjectID] = useState('')
    const [values, setValues] = useState({
        name: '',
        email: '',
        role: '',
        shop:'',
        error: false,
        success: false     
    });

    const { name, email, role,shop, error, success } = values;


//SECTION Grab this user information 
const grabUserInfo = (userId) => {
  //NOTE  grab user information from backend
  read(userId, token).then(data => {
    if (data.error) {
        setValues({ ...values, error: true });
    } else {
        setValues({ ...values, name: data.name, email: data.email, role: data.role,shop:data.shop}); //NOTE 
        setShopObjectID(data.shop);
    }
});

};


//SECTION Update Shop for Admin only
const getShopObject = () => {
    getShop().then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error });
         } 
        else {
            setShopObject(data);
        }
    });
};

const selectShop = () =>{
        return (
            <div className="form-group">
            <label className="text-muted">Shop Name </label>
            <select onChange={handleShop} className="form-control">
                <option  >Please select</option>
                
                {shopObject &&
                    shopObject.map((s, i) => (
                        <option key={i} value={s._id}>
                            {s.name}
                        </option>
                    ))}
            </select>
        </div>

        );
}


//NOTE  Show current shop name of this user 
const shopName = () => {
   return(
    shopObject.map((s, i) => {

        if(s._id === shop){
            return(
            <div className ="row my-4 "> 
               <h4 className="text-white bg-dark px-3 py-3">  ร้านค้าผู้ใช้นี้คือ</h4><h4 className="border px-3 py-3">  {s.name}</h4> 
               </div>
            );
        }

    }
 
 
    )
   );  
};

//SECTION Update user profile
const showRole = (role) => {
    if(role === 0){
        return(
            <div>Customer</div>
        )}
        else if(role === 1){
            return(
            <div>Merchant</div>
            )}
            else if(role === 2){
                return(
                    <div>Admin</div>
                )
            }else{
                return(
                <div>Please Submit Change</div>
                )
            }

        };



const profileUpdate = (name, email, role) => (
    <form>
        <h1>{shopName()}</h1>
        <div className="row border my-4 bg-light">
            <div className="form-group col-4">
                <h5 className="text-muted">Name</h5>
                <div className="text-dark" > {name}</div>
            </div>
      
            <div className="form-group col-4">
                <h5 className="text-muted">Email</h5>
                <div className="text-dark" > {email}</div>
                </div>
        
            <div className="form-group col-4">
                <h5 className="text-muted ">Current Role</h5>
                <div className="text-dark" > {showRole(role)}</div>
            </div>

        </div>

        <div className="form-group">
            <label className="text-muted">Update Role</label>
           
            {/* <input type="text" onChange={handleChange('role')} className="form-control" value={role} /> */}
            <select onChange={handleChange('role')} className="form-control">
                    <option > Please Select</option>
                    <option value="0">Customer</option>
                    <option value="1">Merchant</option>
                    <option value="2">Admin</option>


                    {/* <option value="undefine">Unshop</option> */}

                    </select>

        </div>
        {selectShop()}

        <button onClick={clickSubmit} className="btn btn-primary">
            Submit
        </button>
    </form>
);

const clickSubmit = e => {
    e.preventDefault();
    updateOther(props.match.params.userId, token, { role,shopObjectID }).then(data => {
        if (data.error) {
            // console.log(data.error);
            alert(data.error);
        } else {
            updateUser(data, () => {
                setValues({
                    ...values,
                    role: data.role,
                    shop: data.shop,                     
                    success: true
                });

            }
            
            );
                // setValues({
                //     ...values,
                //     role: data.role,                  
                //     success: true
                // });
                // setShopObjectID(data);

            
            
            ;
        }
    });
};

const handleChange = name => e => {
    setValues({ ...values, error: false, [name]: e.target.value });
    // if(name==='role' && e ==='0'){
    //    return(setShopObjectID('5e6b55661e7f9809f1f3b8cd')); 

    // }
};

const handleShop = e => {
    setShopObjectID(e.target.value);

};

const redirectUser = success => {
    if (success) {
        return <Redirect to="/admin/manage/permission" />;
    }
};


    useEffect(() => {
        //NOTE grab productId from Routes
        const merchantId = props.match.params.userId;
        grabUserInfo(merchantId);
        getShopObject();
        showRole();
    }, [props]);

//NOTE Prevent others user 

const preventPermission = () => {
    if (user.role!=2) {
        return <Redirect to="/" />;
    }
};

    return(
        <Layout
        title={'t'}
        description= "You can update merchant role and shop here"
        className="container-fluid"
        headerImg="productImgLayout"
    >

        {preventPermission()}

<h2 className="mb-4">Profile update</h2>
            {profileUpdate(name, email, role)}
            {redirectUser(success)}
        </Layout>

    );
}

export default UpdateMer; 