import { Component, Injector, Input, OnInit } from '@angular/core';
import { CommonComponent } from './../../../core/components/commonComponent';
import { ProductsFacade } from './../../../core/store/products/products.facade';

@Component({
    selector: 'app-categories-feature',
    templateUrl: './categories-feature.component.html',
    styleUrls: ['./categories-feature.component.scss'],
})
export class CategoriesFeatureComponent extends CommonComponent implements OnInit {
    @Input() imageWidth: string;
    @Input() limit: number;
    @Input() showAllBtn: boolean;
    categories: any;

    constructor(private injector: Injector, private productFacade: ProductsFacade) {
        super(injector);
        this.subscriptions.add(
            this.productFacade.categories$.subscribe((categories) => {
                this.categories = Object.entries(categories).map((cats) => cats);
                if (this.limit) {
                    this.categories = this.categories.slice(0, this.limit);
                }
            }),
        );
    }

    goTo(uri: string): void {
        this.navTo(`/${uri}`);
    }

    goToIn(uri: string): void {
        this.navTo(`/categories/${uri}`);
    }

    ngOnInit() {
        this.productFacade.getCategories();
    }
}
