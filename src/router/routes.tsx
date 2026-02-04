import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './urls';
import { Category } from '../pages/Category/Category';
import { Images } from '../pages/Images/Images';
import { Favourites } from '../pages/Favourites/Favourites';
import { Layout } from '../components/Layout/Layout';
export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.DEFAULT} element={<Layout />}>
        <Route path={ROUTES.DEFAULT} element={<Navigate to={ROUTES.CATEGORY} replace />} />
        <Route path={ROUTES.CATEGORY} element={<Category />} />
        <Route path={ROUTES.FAVOURITES} element={<Favourites />} />
        <Route path={ROUTES.IMAGES} element={<Images />} />
      </Route>
    </Routes>
  );
};
