import React from 'react'; 
import './Style.css';
import Menu from './Menu';
import Footer from './Footer';

const Home = () => (

<>
<Menu/>

<main>
    <div className = "headerImg">
    <section className = "presentation">
   
        <div className = "introduction">
            
            <div className = "intro-text">
    
                <h1>Mahasawat Shopping</h1>
                <p>Our products are produced from natural material</p>
               
            </div>
            <div className = "intro-butt">
                <button className = "show-more-butt">Show me more</button> 
                <button className = "show-shop-butt">Shop now</button>
            </div>
        </div>

        </section> 
        </div>
    <section className ="section1">
        <div className ="row">
            <div className = "head-section"><h2>Get the best experiance</h2></div> 
           </div>
                <p className = "section1-intro"> Hello, we know you’re always busy. 
                    No time for shopping or traveling at Mahasawat by yourself. 
                    Please let us take care of that, we’re really good at it, we promise!
                </p>
            
        <div className="row">
            <div className="col">
                <div className="col-sm-3"> <h3 >Test1</h3> </div>
                <div className="col-sm-3"> <h3 >Test2</h3> </div>
                <div className="col-sm-3"> <h3 >Test3</h3> </div>
                <div className="col-sm-3"> <h3>Test4</h3> </div>
            </div>
            </div>
    </section>
</main>
<Footer/>
</>
);

export default Home; 