import React, { useState, useEffect } from 'react';
import Menu from './Menu'
import Footer from './Footer'
import { read, listRelated,getAllProducts} from './apiCore';
import {addNabuaItem,addFakkhawItem} from './cartHelpers'; 
import CardProduct from './CardProduct'
import RelatedProduct from './RelatedProduct'

//SECTION STORY
//ANCHOR FAKKHAW
import Handwash from '../Shop/Fakkhaw/Story/Handwash'
import FakkSoap from '../Shop/Fakkhaw/Story/FakkSoap'
import Lotion from '../Shop/Fakkhaw/Story/Lotion'
import Bag from '../Shop/Fakkhaw/Story/Bag'

//ANCHOR NABUA
import Tea from '../Shop/Nabua/Story/Tea'
import SoapTea from '../Shop/Nabua/Story/SoapTea'



import { isAuthenticated } from '../auth';
import Comment from './Comment';
import Pagination from './Pagination';




const Product = (props) => {
    const [product, setProduct] = useState([]);
    const [allProducts,setAllProducts] = useState([]);
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);
    const [productContent, setProductContent] = useState('');
    const [productCat, setProductCat] = useState('');
    const [productShop, setProductShop] = useState([]);
    const [getComments, setGetcomments] = useState([]);

    const { user, token } = isAuthenticated();

    const [run, setRun] = useState(false);
    const [skip,setSkip] = useState(0);
    const [size,setSize] = useState(0);

    
    const addToCart = (p) => {
        if(p.shop._id =='5e6a17a35c566806d6a101dd'){
          addNabuaItem(p);
        }
      else if(p.shop._id =='5e6a17ac5c566806d6a101de'){
        addFakkhawItem(p)
      }
    }
    const showStory = () => {
    //SECTION Fakkhaw Story 
        if(productContent == 'เจลล้างมือฟักข้าว' && productShop == 'บ้านฟักข้าวคุณขนิษฐา'){
            // if(1==1){
            return(
                <>
                <Handwash/>
                </>
            )
        
        }
        if(productContent == 'สบู่ฟักข้าว' && productShop == 'บ้านฟักข้าวคุณขนิษฐา'){
            return(
                <>
                <FakkSoap/>
                </>
            )
        
        }

        if(productContent == 'โลชั่นฟักข้าว' && productShop == 'บ้านฟักข้าวคุณขนิษฐา'){
            return(
                <>
                <Lotion/>
                </>
            )
        
        }


        if(productContent == 'ถุงผ้า' && productShop == 'บ้านฟักข้าวคุณขนิษฐา'){
            return(
                <>
                <Bag/>
                </>
            )
        
        }
        if(productContent=='ชาเกษรดอกบัว' && productShop == 'นาบัวลุงแจ่ม'){
            return(
                <>
                <Tea/>
                </>
            )
        }

        if(productContent=='สบู่เกษรดอกบัว' && productShop == 'นาบัวลุงแจ่ม'){
            return(
                <>
                <SoapTea/>
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
                setProductContent(data.content);
                setProductCat(data.category.name);
                setProductShop(data.shop.name);
                setGetcomments(data.comments); //NOTE Grab comments array of obeject from this product
                setSize(data.comments.length);
                setSkip(0);
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
    }, [run,props]);


     //SECTION Show related Product 
const showRelated = () => (
    <div class="container my-5 py-5">
   
       {/* <!--Section: Content--> */}
       <section class="text-center">
   
   
         {/* <!--Grid row--> */}
         <div class="row">
   
         {allProducts.map((p, i) => {
             if(productCat === p.category.name && product._id != p._id ){
             
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





//SECTION Pagination
//NOTE grab comments into the array
const commentArray =[]
//NOTE then loop it by decending comment because we would like to show a new comment at the top
    for(var i=getComments.length-1; i>=0;i--){
        commentArray.push(getComments[i])
    }


const [currentPage,setCurrentPage] = useState([1])
const [commentPerPage,setPostPerPage] = useState([5]);
const indexOfLastComment = currentPage * commentPerPage;
const indexOfFirstComment = indexOfLastComment - commentPerPage;
const currentComments = commentArray.slice(indexOfFirstComment,indexOfLastComment)
//NOTE Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
       
       <>
       <Menu/>
            {showStory()}
            {/* {shouldRedirect(redirect)} */}
        

            <CardProduct product={product} addCart={addToCart} />

            {showRelated()}
            
           

<Comment currentPage={currentPage} getComments={currentComments} product={product} setRun={setRun} 
                   run={run} size={size}/>

<div className="container-fluid">
       <div className="row  mb-5 justify-content-center">
<Pagination commentPerPage={commentPerPage}  
                    totalComment={commentArray.length} 
                   paginate={paginate} />
    </div>
    </div>
    <Footer/>
         </>
    );
};

export default Product;
