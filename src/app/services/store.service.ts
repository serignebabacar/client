import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order, OrderItem } from '../shared/Order';
import { Product } from '../shared/Product';

@Injectable({
    providedIn: 'root'
})
export class StoreService {

    public products:Product[] = [];
    public orders : Order[] = [];
    public order : Order = new Order();
    constructor(private http:HttpClient ) {

    }

    loadProducts():Observable<void>{
        return this.http.get<[]>(environment.apiUrl+"/api/products")
            .pipe(map(data=>{
                this.products = data;
                return;
            }));
    }
    //loadOrders():Observable<void>{
      //  return this.http.get<[]>(environment.apiUrl+"api/orders")
        //        .pipe(map(data=>{
          //          this.orders = data;
            //        return;
              //  }));
  //  }
    addToOrder(product:Product){
        let item:  any;
        item = this.order.items.find(p=>p.productId === product.id);
        if(item){
            item.quantity++;
        }else{
            item = new OrderItem();
            item.productId = product.id;
            item.productTitle= product.title;
            item.productSize = product.size;
            item.productCategory = product.category;
            item.productArtId = product.artId;
            item.productArtist = product.artist;
            item.unitPrice = product.price;
            item.quantity  = 1;
            this.order.items.push(item);
        }
    }
}
