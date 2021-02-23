import React, { useState , useEffect} from "react";
import data from "./data.json";
import Sidepannel from "./Sidepannel";
import "./App.css";
import Navbar from "./Navbar";
import Items from "./Items";

const App = () => {
  const [currentItems, setCurrentItems] = useState(data.map(e=> {return {...e, cart : 0, }}));
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);
  const [countProduct, setCountproduct] = useState(0);
  const [cartData, setcartData] = useState([]);

  const handleProduct = () => {
    setCountproduct(countProduct + 1);
  };

  const addMoney = (itemPrice) => {
    setPrice(price + itemPrice);
  };

  const decrementMoney = (itemPrice) => {
    setPrice(price - itemPrice);
  };

  const cartItems = () => {
    setTotal(total + 1);
  };

  const removeCartItems = () => {
    setTotal(total - 1);
  };

  const updateItems = (val) => {
    if (val === "All") {
      setCurrentItems(data);
    } else {
      setCurrentItems(
        data.filter((ele) => {
          return val === ele.category;
        })
      );
    }
  };

  return (
    <>
      <Navbar
        item={total}
        total={total}
        price={price}
        countProduct={countProduct}
      />
      <div className="container">
        <div className="sidepannel">
          <Sidepannel updateItems={updateItems} />
        </div>
        <div className="items-container">
          {currentItems.map((e) => {
            return (
              <Items
                handleProduct={handleProduct}
                total={total}
                addMoney={addMoney}
                decrementMoney={decrementMoney}
                item={e}
                removeCartItems={removeCartItems}
                cartItems={cartItems}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default App;
