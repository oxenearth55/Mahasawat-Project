import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import { signin, authenticate, isAuthenticated } from "../auth";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';




const Signin = () => {
    const [values, setValues] = useState({
        email: "ryan@gmail.com",
        password: "rrrrrr9",
        error: "",
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password }).then(data => {
           
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    });
                });
            }
        });
    };

    const signUpFormTest =() =>(
        <div>
 <MDBContainer >
  <MDBRow>
    <MDBCol md="12">
      <form className="">
        <p className="h5 text-center mb-4">เข้าสู่ระบบ</p>
        <div className="grey-text">
          <MDBInput onChange={handleChange("email")}
           label="อีเมล" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput onChange={handleChange("password")}
           label="รหัส" icon="lock" group type="password" validate />
        </div>
        <div className="text-center">
          <MDBBtn  onClick={clickSubmit}>เข้าสู่ระบบ</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>

        </div>

    );

    const signUpForm = () => ( 
    
        <form className ="container my-5">
               <div className = "row">
     
        <div className ="col-md-6 col-sm-12 two-input">
                   {/* <label className = "text-muted">First Name</label> */}
                   <input onChange={handleChange("email")}
                    type = "email" className = "form-control" 
                   placeholder ="Email" />
                   </div> 
     
                   
               </div>
     
     
               <div className = "row"> 
                 {/* <label className = "text-muted">Password</label> */} 
                 <div className="col-md-6 col-sm-12 two-input">
                   <input  onChange={handleChange("password")} 
                   type = "password" className = "form-control" 
                   placeholder ="Password"  />
                   </div>
              
               <button onClick={clickSubmit} className = "btn btn-outline-secondary btn-block mt-4">Log In</button>
                 </div>
             
     
           </form>
    );

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-info">
                <h2>กำลังโหลด...</h2>
            </div>
        );

    // NOTE After user login, redirect to dashboard (up to role)
    const redirectUser = () => {
        if (redirectToReferrer) {
            // user.role = 1
            if (user && user.role === 1) {
                return <Redirect to="/vendor/dashboard" />;
            } else if(user && user.role === 2) {
                return <Redirect to="/admin/dashboard" />;
            } else if(user && user.role === 0){
                return <Redirect to="/user/dashboard" />;
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />;
        }
    };

    return (
        <Layout
            title="เข้าสู่ระบบ"
            description="คุณสามารถลงชื่อเข้าใช้ได้ที่นี่"
            className="container col-md-8 offset-md-2"
            headerImg="dashBoardImgLayout"
        >
            {showLoading()}
            {showError()}
            {/* {signUpForm()} */}
            {signUpFormTest()}
            {redirectUser()}
        </Layout>
    );
};

export default Signin;
