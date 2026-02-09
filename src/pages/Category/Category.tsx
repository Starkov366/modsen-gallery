import React, { useState, useEffect } from 'react';
import 'pages/Category/Category.scss';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'router/urls';
import { InfoSection } from 'components/InfoSection/InfoSection';
import { unsplashApi } from 'api/unplash';
import { CategoryList } from 'components/CategoryList/CategoryList';
import { Topic } from 'types/api';
export function Category() {
   const navigate = useNavigate();
   const [categories, setCategories] = useState<Topic[]>([]);

   const handleSelectCategory = (type: string) => {
      const searchParams = new URLSearchParams();
      searchParams.set('category', type);
      navigate(`${ROUTES.IMAGES}?${searchParams.toString()}`);
   };

   useEffect(() => {
      unsplashApi.getTopics().then(setCategories);
   }, []);

   return (
      <div className="category">
         <InfoSection />
         <CategoryList categories={categories} onSelect={handleSelectCategory} />
      </div>
   );
}
