import React from 'react';
import './InfoSection.scss';
import { useLocation } from 'react-router-dom';
import { SearchBox } from '../SearchBox/SearchBox';
import { ROUTES } from '../../router/urls';
export function InfoSection() {
  const pageType: string = useLocation().pathname;
  return (
    <section className="infoSection">
      <h1 className="infoSection__title">
        Let's Find Some <span className="infoSection__title-word">Images</span> Here!
      </h1>
      {pageType === ROUTES.IMAGES && <SearchBox></SearchBox>}
    </section>
  );
}
