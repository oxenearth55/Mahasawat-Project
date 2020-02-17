import React from 'react'; 
import ProductImage from '../ProductImage'
import {Link} from 'react-router-dom'

const ShowProduct = ({product,newArrival=false, bestSeller =false}) => {


    const showBestSeller = () => (
    
        // <div className="row">
        //     <div className="col-6">
         <div className="card " style={{width:"102%"}}>
        <ProductImage className=" darkerImg  " style="" item={product} url="product"/>
        <div className="card-img-overlay text-center my-5" >
            <div className="align-middle" >
            <h3 className="card-title text-light font-weight-bold ">{product.name}</h3>
        {/* <p className="card-text text-light">{product.description}</p> */}
        <Link to= {`/product/${product._id}`}>
            <button className="btn btn-outline-light mt-3">
              See Product
            </button>
          </Link>
            </div>
        </div>
            </div>
        //     </div>
        // </div>

    );

const showNewArrival = () => (
    <div className ="container-fluid mx-0 px-0 my-4">
        <div className="row">
                <div class="col-md-6 col-sm-12">
                <ProductImage className="" style="" item={product} url="product"/>
                </div>
                
                <div className="col-6 bg-white text-dark">
                    <h2 className="text-center mt-2">{product.name}</h2> 
                    <p className="mt-4">{product.description.substring(0, 300)}</p>
            
                     <div className="text-center mt-md-4 mb-sm-4">
                        <Link to= {`/product/${product._id}`}>
                            <button className="btn btn-outline-dark">
                            See Product
                            </button>
                        </Link>

                    </div>

                </div>

             

        </div>

       
        
       

    </div>
);


const showDisplay = () => {
    if(bestSeller){
        return showBestSeller();
    }else{
        return showNewArrival();
    }

};
    


    const displayProduct = () => (
        <div className="col-4 mb-2">
            <div className="card">
            <ProductImage className="card-img-top "item={product} url="product"/>
            <div className="card-body">
    <h5 class="card-title text-center ">{product.name}</h5>

                    </div>

            </div>


        </div>

        
    );

    return(
       
       <div>
           {showDisplay()}
       </div>
       
       


    );


};


export default ShowProduct; 