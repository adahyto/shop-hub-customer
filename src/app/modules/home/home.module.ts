import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CategoriesFeatureModule } from './../../shared/modules/categories-feature/categories-feature.module';
import { ProductsFeatureModule } from './../../shared/modules/products-feature/products-feature.module';
import { VendorsSpotsFeatureModule } from './../../shared/modules/vendor-spots-feature/vendors-spots-feature.module';
import { LandingComponent } from './components/landing/landing.component';
import { SigninFormComponent } from './components/signin/form/form.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [SigninComponent, SigninFormComponent, LandingComponent],
    imports: [
        HomeRoutingModule,
        ProductsFeatureModule,
        VendorsSpotsFeatureModule,
        CategoriesFeatureModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDividerModule,
    ],
})
export class HomeModule {}
