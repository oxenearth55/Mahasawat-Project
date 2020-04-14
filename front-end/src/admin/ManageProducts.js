import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "./apiAdmin";
import { MDBDataTable } from 'mdbreact';


const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    const { user, token } = isAuthenticated();

    //NOTE Load product from Backend
    const loadProducts = () => {
        getProducts().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
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

    

    useEffect(() => {
        loadProducts();
    }, []);

    //SECTION TABLE WITH FILTER 
  

    const seeOrder = (res) => (
        <Link className="btn btn-warning btn-sm mx-3 text-white" to={`/admin/product/update/${res._id}`}>
        คลิก
    </Link>
    
    )


    let rows =[]
    products.map(res=>{
       
    
        if(res.shop._id == user.shop){
        rows.push({productName:res.name, category:res.category.name, amount:res.price, remain:res.quantity,click:seeOrder(res),delete: <div  onClick={() => destroy(res._id)} className="btn btn-danger btn-sm">
        ลบ
    </div>})
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
    
          {
            label: 'ลบรายการ',
            field: 'delete',
            sort: 'asc',
            width: 200
          }    
    
        
        ]}
    
    dataColum.rows =rows

    return (
        <Layout
            title="จัดการสินค้า"
            description="คุณสามารถจัดการสินค้าได้ที่หน้านี้"
            className="container-fluid"
            headerImg="dashBoardImgLayout"


        >
           <MDBDataTable striped bordered small order={['age', 'asc' ]} data={dataColum} />

        </Layout>
    );
};

export default ManageProducts;
