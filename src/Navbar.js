import React from "react";

const Navbar=(props)=>{
    return(
        <>
        <div className="navbar">
        <h1>आपकी दुकान</h1>
        <h3>Total Product:{props.countProduct} Total cart items : {props. total}  Total bill amount is ₹{props.price} </h3>
        </div>
        </>
    );
}
export default Navbar;