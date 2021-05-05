import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsComponent } from './components/actors/actors.component';
import { CreateActorComponent } from './components/create-actor/create-actor.component';

const routes: Routes = [
  { path: 'edit_actor',  component: CreateActorComponent },
  { path: 'view_actor',  component: ActorsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
