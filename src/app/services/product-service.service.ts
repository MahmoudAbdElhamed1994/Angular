import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, filter, Observable, throwError,map } from 'rxjs';
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
      })
    )}
}