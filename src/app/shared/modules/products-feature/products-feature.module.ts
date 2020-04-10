import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductsFeatureItemComponent } from './components/products-feature-item/products-feature-item.component';
import { ProductsFeatureComponent } from './products-feature.component';

@NgModule({
    declarations: [ProductsFeatureComponent, ProductsFeatureItemComponent],
    imports: [CommonModule, MatCardModule],
    exports: [ProductsFeatureComponent],
})
export class ProductsFeatureModule {}
