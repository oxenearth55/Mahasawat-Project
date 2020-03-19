import React, { useState, useEffect } from 'react';
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge,MDBAnimation } from "mdbreact";
import ProductImage from '../ProductImage'
import {Link} from 'react-router-dom'
import {API} from '../../config' 
import { getShop } from '../../admin/apiAdmin';



const ShowBestSeller = ({product,newArrival=false, bestSeller =false}) => {
  

    const [shopObject, setShopObject] = useState([]);

    const [error, setError] = useState(false);


  //SECTION grab Shop Object
const getShopObject = () => {
    getShop().then(data => {
        if (data.error) {
            setError(data.error);
         } 
        else {
            setShopObject(data);
        }
    });
};
  
const showShopName = () => {
    return(
        <div >
        {shopObject &&
        shopObject.map((s, i) => {
            
           if(product.shop == s._id){
               return(
                   <div>
                     สินค้าของ  {s.name}
                     <MDBAnimation reveal type="tada" delay="0.5s" duration="2s">

                     <MDBBadge pill color="danger">
                      HOT
                    </MDBBadge>
                    </MDBAnimation>
                   </div>
               )
           }
    })}
</div>
    )
}
useEffect(() => {
    //NOTE grab productId from Routes
    getShopObject();

}, []);

    return (
   
        <MDBCol lg='4'md="4" className="mb-lg-0 mb-4">
          <MDBAnimation reveal type="fadeInUp">
          <MDBCard className="align-items-center">
            <MDBCardImage
            src={`${API}/product/photo/${product._id}`}            
            top
              alt="sample photo"
              overlay="white-slight"
              className="img-fluid"
            />
            <MDBCardBody className="text-center">
              <Link to={`/product/${product._id}`} className="grey-text">

              
                    <h5>{product.name}</h5>

                



            
                
              </Link>
              <h5>
                <strong>
                <Link to={`/product/${product._id}`} className="grey-text"> 
                               
                {showShopName()}
                   
                   
                    
                  </Link>
                  
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>{product.price}฿</strong>     
              </h4>
            </MDBCardBody>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>



       
       
  );
}

export default ShowBestSeller;