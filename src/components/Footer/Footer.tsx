import React from 'react';
import logo from 'assets/images/logo.png';
import insta from 'assets/images/insta.png';
import twitter from 'assets/images/twitter.png';
import gitHub from 'assets/images/githab.png';
import facebook from 'assets/images/facebook.png';
import { footerMenuData } from 'config/footer';
import 'components/Footer/Footer.scss';

export const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__brand">
            <img className="footer__brand-image" src={logo}></img>
            <p className="footer__description">
               We have images that capture every mood and inspire every vision. From breathtaking landscapes to vibrant portraits.
            </p>
            <div className="footer__social">
               <a href="#" className="footer__social-link">
                  <img src={twitter}></img>
               </a>
               <a href="#" className="footer__social-link">
                  <img src={facebook}></img>
               </a>

               <a href="#" className="footer__social-link">
                  <img src={insta}></img>
               </a>
               <a href="#" className="footer__social-link">
                  <img src={gitHub}></img>
               </a>
            </div>
            <p className="footer__copyright">Modsen.gallery © 2000-2025, All Rights Reserved</p>
         </div>

         <div className="footer__menus">
            {footerMenuData.map((menu, index) => (
               <div key={index} className="footer__menu">
                  <h4 className="footer__menu-title">{menu.title}</h4>
                  <ul className="footer__menu-list">
                     {menu.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="footer__menu-item">
                           <a className="footer__menu-itemText" href={item.href}>
                              {item.text}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
      </footer>
   );
};
