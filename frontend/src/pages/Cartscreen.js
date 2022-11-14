// import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Cartscreen() {
  //const { cartItems } = props;
  // const [cartItems, setCartItems] = useState([]);

  //const { cartItems } = props;
  return (
    <div>
      <Header/>
      <div className="ABody">

      <h2>Cart Items</h2>
      {/* <div>{cartItems.length === 0 && <div>cart is empty</div>}</div> */}
      </div>
      <Footer />
    </div>
  );
}

export default Cartscreen;
