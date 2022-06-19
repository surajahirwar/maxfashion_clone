import React, { useEffect } from "react";
import "./Product.css"
import { useDispatch, useSelector } from "react-redux";
import { addDataCart } from "../../Redux/Cart/cart.action";
import { getMenData } from "../../Redux/Fetchdata/data.action";

export default function Boys() {
  
    const alertkaro = ()=>{
        alert("product add successfully")
}
const dispatch = (useDispatch());
const {data, getdata} = useSelector((state)=> state.data)

useEffect(()=> {
        dispatch(getMenData())
    
}, [])

const handleAddtoCart=(e)=>{
    dispatch(addDataCart(e))
  }

if(getdata.loading) return <div className="loading_div"><img src="https://i.imgur.com/buO4Nt2.gif" /></div>
if(getdata.error) return <div>Error...</div>
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
                    <option>ascending</option>
                    <option>descending</option>

                </select>
            </div>

       </div>
        </div>
        <div className="product_div">
            {data.map((e)=> (
               <div key={e.id} className="product_inner_div">
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
                <button className="main_inner_product_button"  onClick={()=>{handleAddtoCart(e), alertkaro()}}>ADD TO BASKET</button>
                </div>
                {/* <Hover key={e.id} e={e} /> */}
           
           </div>
       
           
            ))}
        </div>
       
    </div>
    )
}
