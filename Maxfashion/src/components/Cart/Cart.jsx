import React, { useEffect, useState } from "react";
import "./Cart.css"
import product from  "../../../public/Images/product.jpg"
import gift from "../../../public/Images/gift.png"
import { useDispatch, useSelector } from "react-redux";
import { deleteDataCart, getDataCart } from "../../Redux/Cart/cart.action";
import { Link } from "react-router-dom";
export default function Cart() {

	const dispatch=useDispatch()
	const [totalprice,setTotalprice]=useState(0)
	let getdatad=useSelector((state)=>state.getCartData.getCart)
	const {getdata,getloading,geterror}=getdatad
	// const {getloading,geterror,getdata}=useSelector((state)=>state.getCartData.getCart)
	const {addloading,adderror,adddata}=useSelector((state)=>state.addCartData.addCart)
	const {deleteerror,deletedata,deleteloading}=useSelector((state)=>state.deleteCartData.deleteCart)
	
  const handleDelete=(id)=>{
	dispatch(deleteDataCart(id))
  }
	  useEffect(()=>{
	 dispatch(getDataCart())
	//  console.log(gettingCart,"getdata");
	console.log("total",totalprice)
	  },[deleteloading])
	  
	  useEffect(()=>{
		let totalPrice=0
		// getdata.map((e)=>(
		//   totalPrice=totalPrice+e.price
		  
		//   console.log(e,"eprice")
		//  ))
		getdata.map((e)=>{
		  totalPrice=totalPrice+e.price
		  
		   console.log(e.price,"eprice")
		})
		 setTotalprice(totalPrice)
	  //  dispatch(getDataCart())
	  },[addloading,deleteloading,getdatad])
	
  
	  if(getloading||addloading){
		<h1>loading...</h1>
	  }
	  if(geterror||adderror||deleteerror){
		<h1>something went wrong</h1>
	  }
	if(getdata.length<1){
	  return <h1 style={{fontSize:"30px", fontWeight:"600", textAlign:"center"}}>Cart is Empty</h1>
	}


  return (
        <div>
        <div class="main">
				<div class="your_s">
					<h2>Your Shopping Basket</h2>
				</div>
				<div class="your_s2">
					<h3> <span>{getdata.length}</span> Product</h3>
				</div>



		{getdata.map((e)=>(
	<div key={e.id} class="main_bx">
				<div class="box">
					<div class="box2">
						<div class="imgBx">
							<img src={e.image} />
						</div>
						<div class="details">
							<h4>{e.title}</h4>
							<h4>Rs. {e.price}</h4>
							<span>
								<p>Colour: Black</p>	
								<p>Size: 3-4 Y</p>
							</span>
						</div>
					</div>

			<div class="qtyBx">
				<span className="qtyBx_span">
					<i class="fa fa-calendar-alt"></i>
					<div className="qtyBx_span_div">Delivery in </div>
					<div> Enter Pincode Above</div>
				</span>
				<span>
					<select>
						<option selected="" disabled="">Qty</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</span>
			</div>
			
			<center>
				<div class="box_f">
					<span>
						<button onClick={()=>handleDelete(e.id)}>Remove</button>
					</span>
					<span>
						<button>Move to favourites</button>
					</span>
				</div>
			</center>
		</div>	
	</div>
	))};


		<div class="sidbx">

			<div class="inputBx">
				<span>Deliver To</span>
				<input placeholder="Enter Pincode" type="" name="" />
				<button>Check</button>
			</div>

			<div class="inputBx">
				<div class="imgBx">
					<img src={gift} />
				</div>
				<div class="details">
					<h2>Offers For You ! <button>Select</button></h2>
					<p>Choose and apply voucher in 2 simple steps</p>
				</div>
			</div>

			<div class="inputBx">
				<div class="in1">
					<div class="in2">
						<span>Total MRP</span>
						<span>Rs. {totalprice}</span>
					</div>
					<div class="in2">
						<span>Shipping Charge</span>
						<span>Free</span>
					</div>
				</div>

					<div class="in1">
						<div class="in2">
							<span>Total</span>
							<span>Rs. {totalprice}</span>
						</div><Link to="/checkout">
						<button>Checkout now</button></Link>
						<div class="notice">
							<p>Shipping charges might vary based on pincode delivery location</p>
						</div>
					</div>

			</div>
		</div>

	</div>

        </div>
        )
}
