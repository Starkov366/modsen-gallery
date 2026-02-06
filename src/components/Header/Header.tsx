import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { navItems } from '../../config/navigation';
import { ROUTES } from '../../router/urls';
export function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };
  return (
    <header className="header">
      <Link to={ROUTES.DEFAULT} className="header__link">
        <img className="header__logo" src={logo} alt="Логотип" />
      </Link>
      <nav className="header__nav">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.to}
            className="header__link"
            onClick={() => handleLinkClick(item.id)}
          >
            <img
              className="header__icon"
              src={item.id === activeLink ? item.activeIcon : item.icon}
            />
            <span
              style={{ color: item.id === activeLink ? 'rgba(224, 164, 73, 1)' : 'white' }}
              className="header__text"
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
