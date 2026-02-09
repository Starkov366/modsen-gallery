import React, { useState } from 'react';
import logo from 'assets/images/logo.png';
import insta from 'assets/images/insta.png';
import twitter from 'assets/images/twitter.png';
import gitHub from 'assets/images/githab.png';
import facebook from 'assets/images/facebook.png';
import { useLocation } from 'react-router-dom';
import 'components/Header/Header.scss';
import { Link } from 'react-router-dom';
import { navItems } from 'config/navigation';
import { ROUTES } from 'router/urls';
export function Header() {
   const location = useLocation();
   const [activeLink, setActiveLink] = useState(location.pathname);
   const [isOpen, setIsOpen] = useState(false);
   const handleLinkClick = (path: string) => {
      setActiveLink(path);
      setIsOpen(false);
   };
   return (
      <header className="header">
         <Link to={ROUTES.DEFAULT} className="header__link">
            <img className="header__logo" src={logo} alt="Логотип" />
         </Link>
         <div className={`header__burger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
         </div>
         <nav className={`header__nav ${isOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
               <Link key={item.id} to={item.to} className="header__link" onClick={() => handleLinkClick(item.id)}>
                  <img className="header__icon" src={item.id === activeLink ? item.activeIcon : item.icon} />
                  <span style={{ color: item.id === activeLink ? 'rgba(224, 164, 73, 1)' : 'white' }} className="header__text">
                     {item.label}
                  </span>
               </Link>
            ))}
            {isOpen && (
               <div className="header__socials">
                  <a href="#" className="header__social-link">
                     <img src={twitter}></img>
                  </a>
                  <a href="#" className="header__social-link">
                     <img src={facebook}></img>
                  </a>

                  <a href="#" className="header__social-link">
                     <img src={insta}></img>
                  </a>
                  <a href="#" className="header__social-link">
                     <img src={gitHub}></img>
                  </a>
               </div>
            )}
         </nav>
      </header>
   );
}
