import React from "react";

const SideFilter = () => {
  return (
    <div className="filter">
      <div className="filter-by-type pb-30">
        <div className="header">
          <h5>type d'article</h5>
          <span>+</span>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="type" />
          <label htmlFor="type">
            T-SHIRT <span>(345)</span>
          </label>
        </div>
      </div>
      <div className="filter-by-price pb-30">
        <div className="header">
          <h5>Prix</h5>
          <span>+</span>
        </div>
        <div className="range">
          <div className="min-max">
            <span>min</span>
            <span>max</span>
          </div>
          <input type="range" />
        </div>
      </div>
      <div className="filter-by-collection pb-30">
        <div className="header">
          <h5>collection</h5>
          <span>+</span>
        </div>
      </div>
      <div className="filter-by-size pb-30">
        <div className="header">
          <h5>taille</h5>
          <span>+</span>
        </div>
        <ul className="size">
          <li>
            <input type="radio" name="size" id="size-xs" />
            <label htmlFor="size-xs">XS</label>
          </li>
          <li>
            <input type="radio" name="size" id="size-s" />
            <label htmlFor="size-s">S</label>
          </li>
          <li>
            <input type="radio" name="size" id="size-M" />
            <label htmlFor="size-s">M</label>
          </li>
          <li>
            <input type="radio" name="size" id="size-l" />
            <label htmlFor="size-l">L</label>
          </li>
          <li>
            <input type="radio" name="size" id="size-xl" />
            <label htmlFor="size-xl">XL</label>
          </li>
          <li>
            <input type="radio" name="size" id="size-XXL" />
            <label htmlFor="size-xxl">XXL</label>
          </li>
          <li>
            <input type="radio" name="size" id="size-xxxl" />
            <label htmlFor="size-xxxl">XXXL</label>
          </li>
        </ul>
      </div>
      <div className="filter-by-color pb-30">
        <div className="header">
          <h5>couleur</h5>
          <span>+</span>
        </div>
        <div className="color">
          <p>couleur</p>
        </div>
      </div>
    </div>
  );
};

export default SideFilter;
