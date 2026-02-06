import React from 'react';
import SearchIcon from '../../assets/images/SearchIcon.png';
import './SearchBox.scss';
type SearchBox = {
  searchValue?: string;
  handleSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export function SearchBox({ handleSearch, searchValue }: SearchBox) {
  return (
    <div className="searchBox">
      <img src={SearchIcon} className="searchBox__icon"></img>
      <input
        value={searchValue}
        onChange={(event) => handleSearch && handleSearch(event)}
        type="text"
        className="searchBox__input"
      />
    </div>
  );
}
