import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
    selector: 'app-cart-view',
    templateUrl: './cart-view.component.html',
    styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

    constructor(public store : StoreService) { }

    ngOnInit(): void {
   //     this.store.loadOrders()
     //   .subscribe(val=>{
            
       // });
    }

}
