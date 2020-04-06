import { VendorSpotsEffects } from './vendor-spots/vendor-spots.effects';
import { VendorSpotsFacade } from './vendor-spots/vendor-spots.facade';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductsEffects } from './products/products.effects';
import { ProductsFacade } from './products/products.facade';
import { reducers } from './register-reducers';
import { UserEffects } from './user/user.effects';
import { UserFacade } from './user/user.facade';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({ maxAge: 10 }),
        EffectsModule.forRoot([UserEffects, ProductsEffects, VendorSpotsEffects]),
        StoreRouterConnectingModule.forRoot(),
    ],
    providers: [UserFacade, ProductsFacade, VendorSpotsFacade],
})
export class CreateStoreModule {}
