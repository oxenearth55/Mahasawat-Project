import React, {useState} from 'react'; 
import Layout from '../core/Layout';
import {API} from '../Config';

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

  const signup = (name,email,password) => {
      console.log(name,email,password);
  }

const clickSubmit = (event) => {
  event.preventDefault() //Browser will not reload when submit button is clicked
  signup(name,email,password)
}


  const signUpForm = () => ( 
      <form>
          <div className = "form-group"> 
            <label className = "text-muted">Name</label>
            <input onChange = {handleChange('name')} type = "text" className = "form-control" ></input> 
          </div>

          <div className = "form-group"> 
            <label className = "text-muted">Email</label>
            <input onChange = {handleChange('email')} type = "email" className = "form-control" ></input> 
          </div>

          <div className = "form-group"> 
            <label className = "text-muted">Password</label>
            <input onChange = {handleChange('password')} type = "password" className = "form-control" ></input> 
          </div>
          <button onClick = {clickSubmit} className = "btn btn-primary">Submit</button>
      </form>
  );
  
    return ( 
       <Layout title = "Sign up" 
       description = "Sign up if you don't have any account"
       className = "container col-md-8 offset-md-2"> 
        {API} 
        {signUpForm()}
        {JSON.stringify(values)}
   </Layout>
  
   

   );
}
export default Signup;