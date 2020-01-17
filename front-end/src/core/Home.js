import React from 'react'; 
import './Style.css';
import Menu from './Menu';
import Footer from './Footer';

const Home = () => (

<>
<Menu/>

<main>
    <div className=" headerImg ">
    <section className ="container">
        <div className="intro">
     <div className="row ">
        <div className="col-12 intro-text">
    <h1>Mahasawat Shopping</h1> 
    </div>
    </div>

    <div className="col-8 intro-text">
    <p>Our products are produced from natural material</p>
    </div>


        
            
            <div className = "row intro-butt">
                <div className="col-12">
                    <button className = "show-more-butt">Show me more</button> 
                <button className = "show-shop-butt">Shop now</button>
                </div>
                
            </div>
            </div>

        </section> 
        </div>
    <section className ="container-fluid mx-auto">

        <div className ="row">
            <div className = "head-section col-sm-12 col-12 center-align"><h2>Get the best experiance</h2></div> 
        </div>

         <div className="row">
             <div className="col-12">
                <p className = "section1-intro center-align mt-4 mb-5"> 
                        No time for shopping or traveling at Mahasawat by yourself. 
                        Please let us take care of that, we’re really good at it, we promise!
                </p>

              </div>
          </div>  
         
        <div className="container section-icon" >
                    
            <div className="row">
                
                <div className="col-md-3 col-sm-12 mb-sm-4">
                <i class=" fas fa-mobile-alt fa-3x "></i>
                    <div className="icon-intro"> <h4>Support Mobile</h4></div> 
                    <p className="content-intro">You can see our product via mobile phone easily. 
                        Just access Mahasawat-Shopping.com
                    </p>
                               
                </div>


                <div className="col-md-3 col-sm-12 mb-sm-4">
                <i class=" far fa-clock fa-3x"></i>
                    <div className="icon-intro"> <h4>24 hours</h4></div> 
                    <p className="content-intro">Our service always open 24 hours. 
                        You can visit our website everytime.
                    </p>
                               
                </div>

                
                <div className="col-md-3 col-sm-12  mb-sm-4">
                <i class=" fas fa-shipping-fast fa-3x"></i>
                    <div className="icon-intro"> <h4>Shipping Serivce</h4></div> 
                    <p className="content-intro">You can get product at your home or your location
                        that you selected.
                    </p>
                               
                </div>
                
                
                <div className="col-md-3 col-sm-12" >
                <i class="far fa-star fa-3x " ></i>
                    <div className="icon-intro center-block"> <h4>Product Review</h4></div> 
                    <p className="content-intro">You can see product rating that was provided 
                    by other customers. This can encourage you to decide 
                    a product that you interested in.</p>
                               
                </div>
                </div>

            </div>
    </section>
</main>
<Footer/>
</>
);

export default Home; 