import { lazy } from 'react';
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/Notfound/NotFound'));


export default [
  {
    path: '/',
    component: Home,
    exact: true,
    auth: false,
  }
];
