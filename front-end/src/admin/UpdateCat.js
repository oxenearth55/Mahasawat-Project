import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link, Redirect } from "react-router-dom";
import { updateCategory,getCategory,deleteCategory } from "./apiAdmin";
import PopUpDelete from './PopUpDelete';


const UpdateCat = ({match}) => {
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [category, setCategory] = useState([]);

    //NOTE grab user and token from localstorage
    const { user, token } = isAuthenticated();

     //SECTION useEffect
     useEffect(() => {
        loadCategory(match.params.catId);
    }, []);

//SECTION GET CATEGORIES 
//NOTE Grab categories object from the backend 
const loadCategory = (catId) => {
    getCategory(catId).then(data=>{
        setName(data.name);
        setCategory(data);
    })
}


//SECTION Update CATEGORY
const handleChange = e => {
    setError(false);
    setSuccess(false);
    setName(e.target.value);
};

    const clickSubmit = e => {
        e.preventDefault();
        setError("");
        setSuccess(false);
        //NOTE  make request to api to create category
        //NOTE name = category name
        updateCategory(match.params.catId,user._id, token, { name }).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setError("");
                setSuccess(true);
            }
        });
    };

    const updateCategoryForm = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">ชื่อ</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    value={name}
                    autoFocus
                    required
                />
            </div>
            <button className="btn btn-outline-primary">อัพเดท ชื่อของประเภทสินค้า</button>
        </form>
    );

    const showSuccess = () => {
        if (success) {
            return <h3 className="text-success">{name} ถูกอัพเดทเรียบร้อย</h3>;
        }
    };

    const showError = () => {
        if (error) {
            return <h3 className="text-danger tex-center">มีข้อผิดพลาด: "{name}" มีอยู่ในระบบแล้ว</h3>;
        }
        if (deleteAlert) {
        return <h3 className="text-danger tex-center">{deleteError}TTT</h3>;
        }
    };

    const goBack = () => (
        <div className="mt-5">
            <Link to="/manage/category" className="text-warning">
                กลับไปที่หน้า การจัดการประเภทสินค้า
            </Link>
        </div>
    );

    const displayCreateCategory = () => {
        return(
            <>
            {updateCategoryForm()}
            {goBack()}
            </>
        )
    }

    //SECTION DELETE CATEGORY 
    const [deleteError, setDeleteError] = useState(false)
    const [deleteAlert, setDeleteAlert] = useState('');
    const destroy = () => {
        deleteCategory(match.params.catId, user._id, token,{category}).then(data => {
            if (data.error) {
                console.log(data.error);
                setDeleteAlert(true);
                setDeleteError(data.error);    
            } else {
                setRedirect(true)

            }
        });
    };


    const deleteBtn = () => {
        return(
            <div className="container-fluid mb-4">
                <div className="row">
                    <div className="col justify-content-end">
                        <button type="button" class="btn btn-danger " data-toggle="modal" data-target="#centralModalDanger">ลบรายการนี้</button>
                    </div>
        <PopUpDelete c={match.params.catId} destroy={destroy}/>
    </div>
            </div>
        )
    }

    const redirectUser = () => {
        if (redirect && !deleteAlert) {
            if (!error) {
                return <Redirect to="/manage/category"/>;
            }
        }
    };
    
    
    
    return (
        <Layout
            title="เพิ่มประเกทของสินค้า"
            description={`สวัสดีคุณ ${user.name}, คุณสามารถเพิ่มชนิดของสินค้าได้จากหน้านี้`}
            headerImg="dashBoardImgLayout"
        >
            
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {deleteBtn()}
                    {showSuccess()}
                    {/* {redirectUser()} */}
                    {showError()}
                    {displayCreateCategory()}
                </div>
            </div>

        </Layout>
    );
};

export default UpdateCat;
