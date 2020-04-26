import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createCategory,getCategories } from "./apiAdmin";
import { MDBDataTable } from 'mdbreact';

const AddCategory = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [categories, setCategories] = useState([]);
    const [showCategories, setShowCategories] = useState(false);



    //NOTE grab user and token from localstorage
    const { user, token } = isAuthenticated();

     //SECTION useEffect
     useEffect(() => {
        loadCategories();
    }, []);

//SECTION GET CATEGORIES 
//NOTE Grab categories object from the backend 
const loadCategories = () => {
    getCategories().then(data=>{
        setCategories(data);
    })
}


//SECTION Table
//NOTE go to update a category that a user select
const seeUpdatePage = (res) => (
    <Link className="btn btn-warning btn-sm mx-1  text-white" to={`/update/category/${res._id}`}>
    คลิก
</Link>
)

let rows =[]
categories.map(res=>{    
    rows.push({name:res.name,update:seeUpdatePage(res)
})
    
})
    const dataColum ={columns:[{
        label: 'ชื่อ',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'แก้ไข',
        field: 'update',
        sort: 'asc',
        width: 150
      },        
    ]}


//SECTION CREATE CATEGORY
dataColum.rows =rows
const [showCat, setShowCat] = useState(false);

const showAddBtn = () => {
    if(showCat){
        return(
            <>
     <button type="button" onClick={()=>setShowCat(false)}class="btn btn-pink mb-4">ปิด</button>

            </>

        )
    } if(!showCat){
        return(
        <>
         <button type="button" onClick={()=>setShowCat(true)} class="btn btn-outline-info waves-effect mb-4">เพิ่มประเภทสินค้า <i class="fas ml-2 fa-plus"></i></button>

        </>)
    }
}


const showAddCategory = () =>{
    if(showCat){
    return(
        <>
        {displayCreateCategory()}
        </>
    )
    }
}

    const handleChange = e => {
        setError("");
        setName(e.target.value);
    };

    const clickSubmit = e => {
        e.preventDefault();
        setError("");
        setSuccess(false);
        //NOTE  make request to api to create category
        //NOTE name = category name
        createCategory(user._id, token, { name }).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setError("");
                setSuccess(true);
            }
        });
    };

    const newCategoryFom = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
                <h4 className="mb-4">เพื่มประเภทสินค้า</h4>
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
            <button className="btn btn-outline-primary">เพิ่ม ประเภทสินค้า</button>
        </form>
    );

    const showSuccess = () => {
        if (success) {
            return <h3 className="text-success text-center">{name} ถูกสร้างเรียบร้อย</h3>;
        }
    };

    const showError = () => {
        if (error) {
            return <h3 className="text-danger">มีข้อผิดพลาด: "{name}" มีอยู่ในระบบแล้ว</h3>;
        }
    };

    const goBack = () => (
        <div className="mt-5">
            <Link to="/admin/dashboard" className="text-warning">
                กลับไปที่หน้าควบคุม
            </Link>
        </div>
    );

    const displayCreateCategory = () => {
        return(
            <>
            {newCategoryFom()}
            {goBack()}
            </>
        )
    }


    return (
        <Layout
            title="จัดการประเภทของสินค้า"
            description={`สวัสดีคุณ ${user.name}, คุณสามารถเพิ่มและดูรายการประเภทสินค้าได้จากหน้านี้`}
            headerImg="dashBoardImgLayout"
        >            
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showError()}
                    <div className="col justify-content-end">
                    {showAddBtn()}
                    </div>
                    {showSuccess()}

                    {showAddCategory()}

                    <MDBDataTable striped bordered small order={['age', 'asc' ]} data={dataColum} />                 

                </div>
            </div>


        </Layout>
    );
};

export default AddCategory;
