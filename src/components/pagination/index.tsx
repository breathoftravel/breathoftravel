import React, {ReactElement, useEffect, useState} from 'react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
                                                 totalItems,
                                                 itemsPerPage,
                                                 currentPage,
                                                 onPageChange,
                                               }) => {
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(totalItems / itemsPerPage));
  }, [totalItems, itemsPerPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pageCount) {
      onPageChange(page);
    }
  };

  const renderPaginationButtons = () => {
    const buttons: ReactElement[] = [];

    // First button
    buttons.push(
      <button
        key="first"
        className="join-item btn"
        onClick={() => handlePageChange(1)}
      >
        First
      </button>
    );

    // Previous button
    buttons.push(
      <button
        key="previous"
        className="join-item btn"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
    );

    // Page number buttons
    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(startPage + 4, pageCount);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`join-item btn ${i === currentPage ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    // Next button
    buttons.push(
      <button
        key="next"
        className="join-item btn"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === pageCount}
      >
        Next
      </button>
    );

    // Last button
    buttons.push(
      <button
        key="last"
        className="join-item btn"
        onClick={() => handlePageChange(pageCount)}
      >
        Last
      </button>
    );

    return buttons;
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <div className="join">{renderPaginationButtons()}</div>
    </div>
  );
};

export default Pagination;