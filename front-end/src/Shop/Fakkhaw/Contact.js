
import React, { useState, useEffect } from 'react';
import Facebook from './Fakk_Photo/facebook.png';
import {getSpecificShop} from '../../admin/apiAdmin'

const Contact = () => {

  const [shopContact, setShopContact] = useState([]);
  const [error, setError] = useState(false);


  // NOTE get the shop from backend
  const getShopInfo = () => {
    getSpecificShop('5e6a17ac5c566806d6a101de').then(data => {
        if (data.error) {
            setError(data.error)
        } else {
            // populate the state
          
            setShopContact(data.contact)
           
        }
    });
};

useEffect(()=>{
  getShopInfo();
  window.scrollTo(0, 0)     
},[] )



  return(

    <>
    <div class="container mt-5 mb-5 ">
 <div class="container my-5 py-5 z-depth-1">

{/* <!--Section: Content--> */}
<section class="px-md-5 mx-md-5 dark-grey-text">

{/* <!--Grid row--> */}
<div class="row d-flex justify-content-center">

  {/* <!--Grid column--> */}
  <div class="col-lg-7 text-dark-grey">

    <h3 className='text-center mb-4'>ติดต่อบ้านฟักข้าว</h3>
    <hr/>
<h5 className='my-4'>ชื่อ: {shopContact.contactName}</h5>
<h5 className='my-4'>เบอร์โทรศัพท์: {shopContact.phoneNumber}</h5> 
<h5 className='my-4'>อีเมล: {shopContact.email}</h5> 
<h5 className='my-4'>ไลน์: {shopContact.lineId}</h5> 

  </div>
  {/* <!--Grid column--> */}

</div>
{/* <!--Grid row--> */}
</section>
{/* <!--Section: Content--> */}
</div>

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
  }

export default Contact 