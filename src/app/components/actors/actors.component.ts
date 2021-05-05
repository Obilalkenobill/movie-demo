import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/Model/Actor.model';
import {ActorsService} from '../../services/actors.service'
@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {
public actorsList!:Actor[];
  constructor(private actorService:ActorsService, private router: Router) { }

  ngOnInit(): void {
  this.actorService.getAll().subscribe(actors=>
    {
      this.actorsList=actors;
    });
  }
edit(id:any)
{
this.router.navigate(['edit_actor/'+id])
}
}
