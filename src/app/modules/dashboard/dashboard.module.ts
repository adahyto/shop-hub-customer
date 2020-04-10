import { NgModule } from '@angular/core';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    declarations: [DashboardHomeComponent],
    imports: [DashboardRoutingModule],
})
export class DashboardModule {}
