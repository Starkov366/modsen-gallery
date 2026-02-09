import React, { memo } from 'react';
import 'components/Filter/Filter.scss';
import { filterConfig } from 'config/filterOptions';
type FilterProps = {
   handleFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
   isTargetImage: boolean;
};
function Filter({ handleFilter, isTargetImage }: FilterProps) {
   return (
      !isTargetImage && (
         <div style={{ filter: isTargetImage ? 'blur(5px)' : 'inherit' }} className="filter">
            <p className="filter__info">Sort by</p>
            <select onChange={handleFilter} className="filter__select" defaultValue="Relevant">
               {filterConfig.map((option) => {
                  return (
                     <option key={option.value} className="filter__option" value={option.value}>
                        {option.textContent}
                     </option>
                  );
               })}
            </select>
         </div>
      )
   );
}
export const FilterComponent = memo(Filter);
