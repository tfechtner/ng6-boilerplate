import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CONFIG } from './config/main';

import { HomePageComponent } from './pages/home/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },

    {
        path: 'home',
        component: HomePageComponent,
    },

    {
        path: 'dashboard',
        loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule',
    },

    // 404 page
    {
        path: CONFIG.ROUTING.PAGE_NOT_FOUND,
        component: PageNotFoundComponent,
    },

    // Page not found
    {
        path: '**',
        redirectTo: '/404'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        ),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule {
}
