import React from 'react';
import 'components/Pagination/Pagination.scss';
import { usePagination } from 'hooks/usePagination';
type PaginationProps = {
   totalPages: number;
   page: number;
   setPage: React.Dispatch<React.SetStateAction<number>>;
};
export function Pagination({ totalPages, page, setPage }: PaginationProps) {
   const pages = usePagination(totalPages, page);
   const goNext = () => {
      if (page < totalPages) {
         setPage(page + 1);
      }
   };

   const goPrev = () => {
      if (page > 1) {
         setPage(page - 1);
      }
   };

   return (
      <div className="pagination">
         {page >= 5 && (
            <button className="pagination__back" onClick={goPrev} disabled={page === 1}>
               -
            </button>
         )}

         {pages.map((p) => (
            <button key={p} className={`pagination__btn${p === page ? 'Active' : ''}`} onClick={() => setPage(p)}>
               {p}
            </button>
         ))}

         <button className="pagination__next" onClick={goNext} disabled={page === totalPages}></button>
      </div>
   );
}
