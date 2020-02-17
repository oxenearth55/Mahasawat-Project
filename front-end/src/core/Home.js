import React, {useState, useEffect} from 'react'; 
import './Style.css';
import Menu from './Menu';
import Footer from './Footer';
import {getProducts} from './apiCore';
import ProductImage from './ProductImage';
import ShowProduct from './Home-components/ShowProduct'
import Layout from './Layout'
import {Link} from 'react-router-dom'


const Home = () => {

    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);


    // SECTION Display bestseller and new arrival products
    const loadProductsBySell = () => {
        // NOTE get product by sold
        getProducts('sold',6).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
        // NOTE grab data as a object from backend then store in State (Array of Object)
                setProductsBySell(data);
            }
        });
    };

    const loadProductsByArrival = () => {
        // NOTE get product by date
        getProducts('createdAt',3).then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };
    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);


const headerIntro = () => (
    
    <div className="headerImg container-fluid">
     <section>
        <div className="row">
            <div className="col-12 intro-text">
                <h1 className="heading-font">Mahasawat Shopping</h1> 
            </div>
        </div>

        <div className="row">
            <div className="col-6 intro-text">
                <p className="detail-font">Our products are produced from natural material</p>
            </div>
        </div>     
    
        <div className="row mt-5">
              
                <div className="col-md-2 col-sm-12">
               
                <Link to= {`/shop/:searchResult/:search`}>

                <button type="button" class="btn-text btn btn-danger btn-rounded py-2">Shop now</button>

                </Link>
            </div>
        </div> 
           
    
    </section> 
    </div>
        );

const firstSection = () =>( 
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
    );

    const showArrival = () => (
        <div>


        </div>


    );



    

    


    return(
        <div>
        <Menu/>
        {headerIntro()} 
         {/* NOTE show best sellers */}
        
         <div className="container-fluid pt-1 pb-4">
        <h2 className="head-section mb-4">Best Sellers</h2>
        <div className="row"> 
                {productsBySell.map((product,i) => (
              <div className="col-md-4 col-sm-12 mt-3 ">
                <ShowProduct key={i} product={product} bestSeller={true}/>   
             </div>
     
                ))}
            </div>
     

        {/* NOTE Show new arrivals */}
        <div className="bg-light mt-4 pb-4">
            <div className="">
            <h2 className="head-section mb-4">New Arrivals</h2>
            </div>
                {/* NOTE show best sellers */}
               
                {productsByArrival.map((product,i) => (
                 <div className ="">
                <ShowProduct key={i} product={product} NewArrival={true}/>  
                </div>   
                ))}
               
        </div>

        </div>
  
        {firstSection()}
        <Footer/>
        </div>
     );

};

export default Home; 