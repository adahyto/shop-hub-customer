import { HeaderModule } from './modules/header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './core/services/auth-guard.service';
import { UserFacade } from './core/store/user/user.facade';
import { TokenInterceptor } from './core/utils/token-interceptor';

import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStoreModule } from './core/store/create-store.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        CreateStoreModule,
        BrowserAnimationsModule,
        CommonModule,
        HeaderModule
    ],
    providers: [
        UserFacade,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
        AuthGuard,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
