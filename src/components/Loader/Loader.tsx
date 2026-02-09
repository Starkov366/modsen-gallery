import React from 'react';
import 'components/Loader/Loader.scss';
type LoaderProps = {
   isLoading: boolean;
};

export function Loader({ isLoading }: LoaderProps) {
   if (!isLoading) return null;

   return <div className="loader"></div>;
}
