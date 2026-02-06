import React from 'react';
import './InfoSection.scss';
import { useLocation } from 'react-router-dom';
import { SearchBox } from '../SearchBox/SearchBox';
import { ROUTES } from '../../router/urls';
type InfoSection = {
  handleSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue?: string;
};
export function InfoSection({ handleSearch, searchValue }: InfoSection) {
  const pageType: string = useLocation().pathname;
  return (
    <section className="infoSection">
      <h1 className="infoSection__title">
        Let's Find Some <span className="infoSection__title-word">Images</span> Here!
      </h1>
      {pageType === ROUTES.IMAGES && (
        <SearchBox searchValue={searchValue} handleSearch={handleSearch}></SearchBox>
      )}
    </section>
  );
}
