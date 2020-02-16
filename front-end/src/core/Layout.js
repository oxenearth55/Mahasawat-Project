import React from 'react'; 
import Menu from './Menu';
import Footer from './Footer';

const Layout = ({title = "Title", description = "Description", className, children, handleSearch}) => (

<div>
<Menu handleSearch ={search => handleSearch(search)}  /> 
    <div className ="container ml-4 my-4"> 
    <h2>{title}</h2>
    <p className = "lead"> {description} </p>
    </div> 

<div className = {className}> {children} </div>

<Footer/>

</div>
);
export default Layout;



