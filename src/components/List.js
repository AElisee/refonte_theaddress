import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const List = ({ category }) => {
  const pictures = useSelector((state) => state.pictures);

  // pagination
  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 9;
  const offset = currentPage * PER_PAGE;
  const pageCount = pictures ? Math.ceil(pictures.length / PER_PAGE) : 0;

  const handlePageClick = ({ selected: selectedPage }) => {
    window.scrollTo(0, 0);
    setCurrentPage(selectedPage);
  };
  //*** */

  return (
    <div className="list">
      <ul className="list-container">
        {pictures &&
          pictures
            .filter((pic) => pic.category.includes(category))
            .slice(offset, offset + PER_PAGE)
            .map((pic) => <ProductCard key={pic.id} pic={pic} />)}
      </ul>

      <ReactPaginate
        breakLabel="..."
        marginPagesDisplayed={2}
        previousLabel={currentPage > 0 ? "< précedant" : ""}
        nextLabel={`suivant >`}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
};

export default List;
