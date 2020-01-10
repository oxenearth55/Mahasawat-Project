import React, {useState} from 'react'; 
import Layout from '../core/Layout';
import {API} from '../Config';
import './Signup.css';

const Signup = () => {

  const [values, setValue] = useState ({
        name: '',
        email: '',
        password: '', 
        error: '',
        success: false
})

const {name, email , password} = values  // Grab these values from useState

const handleChange = name => event => {
        setValue({...values,error:false, [name]: event.target.value}) // get value from input and store in [name]
  }

  const signup = user => {
      // console.log(name,email,password);
      fetch(' ${API}/signup' , {
        method: "POST",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)


      } )
      .then(response => {
        return response.json()
      })
      .catch(err => {
        console.log(err)
      })
   
  };

const clickSubmit = (event) => {
  event.preventDefault() //Browser will not reload when submit button is clicked
  signup({name,email,password});
}

// SECTION  HTML  

  const signUpForm = () => ( 
   

      <form className ="container my-5">
          <div className = "row">
            
              <div className ="col-md-6 col-sm-12 two-input">
              {/* <label className = "text-muted">First Name</label> */}
              <input onChange = {handleChange('name')} type = "text" className = "form-control" 
              placeholder ="First Name" >
                </input> 
              </div> 

              <div className ="col-md-6 col-sm-12 two-input">
              {/* <label className = "text-muted">Last Name</label> */}
              <input onChange = {handleChange('name')} type = "text" className = "form-control" 
              placeholder ="Last Name" ></input> 
              </div> 
          </div>

          <div className = "row"> 
            {/* <label className = "text-muted">Email</label> */}
            <div className ="col-md-12 col-sm-12 one-input">
            <input onChange = {handleChange('email')} type = "email" className = "form-control"  
            placeholder ="Email"  ></input> 
            </div>
          </div>

          <div className = "row"> 
            {/* <label className = "text-muted">Password</label> */} 
            <div className="col-md-6 col-sm-12 two-input">
              <input onChange = {handleChange('password')} type = "password" className = "form-control" 
              placeholder ="Password"  ></input> 
              </div>
         

            {/* <label className = "text-muted">Password</label> */} 
            <div className="col-md-6 col-sm-12 two-input">
              <input onChange = {handleChange('password')} type = "password" className = "form-control" 
              placeholder ="Repeat Password"  ></input> 
              </div>
             
            
          <button onClick = {clickSubmit} className = "btn btn-outline-secondary btn-block mt-4">Submit</button>
            </div>
        

      </form>
  );
  
    
  return ( 
       <Layout title = "Sign up" 
       description = "Please, sign up if you don't have an account"
       className = "container col-md-8 offset-md-2"> 
        {API} 
        {signUpForm()}
        {/* {JSON.stringify(values)} */}
   </Layout>
  
   

   );
}
export default Signup;