import React from 'react';
import logo from '../../assets/images/logo.png';
import insta from '../../assets/images/insta.png';
import twitter from '../../assets/images/twitter.png';
import gitHub from '../../assets/images/githab.png';
import facebook from '../../assets/images/facebook.png';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <img className="footer__brand-image" src={logo}></img>
        <p className="footer__description">
          We have images that capture every mood and inspire every vision. From breathtaking
          landscapes to vibrant portraits.
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
        <div className="footer__menu">
          <h4 className="footer__menu-title">COMPANY</h4>
          <ul className="footer__menu-list">
            <li className="footer__menu-item">About</li>
            <li className="footer__menu-item">Features</li>
            <li className="footer__menu-item">Works</li>
            <li className="footer__menu-item">Career</li>
          </ul>
        </div>

        <div className="footer__menu">
          <h4 className="footer__menu-title">HELP</h4>
          <ul className="footer__menu-list">
            <li className="footer__menu-item">Customer Support</li>
            <li className="footer__menu-item">Delivery Details</li>
            <li className="footer__menu-item">Terms & Conditions</li>
            <li className="footer__menu-item">Privacy Policy</li>
          </ul>
        </div>

        <div className="footer__menu">
          <h4 className="footer__menu-title">FAQ</h4>
          <ul className="footer__menu-list">
            <li className="footer__menu-item">Account</li>
            <li className="footer__menu-item">Manage Deliveries</li>
            <li className="footer__menu-item">Orders</li>
            <li className="footer__menu-item">Payments</li>
          </ul>
        </div>

        <div className="footer__menu">
          <h4 className="footer__menu-title">RESOURCES</h4>
          <ul className="footer__menu-list">
            <li className="footer__menu-item">Free eBooks</li>
            <li className="footer__menu-item">Development Tutorial</li>
            <li className="footer__menu-item">How to - Blog</li>
            <li className="footer__menu-item">Youtube Playlist</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
