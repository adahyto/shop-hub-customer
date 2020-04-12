import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../../core/services/auth-guard.service';
import { DashboardHomeComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardHomeComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
