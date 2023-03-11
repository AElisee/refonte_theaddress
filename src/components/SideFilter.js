import React, { useState } from "react";

const SideFilter = () => {
  const minRangevalue = 195000;
  const maxRangevalue = 1500000;
  const [dropdownStates, setDropdownStates] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [rangeValue, SetrangeValue] = useState(maxRangevalue);

  // données qui doivent venir de la base de données
  const sizes = ["xs", "s", "m", "l", "xxl", "xxxl"];
  //----

  // la fonction pour le menu deroulant des filtres
  const toggleMenu = (index) => {
    const updatedStates = [...dropdownStates];
    updatedStates[index] = !updatedStates[index];
    setDropdownStates(updatedStates);
  };
  const DropdownToggle = ({ index }) => {
    const isOpen = dropdownStates[index];

    return (
      <span className="dropdown-toggle" onClick={() => toggleMenu(index)}>
        {isOpen ? (
          <img src="/icons/chevron-down.svg" alt="chevron-up" />
        ) : (
          <img src="/icons/chevron-up.svg" alt="chevron-up" />
        )}
      </span>
    );
  };
  //-------

  return (
    <div className="filter">
      <div className="filter-by-type dropdwon-menu">
        <div className="header">
          <h5 onClick={() => DropdownToggle(0)}>type d'article</h5>
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
      <div className="filter-by-price dropdwon-menu">
        <div className="header">
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
      <div className="filter-by-collection dropdwon-menu">
        <div className="header">
          <h5>collection</h5>
          <DropdownToggle index={2} />
        </div>
        {!dropdownStates[2] ? (
          <div className="collection-container">liste de collection</div>
        ) : null}
      </div>
      <div className="filter-by-size dropdwon-menu">
        <div className="header">
          <h5>taille</h5>
          <DropdownToggle index={3} />
        </div>
        {!dropdownStates[3] ? (
          <ul className="size-container">
            {sizes.map((size, index) => (
              <li key={index} className="size">
                <input type="radio" name="size" id={size} />
                <label htmlFor={size}>{size.toLocaleUpperCase()}</label>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="filter-by-color dropdwon-menu">
        <div className="header">
          <h5>couleur</h5>
          <DropdownToggle index={4} />
        </div>
        {!dropdownStates[4] ? (
          <div className="color-container">
            <p>couleur</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SideFilter;
