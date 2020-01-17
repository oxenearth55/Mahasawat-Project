import React from 'react'; 
import Layout from '../core/Layout';

const Signin = () => ( <div>
    <Layout title = "Sign in" description = "Please Sign in to aceess your account">

   <form className ="container my-5">
          <div className = "row">

   <div className ="col-md-6 col-sm-12 two-input">
              {/* <label className = "text-muted">First Name</label> */}
              <input type = "email" className = "form-control" 
              placeholder ="Email" />
              </div> 

              
          </div>


          <div className = "row"> 
            {/* <label className = "text-muted">Password</label> */} 
            <div className="col-md-6 col-sm-12 two-input">
              <input type = "password" className = "form-control" 
              placeholder ="Password"  />
              </div>
         
          <button className = "btn btn-outline-secondary btn-block mt-4">Log In</button>
            </div>
        

      </form>

      </Layout>

   </div>
   );

export default Signin;