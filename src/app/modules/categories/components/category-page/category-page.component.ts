import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonComponent } from './../../../../core/components/commonComponent';
import { IProduct } from './../../../../core/models/products';
import { ProductsFacade } from './../../../../core/store/products/products.facade';

@Component({
    templateUrl: './category-page.component.html',
    styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent extends CommonComponent implements OnInit {
    category: string;
    products: IProduct[];

    constructor(private injector: Injector, private route: ActivatedRoute, private productsFacade: ProductsFacade) {
        super(injector);
        this.category = this.route.snapshot.params.name;
        this.subscriptions.add(
            this.productsFacade.byCategory$.subscribe((products) => {
                this.products = products;
            }),
        );
    }

    ngOnInit(): void {
        this.productsFacade.fetchProductsByCategory(this.category);
    }
}
