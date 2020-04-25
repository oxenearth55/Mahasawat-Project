
import React from 'react';
import Facebook from './Photo/facebook.png';

const ContactKao = () => (

    <>
    <div class="container mt-5 mb-5 ">


{/* <!--Section: Content--> */}
<section class="text-center">

   

    {/* <!-- Featured image --> */}
    <img src={Facebook} class="img-fluid z-depth-1 rounded mb-4"
      alt=""/>

    <p class="mb-4 white-text">
      <strong>
        Facebook Fanpage      
      </strong>
    </p>

    {/* <!-- Interactions --> */}
    <div class="social-buttons smooth-scroll">
      {/* <!--Facebook--> */}
      <a href="https://www.facebook.com/BAANSALADIN/">
      <button type="button" class="btn btn-lg btn-fb my-0" style={{backgroundColor:'#3e2723'}} >
        <i class="fab fa-facebook-f fa-2x "></i>
      </button>
      </a>
     
    
    </div>
    {/* <!-- Interactions --> */}

  </section>
{/* <!--Section: Content--> */}


</div>

    </>

)

export default ContactKao 