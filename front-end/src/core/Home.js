import React, {useState, useEffect} from 'react'; 
import './Style.css';
import Footer from './Footer';
import {getProducts} from './apiCore';
import Intro from './Home-components/intro'
import Intro2 from './Home-components/intro2'
import Intro3 from './Home-components/intro3'
import grass from '../photo/หญ้า.jpg';
import wheat from '../photo/wheat.jpg';
import ShowBestProducts from './Home-components/ShowBestProducts'
import ShowNewProducts from './Home-components/ShowNewProducts'
import { MDBRow} from 'mdbreact';
import CardList from './Home-components/cardList'
import ShowShop from './Home-components/ShowShop'
import Example from './Home-components/Example'
import Content from './Home-components/Content'
import { StickyContainer, Sticky } from 'react-sticky';






const Home = () => {

    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

    const showImage = () =>{
        // <img height="150" width="100" src="<%= order.photoPath %>"/>
    }


    // SECTION Display bestseller and new arrival products
    const loadProductsBySell = () => {
        // NOTE get product by sold
        getProducts('sold',3).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
        // NOTE grab data as a object from backend then store in State (Array of Object)
                setProductsBySell(data);
            }
        });
    };

    const loadProductsByArrival = () => {
        // NOTE get product by date
        getProducts('createdAt',3).then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };
    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
        window.scrollTo(0, 0)     

    }, []);



   const showNewArrival = () => (
    <MDBRow >
    {productsByArrival.map((product,i) => (
    <ShowNewProducts key={i} product={product}/>   
          ))}
</MDBRow>
   )
    const showBestSeller = () => (
    <MDBRow >
        {productsBySell.map((product,i) => (
        <ShowBestProducts key={i} product={product}/>   
              ))}
</MDBRow>

    )
    
const cardListHeader = () => (
    <div class=" my-5">
    {/* <!--Section: Content--> */}
    <section class="px-md-5 mx-md-5 py-5 text-center white-text elegant-color z-depth-1 rounded">
    <h4 class="">คุณสามารถติดต่อร้านเหล่านี้ <i class="fas fa-store orange-text mx-1"></i> เพื่อสอบถามรายละเอียดเพิ่มเติม</h4>
    </section>
    {/* <!--Section: Content--> */}
    </div>
    
)

    return(
        
        
        <div>
        

        <Intro/>
       
        <div className="pb-5">
        <Example/>
        </div>
        <div className="mt-5 mb-0">
        <Intro2/>
        </div>
        <Content/>
        {cardListHeader()}
        <CardList/>
        <div className="m">
        <Intro3/>
        </div>
        <ShowShop/>
       
       
{/*SECTION Show BESTSELLER and NEW ARRIVAL */}
        <section className="text-center pb-5 fix-bg" style={{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.29), rgba(0, 0, 0, 0.7)),'+ "url("+grass+")",color:'white'}}>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        สินค้าขายดี
      </h2>
      <h4 className=" text-center w-responsive mx-auto mb-5 white-text">
        สินค้าของเราเป็นที่ชื่นชอบมากทั้งในหมู่คนไทยและคนต่างชาติ เพราะสินค้าที่นี่ ผลิตจาก ธรรมชาติ
      </h4>   
  {/* NOTE show best sellers */}
  <div id='best'className="pb-5">
    {showBestSeller()}
    </div>
        </section>


        <section className="text-center pb-5 fix-bg" style={{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.39), rgba(0, 0, 0, 0.7)),'+ "url("+wheat+")",color:'white'}}>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        สินค้ามาใหม่
      </h2>
      <h4 className=" text-center w-responsive mx-auto mb-5 white-text">
        สินค้าใหม่ พร้อมให้คุณได้เป็นเจ้าของแล้ววันนี้
      </h4>   
  {/* NOTE show best sellers */}
  <div id='new' className="pb-5">
    {showNewArrival()}
    </div>
        </section>
        <Footer/>
        </div>
     );

     
};

export default Home; 