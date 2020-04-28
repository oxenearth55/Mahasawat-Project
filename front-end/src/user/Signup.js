import React, {useState} from 'react'; 
import Layout from '../core/Layout';
// import {API} from '../config';
// import { signup } from '../auth';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import {signup} from './apiUser';

const Signup = () => {
  
  // NOTE  This is react state (Hook) to update properties 
  const [values, setValues] = useState ({
        name: '',
        email: '',
        password: '', 
        error: '',
        success: false, 
        role:1,
        repeatePassword:''
  });
  const { name, email , password, repeatePassword, success, error } = values; // Grab these values from useState
  const [errorPass, setErrorPass] = useState(false);
  // NOTE  Get value from input (name, email and password) from a user
  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

//   const signup = user => {
//     return fetch(`${API}/signup`, {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => {
//             console.log(err);
//         });
// };

  const clickSubmit = event => {
    // NOTE Prevent reload of this page adter submit btn was clicked
    event.preventDefault();
    setValues({ ...values, error: false });
    if(password == repeatePassword){
    // NOTE Send Object which contains property (name, email and, password) to method signup as user
    // NOTE And grab data as a Jason to check error from a user input
    signup({ name, email, password }).then(data => {
        if (data.error) {
          // Set error and success if found error from user input
            setValues({ ...values, error: data.error, success: false });
        } else {
          //If noting went wrong, Clear input in each input box (Default values)
            setValues({
                ...values,
                name: '',
                email: '',
                password: '',
                error: '',
                repeatePassword:'',
                success: true,
            });
            setErrorPass(false);
        }
    });
  }else{
    setErrorPass(true);
  }
};


// SECTION  HTML  

const signUpformNew = () => (
<div>
<MDBContainer>
  <MDBRow>
    <MDBCol md="12">
      <form>
        <p className="h5 text-center mb-4">สร้างบัญชี</p>
        <div className="grey-text">
          <MDBInput onChange = {handleChange('name')} label="ชื่อ" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput  onChange = {handleChange('email')} label="อีเมล" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          {/* <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
            error="wrong" success="right" /> */}

            <MDBInput onChange = {handleChange('password')} label="รหัส (ขั้นต่ำ6ตัวขึ้นไป)" icon="lock" group type="password" validate />

          <MDBInput onChange = {handleChange('repeatePassword')} label="ยืนยันรหัสอีกครั้ง" icon="lock" group type="password" validate />
        </div>
        <div className="text-center">
          <MDBBtn onClick = {clickSubmit} color="primary">สมัครบัญชี</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>

);

  // SECTION  Show result after click submit btn
  // NOTE  Check error from user input
  const showError = () => {
    if(error){
      return(
    <div className="alert alert-danger text-center">
        {/* Show type of error on the screen after user types wrong a condition */}
        {error} 
    </div>
      )
      }
      if(errorPass == true && !error){
        return(
          <div className="alert alert-danger text-center">
          โปรดกรอกรหัสผ่านให้ตรงกัน 
          </div>
  
        )
      }
      }

  

// NOTE  Check Success Sign Up 
const showSuccess = () => (
    <div className="alert alert-info text-center" style={{ display: success ? '' : 'none' }}>
      {/* Display this comment to the user */}
        บัญชีของคุณ ถูกสร้าง เรียบร้อยแล้ว, คุณสามารถเข้าสู่ระบบ <Link to="/signin">ได้ที่นี่</Link>
    </div>
);
  
  // SECTION render
  return ( 
    <Layout
    title="สร้างบัญชี"
    description="คุณสามารถสร้างบัญชีได้ที่นี่ "
    className="container col-md-8 offset-md-2"
    headerImg="dashBoardImgLayout"
>
  {/* NOTE  Call Method above */}
    {showSuccess()}
    {showError()}
    {signUpformNew()}
  </Layout>
   );
};

export default Signup;