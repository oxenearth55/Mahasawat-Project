import React, { useState,useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createShop, getShopList,updateOrderStatus } from "./apiAdmin";

const CreateShop = () => {

    //SECTION State
    // const [name, setName] = useState([]);
    // const [error, setError] = useState(false);
    // const [success, setSuccess] = useState(false);
    const [values, setValues] = useState({
        name: '',
        description: '',
        photo: '',
        loading: false,
        createdShop: '',

        error: '',
       
        redirectToProfile: false,
        formData: ''
    });

    const {
        name,
        description,  
        error,
        loading,
        createdShop,
        formData
    } = values;

    //NOTE grab user and token from localstorage
    const { user, token } = isAuthenticated();
    
    
    const init = () => {
        
                setValues({
                    ...values,
                   
    //NOTE we have to set defult FormData at the begining or after complete submition data 
                    formData: new FormData() 
                   
                });
            }
      
    
    useEffect(() => {
        init()
    }, []);


    const handleChange = name => event => {
        // NOTE Check input (Grab data from photo must use different method like target,files)
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        //NOTE every properties that we input will be send to backend by using formData
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };


    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: '', loading: true });

        //NOTE use api to connect with backend 
        createShop(user._id, token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {

                // NOTE clear information when data was submited (Admin may add more products)
                setValues({
                    ...values,
                    name: '',
                    description: '',
                    loading: false,
                    createdShop:data.name
                   
                });
            }
        });
    };

    //NOTE  Create Shop 
    const newPostForm = () => (
        <form className="mb-3" onSubmit={clickSubmit}>
            <h4>Upload Shop Photo</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
                </label>
            </div>

            <div className="form-group">
                <label className="text-muted">Shop Name</label>
                <select onChange={handleChange('name')} className="form-control">
                    <option>Please select</option>
                    <option value="นาบัวลุงแจ่ม">นาบัวลุงแจ่ม</option>
                    <option value="บ้านฟักข้าวคุณขนิษฐา">บ้านฟักข้าวคุณขนิษฐา</option>
                    {/* <option value="undefine">Unshop</option> */}

                    
                </select>
            </div>
           
            <div className="form-group">
                <label className="text-muted">Shop Description</label>
                <textarea onChange={handleChange('description')} className="form-control" value={description} />
            </div>           
            
            <button className="btn btn-outline-primary">Create Shop</button>
        </form>
    );


    //SECTION Alert after created the shop
    
    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: createdShop ? '' : 'none' }}>
            <h2>{`${name}`} is created!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );
   
        

return(
    <Layout
    title="Add a new Shop"
    description={`You can create your shop here`}
    headerImg="dashBoardImgLayout"
>
    {showLoading()}
    {showSuccess()}
    {showError()}
    {newPostForm()}



                

</Layout>
);

} 

export default CreateShop;