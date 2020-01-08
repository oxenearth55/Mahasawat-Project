import React from 'react'
import {Link, withRouter} from 'react-router-dom' 
import './Menu.css'



const isActive = (history,path) => {
    if(history.location.pathname === path){
        return {color: '#ff9900'}
    }else{
        return {color: 'white'}
    }
}

const Menu = ({history}) => (
    


    
    <>
    {/* NOTE Links to other pages */}
    <nav >
        
         <ul className="nav-links"> 
         <div className ="row">
           <li>
                <Link className="nav-link" style={isActive(history,'/')} to="/">Home</Link>
            </li>

            <li >
                <Link className="nav-link" style={isActive(history,'/signin')}  to="/signin">Sigin</Link>
            </li>

            <li>
                <Link className="nav-link" style={isActive(history,'/signup')}  to="/signup">Signup</Link>
            </li> 

            </div>
        </ul>
       
</nav>
</>

); 

export default withRouter(Menu);
