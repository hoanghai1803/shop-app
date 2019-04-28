import React from "react";

function Pagination(props) {
  const { pages, currentPage, onClickPagination } = props;

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
          <li key={page.id} className="page-item">
            <button
              className="page-link"
              onClick={() => onClickPagination(page.id)}
            >
              {page.id}
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
}

export default Pagination;
