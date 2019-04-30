import React from "react";

const Pagination = ({ pages, currentPage, onClickPagination }) => {
  if (pages.length === 1) return null;

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            aria-label="Previous"
            onClick={() => onClickPagination("-")}
            disabled={currentPage === 1 ? "disabled" : ""}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {pages.map(page => (
          <li
            key={page}
            className={"page-item" + (page === currentPage ? " active" : "")}
          >
            <button
              className="page-link"
              onClick={() => onClickPagination(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            className="page-link"
            aria-label="Next"
            onClick={() => onClickPagination("+")}
            disabled={currentPage === pages.length ? "disabled" : ""}
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
