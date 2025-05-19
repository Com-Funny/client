import { useState, useMemo } from "react";

interface UsePaginationProps {
  totalItems: number;
  initialPage?: number;
  itemsPerPage?: number;
  maxPageButtons?: number;
  useQueryParam?: boolean;
  queryParamName?: string;
}

interface UsePaginationReturn {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  pageItems: number[];
  goToPage: (page: number) => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  goToFirstPage: () => void;
  goToLastPage: () => void;
  visiblePageNumbers: number[];
}

export const usePagination = ({
  totalItems,
  initialPage = 1,
  itemsPerPage = 10,
  maxPageButtons = 5,
}: UsePaginationProps): UsePaginationReturn => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const pageItems = useMemo(() => {
    return Array.from(
      { length: itemsPerPage },
      (_, i) => startIndex + i + 1
    ).filter((item) => item <= totalItems);
  }, [startIndex, itemsPerPage, totalItems]);

  const goToNextGroup = () => {
    const groupSize = maxPageButtons;
    const currentGroup = Math.ceil(currentPage / groupSize);

    const nextGroupFirstPage = currentGroup * groupSize + 1;

    if (nextGroupFirstPage > totalPages) {
      goToPage(totalPages);
    } else {
      goToPage(nextGroupFirstPage);
    }
  };

  const goToPage = (page: number) => {
    const targetPage = Math.max(1, Math.min(page, totalPages));

    if (targetPage === currentPage) return;

    setCurrentPage(targetPage);
  };

  const visiblePageNumbers = useMemo(() => {
    if (totalPages <= maxPageButtons) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const groupSize = maxPageButtons;
    const currentGroup = Math.ceil(currentPage / groupSize);

    let startPage = (currentGroup - 1) * groupSize + 1;
    let endPage = startPage + groupSize - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  }, [currentPage, totalPages, maxPageButtons]);

  const goToPreviousGroup = () => {
    const groupSize = maxPageButtons;
    const currentGroup = Math.ceil(currentPage / groupSize);

    if (currentGroup <= 1) {
      goToPage(1);
    } else {
      const previousGroupLastPage = (currentGroup - 1) * groupSize;
      goToPage(previousGroupLastPage);
    }
  };

  return {
    currentPage,
    totalPages,
    itemsPerPage,
    pageItems,
    goToPage,
    goToNextPage: goToNextGroup,
    goToPreviousPage: goToPreviousGroup,
    goToFirstPage: () => goToPage(1),
    goToLastPage: () => goToPage(totalPages),
    visiblePageNumbers,
  };
};

export default usePagination;
