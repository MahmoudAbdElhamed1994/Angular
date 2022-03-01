import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
productList=[{ID:0,Name:"laptop Lenovo",Quantity:3,Price:2000,Img:'../../assets/Products/lenovo.jpg'},
{ID:1,Name:"laptop Dell",Quantity:13,Price:21000,Img:'../../assets/Products/Dell.jpg'},
{ID:2,Name:"laptop Acer",Quantity:2,Price:12000,Img:'../../assets/Products/Acer.jpg'},
{ID:3,Name:"Iphone",Quantity:3,Price:20000,Img:'../../assets/Products/Iphone.jpg'}];
  constructor() { 

  }
  getAllProducts(){
    return this.productList;
  }
  grtProductsById(ID:any){
    if(typeof(ID)!='number')
    return null;
    else{
    var x=[];
    x= this.productList.filter((ele)=>ele.ID==ID );
    if(x.length!=0)
    return x;
    else 
    return null;
  }
}}
