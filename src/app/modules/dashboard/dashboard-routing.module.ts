import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ManagementComponent } from './containers/management/management.component';

const dashboardRoutes: Routes = [
    {
        path: '',  component: DashboardComponent
    },
    {
        path: 'management',  component: ManagementComponent
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
