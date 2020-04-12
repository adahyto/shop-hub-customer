import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';

const routes: Routes = [
    {
        path: '',
        component: CategoriesComponent,
    },
    {
        path: ':name',
        component: CategoryPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoriesRoutingModule {}
