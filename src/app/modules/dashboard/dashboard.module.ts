import { NgModule } from '@angular/core';
import { DashboardHomeComponent } from './dashboard-home/dashboard';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    declarations: [DashboardHomeComponent],
    imports: [DashboardRoutingModule],
})
export class DashboardModule {}
