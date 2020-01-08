import React from 'react'; 
import Menu from './Menu';
import Footer from './Footer';

const Layout = ({title = "Title", description = "Description", className, children }) => (

<div>
<Menu /> 
    <div > 
    <h2>{title}</h2>
    <p className = "lead"> {description} </p>
    </div> 

<div className = {className}> {children} </div>

<Footer/>

</div>
);
export default Layout;