import React from 'react';
import 'components/CategoryItem/CategoryItem.scss';

type Props = {
   title: string;
   src: string;
   type: string;
   onClick: (type: string) => void;
};

const CategoryItem = ({ title, src, type, onClick }: Props) => {
   return (
      <div className="category__item" style={{ background: `url(${src}) center / cover` }} onClick={() => onClick(type)}>
         <p className="category__item-title">{title}</p>
      </div>
   );
};
export default CategoryItem;
