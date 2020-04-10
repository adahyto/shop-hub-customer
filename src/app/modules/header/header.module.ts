import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CartDialogFeatureModule } from './../../shared/modules/cart-dialog-feature/cart-dialog-feature.module';
import { CartInfoComponent } from './components/cart-info/cart-info.component';
import { HeaderComponent } from './header.component';
@NgModule({
    declarations: [HeaderComponent, CartInfoComponent],
    imports: [CommonModule, CartDialogFeatureModule, MatIconModule, MatToolbarModule],
    exports: [HeaderComponent],
})
export class HeaderModule {}
