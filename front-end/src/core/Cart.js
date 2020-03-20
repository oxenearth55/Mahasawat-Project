import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { getCart, getNabuaProducts,getfakkhawProducts } from './cartHelpers';
import Card from './Card';
import Checkout from './Checkout';

const Cart = () => {
    //NOTE items contain products that was selected from local storage
    const [items, setItems] = useState([]);
    //NOTE useEffect will only update component when run state changes 
    const [run, setRun] = useState(false);
    const [nabuaProducts,setNabuaProducts] = useState([]);
    const [fakkhawProducts,setFakkhawProducts] = useState([]);

    



    //SECTION useEffect 
    useEffect(() => {
        setItems(getCart()); //NOTE get object (cart) from local storage
        setNabuaProducts(getNabuaProducts());
        setFakkhawProducts(getfakkhawProducts());
    }, [run]);

    //SECTION Display products from local storage 
    const showItems = (items) => {
        return (
    
                <div className="row">

                {items.map((product, i) => (                    
                   <div className="col-4 my-4">
                        <Card
                            key={i}
                            product={product}
                            showAddToCartButton={false}
                            cartUpdate={true}
                            showRemoveProductButton={true}
                            setRun={setRun}
                            run={run} 
                        />
                    </div>
                    ))}
               
               </div>

        );
    };
//NOTE if not have anything in localsotage (cart)
    const noItemsMessage = () => {
        if(items.length <=0){
        return(    
            <h2>
                Your cart is empty. <br /> <Link to="/shop/:searchResult/:search">Continue shopping</Link>
            </h2>
        );

        }else{
            return(
            <>
             <Checkout 
                  
                  nabuaProducts={nabuaProducts}
                  nabuaTotal={getTotalNabua()}
                  fakkhawProducts={fakkhawProducts}
                  fakkhawTotal={getTotalFakkhaw()}
                   setRun={setRun} 
                   run={run}
                   
                   />
            </>
            );
        }
    
};

//SECTION Display shop related to product.shop  
const [showNabua,setShowNabua] =useState (false); // use to display shop if it is valid
const [showfakkhawProducts,setShowFakkhawProducts] =useState(false);





//SECTION show total from each shop

const getTotalNabua = () => {
       
    return nabuaProducts.reduce((currentValue, nextValue) => { // NOTE reduce method will calculate every products in Cart
        return currentValue + nextValue.count * nextValue.price // NOTE return value of each product from caculating
    }, 0)
}

const getTotalFakkhaw = () => {
       
    return fakkhawProducts.reduce((currentValue, nextValue) => { // NOTE reduce method will calculate every products in Cart
        return currentValue + nextValue.count * nextValue.price // NOTE return value of each product from caculating
    }, 0)
}

//SECTION Display products 

const displayNabuaProducts = () =>{
    if(nabuaProducts.length > 0){
        return(
    <div>
        <h2 className="text-white bg-dark text-center">สินค้าของร้านนาบัวลุงแจ่ม</h2>
        <h2 className="border rounded-lg col-2 bg-dark text-white">Total: ${getTotalNabua()}</h2>    
        {showItems(nabuaProducts)} 
    </div>
        );
    } 
    
    
}

const diplayFakkhawProducts = () =>{
    if(fakkhawProducts.length > 0 ){
        return(
        <div>
            <h2 className="text-white bg-dark text-center">สินค้าของร้านฟักข้าว</h2>
            <h2>Total: ${getTotalFakkhaw()}</h2> 
            {showItems(fakkhawProducts)}
        </div>

        );
    }
} 



//SECTION Render 
    return (
        <Layout
            title="Shopping Cart"
            description="Manage your cart items. Add remove checkout or continue shopping."
            className="container-fluid"
            headerImg="cartImgLayout"
        >

   <div>
        {displayNabuaProducts()}
        {diplayFakkhawProducts()}

        {noItemsMessage()}


   </div>

          <div>
                  {/* <div className="col-6">{items.length > 0 ? showItems(items) : noItemsMessage()}</div> */}
                  <h2 className="mb-4">Your cart summary</h2>
                  <hr />
                 
                  </div>



        </Layout>
    );
}


export default Cart;