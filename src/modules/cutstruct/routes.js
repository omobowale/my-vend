import { lazy } from 'react';
const Home = lazy(() => import('./pages/Home'));


export default [
    {
        path: '/cutstruct',
        component: Home,
        layout: false,
        exact: true,
        auth: false,
    }
];
