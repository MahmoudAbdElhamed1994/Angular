import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { Iproducts } from './shared Classes and types/Shared';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'firstProject';
}
