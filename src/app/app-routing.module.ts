import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
            },
            {
                path: 'categories',
                loadChildren: () => import('./modules/categories/categories.module').then((m) => m.CategoriesModule),
            },
            {
                path: 'api-test',
                loadChildren: () => import('./modules/api-test/api-test.module').then((m) => m.ApiTestModule),
            },
            {
                path: 'order',
                loadChildren: () => import('./modules/order/order.module').then((m) => m.OrderModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
