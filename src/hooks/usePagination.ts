import { useMemo } from 'react';

export function usePagination(totalPages: number, currentPage: number, windowSize = 4) {
  return useMemo(() => {
    const startPage = Math.floor((currentPage - 1) / windowSize) * windowSize + 1;
    const endPage = Math.min(startPage + windowSize - 1, totalPages);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }, [totalPages, currentPage, windowSize]);
}
