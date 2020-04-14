import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createCategory } from "./apiAdmin";

const AddCategory = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    // NoNod user and token from localstorage
    const { user, token } = isAuthenticated();

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
            return <h3 className="text-success">{name} ถูกสร้างเรียบร้อย</h3>;
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

    return (
        <Layout
            title="เพิ่มประเกทของสินค้า"
            description={`สวัสดีคุณ ${user.name}, คุณสามารถเพิ่มชนิดของสินค้าได้จากหน้านี้`}
            headerImg="dashBoardImgLayout"
        >
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showSuccess()}
                    {showError()}
                    {newCategoryFom()}
                    {goBack()}
                </div>
            </div>
        </Layout>
    );
};

export default AddCategory;
