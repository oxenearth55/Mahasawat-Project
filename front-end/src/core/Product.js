import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { read, listRelated,getCategories } from './apiCore';
import Card from './Card';
import ProductImage from './ProductImage';
import {addItem, updateItem,removeItem} from './cartHelpers'; 
import { Link, Redirect } from 'react-router-dom';
import CardProduct from './CardProduct'
import RelatedProduct from './RelatedProduct'



const Product = props => {
    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);
    const [categories, setCategories] = useState([]);
    const [redirect, setRedirect] = useState(false);

  
    

    const addToCart = () => {
        addItem(product, setRedirect(true));
      };

    

      const shouldRedirect = redirect => {
        if(redirect){
          return <Redirect to ="/cart" />
        }
      };

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


    const deliveryStatus = () => {
        
    };

    const ratting = () => {

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


     //SECTION Show related Product 
const showRelated = () => (
    <div class="container my-5 py-5">
   
       {/* <!--Section: Content--> */}
       <section class="text-center">
   
   
         {/* <!--Grid row--> */}
         <div class="row">
   
         {relatedProduct.map((r, i) => (
           
           <>
             <RelatedProduct r={r}/>
           </>
         ))}    
   
   {/* <!--Grid column--> */}
           
   
   </div>
       </section>
       {/* <!--Section: Content--> */}
   
   
     </div>
   
   )

    return (
        <Layout
            title={product && product.name}
            description= "You can see product here"
            className="container-fluid"
            headerImg="productImgLayout"
        >
            {shouldRedirect(redirect)}
        

            <CardProduct product={product} addCart={addToCart} relatedProduct={relatedProduct}/>

{showRelated()}
            {/* <div className="row my-4">
                    <h4>Related products</h4>
                    <div className="row">
                    {relatedProduct.map((p, i) => (
                        <div className="col-4 mb-4" key={i}>
                            <Card product={p} />
                        </div>                   
                    ))}    
</div>            
</div> */}


         </Layout>
    );
};

export default Product;
