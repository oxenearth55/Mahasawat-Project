
import React, { useState, useEffect} from 'react';
import {getSpecificShop} from '../admin/apiAdmin';
import { addNabuaShip,addFakkhawShip,getFakkhawShip} from './cartHelpers'; 




const Shipping = ({shopId,  setRun = f => f, 
    run = undefined,nabua=false, fakkhaw=false  }) => {

    //SECTION STATE of Shipping Provider 

    const [shippingProvider1, setShippingProvider1] = useState ({
        providerName:'',
        shippingCost: 0,
        avilable: false
    })

    const [shippingProvider2, setShippingProvider2] = useState ({
        providerName:'',
        shippingCost: 0,
        avilable: false
    })

    const [shippingProvider3, setShippingProvider3] = useState ({
        providerName:'',
        shippingCost: 0,
        avilable: false
    })
    

 //SECTION useEffect 
 useEffect(() => {
    // setItems(getCart()); //NOTE get object (cart) from local storage; To show that there are any product in Cart or not
   getShopInfo(shopId);

}, [run]);

const shippingProvider = []

shippingProvider.push(shippingProvider1)
shippingProvider.push(shippingProvider2)
shippingProvider.push(shippingProvider3)




// NOTE get the shop from backend
const getShopInfo = shopId => {
    getSpecificShop(shopId).then(data => {
        if (data.error) {
            // setError(true)
        } else {
        
        //  setShopInfo(data);
         setShippingProvider1({...shippingProvider1,

            providerName:data.shippingProvider1.providerName,
            shippingCost:data.shippingProvider1.shippingCost,
            avilable:data.shippingProvider1.avilable
        
        })

        setShippingProvider2({...shippingProvider2,

            providerName:data.shippingProvider2.providerName,
            shippingCost:data.shippingProvider2.shippingCost,
            avilable:data.shippingProvider2.avilable
        
        })

        setShippingProvider3({...shippingProvider3,

            providerName:data.shippingProvider3.providerName,
            shippingCost:data.shippingProvider3.shippingCost,
            avilable:data.shippingProvider3.avilable
        
        })
    }
}
    )}

    const handleChange = name => event => {
        if(fakkhaw == true){
        addFakkhawShip(event.target.value)    
        }
        if(nabua == true){
            addNabuaShip(event.target.value)
        }
        setRun(!run);     
        //    console.log('res is '+ getFakkhawShip().providerName)
        //    console.log(JSON.stringify(getFakkhawShip()))
      };

      const checkAvilable = () =>{
          if(shippingProvider1.avilable == true){
              return(
                  <>
                      <option >เลือกการขนส่ง</option>

             <option value={shippingProvider1}>{shippingProvider1.providerName}</option>
             {/* <option value={shippingProvider2}>{shippingProvider2.providerName}</option>
             <option value={shippingProvider3}>{shippingProvider3.providerName}</option> */}
                  </>
              )

          }
           if(shippingProvider2.avilable == true){
            return(
                <>
           <option value={shippingProvider2}>{shippingProvider2.providerName}</option>

                </>
            )

        }

         if(shippingProvider3.avilable == true){
            return(
                <>
           <option value={shippingProvider3}>{shippingProvider3.providerName}</option>

                </>
            )

        }


      }

    const showDetails = () =>{


        return(<>
        <select  onChange={handleChange('avilable')} className="form-control"  required>
        <option value={0}>โปรดเลือก</option>
                    {shippingProvider &&
                        shippingProvider.map((res, i) => {
                       if(res.avilable!==false){
                        return(
                            <option key={i} value={res.shippingCost}>
                                {res.providerName}
                            </option>
      )}})}

    </select>
        </>
        )
    }

        return(
            <>
           { showDetails()}
            </>
        )

    }

export default Shipping;