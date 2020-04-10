import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { CartInfoComponent } from './components/cart-info/cart-info.component';
import { HeaderComponent } from './header.component';

@NgModule({
    declarations: [HeaderComponent, CartInfoComponent],
    imports: [CommonModule, MatIconModule],
    exports: [HeaderComponent],
})
export class HeaderModule {}
