import React, { memo } from 'react';
import SearchIcon from 'assets/images/SearchIcon.png';
import 'components/SearchBox/SearchBox.scss';
type SearchBoxProps = {
   searchValue?: string;
   handleSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
   isDisable: boolean;
};
function SearchBox({ handleSearch, searchValue, isDisable }: SearchBoxProps) {
   return (
      <div className="searchBox">
         <img src={SearchIcon} className="searchBox__icon" />
         <input
            value={searchValue}
            onChange={(event) => handleSearch && !isDisable && handleSearch(event)}
            type="text"
            className="searchBox__input"
         />
      </div>
   );
}
export const SearchBoxComponent = memo(SearchBox);
