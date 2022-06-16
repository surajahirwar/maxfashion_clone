import React from "react";
import "./Header.css"
import logo from "../../../public/Images/logo.png" 
import { Link } from "react-router-dom";
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
                            <Link  to="/">
                            <img src={logo} />
                            </Link>
                        </div>
                        <div className="hover_div">
                            <Link className="Linkspan" to="/women">
                            <span >Women</span>
                            </Link>
                        </div>
                        <div className="hover_div">
                            <Link className="Linkspan" to="/men" >
                            <span>Men</span>
                            </Link>
                        </div>
                        <div className="hover_div">
                            <Link className="Linkspan" to="/girls" >
                            <span>Girls</span>
                            </Link>
                        </div>
                        <div className="hover_div"> 
                            <Link className="Linkspan" to="/boys" >
                            <span>Boys</span>
                            </Link> 
                           
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
                <div>
                <span className="hover_div">Online Exclusives</span>
                <span className="hover_div">Curves (Plus Size)</span>
                <span className="hover_div">Tops</span>
                <span className="hover_div">Bottoms</span>
                <span className="hover_div">Dresses & Jumpsuits</span>
                <span className="hover_div">Sleepwear</span>
                <span className="hover_div">Indian Wear</span>
                <span className="hover_div">Sportswear</span>
                <span className="hover_div">ingerie</span>
                <span className="hover_div">Accessories</span>
                <span className="hover_div">Footwear</span>
                <span className="hover_div">Winterwear</span>
                <span className="false">|</span>
                <span className="hover_div">More</span>
                </div>

              </div>
              
  
          </div>
          
          
      )
  }

