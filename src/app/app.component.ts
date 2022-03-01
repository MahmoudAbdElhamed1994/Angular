import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { Iproducts } from './shared Classes and types/Shared';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstProject';
  isClicked:boolean=false;
  productsList:Iproducts[]=[];
  @ViewChild(ProductsComponent) products?:ProductsComponent;

  viewItems(){
    this.products?.renderValues();
    this.productsList=this.products?.productList??[];
    if(!this.isClicked)
    this.isClicked=true;
    else
    this.isClicked=false;
  }
}
