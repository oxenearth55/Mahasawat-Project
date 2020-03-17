import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { getCart } from './cartHelpers';
import Card from './Card';
import Checkout from './Checkout';

const Cart = () => {
    //NOTE items contain products that was selected from local storage
    const [items, setItems] = useState([]);
    //NOTE useEffect will only update component when run state changes 
    const [run, setRun] = useState(false);



    //SECTION useEffect 
    useEffect(() => {
        setItems(getCart()); //NOTE get object (cart) from local storage
        // seperateShop();
        // console.log('result from cart is ' + nabuaProducts + fakkhawProducts);
    }, [run]);

    //SECTION Display products from local storage 
    const showItems = (items) => {
        return (
    
                <div className="row">

                {items.map((product, i) => (                    
                   <div className="col-4">
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
    const noItemsMessage = () => (
        <h2>
            Your cart is empty. <br /> <Link to="/shop/:searchResult/:search">Continue shopping</Link>
        </h2>
    );

//SECTION Display shop related to product.shop  
const nabuaProducts = [];
const fakkhawProducts = [];
const [showNabua,setShowNabua] =useState (false); // use to display shop if it is valid
const [showfakkhawProducts,setShowFakkhawProducts] =useState(false);
const nabuaShop = () => {

    items.map((i, index) => {
        if(i.shop === '5e6a17a35c566806d6a101dd'){
            nabuaProducts.push(i)
            // setShowNabua(true)
        }
       
})

return(
    <div>  
         {showItems(nabuaProducts)}
    </div>)

    
}

const fakkhawShop = () => {
    items.map((i, index) => {
    
        if(i.shop === '5e6a17ac5c566806d6a101de'){
            fakkhawProducts.push(i)
            // setShowFakkhawProducts(true)
        }      
})

return(
    <div>  
         {showItems(fakkhawProducts)}
    </div>)

};

const showResultProducts = () => {
    if(nabuaProducts.length != 0){
        
    }

}

//SECTION Redder 
    return (
        <Layout
            title="Shopping Cart"
            description="Manage your cart items. Add remove checkout or continue shopping."
            className="container-fluid"
            headerImg="cartImgLayout"
        >

    <div className="">

    <h2>สินค้าของร้านนาบัวลุงแจ่ม</h2>

    {nabuaShop()} 
    <h2>สินค้าของร้านฟักข้าว</h2>

    {fakkhawShop()}
       

</div>

      

                {/* <div className="col-6">{items.length > 0 ? showItems(items) : noItemsMessage()}</div> */}
                    <h2 className="mb-4">Your cart summary</h2>
                    <hr />
                    <Checkout products={items} setRun={setRun} run={run} />


        </Layout>
    );
}


export default Cart;
