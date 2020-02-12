import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import { signin, authenticate, isAuthenticated } from "../auth";
import './Signin.css';


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
                <h2>Loading...</h2>
            </div>
        );

    // NOTE After user login, redirect to dashboard (up to role)
    const redirectUser = () => {
        if (redirectToReferrer) {
            // user.role = 1
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            } else {
                return <Redirect to="/user/dashboard" />;
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />;
        }
    };

    return (
        <Layout
            title="Signin"
            description="You can log in if you have an account."
            className="container col-md-8 offset-md-2"
        >
            {showLoading()}
            {showError()}
            {signUpForm()}
            {redirectUser()}
        </Layout>
    );
};

export default Signin;
