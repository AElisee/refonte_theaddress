import React from "react";

const TopFilter = () => {
  return (
    <div className="top-filter">
      <div className="top-filter-container">
        <div className="title">
          <h3>
            Collection <span>(985)</span>
          </h3>
        </div>
        <div className="sort-part">
          <div className="slice-number">
            <p>afficher les articles :</p>
            <span id="slice-number">
              <select name="slice-number" id="">
                <option value="all">tous</option>
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="32">32</option>
                <option value="64">30</option>
              </select>
            </span>
          </div>
          <div className="sort-term">
            <p>trier :</p>
            <span id="slice-term">
              <select name="slice-temr" id="">
                <option value="">Populaire</option>
                <option value="">plus vendus</option>
              </select>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFilter;
