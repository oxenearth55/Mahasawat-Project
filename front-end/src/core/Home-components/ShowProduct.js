import React from 'react'; 
import ProductImage from '../ProductImage'
import {Link} from 'react-router-dom'

const ShowProduct = ({product}) => {


    const imageOverlay = () => (
    
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
           {imageOverlay()}
       </div>
       
       


    );


};


export default ShowProduct; 