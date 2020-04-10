import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductsFeatureModule } from './../products-feature/products-feature.module';
import { CartDialogFeatureComponent } from './cart-dialog-feature.component';

@NgModule({
    declarations: [CartDialogFeatureComponent],
    imports: [CommonModule, ProductsFeatureModule, MatDialogModule, MatButtonModule],
    exports: [CartDialogFeatureComponent],
})
export class CartDialogFeatureModule {}
