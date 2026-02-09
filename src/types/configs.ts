import { ROUTES } from 'router/urls';
export type FooterMenuItem = {
   text: string;
   href: string;
};

export type FooterMenu = {
   title: string;
   items: FooterMenuItem[];
};

export type headerNav = {
   id: string;
   to: ROUTES;
   icon: string;
   activeIcon: string;
   label: string;
};
export type Categories = {
   title: string;
   query: string;
};
export type Filter = {
   value: string;
   textContent: string;
};
