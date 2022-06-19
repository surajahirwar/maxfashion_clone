import React from "react";
import "./Header.css"
import logo from "../../../public/Images/logo.png" 
import { Link } from "react-router-dom";
import Sign from "./Sign";
import { useState } from "react";
import Otp from "./Otp";
import { useDispatch, useSelector } from "react-redux";
import { logoutApi } from "../../Redux/Auth/auth.action";
export default function Header() {
    const dispatch = useDispatch()
    const [toggle, settoggle] = useState(true)
    const { isAuth} = useSelector((state)=> state.auth);
    
  const handleLoginClick = () => {

    
    dispatch(logoutApi());
  };
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
                    {isAuth ? <span type="button"onClick={handleLoginClick}>Logout</span> : <span data-bs-toggle="modal" data-bs-target="#exampleModal" >Login</span>} 
                        <span className="false"> | </span>
                        <Link className="Linkspan" to="/cart" ><span> Basket<i className="fa fa-shopping-bag" aria-hidden="true"></i></span></Link> 
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
              
                <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog ">
                        <div className="modal-content p-6 ">
                            <div className="modal-header">
                                <h5  className="modal-title display-6" id="exampleModalLabel">Sign up or Sign in</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                           { toggle ? <Sign /> : <Otp />}
                            <div className="modal-footer">
                               
                               {toggle ? <button onClick={()=> settoggle(!toggle)} type="button" className="btn btn-primary ">CONTINUE</button> : 
                                <button onClick={()=> settoggle(!toggle)} type="button" className="btn btn-success" data-bs-dismiss="modal"><Link to="/login">Verify</Link></button>
                               } 
                            </div>
                            </div>
                            
                        </div>

                        
                </div>
                                
      
        </div>
          
          
      )
  }

