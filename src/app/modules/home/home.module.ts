import { NgModule } from '@angular/core';
import { SigninComponent } from './components/signin/signin.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [SigninComponent],
    imports: [HomeRoutingModule],
})
export class HomeModule {}
