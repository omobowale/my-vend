import { lazy } from 'react';
const Home = lazy(() => import('./pages/Home'));
const Category = lazy(() => import('./pages/Category'));
const SubCategoryProductList = lazy(() => import('./pages/SubCategoryProductList'));
const SearchProductList = lazy(() => import('./pages/SearchProductList'));
const NotFound = lazy(() => import('./pages/Notfound/NotFound'));


export default [
    {
        path: '/',
        component: Home,
        exact: true,
        auth: false,
    },
    {
        path: '/category/:name',
        component: Category,
        exact: true,
        auth: false,
    },
    {
        path: '/category/:categoryName/:name',
        component: SubCategoryProductList,
        exact: true,
        auth: false
    },
    {
        path: '/product-search',
        component: SearchProductList,
        exact: true,
        auth: false
    }
];
