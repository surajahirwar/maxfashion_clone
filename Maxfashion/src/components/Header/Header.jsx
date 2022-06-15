import React from "react";
import "./Header.css"
import logo from "../../../public/Images/logo.png" 
export default function Header() {

    return (
          <div>
  
              <div className="top_header">
                  <div className="top_header_inner">
                          <div>
                          <i className="fa-solid fa-truck"></i>
                              <span>Free shipping</span>
                          </div>
                          <div>
                          <i className="fa fa-home" aria-hidden="true"></i>
                              <span>Return To Store</span>
                          </div>
                          <div>
                          <i className="fa fa-home" aria-hidden="true"></i>
                              <span>Click & Collect</span>
                          </div>
                  </div>
                  <div className="top_header_inner2">
                           <div>
                              <span>Download Our Apps</span>
                          </div>
                          <div>
                              <span className="false">|</span>
                              <span>Store Location</span>
                          </div>
                          <div>
                               <span className="false">|</span>
                              <span>Help</span>
                          </div>
  
                  </div>
      
              </div>
  
  
              <div className="bottom_header">
                <div className="bottom_header_inner1">
                        <div>
                            <img src={logo} />
                        </div>
                        <div>
                            <span>Women</span>
                        </div>
                        <div>
                            <span>Men</span>
                        </div>
                        <div>
                            <span>Girls</span>
                        </div>
                        <div>
                            <span>Boys</span>
                        </div>

                </div>


                <div className="bottom_header_inner2">
                   <div>
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input type="text" placeholder="What are you looking for?" />
                    </div>
                </div>


                <div className="bottom_header_inner3">
                
                    <div>
                        <span>Sign Up - Sign In</span>
                        <span className="false"> | </span>
                        <span> Basket<i className="fa fa-shopping-bag" aria-hidden="true"></i></span>
                    </div>

                </div>


              </div>
              <div className="bottom_header_tow">
                <div><span>Online Exclusives</span>
                <span>Curves (Plus Size)</span>
                <span>Tops</span>
                <span>Bottoms</span>
                <span>Dresses & Jumpsuits</span>
                <span>Sleepwear</span>
                <span>Indian Wear</span>
                <span>Sportswear</span>
                <span>Lingerie</span>
                <span>Accessories</span>
                <span>Footwear</span>
                <span>Winterwear</span>
                <span className="false">|</span>
                <span>More</span></div>

              </div>
              
  
          </div>
          
          
      )
  }

