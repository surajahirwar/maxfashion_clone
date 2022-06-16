import React from "react";

export const Product = ({e}) =>  {
  return (
        <div>

            <div>
                <div>
                    <img src={e.image} />    
                </div>    
                <div>
                    <h4>{e.price}</h4>
                    <p>{e.title}</p>
                </div>
            </div> 
           
        </div>
        
    )
}
