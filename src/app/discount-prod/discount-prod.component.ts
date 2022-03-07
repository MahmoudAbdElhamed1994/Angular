import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { Iproducts } from '../shared Classes and types/Shared';

@Component({
  selector: 'app-discount-prod',
  templateUrl: './discount-prod.component.html',
  styleUrls: ['./discount-prod.component.scss']
})
export class DiscountProdComponent implements OnInit {
  products:Iproducts[]=[];
  constructor(private Products:ProductServiceService) { }

  ngOnInit(): void {
    this.getProductsByDisc()
  }
  getProductsByDisc(){
    this.Products.getAllProducts().subscribe(
      data=>{
        this.products=data.filter((ele)=>ele.Discount!="NoDiscount");
        console.log(this.products)
      },
    )
  }

}
