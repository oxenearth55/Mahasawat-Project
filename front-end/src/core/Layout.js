import React from 'react'; 
import Menu from './Menu';
import Footer from './Footer';
import {
  
    MDBMask
  } from 'mdbreact';

const Layout = ({title = "Title", description = "Description", className, children, headerImg}) => (

<div>
    <div className ="container-fluid mx-0 px-0 mb-4 "> 
    <MDBMask className='rgba-black-light' />

    <Menu/> 

        <div className = {headerImg}>

            <div className="text-white ">
            <div className="layout-margin ">
                <div className="row">
                    <div className="col-6 mt-md-5 ml-md-4">
                        <h2 className="title-header">{title}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 ml-5">
                        <p className = "description-header"> {description} </p>
                    </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>

<div className = {className}> {children} </div>
<div className="mt-5"><Footer/>
</div>

</div>
);
export default Layout;