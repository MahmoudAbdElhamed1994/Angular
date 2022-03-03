import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../shared Classes and types/Shared';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }
  getcomments(id:string):Observable<IComment[]>{
    return this.http.get<IComment[]>("https://jsonplaceholder.typicode.com/posts/"+id+"/comments")

  }
}
