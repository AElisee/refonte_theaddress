import React from "react";

const SizeComponent = () => {
  const sizes = ["xs", "s", "m", "l", "xxl", "xxxl"];
  return (
    <ul className="size-container">
      {sizes.map((size, index) => (
        <li key={index} className="size">
          <input type="radio" name="size" id={size} />
          <label htmlFor={size}>{size.toLocaleUpperCase()}</label>
        </li>
      ))}
    </ul>
  );
};

export default SizeComponent;
