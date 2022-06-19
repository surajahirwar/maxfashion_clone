import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDataCart } from "../Redux/Cart/cart.action";
import "./checkout.css"
export default function Checkout() {

  const navigate = useNavigate();
  const alertkaro = ()=>{
    alert("Your order successfully placed Maxfashion ")
      navigate("/")
}
  
	const dispatch=useDispatch()
	const [totalprice,setTotalprice]=useState(0)
	let getdatad=useSelector((state)=>state.getCartData.getCart)
	const {getdata,getloading,geterror}=getdatad
	// const {getloading,geterror,getdata}=useSelector((state)=>state.getCartData.getCart)
	const {addloading,adderror,adddata}=useSelector((state)=>state.addCartData.addCart)
	const {deleteerror,deletedata,deleteloading}=useSelector((state)=>state.deleteCartData.deleteCart)


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
  
<div class="headdiv">

		<div class="box">
			<div class="head">
				<h2>Select a shipping method</h2>
			</div>

			<div class="head_btn">
				<button class="active">
					<h3>Home Delivery</h3>
					<p>Get your product delivered to your home.</p>
				</button>
				<button>
					<h3>Click & Collect</h3>
					<p>Get your product delivered to your home.</p>
				</button>
			</div>

			<div class="add">
				<h2>Add your shopping address</h2>

				<div class="inputBx">
					<span>Full Name</span>
					<input type="text" name="" />
				</div>
				<div class="inputBx">
					<span>Mobile Number</span>
					<input type="text" name="" />
				</div>
				<div class="inputBx">
					<span>Pincode</span>
					<input type="text" name="" />
				</div>
				<div class="inputBx">
					<span>City</span>
					<input type="text" name="" />
				</div>
				<div class="inputBx">
					<span>State</span>
					<select>
						<option>Delhi</option>
						<option>Mumbai</option>
						<option>Kolkata</option>
						<option>Bihar</option>
						<option>Assam</option>
						<option>Chandigarh</option>
					</select>
				</div>
				<div class="inputBx">
					<span>Building name or number</span>
					<input type="text" name="" />
				</div>
				<div class="inputBx">
					<span>Get your product delivered to your home.</span>
					<input type="text" name="" />
				</div>
				<div class="inputBx">
					<span>Street name or number</span>
					<input type="text" name="" />
				</div>
				<div class="inputBx">
					<span>Landmark <label>(optional)</label></span>
					<input type="text" name="" />
				</div>
				<div class="inputBx">
					<span>Address type <label>(optional)</label></span>
					<div class="radio">
						<label>Home <input type="radio" name="" /></label>
						
						<label>Office <input type="radio" name="" /></label>
					</div>
				</div>
			</div>

			<div class="cardDe">
				<div class="card_head">
					<h1>Select a payment method</h1>
				</div>
				<div class="debit">
					<div class="imgBx">
						<input type="radio" name="" />
						<img src="data:image/png;base64,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" />
					</div>
					<div class="c_side">
						<h3>Credit/Debit card</h3>
						<p>Use your Credit or Debit card</p>
					</div>
					<div class="options">
						<label>Credit Card <input type="radio" name="" /></label>
						
						<label>Debit Card <input type="radio" name="" /></label>
					</div>
				</div>

				<center>
					<div class="card">
						<div class="c_input">
							<span>Card Number</span>
							<input type="number" name="" />
						</div>
						<div class="c_input">
							<span>Name on Card</span>
							<input type="" name="" />
						</div>
						<div class="selectBx">
							<div class="s_head">
								<span>Expiry Date</span>
								<span>CVV ?</span>
							</div>
							<select>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
								<option>6</option>
								<option>7</option>
								<option>8</option>
								<option>9</option>
								<option>10</option>
								<option>11</option>
								<option>12</option>
							</select>

							<select>
								<option>YYYY</option>
								<option>2022</option>
								<option>2023</option>
								<option>2024</option>
								<option>2025</option>
								<option>2026</option>
								<option>2027</option>
								<option>2028</option>
								<option>2029</option>
							</select>

							<input type="text" placeholder="CVV" name="" />

						</div>
							<div class="action">
								
								<span><input type="checkbox" name="" /> Save this card for future transactions ?</span>
								<h4>Billing Address</h4>

								<span><input type="checkbox" name="" /> Is billing address the same as shipping address?</span>
							</div>

					</div>
							<div class="buttonBx">
								<span>By clicking on Proceed to Payment, you agree to our <a href="#">Terms and Conditions</a></span>
								<button onClick={()=> alertkaro()} >Pay Now</button>
							</div>
				</center>
			</div>

		</div>





	<div class="headdiv2">
		<div class="side_head">
			<h2>Your order summary</h2>
		</div>
		<div class="m_bx">
    {getdata.map((e)=> (
			<div class="item_bx">
				<div class="imgBx">
					<img src={e.image} />
				</div>
				<div class="details2">
					<p>{e.title}</p>
					<span>
						<p>Qty: 1</p>
						<p><b>Rs.{e.price}</b></p>
					</span>
				</div>
   
		</div>	
    ))}
			</div>
		<div class="s_total">
			<h5>Subtotal</h5>
			<h5>Price: Rs.{totalprice}</h5>
      <hr />
		</div>
		<div class="s_total">
			<h6>Standard Ground Shipping: <span>(2-4 business days)</span></h6>
			<h5>Free</h5>
      <hr />
		</div>

		<div class="s_total">
			<h6>Total</h6>
			<h6>Price: Rs. {totalprice}</h6>
      <hr />
		</div>

		<div class="s_footer">
			<p>Shipping charges might vary based on delivery location</p>
		</div>


	</div>





  </div>
  
  )
}
