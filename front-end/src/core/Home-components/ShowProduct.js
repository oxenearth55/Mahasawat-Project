import React from 'react'; 
import ProductImage from '../ProductImage'

const ShowProduct = ({product}) => {

    return(
        <div className="col-4 mb-2">
            <div className="card">
            <ProductImage item={product} url="product"/>
            <div className="card-body">
    <h5 class="card-title text-center ">{product.name}</h5>

                    </div>

            </div>


        </div>



    );


};


export default ShowProduct; 