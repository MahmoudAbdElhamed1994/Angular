import { Component, OnInit } from '@angular/core';
import { DiscountOffers, Iproducts, ICatogry } from '../shared Classes and types/Shared';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  discount:DiscountOffers=DiscountOffers.NoDiscount;
  storeName:string="Awfar";
  storeLogo:string="../../assets/progressive-rock-85111089.jpg";
  productList:Array<Iproducts>=[{ID:0,Name:"laptop Lenovo",Quantity:3,Price:2000,Img:''},{ID:1,Name:"laptop Dell",Quantity:13,Price:21000,Img:''},{ID:1,Name:"laptop Acer",Quantity:2,Price:12000,Img:''},{ID:3,Name:"Iphone",Quantity:3,Price:20000,Img:''}];
  catogryList:ICatogry[]=[{ID:0,name:"electronics"},{ID:1,name:"Laptops"},{ID:2,name:"Mobiles"},{ID:3,name:"TVS"}];
  clientName:string="";
  Ispurchased:boolean=false;
  constructor() {

   }

  ngOnInit(): void {
  }
  assignName(text:string):void{
    this.clientName=text;
  }
  showName():void{
    console.log(this.clientName);
  }
  buy():void{
    this.Ispurchased=true;
  }

}
