import { CartDialogFeatureComponent } from './shared/modules/cart-dialog-feature/cart-dialog-feature.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'shop-hub-customer';

    constructor() {}
}
