import React from "react";

const ColorComponent = () => {
  const colors = [
    "blue",
    "orange",
    "black",
    "white",
    "indigo",
    "violet",
    "green",
  ];
  return (
    <ul className="color-container">
      {colors.map((color, index) => (
        <li key={index} className="color">
          <input type="radio" name="color" id={color} />
          <label htmlFor={color}>
            <span style={{ backgroundColor: `${color}` }}></span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default ColorComponent;
