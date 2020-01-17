import React, {useState} from 'react'; 
import Layout from '../core/Layout';
import {API} from '../config';
import './Signup.css';
// import { signup } from '../auth';
import { Link } from 'react-router-dom';

const Signup = () => {
  
  const [values, setValues] = useState ({
        name: '',
        email: '',
        password: '', 
        error: '',
        success: false
  });

  const { name, email , password, success, error } = values; // Grab these values from useState

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const signup = user => {
    return fetch(`${API}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password }).then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error, success: false });
        } else {
            setValues({
                ...values,
                name: '',
                email: '',
                password: '',
                error: '',
                success: true
            });
        }
    });
};



// SECTION  HTML  

  const signUpForm = () => ( 
   

      <form className ="container my-5">
          <div className = "row">
            
              <div className ="col-md-6 col-sm-12 two-input">
              {/* <label className = "text-muted">First Name</label> */}
              <input onChange = {handleChange('name')} type = "text" className = "form-control" 
              placeholder ="First Name" value={name}/>
              </div> 

              <div className ="col-md-6 col-sm-12 two-input">
              {/* <label className = "text-muted">Last Name</label> */}
              <input onChange = {handleChange('')} type = "text" className = "form-control" 
              placeholder ="Last Name" />
              </div> 
          </div>

          <div className = "row"> 
            {/* <label className = "text-muted">Email</label> */}
            <div className ="col-md-12 col-sm-12 one-input">
            <input onChange = {handleChange('email')} type = "email" className = "form-control"  
            placeholder ="Email" value={email} />
            </div>
          </div>

          <div className = "row"> 
            {/* <label className = "text-muted">Password</label> */} 
            <div className="col-md-6 col-sm-12 two-input">
              <input onChange = {handleChange('password')} type = "password" className = "form-control" 
              placeholder ="Password" value={password} />
              </div>
         

            {/* <label className = "text-muted">Password</label> */} 
            <div className="col-md-6 col-sm-12 two-input">
              <input onChange = {handleChange('')} type = "password" className = "form-control" 
              placeholder ="Repeat Password"  />
              </div>
             
            
          <button onClick = {clickSubmit} className = "btn btn-outline-secondary btn-block mt-4">Submit</button>
            </div>
        

      </form>
  );

  const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
        {error}
    </div>
);

const showSuccess = () => (
    <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
        New account is created. Please <Link to="/signin">Signin</Link>
    </div>
);
  
    
  return ( 
    <Layout
    title="Signup"
    description="Signup to Node React E-commerce App"
    className="container col-md-8 offset-md-2"
>
    {showSuccess()}
    {showError()}
    {signUpForm()}
    {JSON.stringify(values)}
  </Layout>
   );
};

export default Signup;