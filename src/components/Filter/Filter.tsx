import React from 'react';
import './Filter.scss';
export function Filter() {
  return (
    <div className="filter">
      <p className="filter__info">Sort by</p>
      <select className="filter__select">
        <option defaultValue="Relevant" className="filter__option">
          Relevant
        </option>
        <option className="filter__option">Latest</option>
      </select>
    </div>
  );
}
