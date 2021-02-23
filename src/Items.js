import React, { useState } from "react";

const Items = ({ handleProduct, item, total, cartItems, removeCartItems, addPrice, decrementMoney, addMoney }) => {
    const [currentvalue, setCurrentvalue] = useState(0);
    const [isAdded, setIsAdded] = useState(false)

    const Increment = () => {
        setCurrentvalue(currentvalue + 1)
        cartItems()
        addMoney(item.price)
    }

    const Decrement = () => {
        if (currentvalue > 1) {
            setCurrentvalue(currentvalue - 1)
            removeCartItems()
            decrementMoney(item.price)
        }
        else {
            setIsAdded(false)
            setCurrentvalue(currentvalue - 1)
            removeCartItems()
            decrementMoney(item.price)
        }
    }

    const handleButton = () => {
        setCurrentvalue(currentvalue + 1)
        cartItems()
        addMoney(item.price);
        setIsAdded(true)
    }

    return (
        <>
            <div className="items">
                <img className="product-img" src={item.img} />
                <div className="name">{item.name}</div>
                <div className="price"><h5>Price: </h5><h5>₹{item.price}</h5></div>

                <div className="add-to-cart-wrapper">
                    {
                        !isAdded ? <button className="add-to-cart" onClick={handleButton}>
                            <div onClick={handleProduct}>Add</div><div>+</div></button> :
                            <div className="cart-item">
                                <div onClick={Decrement} className="Decrement">-</div>
                                {currentvalue}
                                <div onClick={Increment} className="Increment"> +</div>
                            </div>}
                    {/* <div className="addItems">Add items to the Cart.</div> */}
                </div>
            </div>
        </>
    );
}
export default Items;