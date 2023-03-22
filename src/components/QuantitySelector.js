import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Like from "./favorite/Like";
import DisLike from "./favorite/DisLike";

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
      <p>Quantité :</p>
      <div id="qty-btn-like">
        <div className="quantity-selector">
          <span>
            <RemoveIcon onClick={handleMinusClick} style={{ fontSize: 18 }} />
          </span>
          <input value={quantity} readOnly />
          <span>
            <AddIcon onClick={handlePlusClick} style={{ fontSize: 18 }} />
          </span>
        </div>
        <button>AJOUTER UN PANIER</button>
        <div id="like">{quantity > 1 ? <Like /> : <DisLike />}</div>
      </div>
    </div>
  );
};

export default QuantitySelector;
