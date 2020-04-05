import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
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
        EffectsModule.forRoot([UserEffects]),
        StoreRouterConnectingModule.forRoot(),
    ],
    providers: [UserFacade, ProductsFacade],
})
export class CreateStoreModule {}
