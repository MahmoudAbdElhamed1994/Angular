import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { ProductServiceService } from '../services/product-service.service';
import { Iproducts } from '../shared Classes and types/Shared';

@Component({
  selector: 'app-no-discount-prod',
  templateUrl: './no-discount-prod.component.html',
  styleUrls: ['./no-discount-prod.component.scss']
})
export class NoDiscountProdComponent implements OnInit {
  products:Iproducts[]=[];
  constructor(private Products:ProductServiceService){}

  ngOnInit(): void {
    this.getProductsByDisc();
  }
  getProductsByDisc(){
    this.Products.getAllProducts().subscribe(
      data=>{
        this.products=data.filter((ele)=>ele.Discount=="NoDiscount");
        console.log(this.products)
      },
    )
  }

}
