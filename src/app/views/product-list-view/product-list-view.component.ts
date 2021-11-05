import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
    selector: 'app-product-list-view',
    templateUrl: './product-list-view.component.html',
    styleUrls: ['./product-list-view.component.css']
})
export class ProductListViewComponent implements OnInit {
    constructor(public storeService:StoreService) {
    }

    ngOnInit(): void {
        
        this.storeService.loadProducts()
        .subscribe(val => {
            
        });
    }
}
