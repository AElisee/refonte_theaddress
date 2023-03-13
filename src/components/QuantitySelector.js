import React, { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);
  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handlePlusClick = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="qty-btn-like-container">
      <p>quantité :</p>
      <div id="qty-btn-like">
        <div className="quantity-selector">
          <span>
            <img
              src="/icons/minus.svg"
              alt="minus"
              onClick={handleMinusClick}
            />
          </span>
          <input value={quantity} readOnly />
          <span>
            <img src="/icons/plus.svg" alt="plus" onClick={handlePlusClick} />
          </span>
        </div>
        <button>AJOUTER UN PANIER</button>
        <div id="like">
          <img src="/icons/heart.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
