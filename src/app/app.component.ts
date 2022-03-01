import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstProject';
  isClicked:boolean=false
  @ViewChild(ProductsComponent) products?:ProductsComponent;
  viewItems(){
    this.products?.renderValues();
    if(!this.isClicked)
    this.isClicked=true;
    else
    this.isClicked=false;
  }
}
