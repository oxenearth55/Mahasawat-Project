import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';
import { createProduct, getCategories,getShop } from './apiAdmin';


const AddProduct = () => {
     // NOTE Product properties (This is a react hook)
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        categories: [],
        category: '',
        detail:'',
        quantity: '',
        photo: '',
        loading: false,
        error: '',
        createdProduct: '',
        redirectToProfile: false,
        
        formData: ''
    });
    //NOTE grab user info and token from admin
    const { user, token } = isAuthenticated();
    //NOTE declear these values for using inside this file
    const {
        name,
        description,
        price,
        categories,
        quantity,
        loading,
        error,
        createdProduct,
        detail,
        formData
    } = values;

    //NOTE State for shop selection
    const [shopObject, setShopObject] = useState([])

    //SECTION DISPLAY SHOP NAME
    const getShopObject = () => {
        getShop(user._id,token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
             } 
            else {
                setShopObject(data);
            }
        });
    };
    const showShopName = () => {
        return(
        shopObject.map((res,index)=>{ 
            if(user.shop == res._id){
                return(
                    <>
                    <h4 className="mb-5 bg-dark white-text text-center py-3">ร้านค้าของคุณ: {res.name}</h4>
                    </>
                )
            }
        })
        )
    }

    //SECTION USEEFFECT


    //NOTE load categories and set form data
    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    //NOTE get categories from Database 
                    categories: data, formData: new FormData() 
    //NOTE we have to set defult FormData at the begining or after complete submition data 

                });
            }
        });

    
    };
    useEffect(() => {
        init();
        getShopObject();
    }, []);

    //SECTION CREATE PRODUCT

    const handleChange = name => event => {
        // NOTE Check input (Grab data from photo must use different method like target,files)
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        //NOTE every properties that we input will be send to backend by using formData
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        formData.set('shop',user.shop)
        setValues({ ...values, error: '', loading: true });

        createProduct(user._id, token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {

                // NOTE clear information when data was submited (Admin may add more products)
                setValues({
                    ...values,
                    name: '',
                    description: '',
                    photo: '',
                    price: '',
                    quantity: '',
                    category:'',
                    detail:'',
                    loading: false,
                    
                    createdProduct: data.name
                });
                // setShopObject(shopObject);
            }
        });
    };
    //NOTE value is a thing that is sent to backend 
    const newPostForm = () => (
        <form className="mb-3" onSubmit={clickSubmit}>
            <h4>อัพโหลดรูปสินค้า</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
                </label>
            </div>

            <div className="form-group">
                <label className="text-muted">ชื่อสินค้า</label>
                <input onChange={handleChange('name')} type="text" className="form-control" value={name} />
            </div>

            <div className="form-group">
                <label className="text-muted">คำอธิบาย</label>
                <textarea onChange={handleChange('description')} className="form-control" value={description} />
            </div>

            <div className="form-group">
                <label className="text-muted">รายละเอียด</label>
                <textarea onChange={handleChange('detail')} className="form-control" value={detail} />
            </div>

            <div className="form-group">
                <label className="text-muted">ราคา</label>
                <input onChange={handleChange('price')} type="number" className="form-control" value={price} />
            </div>

           

            <div className="form-group">
                <label className="text-muted">ประเภท</label>
                <select onChange={handleChange('category')} className="form-control">
                    <option>เลือก</option>
                    {categories &&
                        categories.map((c, i) => (
                            <option key={i} value={c._id}>
                                {c.name}
                            </option>
                        ))}
                </select>
            </div>




            <div className="form-group">
                <label className="text-muted">จำนวน</label>
                <input onChange={handleChange('quantity')} type="number" className="form-control" value={quantity} />
            </div>

            <button className="btn btn-outline-primary">เพิ่มสินค้า</button>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger text-center" style={{ display: error && !createdProduct? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: createdProduct ? '' : 'none' }}>
            <h2 className="text-center">{`${createdProduct}`} ถูกสร้างเรียบร้อย!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="text-center">
            <div class="spinner-grow text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-secondary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-success" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-danger" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-warning" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-info" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-light" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-dark" role="status">
      <span class="sr-only">Loading...</span>
    </div>
            </div>
        );

    return (
        <Layout title="เพิ่มสินค้า" description={`สวัสดีคุณ ${user.name}, คุณสามารถเพิ่มสินค้าได้จากหน้านี้`}
        headerImg="dashBoardImgLayout">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                {showShopName()}

                    {showLoading()}
                    {showSuccess()}
                    {showError()}
                    {newPostForm()}
                </div>
            </div>
        </Layout>
    );
};
        
export default AddProduct;
