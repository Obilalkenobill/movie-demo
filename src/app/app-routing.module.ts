import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsComponent } from './components/actors/actors.component';
import { CreateActorComponent } from './components/create-actor/create-actor.component';
import { FournofoundComponent } from './components/fournofound/fournofound.component';

const routes: Routes = [
  { path: 'edit_actor',  component: CreateActorComponent },
  { path: 'view_actor',  component: ActorsComponent },
  { path: 'edit_actor/:id',  component: CreateActorComponent },
  { path: '**',  component: FournofoundComponent },
  { path: '',  component: ActorsComponent },
  { path: 'not-found',  component: FournofoundComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
