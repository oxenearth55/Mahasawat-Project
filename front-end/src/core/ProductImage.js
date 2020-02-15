import React from 'react'
import {API} from '../config' 


const ProductImage = ({item,url,className,style}) => (
//NOTE Get Object from product and url that link to backend (main/product.js)
<img className={className} style ={style} src={`${API}/${url}/photo/${item._id}`} 
alt={item.name}
style={{maxHeight:"100%", maxWidth:"100%"}}/>


); 
export default ProductImage;