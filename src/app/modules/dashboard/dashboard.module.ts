import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard.component';

@NgModule({
    declarations: [DashboardHomeComponent],
    imports: [DashboardRoutingModule],
})
export class DashboardModule {}
