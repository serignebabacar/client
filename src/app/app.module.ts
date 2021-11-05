import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListViewComponent } from './views/product-list-view/product-list-view.component';
import { StoreService } from './services/store.service';
import { CartViewComponent } from './views/cart-view/cart-view.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductListViewComponent,
        CartViewComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        StoreService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
