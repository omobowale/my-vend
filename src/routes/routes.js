import webRoutes from '../modules/web/routes';
import cutstructRoutes from '../modules/cutstruct/routes';

export default [
    ...cutstructRoutes,
    ...webRoutes, 
];
