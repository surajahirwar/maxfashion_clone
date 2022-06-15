import React from "react";
import slider01 from "../../../public/Images/slider01.jpg"
import slider02 from "../../../public/Images/slider02.gif"
import slider03 from "../../../public/Images/slider03.jpg"
import slider04 from "../../../public/Images/slider04.jpg"
import freetag from "../../../public/Images/freetag.jpg"
import printed from "../../../public/Images/printed.jpg"
import printed2 from "../../../public/Images/printed2.jpg"

import "./Home.css"
export default function Home() {
  return (
        <div>

<div id="carouselExampleControls" className="carousel slide forshadow " data-bs-ride="carousel">
    <center>
  <div className="carousel-inner main_slider">
    <div className="carousel-item slider active">
      <img src={slider01} className="d-block w-100"  alt="..." />
    </div>
    <div className="carousel-item slider">
      <img src={slider02} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item slider">
      <img src={slider03} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item slider">
      <img src={slider04} className="d-block w-100" alt="..." />
    </div>
  </div>
  </center>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 


{/* <---------second----------> */}

<div className="freetag">
        <div className="freetag_main">
            <img  src={freetag} />
        </div>
</div>

{/* <-------third----> */}

<div className="printed">
    <div className="printed_main">
    <div>
    <span>Budget Buy</span>
    </div>
    <div>
        <img src={printed} className="d-block w-100" alt="..." />  
    </div>
    </div>
</div>

{/* <------four----> */}


<div className="printed">
    <div className="printed_main">
    <div>
    <span>Budget Buy</span>
    </div>
    <div>
        <img src={printed2} className="d-block w-100" alt="..." />  
    </div>
    </div>
</div>










        </div>
        
    )
}
