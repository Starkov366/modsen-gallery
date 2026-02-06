import React from 'react';
import './Category.scss';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/urls';
import { InfoSection } from '../../components/InfoSection/InfoSection';
import { categoryList } from '../../config/categories';
export function Category() {
  const navigate = useNavigate();

  const handleSelectCategory = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const searchParams = new URLSearchParams();
      const categoryType = event.currentTarget.dataset.type;
      if (!categoryType) return;
      searchParams.set('category', categoryType);
      navigate(`${ROUTES.IMAGES}?${searchParams.toString()}`);
    },
    [navigate]
  );
  return (
    <div className="category">
      <InfoSection></InfoSection>
      <div className="category__list">
        {categoryList.map((item) => {
          return (
            <div
              key={item.title}
              style={{ background: `url(${item.src}) center / cover` }}
              data-type={item.type}
              onClick={handleSelectCategory}
              className="category__item"
            >
              <p className="category__item-title">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
