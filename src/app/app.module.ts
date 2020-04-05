import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserFacade } from './core/store/user/user.facade';

import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStoreModule } from './core/store/create-store.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        CreateStoreModule,
    ],
    providers: [UserFacade],
    bootstrap: [AppComponent],
})
export class AppModule {}
