import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct, getShop } from "./apiAdmin";
import { MDBDataTable } from 'mdbreact';


const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    const { user, token } = isAuthenticated();
    const [loading, setLoading] = useState(false);

    //NOTE Load product from Backend
    const loadProducts = () => {
        setLoading(true);
        getProducts().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
                setLoading(false)
            }
        });
    };

    //NOTE  grab productId and send to backend 
    const destroy = productId => {
        deleteProduct(productId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadProducts();
            }
        });
    };

    const showLoading = () =>
        loading && (
            <div className="text-center">
            <div class="spinner-grow text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-secondary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-success" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-danger" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-warning" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-info" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-light" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-dark" role="status">
      <span class="sr-only">Loading...</span>
    </div>
            </div>
        );

    useEffect(() => {
        loadProducts();
        getShopObject();
    }, []);

    //SECTION TABLE WITH FILTER 
  

    const seeOrder = (res) => (
        <Link className="btn btn-warning btn-sm mx-3 text-white" to={`/vendor/product/update/${res._id}`}>
        คลิก
    </Link>
    
    )


    let rows =[]
    products.map(res=>{
       
    
        if(res.shop._id == user.shop){
        rows.push({productName:res.name, category:res.category.name, amount:res.price, remain:res.quantity,click:seeOrder(res)
       })
        }
    })
    
        const dataColum ={columns:[{
            label: 'ชื่อสินค้า',
            field: 'productName',
            sort: 'asc',
            width: 150
          },
          {
            label: 'ประเภท',
            field: 'category',
            sort: 'asc',
            width: 200
          },  {
            label: 'ราคา',
            field: 'amount',
            sort: 'asc',
            width: 200
          }, 
       
          {
            label: 'สินค้าคงเหลือ',
            field: 'remain',
            sort: 'asc',
            width: 200
          },    
    
          {
            label: 'ดูรายละเอียด',
            field: 'click',
            sort: 'asc',
            width: 200
          } , 
    
        
        ]}
    
    dataColum.rows =rows

      //SECTION Update Shop for Admin only
      const [shopObject, setShopObject] = useState([]);
      const getShopObject = () => {
          getShop().then(data => {
            
                  setShopObject(data);
              
          });
      };
      
      const showShopName = () => {
          return(
          shopObject.map((res,index)=>{ 
              if(user.shop == res._id){
                  return(
                      <>
                      <h4 className="mb-5 bg-dark white-text text-center py-3">ร้านค้าของคุณ: {res.name}</h4>
                      </>
                  )
              }
          })
          )
      }
    return (
        <Layout
            title="จัดการสินค้า"
            description="คุณสามารถจัดการสินค้าได้ที่หน้านี้"
            className="container-fluid"
            headerImg="dashBoardImgLayout"


        >
            <div className="container-fluid">
            {showShopName()}
            {showLoading()}

           <MDBDataTable striped bordered small order={['age', 'asc' ]} data={dataColum} />
</div>
        </Layout>
    );
};

export default ManageProducts;
