import { NgModule } from '@angular/core';
import { CategoriesFeatureModule } from './../../shared/modules/categories-feature/categories-feature.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';

@NgModule({
    declarations: [CategoriesComponent],
    imports: [CategoriesRoutingModule, CategoriesFeatureModule],
})
export class CategoriesModule {}
