import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { read, listRelated,getCategories,getAllProducts} from './apiCore';
import Card from './Card';
import ProductImage from './ProductImage';
import {addItem, updateItem,removeItem} from './cartHelpers'; 
import { Link, Redirect } from 'react-router-dom';
import CardProduct from './CardProduct'
import RelatedProduct from './RelatedProduct'





const Product = (props) => {
    const [product, setProduct] = useState([]);
    const [allProducts,setAllProducts] = useState([]);
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);
    const [categories, setCategories] = useState([]);
    const [redirect, setRedirect] = useState(false);
    const [productCat, setProductCat] = useState('');


    //NOTE Seperate product from each Shop
    const [nabuaProduct, setNabuaProduct] = useState([]); 
    const [fakkhawProduct, setFakkhawProduct] = useState([]); 

    const manageProduct = (allProducts) => {
        allProducts.map((p, i) => {
            if(p.shop === productCat === p.category.name){

            }

        })
        
    }

    const addToCart = () => {
        addItem(product);
      };

    

    //   const shouldRedirect = redirect => {
    //     if(redirect){
    //       return <Redirect to ="/cart" />
    //     }
    //   };

    const loadCategories = () => {
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
                setProductCat(data.category.name);
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
        loadCategories()
        const productId = props.match.params.productId;
        loadSingleProduct(productId); 
        loadAllProducts();
        // showRelated();
     
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
        <Layout
            title={product && product.name}
            description= "You can see product here"
            className="container-fluid"
            headerImg="productImgLayout"
        >
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


         </Layout>
    );
};

export default Product;
