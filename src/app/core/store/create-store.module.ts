import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CartEffects } from './cart/cart.effects';
import { CartFacade } from './cart/cart.facade';
import { OrdersEffects } from './orders/orders.effects';
import { OrdersFacade } from './orders/orders.facade';
import { ProductsEffects } from './products/products.effects';
import { ProductsFacade } from './products/products.facade';
import { reducers } from './register-reducers';
import { UserEffects } from './user/user.effects';
import { UserFacade } from './user/user.facade';
import { VendorSpotsEffects } from './vendor-spots/vendor-spots.effects';
import { VendorSpotsFacade } from './vendor-spots/vendor-spots.facade';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({ maxAge: 10 }),
        EffectsModule.forRoot([UserEffects, ProductsEffects, VendorSpotsEffects, CartEffects, OrdersEffects]),
        StoreRouterConnectingModule.forRoot(),
    ],
    providers: [UserFacade, ProductsFacade, VendorSpotsFacade, CartFacade, OrdersFacade],
})
export class CreateStoreModule {}

