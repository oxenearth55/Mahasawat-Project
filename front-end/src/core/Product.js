import React, { useState, useEffect } from 'react';
import Menu from './Menu'
import Footer from './Footer'
import { read, listRelated,getCategories,getAllProducts} from './apiCore';
import Card from './Card';
import ProductImage from './ProductImage';
import {addItem, updateItem,removeItem} from './cartHelpers'; 
import { Link, Redirect } from 'react-router-dom';
import CardProduct from './CardProduct'
import RelatedProduct from './RelatedProduct'
import Handwash from '../Shop/Fakkhaw/StoryHandwash/Handwash'
import FakkSoap from '../Shop/Fakkhaw/StoryHandwash/FakkSoap'






const Product = (props) => {
    const [product, setProduct] = useState([]);
    const [allProducts,setAllProducts] = useState([]);
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);
    const [productCat, setProductCat] = useState('');
    const [productShop, setProductShop] = useState([]);



    
    const addToCart = () => {
        addItem(product);
      };

    const showStory = () => {
        if(productCat == 'เจลล้างมือ' && productShop == 'บ้านฟักข้าวคุณขนิษฐา'){
            // if(1==1){
            return(
                <>
                <Handwash/>
                </>
            )
        
        }
        if(productCat == 'สบู่' && productShop == 'บ้านฟักข้าวคุณขนิษฐา'){
            return(
                <>
                <FakkSoap/>
                </>
            )
        
        }


    }
    const loadSingleProduct = productId => {
        //NOTE  use read method from apiCore to get single product that related to productId
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
                setProductCat(data.category.name);
                setProductShop(data.shop.name)
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

    const loadAllProducts = () =>{
        getAllProducts().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
             setAllProducts(data)
             
            }
        });
    }

    useEffect(() => {
        //NOTE grab productId from Routes
        const productId = props.match.params.productId;
        loadSingleProduct(productId); 
        loadAllProducts();
    }, [props]);


     //SECTION Show related Product 
const showRelated = () => (
    <div class="container my-5 py-5">
   
       {/* <!--Section: Content--> */}
       <section class="text-center">
   
   
         {/* <!--Grid row--> */}
         <div class="row">
   
         {allProducts.map((p, i) => {
             if(productCat=== p.category.name && product._id != p._id ){
             
           return(
           <>
             <RelatedProduct r={p}/>
           </>
         )}}) 
           }    
   
   {/* <!--Grid column--> */}
           
   
   </div>
       </section>
       {/* <!--Section: Content--> */}
   
   
     </div>
   
   )

    return (
       
       <>
       <Menu/>
            {showStory()}
            {/* {shouldRedirect(redirect)} */}
        

            <CardProduct product={product} addCart={addToCart} />

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

    <Footer/>
         </>
    );
};

export default Product;
