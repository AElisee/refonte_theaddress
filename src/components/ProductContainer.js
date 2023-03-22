import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import List from "./List";
import { useSelector } from "react-redux";
import SizeComponent from "./SizeComponent";
import ColorComponent from "./ColorComponent";

const ProductContainer = ({ page, category }) => {
  const pictures = useSelector((state) => state.pictures);

  const minRangevalue = 195000;
  const maxRangevalue = 1500000;
  const [rangeValue, SetrangeValue] = useState(maxRangevalue);
  const [dropdownStates, setDropdownStates] = useState([
    false,
    false,
    false,
    false,
  ]);

  const toggleMenu = (index) => {
    const updatedStates = [...dropdownStates];
    updatedStates[index] = !updatedStates[index];
    setDropdownStates(updatedStates);
  };

  const DropdownToggle = ({ index }) => {
    const isOpen = dropdownStates[index];
    return (
      <span className="dropdown-toggle" onClick={() => toggleMenu(index)}>
        {isOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </span>
    );
  };

  return (
    <div className="products-container">
      <div className="left">
        <div className="filter filter-by-type">
          <div className="top">
            <h5>type d'article</h5>
            <DropdownToggle index={0} />
          </div>
          {!dropdownStates[0] ? (
            <div className="checkbox-container">
              <input type="checkbox" id="type" />
              <label htmlFor="type">
                T-SHIRT <span>(345)</span>
              </label>
            </div>
          ) : null}
        </div>

        <div className="filter filter-by-price">
          <div className="top">
            <h5>Prix</h5>
            <DropdownToggle index={1} />
          </div>
          {!dropdownStates[1] ? (
            <div className="range-container">
              <div className="min-max">
                <span id="min">{minRangevalue.toLocaleString()} F.CFA</span>
                <span id="max">
                  {parseInt(rangeValue).toLocaleString()} F.CFA
                </span>
              </div>
              <input
                type="range"
                min={195000}
                max={1500000}
                defaultValue={rangeValue}
                onChange={(e) => SetrangeValue(e.target.value)}
              />
            </div>
          ) : null}
        </div>

        <div className="filter filter-by-size">
          <div className="top">
            <h5>taille</h5>
            <DropdownToggle index={2} />
          </div>
          {!dropdownStates[2] ? <SizeComponent /> : null}
        </div>

        <div className="filter filter-by-color">
          <div className="top">
            <h5>couleur</h5>
            <DropdownToggle index={3} />
          </div>
          {!dropdownStates[3] ? <ColorComponent /> : null}
        </div>
      </div>

      <div className="right">
        <div className="pageName">
          <h2>{page}</h2>
        </div>

        <div className="filterTop">
          <div className="top-filter-container">
            <div className="collection">
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
        {/* composant de list */}
        <List category={category} />
      </div>
    </div>
  );
};

export default ProductContainer;
