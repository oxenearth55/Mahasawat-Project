import React, { useState, useEffect } from 'react';
import Menu from './Menu'
import Footer from './Footer'
import { read, listRelated,getCategories,getAllProducts, uploadComment} from './apiCore';
import Card from './Card';
import ProductImage from './ProductImage';
import {addItem, updateItem,removeItem} from './cartHelpers'; 
import { Link, Redirect } from 'react-router-dom';
import CardProduct from './CardProduct'
import RelatedProduct from './RelatedProduct'
import Handwash from '../Shop/Fakkhaw/Story/Handwash'
import FakkSoap from '../Shop/Fakkhaw/Story/FakkSoap'
import Lotion from '../Shop/Fakkhaw/Story/Lotion'
import { isAuthenticated } from '../auth';
import Bag from '../Shop/Fakkhaw/Story/Bag'






const Product = (props) => {
    const [product, setProduct] = useState([]);
    const [allProducts,setAllProducts] = useState([]);
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);
    const [productCat, setProductCat] = useState('');
    const [productShop, setProductShop] = useState([]);

    const { user, token } = isAuthenticated();


    
    const addToCart = () => {
        addItem(product);
      };

    const showStory = () => {
    //SECTION Fakkhaw Story 
        if(productCat == 'เจลล้างมือ' && productShop == 'บ้านฟักข้าวคุณขนิษฐา'){
            // if(1==1){
            return(
                <>
                <Handwash/>
                </>
            )
        
        }
        if(productCat == 'สบู่ฟักข้าว' && productShop == 'บ้านฟักข้าวคุณขนิษฐา'){
            return(
                <>
                <FakkSoap/>
                </>
            )
        
        }

        if(productCat == 'โลชั่นฟักข้าว' && productShop == 'บ้านฟักข้าวคุณขนิษฐา'){
            return(
                <>
                <Lotion/>
                </>
            )
        
        }


        if(productCat == 'ถุงผ้า' && productShop == 'บ้านฟักข้าวคุณขนิษฐา'){
            return(
                <>
                <Bag/>
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


   //SECTION Product's comment 
   //NOTE State of Object
   const [comments,setComments] = useState({
       comment:'',
       userName:''

   })

   const comment = () => {
   
   return(
      <>
          {isAuthenticated() && (

       <form onSubmit={clickSubmit}>
    <div className="form-group">
    <label className="text-muted">Comment</label>
    <textarea onChange={handleChange('comment')} className="form-control"  />
 </div>
 <button  class="btn btn-outline-info waves-effect">ส่ง
 
 </button>

 </form>
)}
</>
   ) 

   }

   const handleChange = name => event => {
    setComments({ ...comments, userName:user.name, [name]: event.target.value });
       console.log('comment is' + comments.userName)
   }


   const clickSubmit = event => {
    event.preventDefault();
    uploadComment(props.match.params.productId,user._id,token, {comments}).then(data => {
        if (data.error) {
            // console.log(data.error);
            alert(data.error);
        } else {              
              
                // setSuccess(true);
        }
    });
};


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
{comment()}
    <Footer/>
         </>
    );
};

export default Product;
