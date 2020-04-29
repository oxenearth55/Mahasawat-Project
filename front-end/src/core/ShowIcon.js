
import React, { useState, useEffect } from 'react';
import {getProducts} from './apiCore';



const ShowIcon = ({product}) => 
{
    const [productsBySell, setProductsBySell] = useState([]);
    const [error, setError] = useState(false);


// SECTION Load bestseller 
const loadProductsBySell = () => {
    // NOTE get product by sold
    getProducts('sold',3).then(data => {
        if (data.error) {
            setError(data.error);
        } else {
    // NOTE grab data as a object from backend then store in State (Array of Object)
            setProductsBySell(data);

        }
    });
};

    useEffect(() => {
        loadProductsBySell();
    },[]);

    const showOutStock = () => {
        if(product.quantity <=0){
        return(
          <>
          <span class="badge  badge-danger product mb-2 mr-1">
                          สินค้าหมด
                  </span>
  
          </>
        )
        }
      }

 const showIcon = () =>
 {
     return(
         <div>
             
     {
     productsBySell.map((p,i) => {
          if(p._id === product._id){
            
             return(
              <>
                  <span class="badge badge-secondary mb-2 mr-1">
                    สินค้าขายดี
                    </span>  
              </>

             )}
     })}
                 <>
                  <span class="badge badge-info mb-2 mr-1">
                    {product.shop.name}
                  </span>
                 </>
     </div>
     );

 };
    return(

<>
{showIcon()}
{showOutStock()}
</>


    )
}
export default ShowIcon;