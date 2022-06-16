import React from "react";
import slider01 from "../../../public/Images/slider01.jpg"
import slider02 from "../../../public/Images/slider02.gif"
import slider03 from "../../../public/Images/slider03.jpg"
import slider04 from "../../../public/Images/slider04.jpg"
import freetag from "../../../public/Images/freetag.jpg"
import printed from "../../../public/Images/printed.jpg"
import printed2 from "../../../public/Images/printed2.jpg"
import trending1 from "../../../public/Images/trending1.jpg"
import trending2 from "../../../public/Images/trending2.jpg"
import trending3 from "../../../public/Images/trending3.jpg"
import budget1 from "../../../public/Images/budget1.jpg"
import budget2 from "../../../public/Images/budget2.jpg"
import budget3 from "../../../public/Images/budget3.jpg"
import mansoon from "../../../public/Images/mansoon.jpg"
import youth from "../../../public/Images/youth.jpg"
import sports1 from "../../../public/Images/sports1.jpg"
import sports2 from "../../../public/Images/sports2.jpg"
import sports3 from "../../../public/Images/sports3.jpg"
import view1 from "../../../public/Images/view1.jpg"
import gifting from "../../../public/Images/gifting.png"
import connect from "../../../public/Images/connect.jpg"
import { cards } from "../../../db.json"

// console.log("cards" , cards)
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
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
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
    <span>The Joy Of Gifting!</span>
    </div>
    <div>
        <img src={printed2} className="d-block w-100" alt="..." />  
    </div>
    </div>
</div>



{/* <-------fifth-------> */}


<div className="main_card">
      <span >Shop By Category</span>
     <div className="main_card_main">
      {cards.map((e)=> (
     <div key={e.id}>
        <div>
          <img src={e.image} />
        </div>
        <div>
          <h5>{e.title}</h5>
        </div>
      </div>
         
         ))}
     </div>
</div>

{/* <---------six--------> */}



<div className="printed">
    <div className="printed_main">
    <div>
    <span>Trending Stores</span>
    </div>
    <div className="trendincard">
        <img src={trending1} />  
        <img src={trending2}  />  
        <img src={trending3} />  

    </div>
    </div>
</div>


{/* <----------seven--------> */}

<div className="printed">
    <div className="printed_main">
    <div>
    <span>Budget Zone</span>
    </div>
    <div className="trendincard">
        <img src={budget1} />  
        <img src={budget2}  />  
        <img src={budget3} />  

    </div>
    </div>
</div>


{/* <---------eight----> */}


<div className="printed">
    <div className="printed_main">
    <div>
    <span>Monsoon Checklist</span>
    </div>
    <div>
        <img src={mansoon} className="d-block w-100" alt="..." />  
    </div>
    </div>
</div>



{/* <------nine-------> */}


<div className="printed">
    <div className="printed_main">
    <div>
    <span>Youth Store</span>
    </div>
    <div>
        <img src={youth} className="d-block w-100" alt="..." />  
    </div>
    </div>
</div>

{/* <---------ten-----------> */}


<div className="printed">
    <div className="printed_main">
    <div>
    <span>Sports Must-Haves</span>
    </div>
    <div className="trendincard"> 
        <img src={sports1} />  
        <img src={sports2}  />  
        <img src={sports3} />  

    </div>
    </div>
</div>


{/* <------------eleven---------> */}


<div className="printed">
    <div className="printed_main">
    <div>
        <img src={view1} className="d-block w-100" alt="..." />  
    </div>
    </div>
</div>


{/* <----------twelve---------> */}


<div className="printed">
    <div className="printed_main">
    <div>
    <span>Gifting Zone</span>
    </div>
    <div>
        <img src={gifting} className="d-block w-100" alt="..." />  
    </div>
    </div>
</div>

{/* <--------thirteen------> */}



<div className="printed">
    <div className="printed_main">
    <div>
    <span>Connect With Us</span>
    </div>
    <div>
        <img src={connect} className="d-block w-100" alt="..." />  
    </div>
    </div>
</div>

















        </div>
        
    )
}
