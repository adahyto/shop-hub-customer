import { Component, Injector, OnInit, Input } from '@angular/core';
import { CommonComponent } from './../../../core/components/commonComponent';
import { ProductsFacade } from './../../../core/store/products/products.facade';

@Component({
    selector: 'app-categories-feature',
    templateUrl: './categories-feature.component.html',
    styleUrls: ['./categories-feature.component.scss'],
})
export class CategoriesFeatureComponent extends CommonComponent implements OnInit {
    @Input() flexDisplay: string;
    categories: any;

    constructor(private injector: Injector, private productFacade: ProductsFacade) {
        super(injector);
        this.subscriptions.add(
            this.productFacade.categories$.subscribe((categories) => {
                this.categories = Object.entries(categories).map((cats) => cats);
            }),
        );
    }

    ngOnInit() {
        this.productFacade.getCategories();
    }
}
