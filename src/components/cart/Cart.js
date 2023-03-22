import React from "react";

const Cart = () => {
  return (
    <div className="cart">
      <div className="container-lg">
        <div className="top flex flex-between">
          <h3>Votre panier</h3>
          <div className="icons flex gap-10">
            <span>item1</span>
            <hr />
            <span>item2</span>
            <hr />
            <span>item3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
