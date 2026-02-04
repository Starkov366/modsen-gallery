import React from 'react';
import SearchIcon from '../../assets/images/SearchIcon.png';
import './SearchBox.scss';
export function SearchBox() {
  return (
    <div className="searchBox">
      <img src={SearchIcon} className="searchBox__icon"></img>
      <input type="text" className="searchBox__input" />
    </div>
  );
}
