import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { OrderComponent } from './components/order/order.component';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
    declarations: [OrderComponent],
    imports: [CommonModule, OrderRoutingModule, MatIconModule, MatButtonModule, MatMenuModule],
    exports: [],
})
export class OrderModule {}
