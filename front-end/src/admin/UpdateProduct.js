import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { getProduct, getCategories, updateProduct,getShop,deleteProduct } from './apiAdmin';
import PopUpDeleteProduct from './PopUpDeleteProduct';
const UpdateProduct = ({ match }) => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        categories: [],
        content:'',
        category: '',
        shipping: '',
        quantity: '',
        detail:'',
        photo: '',
        loading: false,
        error: false,
        createdProduct: '',
        redirectToProfile: false,
     
        formData: '' //NOTE form data stand for grab the state befor sending to the backend 
    });
    const [categories, setCategories] = useState([]);

    const { user, token } = isAuthenticated();
    const {
        name,
        description,
        price,
        content,
        category,
        shipping,
        quantity,
        detail,
        loading,
        error,
        createdProduct,
        formData
    } = values;



    // NOTE get product from backend by senind product ID from params
    const init = productId => {
        setValues({...values, loading:true})
        getProduct(productId).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                // populate the state
                setValues({
                    ...values,
                    name: data.name,
                    description: data.description,
                    detail:data.detail,
                    price: data.price,
                    category: data.category._id,
                    shipping: data.shipping,
                    quantity: data.quantity,
                    content:data.content,
                    loading:false,
                    formData: new FormData()
                });
                // load categories
                initCategories();

            }
        });
    };

    // load categories and set form data
    const initCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setCategories(data);
            }
        });
    };

    useEffect(() => {
        init(match.params.productId);
        getShopObject();
    }, []);

    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
      
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: '', loading: true });
        // NOTE Update changes to backend 
        updateProduct(match.params.productId, user._id, token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                  
                    loading: false,
                    error: false,
                    createdProduct: data.name
                });
            }
        });
    };
  

    const newPostForm = () => (
        <form className="mb-3" onSubmit={clickSubmit}>
            <h4>อัพโหลดรูป</h4>
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
                <select onChange={handleChange('category')} className="form-control" value={category}>
                    <option>โปรดเลือก</option>
                    {categories &&
                        categories.map((c, i) => (
                            <option key={i} value={c._id}>
                                {c.name}
                            </option>
                        ))}
                </select>
            </div>

            <div className="form-group">
                <label className="text-muted">เรื่องราวสินค้า</label>
                <select onChange={handleChange('content')} className="form-control" value={content}>
                    <option>โปรดเลือก</option>
                    <option value="เจลล้างมือฟักข้าว">เจลล้างมือฟักข้าว</option>
                    <option value="สบู่ฟักข้าว">สบู่ฟักข้าว</option>
                    <option value="โลชั่นฟักข้าว">โลชั่นฟักข้าว</option>
                    <option value="ถุงผ้า">ถุงผ้า</option>
                    <option value="ชาเกษรดอกบัว">ชาเกษรดอกบัว</option>
                    <option value="สบู่เกษรดอกบัว">สบู่เกษรดอกบัว</option>
                    <option value="ไม่มี">ไม่มี</option>



                  
                </select>
            </div>

          

            <div className="form-group">
                <label className="text-muted">จำนวน</label>
                <input onChange={handleChange('quantity')} type="number" className="form-control" value={quantity} />
            </div>

            <button className="btn btn-outline-primary">อัพเดทสินค้า</button>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger text-center" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info text-center" style={{ display: createdProduct ? '' : 'none' }}>
            <h2>{`${createdProduct}`} ถูกเปลี่ยนแปลงเรียบร้อย!</h2>
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
        )
        

    

    //SECTION Update Shop for Admin only
    const [shopObject, setShopObject] = useState([]);
const getShopObject = () => {
    getShop().then(data => {
      
            setShopObject(data);
        
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

//SECTION DELETE CATEGORY 
const [deleteError, setDeleteError] = useState(false)
const [deleteSuccess, setDeleteSuccess] = useState(false)
const destroy = () => {
    deleteProduct(match.params.productId, user._id, token).then(data => {
        if (data.error) {
            setDeleteError(true);    
        } else {
            setDeleteSuccess(true)
        }
    });
};

const deleteBtn = () => {
    if(!deleteSuccess && !error){
    return(
        <div className="container-fluid mb-4">
            <div className="row">
                <div className="col justify-content-end">
                    <button type="button" class="btn btn-danger " data-toggle="modal" data-target="#centralModalDanger">ลบรายการนี้</button>
                </div>
    <PopUpDeleteProduct destroy={destroy}/>
</div>
        </div>
    )
    }
}

const showDeleteSuccess = () => {
    if(deleteSuccess){
    return(
        <div class="alert alert-success text-center" role="alert">
        สินค้า "{name}" ถูกลบเรียบร้อยแล้ว
      </div>
    )
    }
}
const showForm = () => {
    if(!deleteSuccess && !error){
        return(
            <>
            {newPostForm()}

            </>
        )
    }
}
    return (
        <Layout title="แก้ไขสินค้า" description={` ท่านสามารถแก้ไขสินค้าได้ที่นี่`} headerImg="dashBoardImgLayout"
        >
            <div className="row">
                <div className="col-md-8 offset-md-2">
                {showShopName()}
                {deleteBtn()}

                    {showLoading()}
                    {showSuccess()}
                    {showDeleteSuccess()}
                    {showError()}
                    {showForm()}
                </div>
            </div>
        </Layout>
    );
};

export default UpdateProduct;
