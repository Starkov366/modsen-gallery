import React from 'react';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
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
