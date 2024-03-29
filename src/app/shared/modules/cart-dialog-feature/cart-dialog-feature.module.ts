import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProductsFeatureModule } from './../products-feature/products-feature.module';
import { CartDialogFeatureComponent } from './cart-dialog-feature.component';

@NgModule({
    declarations: [CartDialogFeatureComponent],
    imports: [CommonModule, ProductsFeatureModule, MatDialogModule, MatButtonModule, MatDividerModule, MatExpansionModule],
    exports: [CartDialogFeatureComponent],
})
export class CartDialogFeatureModule {}
