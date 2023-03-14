import React, { useState } from "react";
import SideFilter from "./SideFilter";
import TopFilter from "./TopFilter";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

const ProductsContainer = () => {
  const APIData = useSelector((state) => state.pictures);

  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 9;
  const offset = currentPage * PER_PAGE;
  const pageCount = APIData ? Math.ceil(APIData.length / PER_PAGE) : 0;

  function handlePageClick({ selected: selectedPage }) {
    window.scrollTo(0, 0);
    setCurrentPage(selectedPage);
  }
  return (
    <div className="products-container">
      <div className="breadcrumbs">fil d'ariane</div>
      <div className="filter-product-container">
        <div className="filter-part">
          <SideFilter />
        </div>
        <div className="products-part">
          <div className="product-part-head">
            <TopFilter />
          </div>
          <div className="product-dispalying">
            <ul className="card-container">
              {APIData &&
                APIData.slice(offset, offset + PER_PAGE).map((pic) => (
                  <ProductCard pic={pic} />
                ))}
            </ul>
            <ReactPaginate
              previousLabel={"< "}
              nextLabel={"suivant >"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
