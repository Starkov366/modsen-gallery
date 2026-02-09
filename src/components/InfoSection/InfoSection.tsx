import React from 'react';
import 'components/InfoSection/InfoSection.scss';
import { useLocation } from 'react-router-dom';
import { SearchBoxComponent } from 'components/SearchBox/SearchBox';
import { ROUTES } from 'router/urls';
import { RootState } from 'store';
import { useSelector } from 'react-redux';

type InfoSectionProps = {
   handleSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
   searchValue?: string;
};
export function InfoSection({ handleSearch, searchValue }: InfoSectionProps) {
   const pageType: string = useLocation().pathname;

   const isTargetImage = useSelector((state: RootState) => state.core.isChoisedImage);
   return (
      <section style={{ filter: isTargetImage ? 'blur(5px)' : 'inherit' }} className="infoSection">
         <h1 className="infoSection__title">
            Let's Find Some <span className="infoSection__title-word">Images</span> Here!
         </h1>
         {pageType === ROUTES.IMAGES && (
            <SearchBoxComponent isDisable={isTargetImage} searchValue={searchValue} handleSearch={handleSearch}></SearchBoxComponent>
         )}
      </section>
   );
}
