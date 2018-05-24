import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { DashboardRoutingModule } from './dashboard-routing.module';

// Components
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ManagementComponent } from './containers/management/management.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ManagementComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    exports: [
        DashboardComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule {
}
