import React from 'react'; 
import Menu from './Menu';
import Footer from './Footer';

const Layout = ({title = "Title", description = "Description", className, children, headerImg}) => (

<div>
<Menu/> 
    <div className ="container-fluid mx-0 px-0 mb-4 "> 
        <div className = {headerImg}>
            <div className="text-white">
                <div className="row">
                    <div className="col-6 mt-5 ml-5">
                        <h2 className="">{title}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 ml-5">
                        <p className = ""> {description} </p>
                    </div>
                </div>
            </div>
        </div> 
    </div>

<div className = {className}> {children} </div>

<Footer/>

</div>
);
export default Layout;