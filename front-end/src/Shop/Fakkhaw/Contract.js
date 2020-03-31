
import React from 'react';
import Facebook from './Fakk_Photo/facebook.png';

const Contract = () => (

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
      <a href="https://www.facebook.com/%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%9F%E0%B8%B1%E0%B8%81%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7-By-%E0%B8%82%E0%B8%99%E0%B8%B4%E0%B8%A9%E0%B8%90%E0%B8%B2-1686916281548847/">
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

export default Contract 