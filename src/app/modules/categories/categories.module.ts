import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriesFeatureModule } from './../../shared/modules/categories-feature/categories-feature.module';
import { ProductsFeatureModule } from './../../shared/modules/products-feature/products-feature.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';

@NgModule({
    declarations: [CategoriesComponent, CategoryPageComponent],
    imports: [CommonModule, CategoriesRoutingModule, CategoriesFeatureModule, ProductsFeatureModule],
})
export class CategoriesModule {}
