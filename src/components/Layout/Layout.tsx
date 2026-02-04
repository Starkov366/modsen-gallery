import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import './Layout.scss';
export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
