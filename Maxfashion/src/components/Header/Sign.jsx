import React from "react";

export default function Sign() {
  return ( 
         <div>

             <div className="modal-body">
             <div className="text-wrap text-secondary">
                                Enjoy the convenience of a single account across all participating brands
                                </div>
                                <div>
                                    <h6>Mobile Number</h6>
                                    <div className="input-group mb-3">
                                    <span className="input-group-text bg-white"  id="basic-addon1">+91</span> 
                                    <input  type="number" className="form-control border border-1" placeholder="Enter your mobile number" aria-label="text-white" aria-describedby="basic-addon1" /> 
                                    </div>

                                </div>
                                <div>
                                    <p>By creating your account you agree to our <span className="text-primary">Terms and Conditions</span></p>
                             </div>   
                                
                            </div>
               
         </div>
         )
}
