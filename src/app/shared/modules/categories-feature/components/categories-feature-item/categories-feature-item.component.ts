import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-categories-feature-item',
    templateUrl: './categories-feature-item.component.html',
    styleUrls: ['./categories-feature-item.component.scss'],
})
export class CategoriesFeatureItemComponent {
    @Input() category: any;
    @Input() headerImg: boolean;
    @Input() imgWidth: string;
    @Input() maxWidth: string
    @Output() emitCategory = new EventEmitter<string>();

    constructor() {}

    dispatch(name: string): void {
        this.emitCategory.emit(name);
    }
}
