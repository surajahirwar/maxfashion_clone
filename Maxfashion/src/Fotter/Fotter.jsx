import React from "react";
import "./Fotter.css"
import logo from "../../public/Images/logo.png"
import apple from "../../public/Images/apple.png"
import play from "../../public/Images/play.png"

export default function Fotter() {

  return (
        <div className="footer">
    
		<div className="f_top">
			<div className="f_top2">
				<div className="text">
					<h1>Subscribe to our awesome emails.</h1>
					<p>Get our latest offers and news straight in your inbox.</p>
				</div>
				<div className="inputBx">
					<input type="text" placeholder="Please Enter An Email Address" name="" />
					<button>Subscribe</button>
				</div>
			</div>
			<div className="f_top2">
				<div className="text">
					<h1>Download our apps</h1>
					<p>Shop our products and offers on-the-go.</p>
				</div>
				<div className="imgBx">
					<img src={apple} />
					<img src={play} />
				</div>
			</div>
		</div>	

		<div className="main_mid">

			<div className="f_mid">
				<div className="section">
					<h4>Women</h4>
					<a href="#">Tops</a>
					<a href='#'>Dresses & Jumpsuits</a>
					<a href='#'>Sportswear</a>
					<a href='#'>Bottoms</a>
					<a href='#'>Winterwear</a>
					<a href='#'>Ethnicwear</a>
					<a href='#'>Lingerie</a>
					<a href='#'>Sleepwear</a>
					<a href='#'>Accessories</a>
					<a href='#'> Shoes</a>
				</div>
			</div>

			<div className="f_mid">
				<div className="section">
					<h4>Men</h4>
					<a href="#">Tops</a>
					<a href='#'>Bottoms</a>
					<a href='#'>Sportswear</a>
					<a href='#'>Winterwear</a>
					<a href='#'>Accessories</a>
					<a href='#'> Shoes</a>
				</div>
			</div>

			<div className="f_mid">
				<div className="section">
					<h4>Boys</h4>
					<a href="#">Tops</a>
					<a href='#'>Bottoms</a>
					<a href='#'>Indian Wear</a>
					<a href='#'>Winter Wear</a>
					<a href='#'>Essentials</a>
					<a href='#'>Accessories</a>
					<a href='#'> Shoes</a>
				</div>
			</div>

			<div className="f_mid">
				<div className="section">
					<h4>Girls</h4>
					<a href="#">Tops</a>
					<a href='#'>Bottoms</a>
					<a href='#'>Indian Wear</a>
					<a href='#'>Winter Wear</a>
					<a href='#'>Essentials</a>
					<a href='#'>Accessories</a>
					<a href='#'> Shoes</a>
				</div>
			</div>

			<div className="f_mid">
				<div className="section">
					<h4>Explore</h4>
					<a href="#">Offers</a>
					<a href="#">Magazine</a>
					
				</div>
			</div>

			<div className="f_mid">
				<div className="section">
					<h4>About</h4>
					<a href="#">About us</a>
					<a href="#">Write to us</a>
					<a href="#">Careers</a>
					<a href="#">Take a Tour</a>
					<a href="#">Blog</a>
					<a href="#">Store Locator</a>
					<a href="#">Landmark</a>
					<a href="#">Cares</a>
				</div>
			</div>

			<div className="f_mid">
				<div className="section">
					<h4>Help</h4>
					<a href="#">Contact us</a>
					<a href="#">Shipping</a>
					<a href="#">Returns</a>
					<a href="#">Process</a>
					<a href="#">Returns Policy</a>
					
				</div>
			</div>
		</div>

			<div className="f_bottom">
				<div className="details">
					
					<div className="sec">
						<div className="icon"><i className="fa fa-phone"></i></div>
						<span>
							Talk to us <h3>1800-123-4444</h3>
						</span>
					</div>

					<div className="sec">
						<div className="icon"><i className="fas fa-question-circle"></i></div>
						<span>
							Helpcenter <h3>help.maxfashion.com</h3>
						</span>
					</div>

					<div className="sec">
						<div className="icon"><i className="far fa-envelope"></i></div>
						<span>
							Write to us <h3>help.in@maxfashion.com</h3>
						</span>
					</div>
				</div>

				<div className="details2">
					<div className="sec">
						<i className="fab fa-facebook-f"></i>
					</div>

					<div className="sec">
						<i className="fab fa-twitter"></i>
					</div>

					<div className="sec">
						<i className="fab fa-instagram"></i>	
					</div>
				</div> 
			</div> 


			<div className="f_bottom" style={{
                border: "none"
            }} >  
				<div className="details3">
					<div className="imgBx" >
						<img src={logo} />
					</div>
					<div className="copyR">
						<span>© 2022 Retail World Limited.</span>
						<br />
						<span>Terms & Conditions - Privacy Policy</span>
					</div>
				</div> 
			</div> 

    
        </div>
        
        
    )
}
