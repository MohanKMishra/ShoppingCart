import React, {useState} from "react";
import "./App.css"

const Cart=(props)=>{
    const [currentvalue, setCurrentvalue]=useState(1);
    
    const Increment=()=>{
        setCurrentvalue(currentvalue+1)
        props.cartItems()
        props.addMoney(props.item.price)

        // props.updateTotal(1)
    }
    const Decrement=()=>{
        if(currentvalue !=0){
        setCurrentvalue(currentvalue-1)
        props.removeCartItems()
        props.decrementMoney(props.item.price)
        }
    }
    return (
        
        <div>
            <div className="cart-item">
                <div onClick={Decrement}className="Decrement">-</div>
                {currentvalue}
                <div onClick={Increment} className="Increment"> +</div>
            </div>
                <div className="addItems">Add items to the Cart.</div>
        </div>
    );
}
export default Cart;