import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogFeatureComponent } from 'src/app/shared/modules/cart-dialog-feature/cart-dialog-feature.component';
import { ICartProduct } from './../../../../core/models/order';

@Component({
    selector: 'app-cart-info',
    templateUrl: './cart-info.component.html',
    styleUrls: ['./cart-info.component.scss'],
})
export class CartInfoComponent {
    @Input() itemsCount: number;
    @Input() vendorSpotsCount: number;

    constructor(private dialog: MatDialog) {}

    openDialog(): void {
        const dialogRef = this.dialog.open(CartDialogFeatureComponent, {
            width: '80%',
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed');
        });
    }
}
