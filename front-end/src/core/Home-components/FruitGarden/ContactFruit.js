
import React from 'react';
import Facebook from './Photo/facebook.png';

const ContactFruit = () => (

    <>
    <div class="container mt-5 mb-5 ">


{/* <!--Section: Content--> */}
<section class="text-center">

   

    {/* <!-- Featured image --> */}
    <img src={Facebook} class="img-fluid z-depth-1 rounded mb-4"
      alt=""/>

    <p class="mb-4">
      <strong>
        Facebook Fanpage      
      </strong>
    </p>

    {/* <!-- Interactions --> */}
    <div class="social-buttons smooth-scroll">
      {/* <!--Facebook--> */}
      <a href="https://www.facebook.com/uncleboonlerdorchard/?epa=SEARCH_BOX">
      <button type="button" class="btn btn-sm btn-fb my-0" >
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

export default ContactFruit 