import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { read, listRelated,getCategories } from './apiCore';
import Card from './Card';
import ProductImage from './ProductImage';

const Product = props => {
    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);
    const [categories, setCategories] = useState([]);
  
    const c = () => {
        getCategories().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
             setCategories(data)
            } 
            console.log(data)
        });
    };

    const loadSingleProduct = productId => {
        //NOTE  use read method from apiCore to get single product that related to productId
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
                // fetch related products
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error);
                    } else {
                        setRelatedProduct(data);
                    }
                });
            }
        });
    };

    useEffect(() => {
        //NOTE grab productId from Routes
        c()
        const productId = props.match.params.productId;
        loadSingleProduct(productId); 
    }, [props]);



    return (
        <Layout
            title={product && product.name}
            description={product._id}
            className="container-fluid"
        >
         <div className="container-fluid">
            <div className="row">
                <div className="col-6">

                  <ProductImage  className="img-responsive" item={product} url="product"/>

                </div> 
                
                <div className="col-6" >
                    
<h3 className="" align="center">{product.name} </h3>
                     <div className="mx-4 mt-4 ">  <p>{product.description}</p></div>
                     <h4>{product.price} Bath</h4>
                      

                </div>          
                </div>
            </div>
            <div className="row my-4">
                    <h4>Related products</h4>
                    <div className="row">
                    {relatedProduct.map((p, i) => (
                        <div className="col-4 mb-4" key={i}>
                            <Card product={p} />
                        </div>                   
                    ))}    
</div>            
</div>

         </Layout>
    );
};

export default Product;
