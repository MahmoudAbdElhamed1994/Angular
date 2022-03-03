import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IPost } from '../shared Classes and types/Shared';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getPosts():Observable<IPost[]>{
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      catchError((err)=>{
        return throwError(err.message||"sever error")
      }
      ))
  }
}
