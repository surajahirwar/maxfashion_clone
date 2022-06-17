import React from "react";
import "./Cart.css"
import product from  "../../../public/Images/product.jpg"
import gift from "../../../public/Images/gift.png"
export default function Cart() {
  return (
        <div>
        <div class="main">
				<div class="your_s">
					<h2>Your Shopping Basket</h2>
				</div>
				<div class="your_s2">
					<h3> <span>1</span> Product</h3>
				</div>



			<div class="main_bx">
				<div class="box">
					<div class="box2">
						<div class="imgBx">
							<img src={product} />
						</div>
						<div class="details">
							<h4>MAX Girls Embroidered Drawstring Waist Jogggf ers - Set of 2</h4>
							<h4>Rs. 1199</h4>
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
						<button>Remove</button>
					</span>
					<span>
						<button>Move to favourites</button>
					</span>
				</div>
			</center>
		</div>	
	</div>
	<div class="main_bx">
				<div class="box">
					<div class="box2">
						<div class="imgBx">
							<img src={product} />
						</div>
						<div class="details">
							<h4>MAX Girls Embroidered Drawstring Waist Jogggf ers - Set of 2</h4>
							<h4>Rs. 1199</h4>
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
						<button>Remove</button>
					</span>
					<span>
						<button>Move to favourites</button>
					</span>
				</div>
			</center>
		</div>	
	</div>


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
						<span>Rs. 1199</span>
					</div>
					<div class="in2">
						<span>Shipping Charge</span>
						<span>Free</span>
					</div>
				</div>

					<div class="in1">
						<div class="in2">
							<span>Total</span>
							<span>Rs.1199</span>
						</div>
						<button>Checkout now</button>
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
