import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { VendorsSpotsFeatureItemComponent } from './components/vendors-spots-feature-item/vendors-spots-feature-item.component';
import { VendorsSpotsFeatureComponent } from './vendors-spots-feature.component';

@NgModule({
    declarations: [VendorsSpotsFeatureComponent, VendorsSpotsFeatureItemComponent],
    imports: [CommonModule, MatButtonModule, MatCardModule],
    exports: [VendorsSpotsFeatureComponent],
})
export class VendorsSpotsFeatureModule {}
