import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Iproducts } from '../shared Classes and types/Shared';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { 
    
  }
  getAllProducts():Observable<Iproducts[]>{
    return this.http.get<Iproducts[]>("../assets/data.json").pipe(
      catchError((err)=>{
        return throwError(err.message||"sever error")
      }
      ))
  }
  grtProductsById(ID:any){
    var productList:Iproducts[]=[];
    this.getAllProducts().subscribe(
      data=>{
        productList=data;
      }
    )
    if(typeof(ID)!='number')
    return null;
    else{
    var x=[];
    x=productList.filter((ele)=>ele.ID==ID );
    if(x.length!=0)
    return x;
    else 
    return null;
  }
}}
