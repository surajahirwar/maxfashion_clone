import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css"
// import Hover from "./Hover";
export default function Women() {
    const [isHover, setHover] = useState(false);



    const [data, setdata] = useState([])
    useEffect(()=> {
        axios.get("http://localhost:8080/women/")
        .then((e)=> setdata(e.data))
    },[])
    // console.log(data);
  return (
    <div className="product_main">
       <div className="filter_div_main">
       <div className="filter_div">
            <div>
                <select>
                    <option>Sort by Price</option>
                    <option>low to high</option>
                    <option>high to low</option>

                </select>
            </div>
            <div>
                <select>
                    <option> Sort by Order</option>
                    <option>low to high</option>
                    <option>high to low</option>

                </select>
            </div>

       </div>
        </div>
        <div className="product_div">
            {data.map((e)=> (
               <div key={e.id} className="product_inner_div"
               onMouseEnter={() => setHover(true)}
               onMouseLeave={() => setHover(false)}>
               <div className="product_div_img">
                   <img src={e.image} />
                   <span className="product_div_img_tag">ONLINE ONLY</span>    
               </div>    
               <div>
                   <h5>₹ {e.price}</h5>
                   <span>{e.title}</span>
               </div>
                <div className="main_hover_div">
               <div className="main_inner_product">
                <div className="main_inner_product_img"> <img src={e.image} /> blue</div>
                    <div className="main_inner_product_select">
                        <select>
                            <option>Select Size</option>
                            <option>xs</option>
                            <option>s</option>
                            <option>m</option>
                            <option>xl</option>
                            <option>xxl</option>
                        </select>
                    </div>
                </div>
                <button className="main_inner_product_button">ADD TO BASKET</button>
                </div>
                {/* <Hover key={e.id} e={e} /> */}
           
           </div>
       
           
            ))}
        </div>
       
    </div>
    )
}
