import React from 'react'; 
import './Footer.css'; 

const Footer = () => (

<footer>
    <ul class="footer-nav">

        <li><a href="/">About us</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Press</a></li>
        <li><a href="/">iOS app</a></li>
        <li><a href="/">Android App</a></li>

    </ul>

    <ul class="social-icons">
		<li><a href="/">
				<ion-icon class="facebook" name="logo-facebook"></ion-icon>
			</a>
		</li>
		<li><a href="/">
		    	<ion-icon class="twitter " name="logo-twitter"></ion-icon>
			</a>
		</li>
		<li><a href="/">
				<ion-icon class="google-plus" name="logo-googleplus"></ion-icon>
			</a>
		</li>
		<li><a href="/">
				<ion-icon class="instagram" name="logo-instagram"></ion-icon>
			</a>
		</li>
	</ul>

    <p>Copyright &copy; 2019 by Mahasawat. All right reserved.</p>


 </footer>

);
export default Footer;