import { HomePageComponent } from '../pages/home/home-page.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { CONFIG } from './main';

export const ROUTES = [
    {
        path: '',
        component: HomePageComponent
    },

    {
        path: 'home',
        component: HomePageComponent
    },

    // 404 page
    {
        path: CONFIG.ROUTING.PAGE_NOT_FOUND,
        component: PageNotFoundComponent
    },

    // Page not found
    // {
    //     path: '**',
    //     redirectTo: '/404'
    // }
];
