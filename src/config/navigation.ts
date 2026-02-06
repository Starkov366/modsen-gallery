import { ROUTES } from '../router/urls';
import category from '../assets/images/category.png';
import images from '../assets/images/image.png';
import favorites from '../assets/images/favorites.png';
import categoryActive from '../assets/images/categoryActivate.png';
import imagesActive from '../assets/images/imageActivate.png';
import favoritesActive from '../assets/images/favorites.png';
export const navItems = [
  {
    id: 'category',
    to: ROUTES.CATEGORY,
    icon: category,
    activeIcon: categoryActive,
    label: 'Category',
  },
  {
    id: 'images',
    to: ROUTES.IMAGES,
    icon: images,
    activeIcon: imagesActive,
    label: 'Images',
  },
  {
    id: 'favourites',
    to: ROUTES.FAVOURITES,
    icon: favorites,
    activeIcon: favoritesActive,
    label: 'Favourites',
  },
];
