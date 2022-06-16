import React from "react";

export default function Hover({e}) {
  return (

        <div>

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
    
  )
}
