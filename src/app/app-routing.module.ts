import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
                canActivate: [AuthGuard],
            },
            {
                path: 'api-test',
                loadChildren: () => import('./modules/api-test/api-test.module').then((m) => m.ApiTestModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
