import { Injectable } from '@angular/core';
import {ServerService} from './server.service'
import {Actor} from '../Model/Actor.model'
import { Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private server: ServerService, private router :Router) { }

  public getAll():Observable<Actor[]>
  {
    return this.server.get<Actor[]>('actors/').pipe(
      map(res=>res.map(m=>new Actor(m))),
      catchError(err=>
        {console.error(err);
        return [];
      })
    );
  }
  public addActor(body: Actor):Observable<Actor[]>
  {
    return this.server.post<Actor>('actors/',body).pipe(
      map(res=>res.map((m:any)=>new Actor(m))),
      catchError(err=>{
      console.error(err);
      return[];
    }))
  }
  public getOneByID(id:any):Observable<Actor>
  {
    return this.server.get<Actor>('actors/'+id).pipe(
      map(res=>res.length > 0 ? new Actor(res[0]): new Actor({})),
      catchError(err=>
        {console.error(err);
        return [];
      })
    );
  }

  public updateActor(body: Actor):Observable<Actor[]>
  {
    return this.server.put<Actor>('actors/update/'+body.id, body).pipe(
      map(res=>res.map((m:any)=>new Actor(m))),
      catchError(err=>{
      console.error(err);
      return[];
    }))
  }
  public deleteActor(body: Actor):Observable<Actor[]>
  {
    return this.server.delete<Actor>('actors/'+body.id).pipe(
      map(res=>res.map((m:any)=>new Actor(m))),
      catchError(err=>{
      console.error(err);
      return[];
    }))
  }
}
