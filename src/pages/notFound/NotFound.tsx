import React from 'react';
import 'pages/notFound/NotFound.scss';
export function NotFound() {
   return (
      <div className="NotFound">
         <h1 className="NotFound__httpCode">404</h1>
         <h2 className="NotFound__label">NOT FOUND</h2>
         <div className="NotFound__info">
            <h1 className="NotFound__infoTitle">
               The Page Was <span className="NotFound__infoWord">Not Found,</span> Please Return To The Main Page.{' '}
            </h1>
         </div>
      </div>
   );
}
