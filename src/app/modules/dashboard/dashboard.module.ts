import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { DashboardRoutingModule } from './dashboard-routing.module';

// Components
import { DashboardComponent } from './containers/dashboard/dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule {
}
