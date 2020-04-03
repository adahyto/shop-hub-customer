import { Location } from '@angular/common';
import { Injector, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonUtility } from '../utils/commonUtility';

export class CommonComponent implements OnDestroy {
    subscriptions = new Subscription();
    router: Router;
    title: Title;
    locationRouter: Location;

    constructor(injector: Injector) {
        this.router = injector.get(Router);
        this.title = injector.get(Title);
        this.locationRouter = injector.get(Location);
    }

    navTo = (url: string, p1?: string, p2?: string, p3?: string, p4?: string): void => {
        const routerLink = CommonUtility.format(url, p1, p2, p3, p4);
        this.navByUrl(encodeURI(routerLink));
    };

    navToReplace = (url: string, p1?: string, p2?: string, p3?: string, p4?: string): void => {
        const routerLink = CommonUtility.format(url, p1, p2, p3, p4);
        this.navByUrl(encodeURI(routerLink), { replaceUrl: true });
    };

    navByUrl = (page: string, extras?: NavigationExtras): void => {
        this.router.navigateByUrl(page, extras);
    };

    navBack = (): void => {
        this.locationRouter.back();
    };

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
