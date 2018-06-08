import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

// Clarity
import { ClarityModule } from '@clr/angular';

// Modules
import { CommonComponentsModule } from '../common-components/common-components.module';
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
        ClarityModule,
        CommonComponentsModule,
        DashboardRoutingModule
    ],
    exports: [
        DashboardComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule {
}
