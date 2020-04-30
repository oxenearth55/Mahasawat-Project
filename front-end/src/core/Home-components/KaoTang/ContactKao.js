
import React from 'react';
import Facebook from './Photo/facebook.png';

const ContactKao = () => (

    <>
    <div class="container mt-5 mb-5 ">

    <section class="text-center px-md-5 mx-md-5 dark-grey-text">

{/* <!--Grid row--> */}
<div class="row d-flex justify-content-center">

  {/* <!--Grid column--> */}
  <div class="col-lg-7 text-white">

    <h4 className='text-center my-4'>ติดต่อบ้านศาลาดิน</h4>
    <h5 className='my-4'>คุณ วันชัย สวัสดิ์แดง</h5>
    <h5 className='mb-5'>เบอร์โทรศัพท์: 081-498-6340</h5>

  </div>
  {/* <!--Grid column--> */}

</div>
{/* <!--Grid row--> */}
</section>
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