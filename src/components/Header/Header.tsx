import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.png';
import category from '../../assets/images/category.png';
import images from '../../assets/images/image.png';
import favorites from '../../assets/images/favorites.png';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/urls';

export function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <nav className="header__nav">
        <Link to={ROUTES.CATEGORY} className="header__link">
          <img className="header__icon" src={category} alt="Категории" />
          <span className="header__text">Category</span>
        </Link>

        <Link to={ROUTES.IMAGES} className="header__link">
          <img className="header__icon" src={images} alt="Изображения" />
          <span className="header__text">Images</span>
        </Link>

        <Link to={ROUTES.FAVOURITES} className="header__link">
          <img className="header__icon" src={favorites} alt="Избранное" />
          <span className="header__text">Favourites</span>
        </Link>
      </nav>
    </header>
  );
}
