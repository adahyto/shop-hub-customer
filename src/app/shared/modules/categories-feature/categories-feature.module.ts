import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CategoriesFeatureComponent } from './categories-feature.component';
import { CategoriesFeatureItemComponent } from './components/categories-feature-item/categories-feature-item.component';

@NgModule({
    declarations: [CategoriesFeatureComponent, CategoriesFeatureItemComponent],
    imports: [CommonModule, MatButtonModule, MatCardModule],
    exports: [CategoriesFeatureComponent],
})
export class CategoriesFeatureModule {}
