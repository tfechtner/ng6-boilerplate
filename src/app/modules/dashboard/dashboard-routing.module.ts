import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard',  component: DashboardComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild( dashboardRoutes )
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule { }
