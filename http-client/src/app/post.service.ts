import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) {}
  private url:string = "https://jsonplaceholder.typicode.com/posts"

  getPostDetail():Observable<IPost[]>{
    return this.http.get<IPost[]>(this.url)
  }
}
