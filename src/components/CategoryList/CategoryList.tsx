import React from 'react';
import CategoryItem from 'components/CategoryItem/CategoryItem';
import 'components/CategoryList/CategoryList.scss';
import { Topic } from 'types/api';

type CategoryListProps = {
   categories: Topic[];
   onSelect: (type: string) => void;
};

export const CategoryList = ({ categories, onSelect }: CategoryListProps) => {
   return (
      <div className="category__list">
         {categories.map((item) => (
            <CategoryItem key={item.type} title={item.title} src={item.src || ''} type={item.type} onClick={onSelect} />
         ))}
      </div>
   );
};
