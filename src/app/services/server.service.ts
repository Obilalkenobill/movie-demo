import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'
import { Actor } from '../Model/Actor.model';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
 private BASE_URL: string = 'http://localhost:8000/api/';
  constructor(private http:HttpClient)
  { }
  public get<T>(url:string): Observable<any>
  {
    return this.http.get(this.BASE_URL+url);
  }

  public post<T>(url:string, body:T):Observable<any>
  {
    return this.http.post(this.BASE_URL+url, (body));
  }
  public put<T>(url:string, body:T):Observable<any>
  {
    return this.http.put(this.BASE_URL+url, (body));
  }
}
