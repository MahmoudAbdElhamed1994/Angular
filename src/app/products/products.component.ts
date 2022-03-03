import { Component, OnInit} from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { DiscountOffers, Iproducts, ICatogry } from '../shared Classes and types/Shared';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  discount:DiscountOffers;
  storeName:string;
  storeLogo:string;
  productList:Array<Iproducts>=[];
  catogryList:ICatogry[];
  clientName:string;
  Ispurchased:boolean;
  
  constructor(private products:ProductServiceService) {
    this.discount=DiscountOffers.NoDiscount;
    this.storeName="Awfar";
    this.storeLogo="../../assets/progressive-rock-85111089.jpg";
    this.productList=[];
    this.catogryList=[{ID:0,name:"electronics"},{ID:1,name:"Laptops"},{ID:2,name:"Mobiles"},{ID:3,name:"TVS"}];
    this.clientName="";
    this.Ispurchased=false;

   }

  ngOnInit(): void {
    this.renderValues();
  }
  renderValues(){
    this.products.getAllProducts().subscribe(
      data=>{
        this.productList=data;
      }
    )
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
