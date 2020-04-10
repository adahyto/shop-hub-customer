import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductsFeatureModule } from './../../shared/modules/products-feature/products-feature.module';
import { LandingComponent } from './components/landing/landing.component';
import { SigninFormComponent } from './components/signin/form/form.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [SigninComponent, SigninFormComponent, LandingComponent],
    imports: [HomeRoutingModule, ProductsFeatureModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule],
})
export class HomeModule {}
