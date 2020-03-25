import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {API} from '../config' 
import {addItem} from './cartHelpers'; 
import PopUpCart from './PopUpCart';
import {getProducts} from './apiCore';



const RelatedProduct = ({product}) => {
    
    const [productsBySell, setProductsBySell] = useState([]);
    const [error, setError] = useState(false);



    const addToCart = () => {
        addItem(product);

    };

    // SECTION Load bestseller 
    const loadProductsBySell = () => {
        // NOTE get product by sold
        getProducts('sold',3).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
        // NOTE grab data as a object from backend then store in State (Array of Object)
                setProductsBySell(data);
            }
        });
    };

    useEffect(() => {
        loadProductsBySell();
    },[]);

 //SECTION Show Icon 

 const showBestSeller = (product) =>
 {
     return(
         <div>
             
     {
     productsBySell.map((p,i) => {
          if(p._id === product._id){
            
             return(
               
                  <span class="badge badge-danger mb-2 mr-1">
                    สินค้าขายดี
                    </span>
             )}
            

     })}</div>


     );

 };

 const showNabuaIcon = (product) =>{
     
    if(product.shop === '5e6a17a35c566806d6a101dd'){
        return(<span class="badge badge-info mb-2 mr-1">
            นาบัวลุงแจ่ม
        </span>)
    }  
}


const showFakkIcon = (product) =>{
     
    if(product.shop === '5e6a17ac5c566806d6a101de'){
        return(<span class="badge badge-info mb-2 mr-1">
            บ้านฟักข้าว
        </span>)
    }  
}
const displayIcon = (product) =>(
    <>
    {showBestSeller(product)}
    {showNabuaIcon(product)}
    {showFakkIcon(product)}
    </>

);


   const Card =() =>(

        <>
        <div class="container my-5">

{/* <!-- Section: Block Content --> */}
<section>
  
  <h3 class="font-weight-bold text-center dark-grey-text mb-5">สินค้า</h3>

  {/* <!-- Grid row --> */}
  <div class="row">

  { product.map((p,i) => (
      <>
     


    {/* <!-- Grid column --> */}
    <div class="col-lg-4 col-md-12 mb-4">

      {/* <!-- Card --> */}
      <div class="card card-ecommerce">
        <div class="view overlay">
          <img src={`${API}/product/photo/${p._id}`} class="img-fluid"
            alt="Sample image"/>
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
        <div class="card-body">
  <h5 class="card-title mb-1"><strong><a class="dark-grey-text">{p.name}</a></strong></h5>
  <div className="row">
  {/* <span class="badge grey mb-2 mr-1">best rated</span>
        <span class="badge badge-info mb-2 mr-1">{p.category.name}</span> */}
{displayIcon(p)}        </div>


          {/* <ul class="rating">
            <li><i class="fas fa-star blue-text"></i></li>
            <li><i class="fas fa-star blue-text"></i></li>
            <li><i class="fas fa-star blue-text"></i></li>
            <li><i class="fas fa-star blue-text"></i></li>
            <li><i class="fas fa-star blue-text"></i></li>
          </ul> */}
          <div class="card-footer pb-0">
            <div class="row mb-0">
        <span class="float-left"><strong>฿{p.price}</strong></span>
              <span class="float-right">
             <i class="fas fa-shopping-cart ml-3 text-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Card --> */}

    </div>
    {/* <!-- Grid column --> */}

    </>
          )
          
          )}

  </div>
  {/* <!-- Grid row --> */}


</section>
{/* <!-- Section: Block Content --> */}

</div>
        </>


   )

   return(
    <>
    {Card()}

    </>
  )   

} 

export default RelatedProduct; 