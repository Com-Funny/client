"use client";

import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import usePagination from "src/modules/usePagination";

interface PaginationProps {
  total: number;
  limit: number;
  page: number;
  handlePageChange: (page: number) => void;
}

export default function Pagination({
  total,
  limit,
  page,
  handlePageChange,
}: PaginationProps) {
  const {
    currentPage,
    totalPages,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    goToFirstPage,
    goToLastPage,
    visiblePageNumbers,
  } = usePagination({
    totalItems: total,
    initialPage: page,
    itemsPerPage: limit,
    maxPageButtons: 5,
  });

  useEffect(() => {
    handlePageChange(currentPage);
  }, [currentPage]);

  return (
    <div className="w-full flex items-center justify-center gap-2 my-4">
      <button
        onClick={currentPage > 1 ? goToFirstPage : undefined}
        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
          currentPage > 1
            ? "hover:bg-gray-100 cursor-pointer"
            : "opacity-50 cursor-not-allowed"
        }`}
        title="첫 페이지"
        disabled={currentPage <= 1}
      >
        <FontAwesomeIcon
          icon={faAnglesLeft}
          className={`!w-4 !h-4 ${
            currentPage > 1 ? "text-gray-600" : "text-gray-400"
          }`}
        />
      </button>
      <button
        onClick={currentPage > 1 ? goToPreviousPage : undefined}
        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
          currentPage > 1
            ? "hover:bg-gray-100 cursor-pointer"
            : "opacity-50 cursor-not-allowed"
        }`}
        title="이전 페이지"
        disabled={currentPage <= 1}
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
          className={`!w-4 !h-4 ${
            currentPage > 1 ? "text-gray-600" : "text-gray-400"
          }`}
        />
      </button>
      {visiblePageNumbers.map((page: number) => (
        <button
          key={`pagination_button_${page}`}
          onClick={() => goToPage(page)}
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
            currentPage === page
              ? "bg-gray text-gray-100 font-medium"
              : "text-gray-700 hover:bg-gray-100 cursor-pointer"
          }`}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </button>
      ))}
      <button
        onClick={currentPage < totalPages ? goToNextPage : undefined}
        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
          currentPage < totalPages
            ? "hover:bg-gray-100 cursor-pointer"
            : "opacity-50 cursor-not-allowed"
        }`}
        title="다음 페이지"
        disabled={currentPage >= totalPages}
      >
        <FontAwesomeIcon
          icon={faAngleRight}
          className={`!w-4 !h-4 ${
            currentPage < totalPages ? "text-gray-600" : "text-gray-400"
          }`}
        />
      </button>
      <button
        onClick={currentPage < totalPages ? goToLastPage : undefined}
        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
          currentPage < totalPages
            ? "hover:bg-gray-100 cursor-pointer"
            : "opacity-50 cursor-not-allowed"
        }`}
        title="마지막 페이지"
        disabled={currentPage >= totalPages}
      >
        <FontAwesomeIcon
          icon={faAnglesRight}
          className={`!w-4 !h-4 ${
            currentPage < totalPages ? "text-gray-600" : "text-gray-400"
          }`}
        />
      </button>
    </div>
  );
}
