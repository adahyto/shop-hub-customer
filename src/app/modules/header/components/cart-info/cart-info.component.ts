import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogFeatureComponent } from 'src/app/shared/modules/cart-dialog-feature/cart-dialog-feature.component';

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
    }
}
